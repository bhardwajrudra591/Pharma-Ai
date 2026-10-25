import { createHmac, timingSafeEqual } from 'node:crypto';
import { eq } from 'drizzle-orm';
import { db } from '../db/index.js';
import { orders, memberships } from '../db/schema.js';
export const plans = { monthly: 48900, yearly: 98900 };
export function credentials() {
  const key = Netlify.env.get('RAZORPAY_KEY_ID'), secret = Netlify.env.get('RAZORPAY_KEY_SECRET');
  if (!key || !secret) throw new Response('Payments are not configured yet.', { status: 503 });
  return { key, secret };
}
export function validSignature(value: string, signature: string, secret: string) {
  const expected = createHmac('sha256', secret).update(value).digest('hex');
  return /^[a-f0-9]{64}$/.test(signature) && timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}
export async function razorpay(path: string, body?: unknown) {
  const { key, secret } = credentials();
  const response = await fetch(`https://api.razorpay.com/v1/${path}`, { method: body ? 'POST' : 'GET', headers: { Authorization: `Basic ${Buffer.from(`${key}:${secret}`).toString('base64')}`, 'Content-Type': 'application/json' }, ...(body ? { body: JSON.stringify(body) } : {}), signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Response('Payment provider unavailable. Please try again.', { status: 502 });
  return response.json();
}
export async function activate(orderId: string, paymentId: string, userId?: string) {
  const payment = await razorpay(`payments/${encodeURIComponent(paymentId)}`);
  await db.transaction(async tx => {
    const [order] = await tx.select().from(orders).where(eq(orders.id, orderId)).for('update');
    if (!order || (userId && order.userId !== userId)) throw new Response('Order not found.', { status: 404 });
    if (payment.order_id !== order.id || payment.status !== 'captured' || payment.currency !== 'INR' || payment.amount !== order.amount) throw new Response('Payment is awaiting capture or could not be verified. Please retry after capture.', { status: 409 });
    if (order.paidAt) return;
    const [member] = await tx.select().from(memberships).where(eq(memberships.userId, order.userId)).for('update');
    const trialEnd = member.trialStartedAt.getTime() + 4 * 86400000;
    const until = new Date(Math.max(Date.now(), trialEnd, member.paidUntil?.getTime() || 0));
    const day = until.getUTCDate();
    until.setUTCDate(1);
    until.setUTCMonth(until.getUTCMonth() + (order.plan === 'yearly' ? 12 : 1));
    const last = new Date(Date.UTC(until.getUTCFullYear(), until.getUTCMonth() + 1, 0)).getUTCDate();
    until.setUTCDate(Math.min(day, last));
    await tx.update(memberships).set({ paidUntil: until, plan: order.plan }).where(eq(memberships.userId, order.userId));
    await tx.update(orders).set({ paymentId, paidAt: new Date() }).where(eq(orders.id, order.id));
  });
}

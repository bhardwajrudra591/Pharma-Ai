import { account, status } from '../../server/access.js';
import { credentials, plans, razorpay, validSignature, activate } from '../../server/payments.js';
import { db } from '../../db/index.js';
import { orders } from '../../db/schema.js';
export default async (req: Request) => {
  try {
    if (!['GET', 'POST'].includes(req.method)) return new Response(null, { status: 405 });
    const member = await account(req);
    if (req.method === 'GET') return Response.json(status(member), { headers: { 'Cache-Control': 'no-store' } });
    const body = await req.json();
    if (body.action === 'order') {
      if (!(body.plan === 'monthly' || body.plan === 'yearly')) return Response.json({ error: 'Choose a valid plan.' }, { status: 400 });
      const amount = plans[body.plan as keyof typeof plans];
      const order = await razorpay('orders', { amount, currency: 'INR', receipt: crypto.randomUUID() });
      await db.insert(orders).values({ id: order.id, userId: member.userId, plan: body.plan, amount });
      return Response.json({ orderId: order.id, amount, currency: 'INR', key: credentials().key });
    }
    if (body.action === 'verify') {
      const { razorpay_order_id: order, razorpay_payment_id: payment, razorpay_signature: signature } = body;
      if (![order, payment, signature].every(v => typeof v === 'string') || !validSignature(`${order}|${payment}`, signature, credentials().secret)) return Response.json({ error: 'Invalid payment signature.' }, { status: 400 });
      await activate(order, payment, member.userId);
      return Response.json({ success: true });
    }
    return Response.json({ error: 'Invalid action.' }, { status: 400 });
  } catch (error) {
    return Response.json({ error: error instanceof Response ? await error.text() : 'Membership service unavailable. Please try again.' }, { status: error instanceof Response ? error.status : 503 });
  }
};
export const config = { path: '/api/membership' };

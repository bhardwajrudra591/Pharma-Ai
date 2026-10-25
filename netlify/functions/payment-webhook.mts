import { validSignature, activate } from '../../server/payments.js';
export default async (req: Request) => {
  if (req.method !== 'POST') return new Response(null, { status: 405 });
  const secret = Netlify.env.get('RAZORPAY_WEBHOOK_SECRET');
  if (!secret) return new Response('Webhook not configured', { status: 503 });
  const raw = await req.text();
  if (!validSignature(raw, req.headers.get('x-razorpay-signature') || '', secret)) return new Response('Invalid signature', { status: 400 });
  try {
    const event = JSON.parse(raw);
    if (event.event === 'payment.captured') {
      const payment = event.payload.payment.entity;
      await activate(payment.order_id, payment.id);
    }
    return Response.json({ received: true });
  } catch { return new Response('Please retry delivery', { status: 503 }); }
};
export const config = { path: '/api/payment-webhook' };

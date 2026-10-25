import { status } from './membership-policy.js';
export { status } from './membership-policy.js';
import { createRemoteJWKSet, jwtVerify } from 'jose';
import { eq } from 'drizzle-orm';
import { db } from '../db/index.js';
import { memberships } from '../db/schema.js';
const keys = createRemoteJWKSet(new URL('https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com'));
export async function account(req: Request) {
  const token = req.headers.get('authorization')?.match(/^Bearer (.+)$/)?.[1];
  if (!token) throw new Response('Sign in to access your membership.', { status: 401 });
  let payload;
  try { ({ payload } = await jwtVerify(token, keys, { issuer: 'https://securetoken.google.com/pharma-ai-7791c', audience: 'pharma-ai-7791c', algorithms: ['RS256'] })); }
  catch { throw new Response('Please sign in again.', { status: 401 }); }
  if (!payload.sub) throw new Response('Invalid account.', { status: 401 });
  await db.insert(memberships).values({ userId: payload.sub }).onConflictDoNothing();
  const [member] = await db.select().from(memberships).where(eq(memberships.userId, payload.sub));
  return member;
}
export async function requireAccess(req: Request) {
  const member = await account(req);
  if (!status(member).active) throw new Response('Your free trial has ended. Choose a membership to continue.', { status: 403 });
  return member;
}

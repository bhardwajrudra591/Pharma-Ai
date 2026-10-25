import { requireAccess } from '../../server/access.js';
import { DB } from '../../server/drugs.mjs';
export default async (req: Request) => {
  if(req.method !== 'GET') return new Response(null, { status: 405 });
  try {
    await requireAccess(req);
    return Response.json(DB, { headers: { 'Cache-Control': 'private, no-store' } });
  } catch(error) {
    return Response.json({ error: error instanceof Response ? await error.text() : 'Library unavailable.' }, { status: error instanceof Response ? error.status : 503 });
  }
};
export const config = { path: '/api/library' };

export function status(member: { trialStartedAt: Date; paidUntil: Date | null; plan: string | null }) {
  const trialUntil = new Date(member.trialStartedAt.getTime() + 4 * 86400000);
  const paid = !!member.paidUntil && member.paidUntil.getTime() > Date.now();
  return { active: paid || trialUntil.getTime() > Date.now(), plan: member.paidUntil ? member.plan : 'trial', trialUntil, paidUntil: member.paidUntil, serverNow: new Date() };
}

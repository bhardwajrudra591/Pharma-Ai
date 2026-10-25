import { test } from 'node:test';
import assert from 'node:assert/strict';
import { status } from '../server/membership-policy.js';
const now = Date.now();
const member = { trialStartedAt: new Date(now - 3 * 86400000), paidUntil: null, plan: null };
test('trial permits access for exactly four days', () => {
  assert.equal(status(member).active, true);
  const expired = status({ ...member, trialStartedAt: new Date(now - 4 * 86400000 - 10) });
  assert.equal(expired.active, false);
  assert.equal(expired.trialUntil.getTime(), now - 10);
});
test('paid membership permits access after trial, then expires', () => {
  const expiredTrial = { ...member, trialStartedAt: new Date(now - 10 * 86400000), plan: 'yearly' };
  assert.equal(status({ ...expiredTrial, paidUntil: new Date(now + 86400000) }).plan, 'yearly');
  assert.equal(status({ ...expiredTrial, paidUntil: new Date(now + 86400000) }).active, true);
  assert.equal(status({ ...expiredTrial, paidUntil: new Date(now - 1) }).active, false);
});

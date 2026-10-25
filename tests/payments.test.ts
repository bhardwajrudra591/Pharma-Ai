import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import { validSignature, plans } from '../server/payments.js';
test('checkout verifies the signature and rejects tampered payment identifiers', () => {
  const secret = 'unit-test-fixture';
  const signature = createHmac('sha256', secret).update('order_fixture|pay_fixture').digest('hex');
  assert.equal(validSignature('order_fixture|pay_fixture', signature, secret), true);
  assert.equal(validSignature('order_other|pay_fixture', signature, secret), false);
  assert.equal(validSignature('order_fixture|pay_fixture', 'invalid', secret), false);
});
test('prices are fixed on the server in INR paise', () => {
  assert.equal(plans.monthly, 48900);
  assert.equal(plans.yearly, 98900);
});

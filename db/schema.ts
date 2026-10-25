import { pgTable, text, timestamp, integer } from 'drizzle-orm/pg-core';
export const memberships = pgTable('memberships', {
  userId: text('user_id').primaryKey(),
  trialStartedAt: timestamp('trial_started_at', { withTimezone: true }).notNull().defaultNow(),
  paidUntil: timestamp('paid_until', { withTimezone: true }),
  plan: text('plan'),
});
export const orders = pgTable('membership_orders', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => memberships.userId),
  plan: text('plan').notNull(),
  amount: integer('amount').notNull(),
  paymentId: text('payment_id').unique(),
  paidAt: timestamp('paid_at', { withTimezone: true }),
});

CREATE TABLE "memberships" (
	"user_id" text PRIMARY KEY,
	"trial_started_at" timestamp with time zone DEFAULT now() NOT NULL,
	"paid_until" timestamp with time zone,
	"plan" text
);
--> statement-breakpoint
CREATE TABLE "membership_orders" (
	"id" text PRIMARY KEY,
	"user_id" text NOT NULL,
	"plan" text NOT NULL,
	"amount" integer NOT NULL,
	"payment_id" text UNIQUE,
	"paid_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "membership_orders" ADD CONSTRAINT "membership_orders_user_id_memberships_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "memberships"("user_id");
Membership payments
==================

Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET as Netlify environment variables available to Functions. Use matching Razorpay test credentials for testing and live credentials for production. Do not put secret values in the HTML or repository.

In Razorpay, configure automatic payment capture. Add a webhook pointing to https://pharmaaiin.netlify.app/api/payment-webhook, subscribe to payment.captured, and set its signing secret in Netlify as RAZORPAY_WEBHOOK_SECRET. Configure a separate webhook URL and test-mode configuration when testing on a preview deployment. Redeploy after changing runtime configuration.

Checkout charges ₹489 for one calendar month or ₹989 for one calendar year. These are one-time membership purchases without automatic renewal. Successful payments extend the later of the existing paid expiry, trial expiry, or current time. The server only grants membership after confirming the payment is captured, the signature is valid, and the order, account, amount and currency match. Duplicate verification or webhook delivery does not extend access twice.

New accounts activate their single 96-hour trial on their first authenticated dashboard request, immediately after normal sign-up. Existing Firebase accounts start their trial on their first dashboard visit. Trial and membership timestamps are held in Netlify Database. The database migration is applied automatically during deployment. Existing Firebase authentication remains in use.

Only the public directory is published. The medicine data stays in server code and is delivered through the authenticated library endpoint. Library and AI endpoints require a valid Firebase token and active trial or paid membership. Content previously downloaded by a member cannot be revoked.

Validation: npm test and npm run typecheck. Test live checkout in Razorpay test mode after configuring credentials and deploying. Confirm successful payment, failed payment, dismissal, duplicate webhook delivery, and membership expiry. End-to-end payment and database validation requires deployed configuration.

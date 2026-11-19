// Site configuration & feature flags.
// When the subscription/affiliate backend is built later, replace this stub.
const SITE = {
  features: {
    subscription: false, // future: gate categories behind a Stripe subscription
    affiliate: false,    // future: ?ref=CODE tracked at signup, dashboard for parents
  },
  // Future endpoints (not used yet):
  // auth: '/api/auth', checkout: '/api/checkout', referral: '/api/referral'
};

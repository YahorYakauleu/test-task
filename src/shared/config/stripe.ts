export const STRIPE_CONFIG = {
  publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_example',
}

export const PLAN_CONFIG = {
  name: 'Monthly Subscription',
  price: 11.99,
  currency: 'USD',
  period: '1 month',
  features: [
    'Unlimited access to all features',
    'Priority customer support',
    'Regular updates and improvements',
    'Cancel anytime',
  ],
}

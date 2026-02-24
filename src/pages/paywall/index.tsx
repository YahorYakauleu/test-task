import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { CheckoutForm } from '@/features/payment'
import { PlanCard } from '@/widgets'
import { STRIPE_CONFIG, PLAN_CONFIG } from '@/shared/config/stripe'

const stripePromise = loadStripe(STRIPE_CONFIG.publishableKey)

export function PaywallPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Choose Your Plan
          </h1>
          <p className="text-gray-600 text-lg">
            Get unlimited access to all premium features
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <PlanCard />

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Payment Details
            </h3>

            <Elements
              stripe={stripePromise}
              options={{
                mode: 'payment',
                amount: Math.round(PLAN_CONFIG.price * 100),
                currency: PLAN_CONFIG.currency.toLowerCase(),
                appearance: {
                  theme: 'stripe',
                  variables: {
                    colorPrimary: '#2563eb',
                    borderRadius: '8px',
                  },
                },
              }}
            >
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  )
}

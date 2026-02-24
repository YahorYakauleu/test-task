import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import type { StripePaymentElementChangeEvent } from '@stripe/stripe-js'
import { Button } from '@/shared/ui'

export function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate()
  
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleChange = (event: StripePaymentElementChangeEvent) => {
    setIsComplete(event.complete)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements || !isComplete) {
      return
    }

    setIsProcessing(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    navigate('/success')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement onChange={handleChange} />

      <Button 
        type="submit" 
        isLoading={isProcessing}
        disabled={!stripe || !elements || !isComplete}
      >
        Pay Now
      </Button>
    </form>
  )
}

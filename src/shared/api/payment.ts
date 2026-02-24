export interface CreatePaymentIntentResponse {
  clientSecret: string
}

export async function createPaymentIntent(): Promise<CreatePaymentIntentResponse> {
  await new Promise(resolve => setTimeout(resolve, 300))
  
  return {
    clientSecret: '123456' + Date.now(),
  }
}

export async function confirmPayment(): Promise<{ success: boolean }> {
  await new Promise(resolve => setTimeout(resolve, 500))
  return { success: true }
}

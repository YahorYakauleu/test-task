import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared/ui'
import { useAuth } from '@/shared/hooks/useAuth'

export function SuccessPage() {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg 
              className="w-10 h-10 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Payment Successful!
          </h1>
          
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your subscription is now active and you have full access to all premium features.
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">What's Next?</h3>
            <ul className="text-sm text-gray-600 text-left space-y-2">
              <li>• Check your email for confirmation</li>
              <li>• Explore all premium features</li>
              <li>• Contact support if you need help</li>
            </ul>
          </div>

          <Button variant="secondary" onClick={handleLogout}>
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  )
}

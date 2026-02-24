import { Navigate } from 'react-router-dom'
import { LoginForm } from '@/features/auth'
import { useAuth } from '@/shared/hooks/useAuth'

export function LoginPage() {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to="/paywall" replace />
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600 mt-2">Sign in to continue to your account</p>
          </div>
          
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

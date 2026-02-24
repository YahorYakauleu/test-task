import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '@/pages/login'
import { PaywallPage } from '@/pages/paywall'
import { SuccessPage } from '@/pages/success'
import { useAuth } from '@/shared/hooks/useAuth'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  
  return <>{children}</>
}

export function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/paywall"
        element={
          <ProtectedRoute>
            <PaywallPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/success"
        element={
          <ProtectedRoute>
            <SuccessPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

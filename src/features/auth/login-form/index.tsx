import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Button } from '@/shared/ui'
import { validateEmail, validatePassword } from '@/shared/lib/validation'
import { loginUser } from '@/shared/api/auth'
import { useAuth } from '@/shared/hooks/useAuth'

interface FormErrors {
  email?: string
  password?: string
  general?: string
}

export function LoginForm() {
  const navigate = useNavigate()
  const { login } = useAuth()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    const emailValidation = validateEmail(email)
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.error
    }

    const passwordValidation = validatePassword(password)
    if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.error
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setErrors({})

    try {
      const response = await loginUser({ email, password })
      
      if (response.success) {
        login(email)
        navigate('/paywall')
      } else {
        setErrors({ general: response.error })
      }
    } catch {
      setErrors({ general: 'An unexpected error occurred. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        type="email"
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        autoComplete="email"
      />

      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        autoComplete="current-password"
      />

      {errors.general && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{errors.general}</p>
        </div>
      )}

      <Button type="submit" isLoading={isLoading}>
        Sign In
      </Button>
    </form>
  )
}

export interface ValidationResult {
  isValid: boolean
  error?: string
}

export const ValidationRules = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    minLength: 5,
  },
  password: {
    minLength: 6,
  },
}

export function validateEmail(email: string): ValidationResult {
  if (!email) {
    return { isValid: false, error: 'Email is required' }
  }

  if (email.length < ValidationRules.email.minLength) {
    return { isValid: false, error: 'Email is too short' }
  }

  if (!ValidationRules.email.pattern.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' }
  }

  return { isValid: true }
}

export function validatePassword(password: string): ValidationResult {
  if (!password) {
    return { isValid: false, error: 'Password is required' }
  }

  const minLength = ValidationRules.password.minLength

  if (password.length < minLength) {
    return { 
      isValid: false, 
      error: `Password must be at least ${minLength} characters` 
    }
  }

  return { isValid: true }
}

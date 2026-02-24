const AUTH_KEY = 'auth_user'

export interface AuthUser {
  email: string
  isAuthenticated: boolean
}

export function useAuth() {
  const getUser = (): AuthUser | null => {
    const data = sessionStorage.getItem(AUTH_KEY)
    return data ? JSON.parse(data) : null
  }

  const login = (email: string) => {
    const user: AuthUser = { email, isAuthenticated: true }
    sessionStorage.setItem(AUTH_KEY, JSON.stringify(user))
  }

  const logout = () => {
    sessionStorage.removeItem(AUTH_KEY)
  }

  const user = getUser()

  return {
    user,
    isAuthenticated: user?.isAuthenticated ?? false,
    login,
    logout,
  }
}

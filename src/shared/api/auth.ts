const MOCK_USERS = [
  { email: 'admin@gmail.com', password: '123456' },
]

export interface LoginCredentials {
  email: string
  password: string
}

export interface LoginResponse {
  success: boolean
  error?: string
}

export async function loginUser(credentials: LoginCredentials): Promise<LoginResponse> {
  await new Promise(resolve => setTimeout(resolve, 500))

  const user = MOCK_USERS.find(
    u => u.email === credentials.email && u.password === credentials.password
  )

  if (!user) {
    return { success: false, error: 'Invalid email or password' }
  }

  return { success: true }
}

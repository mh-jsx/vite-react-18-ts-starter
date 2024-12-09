export interface AuthState {
  isAuthenticated: boolean;
  user: null | { id: string; name: string; email: string }; // User object structure
  token: string | null; // JWT or other token
}

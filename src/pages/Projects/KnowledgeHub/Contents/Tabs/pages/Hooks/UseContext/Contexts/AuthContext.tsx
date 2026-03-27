import { createContext, useCallback, useContext, useMemo, useState } from 'react';

export interface UserAuth {
  isAuthenticated: boolean;
  user: string | null;
  login?: (username: string) => void;
  logout?: () => void;
}

const defaultUserAuth: UserAuth = {
  isAuthenticated: false,
  user: null,
};

const AuthContext = createContext<UserAuth | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userAuth, setUserAuth] = useState<UserAuth>(defaultUserAuth);

  const login = useCallback((username: string) => {
    setUserAuth({
      isAuthenticated: true,
      user: username,
    });
  }, []);

  const logout = useCallback(() => {
    setUserAuth(defaultUserAuth);
  }, []);

  const authValue = useMemo(() => ({ ...userAuth, login, logout }), [userAuth, login, logout]);

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return auth;
};

export { AuthProvider, useAuthContext };

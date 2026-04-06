import { createContext, PropsWithChildren, useContext, useState } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
}

interface UserContextI {
  user: User | null;
  login: ({ email, password }: { email: string; password: string }) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextI | null>(null);

// eslint-disable-next-line react/prop-types
const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = ({ email, password }: { email: string; password: string }) => {
    if (password === 'admin' && email === 'admin@email.com') {
      setUser({
        email: email,
        id: crypto.randomUUID(),
        name: 'Admin',
      });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const userContext = useContext(UserContext);

  if (!UserContext) throw new Error('Wrap into UserContext');

  return userContext;
};

export { UserProvider, useUserContext };

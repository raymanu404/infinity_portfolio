import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  email: string;
  name: string;
  password: string;
  session?: string | null;
}

export interface AuthState {
  user: User | null;
  getUser: () => User | null;
  setUser: (user: Partial<User>) => User;
  updateSession: (session: string | null) => void;
  clear: () => void;
  isAuthenticated: () => boolean;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      getUser: () => get().user,
      setUser: (user: Partial<User>) => {
        const full: User = {
          email: user.email ?? '',
          name: user.name ?? '',
          password: user.password ?? '',
          session: user.session ?? null,
        };
        set({ user: full });
        return full;
      },
      updateSession: (session: string | null) => {
        const user = get().user;
        if (!user) return;
        set({ user: { ...user, session } });
      },
      clear: () => set({ user: null }),
      isAuthenticated: () => !!(get().user && get().user!.session),
    }),
    {
      name: 'auth-store-task-manager-app',
    },
  ),
);

export { useAuthStore };

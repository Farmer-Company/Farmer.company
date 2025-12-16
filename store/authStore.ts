import { create } from 'zustand';

export type UserRole = 'farmer' | 'buyer' | 'logistics' | null;

interface AuthState {
    user: any | null;
    role: UserRole;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (user: any, role: UserRole) => void;
    logout: () => void;
    setRole: (role: UserRole) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    role: null,
    isAuthenticated: false,
    isLoading: false,
    login: (user, role) => set({ user, role, isAuthenticated: true }),
    logout: () => set({ user: null, role: null, isAuthenticated: false }),
    setRole: (role) => set({ role }),
}));

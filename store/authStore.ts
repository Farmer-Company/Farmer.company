import { create } from 'zustand';
import { User, Role } from '../types';

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (user: User) => void;
    logout: () => void;
    updateUser: (updates: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null, // Initially null
    isAuthenticated: false,
    isLoading: false, // Can be used during initial session check

    login: (user: User) => {
        // Persist to local storage for simple persistence in this demo
        localStorage.setItem('farmer_user', JSON.stringify(user));
        set({ user, isAuthenticated: true });
    },

    logout: () => {
        localStorage.removeItem('farmer_user');
        set({ user: null, isAuthenticated: false });
    },

    updateUser: (updates) => set((state) => {
        if (!state.user) return state;
        const updatedUser = { ...state.user, ...updates };
        localStorage.setItem('farmer_user', JSON.stringify(updatedUser));
        return { user: updatedUser };
    }),
}));

// Initialize store from local storage if available
const savedUser = localStorage.getItem('farmer_user');
if (savedUser) {
    try {
        const parsed = JSON.parse(savedUser);
        useAuthStore.getState().login(parsed);
    } catch (e) {
        console.error("Failed to parse saved user", e);
    }
}

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Check if we are in "Mock Mode" (missing keys)
export const isMockMode = !import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const mockLogin = async (phone: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate successful login for demo
    if (phone.length >= 10) {
        return {
            user: {
                id: 'mock-user-id-' + Math.random().toString(36).substr(2, 9),
                phone: phone,
                role: 'farmer' // Default role for mock
            },
            error: null
        };
    } else {
        return {
            user: null,
            error: { message: 'Invalid phone number' }
        };
    }
};

export const mockVerifyOtp = async (phone: string, otp: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (otp === '1234') {
        return {
            session: { access_token: 'mock-token' },
            error: null
        };
    } else {
        return {
            session: null,
            error: { message: 'Invalid OTP' }
        };
    }
}

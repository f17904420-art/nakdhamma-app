import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://demo-nakdhamma.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'monk' | 'novice';
  dhammaGrade: 'ตรี' | 'โท' | 'เอก';
  score: number;
  streakDays: number;
  completedQuizzes: number;
}

// LocalStorage helpers for Guest / Demo authentication persistence
const GUEST_KEY = 'nakdhamma_user_profile';

export const getStoredProfile = (): UserProfile | null => {
  if (typeof window === 'undefined') return null;
  const data = localStorage.getItem(GUEST_KEY);
  if (!data) return null;
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
};

export const setStoredProfile = (profile: UserProfile): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(GUEST_KEY, JSON.stringify(profile));
};

export const clearStoredProfile = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(GUEST_KEY);
};

export const createDefaultGuestProfile = (name: string = 'ผู้เรียนนักธรรม', grade: 'ตรี' | 'โท' | 'เอก' = 'ตรี'): UserProfile => {
  const profile: UserProfile = {
    id: `guest_${Date.now()}`,
    email: `${name.toLowerCase().replace(/\s+/g, '')}@dhamma.app`,
    name: name,
    role: 'student',
    dhammaGrade: grade,
    score: 120,
    streakDays: 3,
    completedQuizzes: 4,
  };
  setStoredProfile(profile);
  return profile;
};

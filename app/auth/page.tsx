'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User, KeyRound, Mail, Sparkles, LogOut } from 'lucide-react';
import { createDefaultGuestProfile, getStoredProfile, setStoredProfile, clearStoredProfile, UserProfile } from '@/lib/supabase';

export default function AuthPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [grade, setGrade] = useState<'ตรี' | 'โท' | 'เอก'>('ตรี');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    setProfile(getStoredProfile());
  }, []);

  const handleGuestLogin = () => {
    const guestName = name.trim() || 'ผู้เรียนนักธรรม';
    const newProfile = createDefaultGuestProfile(guestName, grade);
    setProfile(newProfile);
    window.dispatchEvent(new Event('profileUpdated'));
    setMsg('เข้าสู่ระบบแบบ Guest สำเร็จเรียบร้อย!');
    setTimeout(() => {
      router.push('/quiz');
    }, 1000);
  };

  const handleEmailAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setMsg('กรุณากรอกอีเมลและรหัสผ่านให้ครบถ้วน');
      return;
    }

    const authName = name.trim() || email.split('@')[0];
    const userProfile: UserProfile = {
      id: `user_${Date.now()}`,
      email,
      name: authName,
      role: 'student',
      dhammaGrade: grade,
      score: 150,
      streakDays: 1,
      completedQuizzes: 0,
    };

    setStoredProfile(userProfile);
    setProfile(userProfile);
    window.dispatchEvent(new Event('profileUpdated'));
    setMsg(isRegister ? 'สมัครสมาชิกเข้าสู่ระบบสำเร็จ!' : 'เข้าสู่ระบบสำเร็จ!');

    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  const handleLogout = () => {
    clearStoredProfile();
    setProfile(null);
    window.dispatchEvent(new Event('profileUpdated'));
    setMsg('ออกจากระบบเรียบร้อยแล้ว');
  };

  return (
    <div className="max-w-md mx-auto py-8">
      
      <div className="bg-white p-8 rounded-3xl border border-amber-200 shadow-2xl shadow-amber-500/10 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-gradient-to-tr from-amber-500 via-orange-400 to-yellow-300 rounded-2xl flex items-center justify-center mx-auto shadow-md shadow-amber-500/20 text-white">
            <User className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">
            {profile ? 'โปรไฟล์ผู้เรียนนักธรรม' : isRegister ? 'สมัครสมาชิกใหม่' : 'เข้าสู่ระบบเรียนนักธรรม'}
          </h1>
          <p className="text-xs text-slate-500">
            {profile ? 'ข้อมูลบัญชีผู้ใช้งานและการสะสมคะแนน' : 'เข้าสู่ระบบผ่าน Supabase หรือใช้งานในรูปแบบ Guest'}
          </p>
        </div>

        {/* System notification msg */}
        {msg && (
          <div className="p-3 bg-amber-100 border border-amber-300 rounded-xl text-amber-900 text-xs text-center font-bold animate-fadeIn">
            {msg}
          </div>
        )}

        {/* Logged in state view */}
        {profile ? (
          <div className="space-y-6 pt-2">
            <div className="bg-amber-50/80 p-5 rounded-2xl border border-amber-200 space-y-4">
              
              <div className="flex items-center justify-between border-b border-amber-200/60 pb-3">
                <span className="text-xs text-slate-500">ชื่อผู้ใช้งาน</span>
                <span className="text-sm font-bold text-slate-800">{profile.name}</span>
              </div>

              <div className="flex items-center justify-between border-b border-amber-200/60 pb-3">
                <span className="text-xs text-slate-500">อีเมล</span>
                <span className="text-xs font-mono text-amber-800 font-bold">{profile.email}</span>
              </div>

              <div className="flex items-center justify-between border-b border-amber-200/60 pb-3">
                <span className="text-xs text-slate-500">ระดับชั้นเรียน</span>
                <span className="px-3 py-1 bg-amber-500 text-white font-bold rounded-lg text-xs">
                  นักธรรมชั้น{profile.dhammaGrade}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">คะแนนสะสม</span>
                <span className="text-sm font-extrabold text-amber-600">{profile.score} แต้ม</span>
              </div>

            </div>

            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-2 bg-rose-100 hover:bg-rose-200 border border-rose-300 text-rose-800 font-bold py-3 rounded-xl transition-all text-xs"
            >
              <LogOut className="w-4 h-4" />
              <span>ออกจากระบบ (Logout)</span>
            </button>
          </div>
        ) : (
          /* Authentication Form */
          <div className="space-y-6">
            
            <form onSubmit={handleEmailAuth} className="space-y-4">
              
              {isRegister && (
                <div className="space-y-1">
                  <label className="text-xs text-slate-700 font-bold">ชื่อผู้เรียน / ฉายา</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="เช่น พระมหาประเสริฐ / สามเณรใจดี"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-2.5 text-xs text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs text-slate-700 font-bold">อีเมล (Email)</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    placeholder="student@dhamma.app"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-2.5 text-xs text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-700 font-bold">รหัสผ่าน (Password)</label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-2.5 text-xs text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-700 font-bold">เลือกระดับนักธรรมที่ต้องการสอบ</label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value as 'ตรี' | 'โท' | 'เอก')}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none"
                >
                  <option value="ตรี">นักธรรมชั้นตรี (Elementary)</option>
                  <option value="โท">นักธรรมชั้นโท (Intermediate)</option>
                  <option value="เอก">นักธรรมชั้นเอก (Advanced)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-400 hover:from-amber-600 hover:to-orange-500 text-white font-bold py-3 rounded-xl transition-all shadow-md active:scale-95 text-xs"
              >
                {isRegister ? 'สมัครสมาชิกด้วย Supabase' : 'เข้าสู่ระบบด้วย Supabase'}
              </button>

            </form>

            <div className="flex items-center justify-between text-xs pt-1">
              <button
                onClick={() => setIsRegister(!isRegister)}
                className="text-amber-700 font-bold hover:underline"
              >
                {isRegister ? 'มีบัญชีอยู่แล้ว? เข้าสู่ระบบ' : 'ยังไม่มีบัญชี? สมัครสมาชิก'}
              </button>
            </div>

            {/* Guest Quick Login Divider */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase font-bold">
                <span className="bg-white px-2 text-slate-400">หรือทดลองใช้งานโดยไม่ต้องสมัคร</span>
              </div>
            </div>

            <button
              onClick={handleGuestLogin}
              className="w-full bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 font-bold py-3 rounded-xl transition-all text-xs flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>เข้าใช้งานทันทีในรูปแบบ Guest Mode</span>
            </button>

          </div>
        )}

      </div>

    </div>
  );
}

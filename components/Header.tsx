'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Award, Video, Scroll, User, Flame, Sparkles, Presentation } from 'lucide-react';
import { getStoredProfile, UserProfile } from '@/lib/supabase';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const current = getStoredProfile();
    setProfile(current);

    const handleProfileChange = () => {
      setProfile(getStoredProfile());
    };

    window.addEventListener('storage', handleProfileChange);
    window.addEventListener('profileUpdated', handleProfileChange);

    return () => {
      window.removeEventListener('storage', handleProfileChange);
      window.removeEventListener('profileUpdated', handleProfileChange);
    };
  }, []);

  const navLinks = [
    { href: '/', label: 'หน้าหลัก', mobileLabel: 'หน้าหลัก', icon: BookOpen, color: 'text-amber-500' },
    { href: '/quiz', label: 'เกมข้อสอบนักธรรม', mobileLabel: 'ข้อสอบ', icon: Award, color: 'text-emerald-500' },
    { href: '/youtube-tutoring', label: 'ติวเก็ง YouTube', mobileLabel: 'คลิปติว', icon: Video, color: 'text-sky-500' },
    { href: '/media', label: 'สื่อการสอน', mobileLabel: 'สื่อการสอน', icon: Presentation, color: 'text-indigo-500' },
    { href: '/sermon-guide', label: 'โครงสร้างการเทศน์', mobileLabel: 'คู่มือเทศน์', icon: Scroll, color: 'text-rose-500' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-200/60 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-400 to-yellow-300 p-0.5 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-500 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold text-hero-gradient tracking-wide block">
                เรียนนักธรรม
              </span>
              <span className="text-[10px] text-amber-700/70 tracking-wider font-sans uppercase block -mt-1 font-semibold">
                Nak Dhamma Learning App
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-100/80 text-amber-900 border border-amber-300/60 shadow-xs'
                      : 'text-slate-600 hover:text-amber-700 hover:bg-amber-50/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-600' : link.color}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Profile / Login Badge */}
          <div className="flex items-center space-x-3">
            {profile ? (
              <div className="flex items-center space-x-3 bg-amber-50/90 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs shadow-xs">
                <div className="flex items-center space-x-1 text-orange-600 font-bold">
                  <Flame className="w-4 h-4 text-orange-500 fill-orange-400 animate-pulse" />
                  <span>{profile.streakDays} วัน</span>
                </div>
                <div className="w-px h-4 bg-amber-200" />
                <div className="flex items-center space-x-2">
                  <span className="text-slate-800 font-bold">{profile.name}</span>
                  <span className="px-2 py-0.5 rounded-md bg-amber-500 text-white font-bold shadow-xs">
                    ชั้น{profile.dhammaGrade}
                  </span>
                </div>
                <Link
                  href="/auth"
                  className="p-1 hover:text-amber-600 text-slate-400 transition-colors"
                  title="จัดการบัญชี / ออกจากระบบ"
                >
                  <User className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <Link
                href="/auth"
                className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-400 hover:from-amber-600 hover:to-orange-500 text-white font-bold px-4 py-2 rounded-xl text-sm transition-all shadow-md shadow-amber-500/20 active:scale-95"
              >
                <User className="w-4 h-4" />
                <span>เข้าสู่ระบบ / Guest</span>
              </Link>
            )}
          </div>

        </div>

        {/* Mobile Navigation Row */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-amber-100/80">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center justify-center flex-1 py-1 rounded-xl text-[11px] font-bold transition-all ${
                  isActive ? 'text-amber-600 bg-amber-50/80 font-extrabold shadow-2xs' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 mb-0.5 ${isActive ? 'text-amber-600 scale-110' : link.color}`} />
                <span className="truncate max-w-[65px]">{link.mobileLabel}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-50/60 border-t border-amber-200/60 text-slate-600 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand & Mission */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="text-lg font-bold text-hero-gradient">เว็บเรียนนักธรรม</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              แพลตฟอร์มเพื่อการเรียนรู้และทบทวนคัมภีร์ธรรมะของพระภิกษุ สามเณร และพุทธศาสนิกชน (นักธรรมชั้นตรี ชั้นโท ชั้นเอก) 
              ด้วยระบบทดสอบเลือกตอบพร้อมเฉลยละเอียด วิดีโอติวเข้ม และโครงสร้างการเทศนา
            </p>
          </div>

          {/* Buddhist Quote */}
          <div className="bg-white border border-amber-200/80 p-5 rounded-2xl shadow-xs flex flex-col justify-center text-center">
            <p className="text-amber-700 font-serif italic text-sm font-semibold mb-1">
              "สพฺพทานํ ธมฺมทานํ ชินาติ"
            </p>
            <p className="text-slate-500 text-xs font-medium">
              การให้ธรรมะเป็นทาน ย่อมชนะการให้ทั้งปวง
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2 text-xs">
            <span className="text-amber-800 font-bold text-sm mb-1">เมนูด่วน</span>
            <Link href="/" className="hover:text-amber-600 transition-colors font-medium">หน้าแรก Dashboard</Link>
            <Link href="/quiz" className="hover:text-amber-600 transition-colors font-medium">คลังแบบทดสอบเลือกตอบ</Link>
            <Link href="/youtube-tutoring" className="hover:text-amber-600 transition-colors font-medium">วิดีโอติวเก็งสนามหลวง</Link>
            <Link href="/sermon-guide" className="hover:text-amber-600 transition-colors font-medium">คู่มือโครงสร้างเทศนา 4 ขั้นตอน</Link>
          </div>

        </div>

        <div className="pt-6 border-t border-amber-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} เว็บเรียนนักธรรมออนไลน์ (Nak Dhamma Learning App). สงวนลิขสิทธิ์เพื่อการเผยแผ่พระพุทธศาสนา</p>
          <p className="flex items-center mt-2 sm:mt-0">
            พัฒนาด้วย <Heart className="w-3.5 h-3.5 text-rose-500 mx-1 fill-rose-500" /> เพื่อชาวพุทธทุกท่าน
          </p>
        </div>
      </div>
    </footer>
  );
};

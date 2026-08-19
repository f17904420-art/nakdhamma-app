'use client';

import React from 'react';
import { Scroll } from 'lucide-react';
import { SermonBuilder } from '@/components/SermonBuilder';

export default function SermonGuidePage() {
  return (
    <div className="space-y-8 pb-8">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-300 px-4 py-1.5 rounded-full text-xs text-amber-900 font-bold shadow-xs">
          <Scroll className="w-4 h-4 text-amber-600" />
          <span>คู่มือการจัดเรียงกัณฑ์เทศน์และหลักการแสดงธรรม</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-800">
          โครงสร้างการนำธรรมะไปเทศน์สอน (4 ขั้นตอน)
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          เครื่องมือช่วยร่างลำดับบทเทศนาสำหรับพระภิกษุ สามเณร และนักแสดงธรรมตามหลักมาตรฐาน
        </p>
      </div>

      {/* Intro Rules */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm space-y-2">
          <div className="flex items-center space-x-2 text-amber-700 font-bold text-xs">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">1</span>
            <span>นโม & สุภาษิต</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            ตั้งนะโม 3 จบ ยกคาถาบาลีและอธิบายความหมายรวมเพื่อสะกิดใจผู้ฟัง
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm space-y-2">
          <div className="flex items-center space-x-2 text-amber-700 font-bold text-xs">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">2</span>
            <span>ยกอุทาหรณ์</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            เล่านิทานชาดก หรือเหตุการณ์จริงในสังคมให้เห็นภาพพฤติกรรมและผลกรรม
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm space-y-2">
          <div className="flex items-center space-x-2 text-amber-700 font-bold text-xs">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">3</span>
            <span>อรรถาธิบาย</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            ขยายความข้อธรรมะเป็นข้อๆ (เช่น 1, 2, 3) ให้เข้าใจง่ายและนำไปปฏิบัติได้
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm space-y-2">
          <div className="flex items-center space-x-2 text-amber-700 font-bold text-xs">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">4</span>
            <span>สรุปคติธรรม & ให้พร</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            สรุปประมวลความสำคัญ ตอกย้ำหัวใจธรรมะ และให้พรอนุโมทนา
          </p>
        </div>

      </div>

      {/* Interactive Builder */}
      <SermonBuilder />

    </div>
  );
}

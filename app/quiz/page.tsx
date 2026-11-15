'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Award, BookOpen, Filter, Shuffle, History } from 'lucide-react';
import { QUIZ_QUESTIONS, QuizQuestion } from '@/lib/quizData';
import { QuizCard } from '@/components/QuizCard';
import { getStoredProfile, setStoredProfile } from '@/lib/supabase';

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const thaiToNum = (str?: string) => {
  if (!str) return 0;
  const digits: Record<string, string> = {
    '๐': '0', '๑': '1', '๒': '2', '๓': '3', '๔': '4',
    '๕': '5', '๖': '6', '๗': '7', '๘': '8', '๙': '9'
  };
  const numStr = str.replace(/[๐-๙]/g, (d) => digits[d] || d);
  return parseInt(numStr, 10) || 0;
};

function QuizPageContent() {
  const searchParams = useSearchParams();
  const initialGradeParam = searchParams.get('grade') as 'ตรี' | 'โท' | 'เอก' | null;

  const [activeGrade, setActiveGrade] = useState<'ทั้งหมด' | 'ตรี' | 'โท' | 'เอก'>(
    initialGradeParam || 'ทั้งหมด'
  );
  const [activeSubject, setActiveSubject] = useState<'ทั้งหมด' | 'ธรรมะ' | 'พุทธประวัติ' | 'วินัย' | 'กระทู้ธรรม'>('ทั้งหมด');
  const [activeEra, setActiveEra] = useState<'ทั้งหมด' | '๒๕๕๗-๒๕๖๖' | '๒๕๔๗-๒๕๕๖' | '๒๕๓๗-๒๕๔๖'>('ทั้งหมด');
  const [filteredQuestions, setFilteredQuestions] = useState<QuizQuestion[]>([]);
  const [quizKey, setQuizKey] = useState(0);

  const isSubjectMatch = (qSub: string, filterSub: typeof activeSubject) => {
    if (filterSub === 'ทั้งหมด') return true;
    if (filterSub === 'ธรรมะ') return qSub === 'ธรรมะ' || qSub === 'ธรรมวิภาค' || qSub === 'ธรรมวิจารณ์';
    if (filterSub === 'วินัย') return qSub === 'วินัย' || qSub === 'วินัยบัญญัติ' || qSub === 'วินัยมุข';
    return qSub === filterSub;
  };

  const isEraMatch = (qYear: string | undefined, filterEra: typeof activeEra) => {
    if (filterEra === 'ทั้งหมด') return true;
    const y = thaiToNum(qYear);
    if (filterEra === '๒๕๕๗-๒๕๖๖') return y >= 2557 && y <= 2566;
    if (filterEra === '๒๕๔๗-๒๕๕๖') return y >= 2547 && y <= 2556;
    if (filterEra === '๒๕๓๗-๒๕๔๖') return y >= 2537 && y <= 2546;
    return true;
  };

  const applyFiltersAndShuffle = (
    grade: typeof activeGrade,
    subject: typeof activeSubject,
    era: typeof activeEra
  ) => {
    let result = QUIZ_QUESTIONS;
    if (grade !== 'ทั้งหมด') result = result.filter((q) => q.grade === grade);
    if (subject !== 'ทั้งหมด') result = result.filter((q) => isSubjectMatch(q.subject, subject));
    if (era !== 'ทั้งหมด') result = result.filter((q) => isEraMatch(q.year, era));
    setFilteredQuestions(shuffleArray(result));
    setQuizKey((prev) => prev + 1);
  };

  useEffect(() => {
    applyFiltersAndShuffle(activeGrade, activeSubject, activeEra);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeGrade, activeSubject, activeEra]);

  const handleQuizFinish = (earnedScore: number, total: number) => {
    const profile = getStoredProfile();
    if (profile) {
      const updated = {
        ...profile,
        score: profile.score + earnedScore * 10,
        completedQuizzes: profile.completedQuizzes + 1,
      };
      setStoredProfile(updated);
      window.dispatchEvent(new Event('profileUpdated'));
    }
  };

  const subjectList = (['ทั้งหมด', 'ธรรมะ', 'พุทธประวัติ', 'วินัย', 'กระทู้ธรรม'] as const);
  const eraList = (['ทั้งหมด', '๒๕๕๗-๒๕๖๖', '๒๕๔๗-๒๕๕๖', '๒๕๓๗-๒๕๔๖'] as const);

  const countFor = (grade: typeof activeGrade, sub: typeof activeSubject, era: typeof activeEra) => {
    let r = QUIZ_QUESTIONS;
    if (grade !== 'ทั้งหมด') r = r.filter((q) => q.grade === grade);
    if (sub !== 'ทั้งหมด') r = r.filter((q) => isSubjectMatch(q.subject, sub));
    if (era !== 'ทั้งหมด') r = r.filter((q) => isEraMatch(q.year, era));
    return r.length;
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto py-4">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-300 px-4 py-1.5 rounded-full text-xs text-amber-900 font-bold shadow-xs">
          <Award className="w-4 h-4 text-amber-600" />
          <span>คลังข้อสอบจริงสนามหลวงย้อนหลัง 30 ปี (พ.ศ. ๒๕๓๗ - ๒๕๖๖) · 1,575 ข้อ</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-800">
          สนามสอบจำลองนักธรรมออนไลน์
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          ฝึกทำข้อสอบเลือกตอบจากข้อสอบจริงสนามหลวงย้อนหลัง 30 ปี ตัดข้อสอบซ้ำ เฉลยละเอียดอ้างอิงคัมภีร์ · <span className="text-amber-700 font-bold">สุ่มข้อสอบทุกครั้งที่เริ่มใหม่</span>
        </p>
      </div>

      {/* Filter Controls */}
      <div className="bg-white p-5 rounded-3xl border border-amber-200 shadow-md space-y-4">
        
        {/* Grade Filter Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-xs text-amber-800 font-bold flex items-center space-x-1">
            <Filter className="w-3.5 h-3.5 text-amber-600" />
            <span>ระดับชั้นนักธรรม:</span>
          </span>

          <div className="flex items-center space-x-1.5 flex-wrap">
            {(['ทั้งหมด', 'ตรี', 'โท', 'เอก'] as const).map((grade) => (
              <button
                key={grade}
                onClick={() => setActiveGrade(grade)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeGrade === grade
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-800'
                }`}
              >
                {grade === 'ทั้งหมด' ? 'ทั้งหมด' : `ชั้น${grade}`}
              </button>
            ))}
          </div>
        </div>

        {/* Subject Filter Buttons */}
        <div className="flex items-center justify-between flex-wrap gap-2 pt-3 border-t border-slate-100">
          <span className="text-xs text-slate-500 font-bold">หมวดวิชา:</span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {subjectList.map((sub) => {
              const cnt = countFor(activeGrade, sub, activeEra);
              return (
                <button
                  key={sub}
                  onClick={() => setActiveSubject(sub)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all flex items-center space-x-1 ${
                    activeSubject === sub
                      ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold'
                      : 'text-slate-500 hover:text-amber-700'
                  }`}
                >
                  <span>{sub}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    activeSubject === sub ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>{cnt}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 30-Year Past Exam Decade Filter */}
        <div className="flex items-center justify-between flex-wrap gap-2 pt-3 border-t border-slate-100">
          <span className="text-xs text-amber-800 font-bold flex items-center space-x-1">
            <History className="w-3.5 h-3.5 text-amber-600" />
            <span>ช่วงปีที่ออกสอบ (ย้อนหลัง 30 ปี):</span>
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {eraList.map((era) => {
              const cnt = countFor(activeGrade, activeSubject, era);
              const label =
                era === 'ทั้งหมด'
                  ? 'ทุกปี (๒๕๓๗-๒๕๖๖)'
                  : era === '๒๕๕๗-๒๕๖๖'
                  ? 'พ.ศ. ๒๕๕๗ - ๒๕๖๖'
                  : era === '๒๕๔๗-๒๕๕๖'
                  ? 'พ.ศ. ๒๕๔๗ - ๒๕๕๖'
                  : 'พ.ศ. ๒๕๓๗ - ๒๕๔๖';
              return (
                <button
                  key={era}
                  onClick={() => setActiveEra(era)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all flex items-center space-x-1 ${
                    activeEra === era
                      ? 'bg-amber-500 text-white font-bold shadow-xs'
                      : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-amber-50 hover:text-amber-800'
                  }`}
                >
                  <span>{label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    activeEra === era ? 'bg-amber-700 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>{cnt}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Shuffle Button */}
        <div className="flex justify-between items-center pt-2 border-t border-slate-100">
          <span className="text-xs text-slate-500">
            กำลังแสดงข้อสอบ <strong className="text-amber-700 font-bold">{filteredQuestions.length}</strong> ข้อ
          </span>
          <button
            onClick={() => applyFiltersAndShuffle(activeGrade, activeSubject, activeEra)}
            className="flex items-center space-x-1.5 bg-gradient-to-r from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200 border border-amber-300 text-amber-900 font-bold px-4 py-1.5 rounded-xl transition-all text-xs"
          >
            <Shuffle className="w-3.5 h-3.5 text-amber-600" />
            <span>สุ่มข้อสอบใหม่</span>
          </button>
        </div>

      </div>

      {/* Quiz Card Component */}
      {filteredQuestions.length > 0 ? (
        <QuizCard key={quizKey} questions={filteredQuestions} onFinish={handleQuizFinish} />
      ) : (
        <div className="bg-white p-12 rounded-3xl text-center space-y-4 border border-amber-200 shadow-sm">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <p className="text-slate-500 text-sm">ไม่พบข้อสอบในเงื่อนไขการค้นหานี้ กรุณาเลือกตัวกรองใหม่อีกครั้ง</p>
          <button
            onClick={() => {
              setActiveGrade('ทั้งหมด');
              setActiveSubject('ทั้งหมด');
              setActiveEra('ทั้งหมด');
            }}
            className="px-4 py-2 bg-amber-100 text-amber-900 border border-amber-300 rounded-xl text-xs font-bold hover:bg-amber-200"
          >
            รีเซ็ตตัวกรองทั้งหมด
          </button>
        </div>
      )}

    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={<div className="text-center py-12 text-amber-600 font-bold">กำลังโหลดคลังข้อสอบ...</div>}>
      <QuizPageContent />
    </Suspense>
  );
}

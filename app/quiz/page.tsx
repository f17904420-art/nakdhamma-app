'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Award, BookOpen, Filter } from 'lucide-react';
import { QUIZ_QUESTIONS, QuizQuestion } from '@/lib/quizData';
import { QuizCard } from '@/components/QuizCard';
import { getStoredProfile, setStoredProfile } from '@/lib/supabase';

function QuizPageContent() {
  const searchParams = useSearchParams();
  const initialGradeParam = searchParams.get('grade') as 'ตรี' | 'โท' | 'เอก' | null;

  const [activeGrade, setActiveGrade] = useState<'ทั้งหมด' | 'ตรี' | 'โท' | 'เอก'>(
    initialGradeParam || 'ทั้งหมด'
  );
  const [activeSubject, setActiveSubject] = useState<'ทั้งหมด' | 'ธรรมะ' | 'พุทธประวัติ' | 'วินัย' | 'เทศนา/กรรมฐาน'>('ทั้งหมด');
  const [filteredQuestions, setFilteredQuestions] = useState<QuizQuestion[]>([]);
  const [quizKey, setQuizKey] = useState(0);

  useEffect(() => {
    let result = QUIZ_QUESTIONS;

    if (activeGrade !== 'ทั้งหมด') {
      result = result.filter((q) => q.grade === activeGrade);
    }
    if (activeSubject !== 'ทั้งหมด') {
      result = result.filter((q) => q.subject === activeSubject);
    }

    setFilteredQuestions(result);
    setQuizKey((prev) => prev + 1);
  }, [activeGrade, activeSubject]);

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

  return (
    <div className="space-y-8 max-w-4xl mx-auto py-4">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-300 px-4 py-1.5 rounded-full text-xs text-amber-900 font-bold shadow-xs">
          <Award className="w-4 h-4 text-amber-600" />
          <span>เกมแบบทดสอบข้อสอบนักธรรมพร้อมเฉลยละเอียด</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-800">
          สนามสอบจำลองนักธรรมออนไลน์
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          ฝึกทำข้อสอบเลือกตอบจากข้อสอบจริงสนามหลวง ทราบผลทันทีพร้อมคำเฉลยอ้างอิงคัมภีร์
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
          <div className="flex items-center space-x-1.5 flex-wrap">
            {(['ทั้งหมด', 'ธรรมะ', 'พุทธประวัติ', 'วินัย', 'เทศนา/กรรมฐาน'] as const).map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubject(sub)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeSubject === sub
                    ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold'
                    : 'text-slate-500 hover:text-amber-700'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
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

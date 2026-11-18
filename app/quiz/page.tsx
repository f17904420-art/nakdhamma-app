'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Award, 
  BookOpen, 
  Filter, 
  Shuffle, 
  History, 
  Layers, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink, 
  HelpCircle,
  FileText,
  BookmarkCheck,
  ChevronRight,
  ShieldCheck,
  Download
} from 'lucide-react';
import { QUIZ_QUESTIONS, QuizQuestion } from '@/lib/quizData';
import { QuizCard } from '@/components/QuizCard';
import { SubjectMockExam, SubjectType } from '@/components/SubjectMockExam';
import { ChapterReviewExercises } from '@/components/ChapterReviewExercises';
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
  const initialTabParam = searchParams.get('tab') as 'mock' | 'chapter' | 'free' | 'archive' | null;

  // Primary Tab state:
  // 'mock' = แบบทดสอบแยกวิชา (Mock Exam)
  // 'chapter' = แบบฝึกหัดทบทวนประจำบท (Chapter Review)
  // 'free' = คลังข้อสอบสุ่มทั่วไป (Free Practice)
  // 'archive' = คลังข้อสอบสนามหลวง prawitcho & เกณฑ์
  const [activeMainTab, setActiveMainTab] = useState<'mock' | 'chapter' | 'free' | 'archive'>(
    initialTabParam || 'mock'
  );

  const [activeGrade, setActiveGrade] = useState<'ทั้งหมด' | 'ตรี' | 'โท' | 'เอก'>(
    initialGradeParam || 'ตรี'
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
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      
      {/* Top Header Banner */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-300 px-4 py-1.5 rounded-full text-xs text-amber-900 font-bold shadow-xs">
          <Award className="w-4 h-4 text-amber-600" />
          <span>คลังข้อสอบจริงธรรมสนามหลวงย้อนหลัง ๓๐ ปี (พ.ศ. ๒๕๓๗ - ๒๕๖๗) · ๑,๕๗๕ ข้อ</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
          สนามสอบจำลองและคลังแบบฝึกหัดนักธรรม
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          ฝึกทำข้อสอบเลือกตอบจากข้อสอบจริงสนามหลวง แยกตามรายวิชา ธรรม พุทธประวัติ วินัยบัญญัติ และกระทู้ธรรม พร้อมแบบฝึกหัดทบทวนประจำบท และระบบตรวจคำตอบเฉลยละเอียดบอกเมื่อทำเสร็จ
        </p>

        {/* External Pravitcho Badge */}
        <div className="pt-1">
          <a
            href="https://www.pravitcho.com/p/exam-dhamma.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-300 px-3.5 py-1 rounded-full font-bold transition-all"
            title="เปิดอ่านคลังข้อสอบธรรมสนามหลวงย้อนหลัง pravitcho.com"
          >
            <span>แหล่งข้อสอบอ้างอิง: ข้อสอบธรรมสนามหลวง (pravitcho.com)</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-600" />
          </a>
        </div>
      </div>

      {/* Main Tabs Navigation */}
      <div className="flex items-center justify-center p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200 max-w-3xl mx-auto shadow-inner overflow-x-auto no-scrollbar">
        
        <button
          onClick={() => setActiveMainTab('mock')}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center space-x-1.5 ${
            activeMainTab === 'mock'
              ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
              : 'text-slate-600 hover:text-amber-800 hover:bg-white/50'
          }`}
        >
          <Award className="w-4 h-4 shrink-0" />
          <span>แบบทดสอบแยกวิชา</span>
        </button>

        <button
          onClick={() => setActiveMainTab('chapter')}
          className={`flex-1 min-w-[150px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center space-x-1.5 ${
            activeMainTab === 'chapter'
              ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
              : 'text-slate-600 hover:text-amber-800 hover:bg-white/50'
          }`}
        >
          <Layers className="w-4 h-4 shrink-0" />
          <span>แบบฝึกหัดประจำบท</span>
        </button>

        <button
          onClick={() => setActiveMainTab('free')}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center space-x-1.5 ${
            activeMainTab === 'free'
              ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
              : 'text-slate-600 hover:text-amber-800 hover:bg-white/50'
          }`}
        >
          <Shuffle className="w-4 h-4 shrink-0" />
          <span>คลังข้อสอบสุ่ม</span>
        </button>

        <button
          onClick={() => setActiveMainTab('archive')}
          className={`flex-1 min-w-[150px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center space-x-1.5 ${
            activeMainTab === 'archive'
              ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
              : 'text-slate-600 hover:text-amber-800 hover:bg-white/50'
          }`}
        >
          <History className="w-4 h-4 shrink-0" />
          <span>เกณฑ์ & คลังสนามหลวง</span>
        </button>

      </div>

      {/* TAB 1: แบบทดสอบแยกวิชา (Subject-specific Mock Exam) */}
      {activeMainTab === 'mock' && (
        <SubjectMockExam
          initialGrade={(activeGrade !== 'ทั้งหมด' ? activeGrade : 'ตรี') as 'ตรี' | 'โท' | 'เอก'}
        />
      )}

      {/* TAB 2: แบบฝึกหัดทบทวนประจำบท (Chapter Review Exercises) */}
      {activeMainTab === 'chapter' && (
        <ChapterReviewExercises />
      )}

      {/* TAB 3: คลังข้อสอบสุ่มทั่วไป (Free Practice Mode with Filters) */}
      {activeMainTab === 'free' && (
        <div className="space-y-6 animate-fadeIn">
          
          {/* Filter Controls Card */}
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
                <span>ช่วงปีที่ออกสอบสนามหลวง:</span>
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {eraList.map((era) => {
                  const cnt = countFor(activeGrade, activeSubject, era);
                  const label =
                    era === 'ทั้งหมด'
                      ? 'ทุกปี (๒๕๓๗-๒๕๖๗)'
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
                <span>สุ่มข้อสอบชุดใหม่</span>
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
      )}

      {/* TAB 4: เกณฑ์และคลังข้อสอบสนามหลวง pravitcho */}
      {activeMainTab === 'archive' && (
        <div className="space-y-6 animate-fadeIn">
          
          {/* Pravitcho Source Card */}
          <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold">
              <ExternalLink className="w-3.5 h-3.5 text-yellow-300" />
              <span>คลังข้อสอบธรรมสนามหลวงทางการ</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              คลังข้อสอบธรรมสนามหลวง (pravitcho.com)
            </h2>

            <p className="text-amber-100 text-xs sm:text-sm leading-relaxed max-w-3xl font-medium">
              รวบรวมข้อสอบธรรมสนามหลวงย้อนหลังตั้งแต่ปี พ.ศ. ๒๕๔๓ ถึง ๒๕๖๗ สำหรับนักธรรมและธรรมศึกษา ชั้นตรี โท เอก ครอบคลุมทั้ง ๔ วิชาหลัก สามารถคลิกเพื่อเข้าศึกษาข้อสอบต้นฉบับและแนวทางการออกข้อสอบของคณะกรรมการแม่กองธรรมสนามหลวงได้โดยตรง
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="https://www.pravitcho.com/p/exam-dhamma.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-amber-50 text-amber-900 font-extrabold px-5 py-3 rounded-2xl text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center space-x-2"
              >
                <ExternalLink className="w-4 h-4 text-amber-600" />
                <span>เปิดดูคลังข้อสอบธรรมสนามหลวงบน pravitcho.com</span>
              </a>

              <a
                href="/curriculum/tri/1-267.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white font-bold px-4 py-3 rounded-2xl text-xs sm:text-sm backdrop-blur-md border border-white/30 transition-all flex items-center space-x-2"
              >
                <Download className="w-4 h-4 text-yellow-300" />
                <span>ดาวน์โหลดหลักสูตร ๒๕๕๗ ฉบับสมบูรณ์ (PDF)</span>
              </a>
            </div>
          </div>

          {/* Official Scoring and Passing Rules */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-amber-200 shadow-md space-y-6">
            <div className="flex items-center space-x-2 text-amber-800">
              <ShieldCheck className="w-6 h-6 text-amber-600" />
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
                ระเบียบการสอบและเกณฑ์การตัดสินผลสอบธรรมสนามหลวง
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                <h4 className="font-extrabold text-sm text-amber-900 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>เกณฑ์รวม ๔ วิชา: ๔๐๐ คะแนน</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  การสอบธรรมสนามหลวงประกอบด้วย ๔ วิชา ได้แก่ <strong>วิชากระทู้ธรรม, วิชาธรรม, วิชาพุทธประวัติ, และวิชาวินัยบัญญัติ</strong> แต่ละวิชามีคะแนนเต็ม ๑๐๐ คะแนน รวม ๔ วิชาเป็น ๔๐๐ คะแนน ผู้สอบต้องได้คะแนนรวมไม่น้อยกว่า <strong>๒๘๐ คะแนน (คิดเป็น ๗๐%)</strong> จึงถือว่าสอบได้
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2">
                <h4 className="font-extrabold text-sm text-rose-900 flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-rose-600" />
                  <span>กฎเหล็ก: วิชาใดวิชาหนึ่งต้องไม่ต่ำกว่า ๒๕ คะแนน</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  แม้ว่าคะแนนรวมทั้ง ๔ วิชาจะได้ถึง ๒๘๐ คะแนนก็ตาม แต่หากมีวิชาใดวิชาหนึ่งได้คะแนน <strong>ต่ำกว่า ๒๕ คะแนน</strong> ถือว่าผู้เข้าสอบผู้นั้น <strong className="text-rose-700">"สอบตก"</strong> ทันที โดยไม่มีข้อยกเว้น เพื่อรักษามาตรฐานความรู้รอบด้านในพระพุทธศาสนา
                </p>
              </div>

            </div>

            {/* Subject Overview Table */}
            <div className="overflow-x-auto pt-2">
              <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 text-slate-700 font-extrabold">
                  <tr>
                    <th className="p-3 border-b border-slate-200">วิชาที่สอบ</th>
                    <th className="p-3 border-b border-slate-200">รูปแบบข้อสอบ</th>
                    <th className="p-3 border-b border-slate-200">คะแนนเต็ม</th>
                    <th className="p-3 border-b border-slate-200">เกณฑ์ขั้นต่ำรายวิชา</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr>
                    <td className="p-3 font-bold text-slate-800">๑. วิชากระทู้ธรรม</td>
                    <td className="p-3">เขียนเรียงความอธิบายพุทธสุภาษิต เชื่อมสุภาษิต ๑ ข้อ (ยาว ๒ หน้ากระดาษขึ้นไป)</td>
                    <td className="p-3 font-bold text-amber-700">๑๐๐ คะแนน</td>
                    <td className="p-3 text-emerald-600 font-bold">ไม่ต่ำกว่า ๒๕ คะแนน</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-800">๒. วิชาธรรม (ธรรมวิภาค & คิหิปฏิบัติ)</td>
                    <td className="p-3">ข้อสอบปรนัยเลือกตอบ ๔ ตัวเลือก (หรืออัตนัยในชั้นนักธรรม)</td>
                    <td className="p-3 font-bold text-amber-700">๑๐๐ คะแนน</td>
                    <td className="p-3 text-emerald-600 font-bold">ไม่ต่ำกว่า ๒๕ คะแนน</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-800">๓. วิชาพุทธประวัติ (และศาสนพิธี)</td>
                    <td className="p-3">ข้อสอบปรนัยเลือกตอบ ๔ ตัวเลือก (หรืออัตนัยในชั้นนักธรรม)</td>
                    <td className="p-3 font-bold text-amber-700">๑๐๐ คะแนน</td>
                    <td className="p-3 text-emerald-600 font-bold">ไม่ต่ำกว่า ๒๕ คะแนน</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-800">๔. วิชาวินัยบัญญัติ (วินัยมุข / เบญจศีล)</td>
                    <td className="p-3">ข้อสอบปรนัยเลือกตอบ ๔ ตัวเลือก (หรืออัตนัยในชั้นนักธรรม)</td>
                    <td className="p-3 font-bold text-amber-700">๑๐๐ คะแนน</td>
                    <td className="p-3 text-emerald-600 font-bold">ไม่ต่ำกว่า ๒๕ คะแนน</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Quick Link to Mock Test */}
            <div className="pt-2 flex justify-center">
              <button
                onClick={() => setActiveMainTab('mock')}
                className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold px-6 py-3 rounded-2xl transition-all shadow-md active:scale-95 text-xs sm:text-sm"
              >
                <span>เข้าสู่แบบทดสอบจำลองสอบจริงแยกวิชา</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={<div className="text-center py-12 text-amber-600 font-bold">กำลังโหลดคลังข้อสอบและแบบฝึกหัด...</div>}>
      <QuizPageContent />
    </Suspense>
  );
}

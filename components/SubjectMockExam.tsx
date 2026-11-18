'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  BookOpen, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Flag, 
  Filter, 
  Share2, 
  Printer, 
  Sparkles, 
  ExternalLink,
  Shuffle,
  FileText,
  BookmarkCheck,
  Check,
  HelpCircle,
  BarChart3
} from 'lucide-react';
import { QUIZ_QUESTIONS, QuizQuestion } from '@/lib/quizData';
import { getStoredProfile, setStoredProfile } from '@/lib/supabase';

export type SubjectType = 'ธรรม' | 'พุทธประวัติ' | 'วินัย' | 'กระทู้ธรรม' | 'รวมทุกวิชา';
export type GradeType = 'ตรี' | 'โท' | 'เอก';

interface SubjectMockExamProps {
  initialSubject?: SubjectType;
  initialGrade?: GradeType;
  onBackToMenu?: () => void;
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const formatTimer = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const SubjectMockExam: React.FC<SubjectMockExamProps> = ({
  initialSubject = 'ธรรม',
  initialGrade = 'ตรี',
  onBackToMenu
}) => {
  // Config state
  const [selectedSubject, setSelectedSubject] = useState<SubjectType>(initialSubject);
  const [selectedGrade, setSelectedGrade] = useState<GradeType>(initialGrade);
  const [questionCount, setQuestionCount] = useState<number>(25); // 10, 25, 50
  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);

  // Exam runtime state
  const [examQuestions, setExamQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(30 * 60); // in seconds
  const [totalTimeSpent, setTotalTimeSpent] = useState<number>(0);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);

  // Review state
  const [reviewFilter, setReviewFilter] = useState<'all' | 'correct' | 'incorrect'>('all');

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Filter questions for the chosen subject and grade
  const candidateQuestions = useMemo(() => {
    let pool = QUIZ_QUESTIONS.filter((q) => q.grade === selectedGrade);
    if (selectedSubject !== 'รวมทุกวิชา') {
      if (selectedSubject === 'ธรรม') {
        pool = pool.filter((q) => q.subject === 'ธรรมะ' || q.subject === 'ธรรมวิภาค' || q.subject === 'ธรรมวิจารณ์');
      } else if (selectedSubject === 'วินัย') {
        pool = pool.filter((q) => q.subject === 'วินัย' || q.subject === 'วินัยบัญญัติ' || q.subject === 'วินัยมุข');
      } else if (selectedSubject === 'พุทธประวัติ') {
        pool = pool.filter((q) => q.subject === 'พุทธประวัติ');
      } else if (selectedSubject === 'กระทู้ธรรม') {
        pool = pool.filter((q) => q.subject === 'กระทู้ธรรม');
      }
    }
    return pool;
  }, [selectedSubject, selectedGrade]);

  // Start exam handler
  const handleStartExam = (customQuestions?: QuizQuestion[]) => {
    const listToUse = customQuestions || candidateQuestions;
    const shuffled = shuffleArray(listToUse);
    const chosen = shuffled.slice(0, Math.min(questionCount, shuffled.length));
    
    // Allocate time: 1.2 minutes per question
    const duration = Math.max(chosen.length * 75, 10 * 60);

    setExamQuestions(chosen);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setTimeRemaining(duration);
    setTotalTimeSpent(0);
    setExamStarted(true);
    setExamSubmitted(false);
    setShowConfirmModal(false);
  };

  // Timer countdown effect
  useEffect(() => {
    if (examStarted && !examSubmitted) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
        setTotalTimeSpent((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examStarted, examSubmitted]);

  // Answer selection
  const handleSelectOption = (optionIndex: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex
    }));
  };

  // Toggle flag
  const toggleFlag = (idx: number) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Submit exam
  const handleSubmitExam = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setExamSubmitted(true);
    setShowConfirmModal(false);

    // Calculate score
    let correctCount = 0;
    examQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    const percentage = Math.round((correctCount / examQuestions.length) * 100);

    // Save profile score
    const profile = getStoredProfile();
    if (profile) {
      const updated = {
        ...profile,
        score: profile.score + correctCount * 10,
        completedQuizzes: profile.completedQuizzes + 1,
      };
      setStoredProfile(updated);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('profileUpdated'));
      }
    }

    // Trigger confetti if passed standard (>= 70%)
    if (percentage >= 70 && typeof window !== 'undefined') {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  // Retake only incorrect questions
  const handleRetakeIncorrect = () => {
    const incorrectList = examQuestions.filter((q, idx) => userAnswers[idx] !== q.correctIndex);
    if (incorrectList.length > 0) {
      setQuestionCount(incorrectList.length);
      handleStartExam(incorrectList);
    }
  };

  // Stats calculation
  const totalQuestions = examQuestions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = totalQuestions - answeredCount;
  const currentQuestion = examQuestions[currentIndex];

  const score = useMemo(() => {
    let c = 0;
    examQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) c++;
    });
    return c;
  }, [examQuestions, userAnswers]);

  const percentageScore = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  const isPassed = percentageScore >= 70; // เกณฑ์ ๗๐% สนามหลวง

  // Filtered review questions
  const reviewQuestions = useMemo(() => {
    return examQuestions.map((q, idx) => {
      const selected = userAnswers[idx];
      const isCorrect = selected === q.correctIndex;
      return { question: q, idx, selected, isCorrect };
    }).filter((item) => {
      if (reviewFilter === 'correct') return item.isCorrect;
      if (reviewFilter === 'incorrect') return !item.isCorrect;
      return true;
    });
  }, [examQuestions, userAnswers, reviewFilter]);

  // -------------------------------------------------------------
  // VIEW 1: Exam Configuration & Subject Selector (Not started)
  // -------------------------------------------------------------
  if (!examStarted) {
    const subjects = [
      {
        id: 'ธรรม' as SubjectType,
        name: 'วิชาธรรม (ธรรมวิภาค & คิหิปฏิบัติ)',
        badge: 'ธรรมวิภาค ๒-๑๐ & คิหิปฏิบัติ',
        color: 'border-amber-300 hover:border-amber-500 bg-amber-50/50 hover:bg-amber-100/50',
        activeColor: 'bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/20 border-amber-600',
        desc: 'รวมหมวดธรรม ๒ ถึง ๑๐ คิหิปฏิบัติ มิตร ๔ จำพวก ทิศ ๖ อบายมุข และธรรมศึกษาอุดมศึกษา',
        icon: '📜',
        poolCount: QUIZ_QUESTIONS.filter((q) => q.grade === selectedGrade && (q.subject === 'ธรรมะ' || q.subject === 'ธรรมวิภาค' || q.subject === 'ธรรมวิจารณ์')).length
      },
      {
        id: 'พุทธประวัติ' as SubjectType,
        name: 'วิชาพุทธประวัติ (และศาสนพิธี)',
        badge: '๕ กาล ๑๓ ปริเฉท & ศาสนพิธี',
        color: 'border-sky-300 hover:border-sky-500 bg-sky-50/50 hover:bg-sky-100/50',
        activeColor: 'bg-gradient-to-br from-sky-600 to-blue-600 text-white shadow-lg shadow-sky-600/20 border-sky-600',
        desc: 'ปุริมกาล ปฐมโพธิกาล มัชฌิม-ปัจฉิมกาล สัตตมหาสถาน สังคายนา ๓ ครั้ง และระเบียบพิธีกรรม',
        icon: '🪷',
        poolCount: QUIZ_QUESTIONS.filter((q) => q.grade === selectedGrade && q.subject === 'พุทธประวัติ').length
      },
      {
        id: 'วินัย' as SubjectType,
        name: 'วิชาวินัยบัญญัติ (วินัยมุข / เบญจศีล)',
        badge: 'ศีล ๕ ศีล ๘ & สิกขาบท ๒๒๗',
        color: 'border-emerald-300 hover:border-emerald-500 bg-emerald-50/50 hover:bg-emerald-100/50',
        activeColor: 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-lg shadow-emerald-600/20 border-emerald-600',
        desc: 'องค์วินิจฉัยศีล ๕ และเบญจธรรม สิกขาบท ๒๒๗ ปาราชิก ๔ สังฆาทิเสส ๑๓ ปาจิตตีย์ และอธิกรณ์ ๔',
        icon: '⚖️',
        poolCount: QUIZ_QUESTIONS.filter((q) => q.grade === selectedGrade && (q.subject === 'วินัย' || q.subject === 'วินัยบัญญัติ' || q.subject === 'วินัยมุข')).length
      },
      {
        id: 'กระทู้ธรรม' as SubjectType,
        name: 'วิชากระทู้ธรรม (พุทธศาสนสุภาษิต & ข้อเขียน)',
        badge: '๕ หมวดสุภาษิต & กฎเกณฑ์สนามหลวง',
        color: 'border-purple-300 hover:border-purple-500 bg-purple-50/50 hover:bg-purple-100/50',
        activeColor: 'bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-lg shadow-purple-600/20 border-purple-600',
        desc: 'สุภาษิตหมวดตน กรรม ไม่ประมาท ปัญญา วาจา/ศีล โครงสร้างเรียงความ ๔ ตอน และเกณฑ์ ๑๐๐ คะแนน',
        icon: '✍️',
        poolCount: QUIZ_QUESTIONS.filter((q) => q.grade === selectedGrade && q.subject === 'กระทู้ธรรม').length
      },
      {
        id: 'รวมทุกวิชา' as SubjectType,
        name: 'แบบทดสอบรวมทุกวิชา (ชุดจำลองสอบรวม ๔ วิชา)',
        badge: 'สุ่มข้อสอบคละทุกหมวดวิชา',
        color: 'border-rose-300 hover:border-rose-500 bg-rose-50/50 hover:bg-rose-100/50',
        activeColor: 'bg-gradient-to-br from-rose-600 to-red-600 text-white shadow-lg shadow-rose-600/20 border-rose-600',
        desc: 'จำลองการสอบวัดผลรอบด้าน สุ่มข้อสอบคละวิชา ธรรม พุทธประวัติ วินัย และกระทู้ธรรม',
        icon: '🎯',
        poolCount: candidateQuestions.length
      }
    ];

    return (
      <div className="space-y-8 animate-fadeIn">
        {/* Intro Banner */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 text-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-amber-500/10 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold">
            <Award className="w-3.5 h-3.5 text-yellow-300" />
            <span>แบบทดสอบจำลองสอบจริงตามระเบียบแม่กองธรรมสนามหลวง</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            แบบทดสอบแยกวิชา พร้อมระบบตรวจและเฉลยละเอียด
          </h2>
          <p className="text-amber-100 text-xs sm:text-sm leading-relaxed max-w-2xl font-medium">
            เลือกวิชาที่ต้องการสอบตามหลักสูตรสนามหลวง จับเวลาเหมือนสอบจริงในห้องสอบ ไม่แสดงเฉลยระหว่างทำข้อสอบ และสรุปผลวิเคราะห์พร้อมเฉลยละเอียดครบทุกข้อเมื่อส่งข้อสอบ
          </p>
        </div>

        {/* Level selector */}
        <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs sm:text-sm font-bold text-slate-700 flex items-center space-x-1.5">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>เลือกระดับชั้นนักธรรม / ธรรมศึกษา:</span>
            </span>
            <div className="flex items-center space-x-2">
              {(['ตรี', 'โท', 'เอก'] as const).map((grade) => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    selectedGrade === grade
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-800'
                  }`}
                >
                  ชั้น{grade}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Subjects Grid */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-800 flex items-center space-x-1.5">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>เลือกวิชาที่ต้องการทดสอบ:</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subjects.map((sub) => {
              const isSelected = selectedSubject === sub.id;
              return (
                <div
                  key={sub.id}
                  onClick={() => setSelectedSubject(sub.id)}
                  className={`cursor-pointer p-5 rounded-2xl border-2 transition-all relative flex flex-col justify-between space-y-3 ${
                    isSelected ? sub.activeColor : `${sub.color} text-slate-800 shadow-xs`
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{sub.icon}</span>
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-white text-slate-600 border border-slate-200'
                      }`}>
                        {sub.poolCount} ข้อในคลัง
                      </span>
                    </div>
                    <h4 className="font-bold text-base sm:text-lg leading-snug">{sub.name}</h4>
                    <p className={`text-xs leading-relaxed ${isSelected ? 'text-white/90' : 'text-slate-600'}`}>
                      {sub.desc}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-white/20">
                    <span className={`text-[11px] font-bold ${isSelected ? 'text-amber-100' : 'text-amber-700'}`}>
                      {sub.badge}
                    </span>
                    <span className="text-xs font-bold underline flex items-center space-x-1">
                      <span>{isSelected ? 'เลือกแล้ว' : 'คลิกเลือก'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Length selector */}
        <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm space-y-3">
          <span className="text-xs sm:text-sm font-bold text-slate-700 flex items-center space-x-1.5">
            <Clock className="w-4 h-4 text-amber-600" />
            <span>เลือกจำนวนข้อสอบและเวลาที่จำลองสอบ:</span>
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { count: 10, time: '๑๒ นาที', label: 'ชุดด่วน (Quick Test)', desc: 'เหมาะสำหรับทบทวนเร็วหรือมีเวลาจำกัด' },
              { count: 25, time: '๓๐ นาที', label: 'ชุดมาตรฐาน (Standard)', desc: 'เทียบเท่าสัดส่วนข้อสอบสนามหลวง ๑ วิชา' },
              { count: 50, time: '๖๐ นาที', label: 'ชุดเต็มรูป (Full Simulation)', desc: 'วัดผลอย่างแม่นยำลึกซึ้ง ครอบคลุมทุกเนื้อหา' },
            ].map((item) => (
              <button
                key={item.count}
                onClick={() => setQuestionCount(item.count)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  questionCount === item.count
                    ? 'border-amber-500 bg-amber-50/80 shadow-md shadow-amber-500/10'
                    : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-extrabold text-base text-slate-800">{item.count} ข้อ</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-200/60 text-amber-900">
                    เวลา {item.time}
                  </span>
                </div>
                <div className="text-xs font-bold text-amber-700">{item.label}</div>
                <div className="text-[11px] text-slate-500 mt-1 leading-normal">{item.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Official Rules Notice */}
        <div className="bg-amber-50/70 border border-amber-300 rounded-2xl p-4 text-xs text-amber-900 space-y-1.5">
          <div className="font-bold flex items-center space-x-1.5 text-amber-800">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>เกณฑ์การประเมินผลสอบธรรมสนามหลวง:</span>
          </div>
          <p className="leading-relaxed">
            • แต่ละวิชามีคะแนนเต็ม ๑๐๐ คะแนน ต้องได้คะแนนตั้งแต่ <strong>๗๐ คะแนน (๗๐%) ขึ้นไป</strong> จึงถือว่าสอบได้ (ผ่านเกณฑ์)<br />
            • กฎสำคัญ: ผู้เข้าสอบต้องได้คะแนนในแต่ละวิชา <strong>ไม่ต่ำกว่า ๒๕ คะแนน</strong> หากวิชาใดได้ต่ำกว่า ๒๕ คะแนนถือว่าตกทันที<br />
            • ระบบจะเฉลยคำตอบพร้อมคำอธิบายและคัมภีร์อ้างอิงอย่างละเอียด <strong>เมื่อกดส่งข้อสอบหรือหมดเวลาสอบ</strong>
          </p>
        </div>

        {/* Start Button */}
        <div className="flex justify-center pt-2">
          <button
            onClick={() => handleStartExam()}
            disabled={candidateQuestions.length === 0}
            className="flex items-center space-x-2 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 hover:from-amber-700 hover:to-orange-600 text-white font-extrabold px-8 py-4 rounded-2xl transition-all shadow-xl shadow-amber-600/25 active:scale-95 text-base sm:text-lg cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span>เริ่มทำแบบทดสอบวิชา{selectedSubject} ({Math.min(questionCount, candidateQuestions.length)} ข้อ)</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: Exam in Progress (Exam Simulation Mode)
  // -------------------------------------------------------------
  if (examStarted && !examSubmitted && currentQuestion) {
    const isFlagged = !!flaggedQuestions[currentIndex];
    const isAnswered = userAnswers[currentIndex] !== undefined;

    return (
      <div className="space-y-6 max-w-4xl mx-auto animate-fadeIn">
        
        {/* Sticky Exam Top Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-200 shadow-md sticky top-16 z-30 flex items-center justify-between flex-wrap gap-3">
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              {currentIndex + 1}
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500">
                วิชา{selectedSubject} · นักธรรมชั้น{selectedGrade}
              </div>
              <div className="text-sm font-extrabold text-slate-800">
                ข้อที่ {currentIndex + 1} จาก {totalQuestions}
              </div>
            </div>
          </div>

          {/* Timer Display */}
          <div className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl border font-mono font-bold text-sm ${
            timeRemaining < 300 
              ? 'bg-rose-50 border-rose-300 text-rose-600 animate-pulse'
              : 'bg-amber-50 border-amber-300 text-amber-900'
          }`}>
            <Clock className="w-4 h-4 text-amber-600" />
            <span>{formatTimer(timeRemaining)}</span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => toggleFlag(currentIndex)}
              className={`p-2 rounded-xl text-xs font-bold border transition-all flex items-center space-x-1 ${
                isFlagged
                  ? 'bg-amber-100 border-amber-400 text-amber-900'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
              title="ปักหมุดข้อนี้ไว้ทบทวน"
            >
              <Flag className={`w-4 h-4 ${isFlagged ? 'fill-amber-600 text-amber-600' : 'text-slate-400'}`} />
              <span className="hidden sm:inline">{isFlagged ? 'ปักหมุดแล้ว' : 'ปักหมุด'}</span>
            </button>

            <button
              onClick={() => setShowConfirmModal(true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-xl transition-all shadow-sm active:scale-95 flex items-center space-x-1.5"
            >
              <Check className="w-4 h-4" />
              <span>ส่งข้อสอบ</span>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full transition-all duration-300"
            style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
          />
        </div>

        {/* Question and Options Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-amber-200 shadow-lg space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 flex-wrap gap-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                {currentQuestion.subject}
              </span>
              {currentQuestion.year && (
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                  พ.ศ. {currentQuestion.year}
                </span>
              )}
            </div>
            <span className="text-xs text-slate-400">
              {isAnswered ? '✓ บันทึกคำตอบแล้ว' : 'ยังไม่ได้เลือกคำตอบ'}
            </span>
          </div>

          {/* Question text */}
          <h3 className="text-base sm:text-xl font-bold text-slate-800 leading-relaxed">
            {currentQuestion.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 pt-2">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = userAnswers[currentIndex] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start space-x-3.5 text-sm sm:text-base ${
                    isSelected
                      ? 'border-amber-500 bg-amber-50/80 text-amber-950 font-semibold shadow-xs'
                      : 'border-slate-200 hover:border-amber-300 bg-slate-50/40 hover:bg-amber-50/30 text-slate-700'
                  }`}
                >
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    isSelected
                      ? 'bg-amber-500 text-white'
                      : 'bg-white border border-slate-300 text-slate-600'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-snug pt-0.5">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className={`flex items-center space-x-1 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed bg-slate-50 text-slate-400 border-slate-200'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>ข้อก่อนหน้า</span>
            </button>

            <span className="text-xs text-slate-500 font-medium">
              ตอบแล้ว {answeredCount} จาก {totalQuestions} ข้อ
            </span>

            <button
              onClick={() => setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
              disabled={currentIndex === totalQuestions - 1}
              className={`flex items-center space-x-1 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                currentIndex === totalQuestions - 1
                  ? 'opacity-40 cursor-not-allowed bg-slate-50 text-slate-400 border-slate-200'
                  : 'bg-amber-500 text-white border-amber-500 hover:bg-amber-600 shadow-xs'
              }`}
            >
              <span>ข้อถัดไป</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Question Palette Grid */}
        <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-600 font-bold">
            <span>แผงผังข้อสอบ (คลิกข้ามไปทำข้อที่ต้องการได้ทันที):</span>
            <div className="flex items-center space-x-3 text-[11px]">
              <span className="flex items-center space-x-1">
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span>ตอบแล้ว ({answeredCount})</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-3 h-3 rounded-full bg-slate-200 inline-block" />
                <span>ยังไม่ตอบ ({unansweredCount})</span>
              </span>
              <span className="flex items-center space-x-1">
                <Flag className="w-3 h-3 text-amber-500 fill-amber-500" />
                <span>ปักหมุด</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-12 gap-2 pt-1">
            {examQuestions.map((_, idx) => {
              const isAns = userAnswers[idx] !== undefined;
              const isFlg = flaggedQuestions[idx];
              const isCurr = currentIndex === idx;

              let btnClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200';
              if (isAns) {
                btnClass = 'bg-amber-500 text-white border-amber-600 font-bold';
              }
              if (isCurr) {
                btnClass += ' ring-2 ring-blue-500 ring-offset-2';
              }

              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative h-10 rounded-xl border text-xs font-bold transition-all flex items-center justify-center ${btnClass}`}
                >
                  <span>{idx + 1}</span>
                  {isFlg && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border border-white" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Confirmation Modal */}
        {showConfirmModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white max-w-md w-full p-6 rounded-3xl shadow-2xl space-y-4 border border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-amber-600">
                <AlertCircle className="w-7 h-7" />
              </div>
              <div className="text-center space-y-1">
                <h4 className="text-lg font-bold text-slate-800">ยืนยันการส่งข้อสอบ</h4>
                <p className="text-xs text-slate-600">
                  คุณทำข้อสอบไปแล้ว <strong className="text-amber-700">{answeredCount}</strong> จาก {totalQuestions} ข้อ
                </p>
                {unansweredCount > 0 && (
                  <p className="text-xs text-rose-600 font-semibold pt-1">
                    คำเตือน: ยังมีข้อที่ยังไม่ได้ตอบอีก {unansweredCount} ข้อ
                  </p>
                )}
              </div>

              <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs text-amber-900 text-center">
                เมื่อส่งข้อสอบแล้ว ระบบจะตรวจคำตอบและแสดงเฉลยละเอียดครบทุกข้อทันที
              </div>

              <div className="flex space-x-3 pt-2">
                <button
                  onClick={() => setShowConfirmModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100"
                >
                  กลับไปทำต่อ
                </button>
                <button
                  onClick={handleSubmitExam}
                  className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20"
                >
                  ยืนยันส่งข้อสอบ
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 3: Exam Completed (Detailed Results & Full Explanations)
  // -------------------------------------------------------------
  if (examSubmitted) {
    const incorrectCount = totalQuestions - score;

    return (
      <div className="space-y-8 max-w-4xl mx-auto animate-fadeIn pb-12">
        
        {/* Score Card Banner */}
        <div className={`p-6 sm:p-8 rounded-3xl border-2 shadow-xl text-center space-y-6 ${
          isPassed 
            ? 'bg-gradient-to-br from-emerald-50 via-white to-amber-50 border-emerald-400 shadow-emerald-500/10'
            : 'bg-gradient-to-br from-amber-50 via-white to-rose-50 border-rose-300 shadow-rose-500/10'
        }`}>
          
          <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto border-2 shadow-inner ${
            isPassed ? 'bg-emerald-100 border-emerald-300 text-emerald-600' : 'bg-rose-100 border-rose-300 text-rose-600'
          }`}>
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold ${
              isPassed ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
            }`}>
              {isPassed ? '★ ผ่านเกณฑ์มาตรฐานธรรมสนามหลวง ★' : 'ยังไม่ผ่านเกณฑ์ ๗๐% ต้องสอบแก้ตัว'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              ผลการทดสอบ: วิชา{selectedSubject} (ชั้น{selectedGrade})
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              ใช้เวลาสอบไปทั้งหมด {formatTimer(totalTimeSpent)} นาที
            </p>
          </div>

          {/* Big Score Box */}
          <div className="max-w-md mx-auto bg-white/90 p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-around">
              <div>
                <div className="text-4xl sm:text-5xl font-black text-amber-600">{score}</div>
                <div className="text-xs font-bold text-slate-500 mt-1">คะแนนที่ได้ (จาก {totalQuestions})</div>
              </div>
              <div className="h-12 w-px bg-slate-200" />
              <div>
                <div className={`text-4xl sm:text-5xl font-black ${isPassed ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {percentageScore}%
                </div>
                <div className="text-xs font-bold text-slate-500 mt-1">เกณฑ์ผ่าน: ๗๐%</div>
              </div>
            </div>

            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  isPassed ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-gradient-to-r from-rose-500 to-amber-500'
                }`}
                style={{ width: `${percentageScore}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-medium pt-1">
              <span className="text-emerald-600 font-bold">✓ ตอบถูก {score} ข้อ</span>
              <span className="text-rose-600 font-bold">✗ ตอบผิด {incorrectCount} ข้อ</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-center flex-wrap gap-3 pt-2">
            {incorrectCount > 0 && (
              <button
                onClick={handleRetakeIncorrect}
                className="flex items-center space-x-1.5 bg-gradient-to-r from-rose-500 to-amber-600 hover:from-rose-600 hover:to-amber-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
                <span>ทำซ้ำเฉพาะข้อที่ตอบผิด ({incorrectCount} ข้อ)</span>
              </button>
            )}

            <button
              onClick={() => handleStartExam()}
              className="flex items-center space-x-1.5 bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95"
            >
              <Shuffle className="w-4 h-4" />
              <span>สุ่มสอบวิชานี้ใหม่อีกครั้ง</span>
            </button>

            <button
              onClick={() => {
                setExamStarted(false);
                setExamSubmitted(false);
              }}
              className="flex items-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all border border-slate-200"
            >
              <span>เปลี่ยนวิชาสอบ</span>
            </button>
          </div>

        </div>

        {/* Review Explanations Header & Filters */}
        <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-amber-600" />
            <h3 className="font-extrabold text-slate-800 text-base sm:text-lg">
              เฉลยละเอียดและตรวจคำตอบ ({reviewQuestions.length} ข้อ)
            </h3>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => setReviewFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                reviewFilter === 'all'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              ทั้งหมด ({totalQuestions})
            </button>
            <button
              onClick={() => setReviewFilter('correct')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                reviewFilter === 'correct'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              เฉพาะตอบถูก ({score})
            </button>
            <button
              onClick={() => setReviewFilter('incorrect')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                reviewFilter === 'incorrect'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              เฉพาะตอบผิด ({incorrectCount})
            </button>
          </div>
        </div>

        {/* Detailed Question Review List */}
        <div className="space-y-4">
          {reviewQuestions.map(({ question: q, idx, selected, isCorrect }) => (
            <div
              key={idx}
              className={`bg-white p-6 rounded-3xl border-2 transition-all space-y-4 ${
                isCorrect ? 'border-emerald-200 shadow-xs' : 'border-rose-200 shadow-sm'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 flex-wrap gap-2">
                <div className="flex items-center space-x-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold text-white ${
                    isCorrect ? 'bg-emerald-500' : 'bg-rose-500'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-500">วิชา{q.subject}</span>
                  {q.year && (
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                      ข้อสอบสนามหลวง พ.ศ. {q.year}
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-1.5 text-xs font-bold">
                  {isCorrect ? (
                    <span className="text-emerald-600 flex items-center space-x-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>คุณตอบถูกต้อง</span>
                    </span>
                  ) : (
                    <span className="text-rose-600 flex items-center space-x-1">
                      <XCircle className="w-4 h-4" />
                      <span>คุณตอบยังไม่ถูกต้อง</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Question Text */}
              <h4 className="font-bold text-slate-800 text-base sm:text-lg leading-relaxed">
                {q.question}
              </h4>

              {/* Options Breakdown */}
              <div className="space-y-2 pt-1">
                {q.options.map((opt, optIdx) => {
                  const isRightChoice = optIdx === q.correctIndex;
                  const isUserPick = selected === optIdx;

                  let optStyle = 'border-slate-200 bg-slate-50/30 text-slate-600';
                  let badge = null;

                  if (isRightChoice) {
                    optStyle = 'border-emerald-400 bg-emerald-50/80 text-emerald-950 font-semibold shadow-xs';
                    badge = (
                      <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full ml-auto shrink-0">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>คำตอบที่ถูกต้อง</span>
                      </span>
                    );
                  } else if (isUserPick && !isRightChoice) {
                    optStyle = 'border-rose-300 bg-rose-50/80 text-rose-950 font-semibold';
                    badge = (
                      <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full ml-auto shrink-0">
                        <XCircle className="w-3.5 h-3.5 text-rose-600" />
                        <span>คำตอบที่คุณเลือก (ผิด)</span>
                      </span>
                    );
                  }

                  return (
                    <div
                      key={optIdx}
                      className={`p-3.5 rounded-xl border-2 flex items-start space-x-3 text-xs sm:text-sm ${optStyle}`}
                    >
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                        isRightChoice
                          ? 'bg-emerald-500 text-white'
                          : isUserPick
                          ? 'bg-rose-500 text-white'
                          : 'bg-white border border-slate-300 text-slate-600'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="leading-snug pt-0.5 flex-1">{opt}</span>
                      {badge}
                    </div>
                  );
                })}
              </div>

              {/* Comprehensive Explanation Box */}
              <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 text-xs sm:text-sm text-slate-700 space-y-2 mt-3">
                <div className="flex items-center space-x-1.5 font-bold text-amber-900">
                  <HelpCircle className="w-4 h-4 text-amber-600" />
                  <span>คำอธิบายเฉลยอย่างละเอียด:</span>
                </div>
                <p className="leading-relaxed font-normal text-slate-700 pl-5">
                  {q.explanation}
                </p>

                <div className="pt-2 border-t border-amber-200/60 flex items-center justify-between flex-wrap gap-2 text-[11px] text-amber-800 font-semibold">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>คัมภีร์อ้างอิง: {q.reference}</span>
                  </div>

                  {q.sourceUrl && (
                    <a
                      href={q.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-amber-700 hover:text-amber-900 hover:underline"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>เปิดอ่านคัมภีร์อ้างอิง</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    );
  }

  return null;
};

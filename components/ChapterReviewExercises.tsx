'use client';

import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Award, 
  ArrowLeft, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  Sparkles, 
  Filter, 
  Layers, 
  ExternalLink,
  Shuffle,
  Clock,
  Check,
  Flame,
  ListOrdered
} from 'lucide-react';
import { CHAPTER_REVIEW_LIST, ChapterReviewInfo, getQuestionsForChapter } from '@/lib/chapterReviewData';
import { QuizQuestion } from '@/lib/quizData';
import { getStoredProfile, setStoredProfile } from '@/lib/supabase';

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const ChapterReviewExercises: React.FC = () => {
  // Navigation state
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [subjectFilter, setSubjectFilter] = useState<string>('all');
  const [studyMode, setStudyMode] = useState<'instant' | 'exam'>('instant');

  // Exercise runtime state
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isAnsweredCurrent, setIsAnsweredCurrent] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  // Selected chapter info
  const selectedChapter: ChapterReviewInfo | undefined = useMemo(() => {
    return CHAPTER_REVIEW_LIST.find((c) => c.id === selectedChapterId);
  }, [selectedChapterId]);

  // Filtered chapters list
  const filteredChapters = useMemo(() => {
    if (subjectFilter === 'all') return CHAPTER_REVIEW_LIST;
    return CHAPTER_REVIEW_LIST.filter((c) => {
      if (subjectFilter === 'ธรรม') return c.subject === 'ธรรม';
      if (subjectFilter === 'พุทธประวัติ') return c.subject === 'พุทธประวัติ' && !c.subjectTitle.includes('ศาสนพิธี');
      if (subjectFilter === 'ศาสนพิธี') return c.subjectTitle.includes('ศาสนพิธี');
      if (subjectFilter === 'วินัย') return c.subject === 'วินัย';
      if (subjectFilter === 'กระทู้ธรรม') return c.subject === 'กระทู้ธรรม';
      return true;
    });
  }, [subjectFilter]);

  // Start chapter exercise
  const handleSelectChapter = (chapter: ChapterReviewInfo) => {
    setSelectedChapterId(chapter.id);
    const qs = getQuestionsForChapter(chapter.id);
    setQuestions(shuffleArray(qs));
    setCurrentIndex(0);
    setUserAnswers({});
    setIsAnsweredCurrent(false);
    setScore(0);
    setIsFinished(false);
  };

  // Answer option in Instant mode
  const handleInstantSelect = (optionIndex: number) => {
    if (isAnsweredCurrent) return;
    setIsAnsweredCurrent(true);
    setUserAnswers((prev) => ({ ...prev, [currentIndex]: optionIndex }));

    const currentQ = questions[currentIndex];
    if (optionIndex === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  // Answer option in Chapter Test mode
  const handleTestSelect = (optionIndex: number) => {
    setUserAnswers((prev) => ({ ...prev, [currentIndex]: optionIndex }));
  };

  // Next question
  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setIsAnsweredCurrent(userAnswers[currentIndex + 1] !== undefined);
    } else {
      finishReview();
    }
  };

  // Previous question
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsAnsweredCurrent(userAnswers[currentIndex - 1] !== undefined);
    }
  };

  // Finish review
  const finishReview = () => {
    setIsFinished(true);

    let finalScore = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) {
        finalScore++;
      }
    });

    const profile = getStoredProfile();
    if (profile) {
      const updated = {
        ...profile,
        score: profile.score + finalScore * 10,
        completedQuizzes: profile.completedQuizzes + 1,
      };
      setStoredProfile(updated);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('profileUpdated'));
      }
    }

    if (finalScore / questions.length >= 0.7 && typeof window !== 'undefined') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  // Restart current chapter
  const handleRestart = () => {
    if (selectedChapter) {
      const qs = getQuestionsForChapter(selectedChapter.id);
      setQuestions(shuffleArray(qs));
      setCurrentIndex(0);
      setUserAnswers({});
      setIsAnsweredCurrent(false);
      setScore(0);
      setIsFinished(false);
    }
  };

  // -----------------------------------------------------------------
  // VIEW 1: Chapter Selection Grid
  // -----------------------------------------------------------------
  if (!selectedChapterId || !selectedChapter) {
    return (
      <div className="space-y-6 animate-fadeIn">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 text-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-amber-500/10 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold">
            <Layers className="w-3.5 h-3.5 text-yellow-300" />
            <span>แบบฝึกหัดทบทวนประจำบท · หลักสูตรมาตรฐาน ๑๖ บทเรียน</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            แบบฝึกหัดทบทวนเนื้อหารายบทเรียน
          </h2>
          <p className="text-amber-100 text-xs sm:text-sm leading-relaxed max-w-2xl font-medium">
            เลือกทบทวนตามบทเรียนที่กำลังศึกษาเพื่อวัดความจำและความเข้าใจอย่างตรงจุด พร้อมแบบทดสอบท้ายบทและคำเฉลยอ้างอิงตรงกับหนังสือเรียน ๔ เล่ม
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-200 shadow-sm flex items-center justify-between flex-wrap gap-3">
          <span className="text-xs sm:text-sm font-bold text-slate-700 flex items-center space-x-1.5">
            <Filter className="w-4 h-4 text-amber-600" />
            <span>กรองตามหมวดวิชา:</span>
          </span>

          <div className="flex items-center gap-1.5 flex-wrap">
            {[
              { id: 'all', label: 'ทั้งหมด (๑๖ บท)' },
              { id: 'ธรรม', label: 'วิชาธรรม (๕ บท)' },
              { id: 'พุทธประวัติ', label: 'วิชาพุทธประวัติ (๔ บท)' },
              { id: 'ศาสนพิธี', label: 'วิชาศาสนพิธี (๒ บท)' },
              { id: 'วินัย', label: 'วิชาวินัยบัญญัติ (๔ บท)' },
              { id: 'กระทู้ธรรม', label: 'วิชากระทู้ธรรม (๑ บท)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSubjectFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  subjectFilter === tab.id
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 16 Chapters Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredChapters.map((chap) => {
            const count = getQuestionsForChapter(chap.id).length;
            return (
              <div
                key={chap.id}
                onClick={() => handleSelectChapter(chap)}
                className="cursor-pointer bg-white p-5 rounded-2xl border-2 border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                      บทที่ {chap.chapterNumber} · {chap.subjectTitle}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {count} ข้อฝึกหัด
                    </span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-slate-800 group-hover:text-amber-700 transition-colors leading-snug">
                    {chap.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {chap.description}
                  </p>

                  {/* Topics Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {chap.topics.slice(0, 4).map((topic, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/60"
                      >
                        {topic}
                      </span>
                    ))}
                    {chap.topics.length > 4 && (
                      <span className="text-[10px] text-slate-400 font-semibold self-center">
                        +{chap.topics.length - 4} หัวข้อย่อย
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600 group-hover:underline flex items-center space-x-1">
                    <span>เริ่มทำแบบฝึกหัดทบทวน</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] text-slate-400">คลิกเพื่อเข้าสู่แบบฝึกหัด</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    );
  }

  // -----------------------------------------------------------------
  // VIEW 2: Finished Chapter Review (Result & Explanation List)
  // -----------------------------------------------------------------
  if (isFinished) {
    let finalScore = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) finalScore++;
    });
    const percentage = Math.round((finalScore / questions.length) * 100);
    const passed = percentage >= 70;

    return (
      <div className="space-y-6 max-w-4xl mx-auto animate-fadeIn pb-12">
        
        {/* Header Summary */}
        <div className={`p-6 sm:p-8 rounded-3xl border-2 text-center space-y-6 ${
          passed
            ? 'bg-gradient-to-br from-emerald-50 via-white to-amber-50 border-emerald-400 shadow-xl shadow-emerald-500/10'
            : 'bg-gradient-to-br from-amber-50 via-white to-rose-50 border-rose-300 shadow-xl shadow-rose-500/10'
        }`}>
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto border-2 ${
            passed ? 'bg-emerald-100 border-emerald-300 text-emerald-600' : 'bg-rose-100 border-rose-300 text-rose-600'
          }`}>
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
              passed ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
            }`}>
              {passed ? 'ผ่านเกณฑ์การทบทวนประจำบท (๗๐%+)' : 'ควรทบทวนเนื้อหาบทนี้เพิ่มเติม'}
            </span>
            <h2 className="text-2xl font-extrabold text-slate-800">
              ผลการทบทวน: บทที่ {selectedChapter.chapterNumber}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              {selectedChapter.title}
            </p>
          </div>

          {/* Score Box */}
          <div className="max-w-sm mx-auto bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="text-4xl font-extrabold text-amber-600">
              {finalScore} / {questions.length}
            </div>
            <div className="text-xs font-bold text-slate-600">
              คะแนนความถูกต้อง: {percentage}%
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  passed ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-gradient-to-r from-rose-500 to-amber-500'
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center space-x-3 pt-2">
            <button
              onClick={handleRestart}
              className="flex items-center space-x-1.5 bg-amber-500 hover:bg-amber-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>ทำทบทวนบทนี้ใหม่อีกครั้ง</span>
            </button>

            <button
              onClick={() => setSelectedChapterId(null)}
              className="flex items-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-200 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>กลับสู่รายการบทเรียน</span>
            </button>
          </div>
        </div>

        {/* Detailed Explanations for all questions */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 font-extrabold text-slate-800 text-lg">
            <BookOpen className="w-5 h-5 text-amber-600" />
            <span>เฉลยคำตอบพร้อมคำอธิบายละเอียดประจำบท ({questions.length} ข้อ)</span>
          </div>

          {questions.map((q, idx) => {
            const userPick = userAnswers[idx];
            const isCorrect = userPick === q.correctIndex;

            return (
              <div
                key={idx}
                className={`bg-white p-6 rounded-2xl border-2 space-y-4 ${
                  isCorrect ? 'border-emerald-200' : 'border-rose-200'
                }`}
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center space-x-2">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                      isCorrect ? 'bg-emerald-500' : 'bg-rose-500'
                    }`}>
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-500">ข้อที่ {idx + 1}</span>
                  </div>

                  <span className={`text-xs font-bold flex items-center space-x-1 ${
                    isCorrect ? 'text-emerald-600' : 'text-rose-600'
                  }`}>
                    {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    <span>{isCorrect ? 'ตอบถูก' : 'ตอบผิด'}</span>
                  </span>
                </div>

                <h4 className="font-bold text-slate-800 text-sm sm:text-base leading-relaxed">
                  {q.question}
                </h4>

                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                    const isRight = optIdx === q.correctIndex;
                    const isUserChoice = userPick === optIdx;

                    let style = 'border-slate-200 bg-slate-50/50 text-slate-600';
                    if (isRight) {
                      style = 'border-emerald-400 bg-emerald-50 text-emerald-950 font-bold';
                    } else if (isUserChoice && !isRight) {
                      style = 'border-rose-300 bg-rose-50 text-rose-950 font-bold';
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start justify-between ${style}`}
                      >
                        <div className="flex items-start space-x-2.5">
                          <span className="w-5 h-5 rounded-full bg-white border border-slate-200 text-center text-xs font-bold shrink-0 mt-0.5">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {isRight && <span className="text-[11px] text-emerald-700 font-bold shrink-0 ml-2">✓ คำตอบที่ถูกต้อง</span>}
                        {isUserChoice && !isRight && <span className="text-[11px] text-rose-700 font-bold shrink-0 ml-2">✗ คุณเลือกข้อนี้</span>}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 text-xs text-slate-700 space-y-1.5">
                  <div className="font-bold text-amber-900 flex items-center space-x-1">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span>คำอธิบายเฉลย:</span>
                  </div>
                  <p className="leading-relaxed pl-4">{q.explanation}</p>
                  <div className="pt-1.5 border-t border-amber-200/50 text-[11px] text-amber-800 font-medium">
                    อ้างอิง: {q.reference}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    );
  }

  // -----------------------------------------------------------------
  // VIEW 3: Active Chapter Exercise in Progress
  // -----------------------------------------------------------------
  const currentQ = questions[currentIndex];
  if (!currentQ) return null;

  return (
    <div className="space-y-6 max-w-3xl mx-auto animate-fadeIn">
      
      {/* Top Header Card */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-200 shadow-sm flex items-center justify-between flex-wrap gap-3">
        <button
          onClick={() => setSelectedChapterId(null)}
          className="flex items-center space-x-1 text-xs font-bold text-slate-600 hover:text-amber-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>เปลี่ยนบทเรียน</span>
        </button>

        <div className="text-center">
          <div className="text-xs font-bold text-amber-800">
            บทที่ {selectedChapter.chapterNumber} · {selectedChapter.subjectTitle}
          </div>
          <div className="text-xs text-slate-500 font-medium truncate max-w-xs sm:max-w-md">
            {selectedChapter.title}
          </div>
        </div>

        {/* Study Mode Selector */}
        <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl text-[11px] font-bold">
          <button
            onClick={() => setStudyMode('instant')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              studyMode === 'instant' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600'
            }`}
          >
            เฉลยทีละข้อ
          </button>
          <button
            onClick={() => setStudyMode('exam')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              studyMode === 'exam' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600'
            }`}
          >
            เฉลยเมื่อจบ
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-gradient-to-r from-amber-500 to-orange-400 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-amber-200 shadow-lg space-y-6">
        
        <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3">
          <span className="font-bold text-amber-700">
            ข้อที่ {currentIndex + 1} จาก {questions.length}
          </span>
          {studyMode === 'instant' && (
            <span className="text-emerald-600 font-bold">
              คะแนนปัจจุบัน: {score}
            </span>
          )}
        </div>

        {/* Question Text */}
        <h3 className="text-base sm:text-xl font-bold text-slate-800 leading-relaxed">
          {currentQ.question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {currentQ.options.map((option, idx) => {
            const isUserPick = userAnswers[currentIndex] === idx;
            let btnStyle = 'border-slate-200 hover:border-amber-400 bg-slate-50/50 text-slate-700';

            if (studyMode === 'instant' && isAnsweredCurrent) {
              if (idx === currentQ.correctIndex) {
                btnStyle = 'border-emerald-400 bg-emerald-50 text-emerald-950 font-bold';
              } else if (isUserPick) {
                btnStyle = 'border-rose-400 bg-rose-50 text-rose-950 font-bold';
              } else {
                btnStyle = 'border-slate-100 bg-slate-50/20 text-slate-400 opacity-60';
              }
            } else if (studyMode === 'exam') {
              if (isUserPick) {
                btnStyle = 'border-amber-500 bg-amber-50 text-amber-950 font-bold';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => (studyMode === 'instant' ? handleInstantSelect(idx) : handleTestSelect(idx))}
                disabled={studyMode === 'instant' && isAnsweredCurrent}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start justify-between text-sm sm:text-base ${btnStyle}`}
              >
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-white border border-slate-300 text-xs font-bold text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-snug pt-0.5">{option}</span>
                </div>

                {studyMode === 'instant' && isAnsweredCurrent && (
                  <>
                    {idx === currentQ.correctIndex && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 ml-2" />
                    )}
                    {isUserPick && idx !== currentQ.correctIndex && (
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0 ml-2" />
                    )}
                  </>
                )}
              </button>
            );
          })}
        </div>

        {/* Instant Mode Explanation Box */}
        {studyMode === 'instant' && isAnsweredCurrent && (
          <div className="bg-amber-50/90 border border-amber-300 rounded-2xl p-5 text-xs sm:text-sm text-slate-800 space-y-2 animate-fadeIn">
            <div className="font-bold flex items-center space-x-1.5 text-amber-900">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>
                {userAnswers[currentIndex] === currentQ.correctIndex ? 'คำตอบถูกต้อง!' : 'คำตอบยังไม่ถูกต้อง'}
              </span>
            </div>
            <p className="leading-relaxed text-slate-700 pl-5">{currentQ.explanation}</p>
            <div className="pt-2 border-t border-amber-200 text-[11px] text-amber-800 font-semibold flex items-center space-x-1">
              <BookOpen className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>คัมภีร์อ้างอิง: {currentQ.reference}</span>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`flex items-center space-x-1 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
              currentIndex === 0 ? 'opacity-40 cursor-not-allowed bg-slate-50' : 'bg-white hover:bg-slate-100 text-slate-700'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>ข้อก่อนหน้า</span>
          </button>

          <span className="text-xs text-slate-400">
            {currentIndex + 1} / {questions.length}
          </span>

          <button
            onClick={handleNext}
            className="flex items-center space-x-1 bg-gradient-to-r from-amber-500 to-orange-400 hover:from-amber-600 hover:to-orange-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            <span>{currentIndex + 1 < questions.length ? 'ข้อถัดไป' : 'ดูสรุปและเฉลยครบทุกข้อ'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};

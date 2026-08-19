'use client';

import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle, BookOpen, ChevronRight, Award, RefreshCw, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QuizQuestion } from '@/lib/quizData';

interface QuizCardProps {
  questions: QuizQuestion[];
  onFinish?: (score: number, total: number) => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({ questions, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      if (typeof window !== 'undefined') {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
      if (onFinish) {
        onFinish(score + (selectedOption === currentQ.correctIndex ? 1 : 0), questions.length);
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  if (!currentQ || isFinished) {
    const finalScore = score;
    const percentage = Math.round((finalScore / questions.length) * 100);

    return (
      <div className="bg-white p-8 rounded-3xl text-center space-y-6 max-w-xl mx-auto border-2 border-amber-300 shadow-2xl shadow-amber-500/10">
        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto border border-amber-300 text-amber-600 shadow-inner">
          <Award className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-800">การทดสอบเสร็จสมบูรณ์!</h2>
          <p className="text-slate-600 text-sm">
            คุณทบทวนข้อสอบนักธรรมสำเร็จแล้ว ({questions.length} ข้อ)
          </p>
        </div>

        <div className="bg-amber-50/80 p-6 rounded-2xl border border-amber-200 space-y-3">
          <div className="text-4xl font-extrabold text-amber-600">
            {finalScore} / {questions.length}
          </div>
          <p className="text-xs text-amber-800 font-bold">
            คะแนนความถูกต้อง: {percentage}%
          </p>
          <div className="w-full bg-amber-200/60 h-3 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full transition-all duration-500 rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <p className="text-xs text-slate-600 italic leading-relaxed">
          {percentage >= 80
            ? 'ยอดเยี่ยมมาก! คุณมีความรู้ความเข้าใจในคัมภีร์ธรรมะอย่างแม่นยำ พร้อมสำหรับการสอบสนามหลวง'
            : percentage >= 50
            ? 'ทำได้ดี! ลองทบทวนคำเฉลยและหมั่นทำข้อสอบซ้ำเพื่อความแม่นยำยิ่งขึ้น'
            : 'พยายามอีกนิด! หมั่นทบทวนเนื้อหาในวิดีโอติวและอ่านธรรมะวิภาคเพิ่มเติม'}
        </p>

        <div className="flex justify-center space-x-4 pt-2">
          <button
            onClick={handleRestart}
            className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-400 hover:from-amber-600 hover:to-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-amber-500/20 active:scale-95 text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            <span>ทำข้อสอบใหม่อีกครั้ง</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-amber-500/5 space-y-6 border border-amber-200">
      
      {/* Header Info */}
      <div className="flex items-center justify-between border-b border-amber-100 pb-4">
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 bg-amber-500 text-white font-bold rounded-lg text-xs shadow-xs">
            นักธรรมชั้น{currentQ.grade}
          </span>
          <span className="px-3 py-1 bg-amber-100 text-amber-900 font-bold rounded-lg text-xs">
            วิชา{currentQ.subject}
          </span>
        </div>
        <div className="text-xs text-amber-600 font-bold flex items-center space-x-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ข้อ {currentIndex + 1} จาก {questions.length}</span>
        </div>
      </div>

      {/* Question */}
      <div className="space-y-3">
        <h3 className="text-lg sm:text-xl font-bold text-slate-800 leading-relaxed">
          {currentQ.question}
        </h3>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {currentQ.options.map((option, idx) => {
          let btnStyle = 'bg-slate-50/80 border-slate-200 hover:border-amber-400 text-slate-700 hover:bg-amber-50/50';
          
          if (isAnswered) {
            if (idx === currentQ.correctIndex) {
              btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold shadow-xs';
            } else if (idx === selectedOption) {
              btnStyle = 'bg-rose-50 border-rose-400 text-rose-900 font-semibold';
            } else {
              btnStyle = 'bg-slate-50/40 border-slate-100 text-slate-400 opacity-60';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelectOption(idx)}
              disabled={isAnswered}
              className={`w-full text-left p-4 rounded-2xl border-2 font-medium text-sm sm:text-base flex items-start justify-between transition-all duration-200 ${btnStyle}`}
            >
              <div className="flex items-start space-x-3">
                <span className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-amber-600 shrink-0 mt-0.5 shadow-xs">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="leading-snug pt-0.5">{option}</span>
              </div>

              {isAnswered && idx === currentQ.correctIndex && (
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 ml-2 mt-0.5" />
              )}
              {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 ml-2 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Answer Explanation Box */}
      {isAnswered && (
        <div className="space-y-4 pt-2 animate-fadeIn">
          
          <div className={`p-5 rounded-2xl border text-xs sm:text-sm leading-relaxed ${
            selectedOption === currentQ.correctIndex
              ? 'bg-emerald-50/90 border-emerald-200 text-emerald-900'
              : 'bg-rose-50/90 border-rose-200 text-rose-900'
          }`}>
            <div className="flex items-center space-x-2 font-bold mb-1">
              <HelpCircle className="w-4 h-4" />
              <span>
                {selectedOption === currentQ.correctIndex ? 'คำตอบถูกต้อง!' : 'คำตอบยังไม่ถูกต้อง'}
              </span>
            </div>
            <p className="text-slate-700 mt-2 font-normal leading-relaxed">{currentQ.explanation}</p>
            <div className="mt-3 pt-2 border-t border-emerald-200/60 text-[11px] text-amber-700 font-bold flex items-center space-x-1">
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>อ้างอิงคัมภีร์: {currentQ.reference}</span>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={handleNextQuestion}
              className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-400 hover:from-amber-600 hover:to-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-amber-500/20 active:scale-95 text-sm"
            >
              <span>{currentIndex + 1 < questions.length ? 'ข้อถัดไป' : 'ดูสรุปผลคะแนน'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
};

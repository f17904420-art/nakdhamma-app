'use client';

import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  NAKDHAMMA_TRI_DECKS, 
  SlideDeck, 
  SlideContent 
} from '@/lib/teachingSlidesData';
import { DhammaIllustration } from '@/components/DhammaIllustrations';
import { SubjectIntroductionCard } from '@/components/SubjectIntroductionCard';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize2, 
  Minimize2, 
  HelpCircle, 
  BookOpen, 
  Sparkles, 
  Award, 
  Lightbulb, 
  CheckCircle2, 
  Check,
  XCircle, 
  Share2, 
  Printer, 
  GraduationCap, 
  Layers, 
  Clock, 
  RotateCcw,
  Presentation,
  Compass,
  FileText,
  Volume2
} from 'lucide-react';

export const TeachingSlideDeck: React.FC = () => {
  const [selectedDeckId, setSelectedDeckId] = useState<string>(NAKDHAMMA_TRI_DECKS[0].id);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showTeacherNotes, setShowTeacherNotes] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'slides' | 'mindmap'>('slides');
  
  // Quiz state per slide: { [slideId]: { selectedOption: number, showResult: boolean } }
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<number, boolean>>({});

  const containerRef = useRef<HTMLDivElement>(null);
  const quizRef = useRef<HTMLDivElement>(null);

  const [studyMode, setStudyMode] = useState<'self' | 'presenter'>('self');
  const [completedSlides, setCompletedSlides] = useState<Record<string, boolean>>({});
  const [revealedNotes, setRevealedNotes] = useState<Record<number, boolean>>({});
  const [deckSubjectFilter, setDeckSubjectFilter] = useState<string>('all');
  const [showIntroModal, setShowIntroModal] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('nakdhamma_completed_slides');
      if (saved) {
        setCompletedSlides(JSON.parse(saved));
      }
    } catch (e) {}
  }, []);

  const currentDeck: SlideDeck = NAKDHAMMA_TRI_DECKS.find((d) => d.id === selectedDeckId) || NAKDHAMMA_TRI_DECKS[0];
  const currentSlide: SlideContent = currentDeck.slides[currentSlideIndex] || currentDeck.slides[0];

  const currentDeckSlideKeys = currentDeck.slides.map(s => `${currentDeck.id}-${s.id}`);
  const completedInCurrentDeck = currentDeckSlideKeys.filter(k => completedSlides[k]).length;
  const currentSlideKey = `${currentDeck.id}-${currentSlide.id}`;
  const isCurrentSlideCompleted = !!completedSlides[currentSlideKey];

  const toggleMarkUnderstood = (slideKey: string) => {
    setCompletedSlides((prev) => {
      const isAlready = !!prev[slideKey];
      const next = { ...prev, [slideKey]: !isAlready };
      try {
        localStorage.setItem('nakdhamma_completed_slides', JSON.stringify(next));
      } catch (e) {}
      if (!isAlready) {
        if (typeof window !== 'undefined') {
          confetti({
            particleCount: 50,
            spread: 50,
            origin: { y: 0.7 }
          });
        }
      }
      return next;
    });
  };

  const totalDeckQuizzes = currentDeck.slides.filter(s => s.quiz).length;
  const correctDeckQuizzes = currentDeck.slides.filter(s => s.quiz && quizSubmitted[s.id] && quizAnswers[s.id] === s.quiz.correctIndex).length;

  const scrollToQuiz = () => {
    quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Auto-play timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSlideIndex((prev) => {
          if (prev >= currentDeck.slides.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 7000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentDeck.slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'slides') return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        handleNextSlide();
      } else if (e.key === 'ArrowLeft') {
        handlePrevSlide();
      } else if (e.key === 'Escape' && isFullscreen) {
        handleExitFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, currentDeck.slides.length, isFullscreen, viewMode]);

  const handleNextSlide = () => {
    if (currentSlideIndex < currentDeck.slides.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  // Mobile Touch Swipe Navigation
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const minSwipeDistance = 45;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe && currentSlideIndex < currentDeck.slides.length - 1) {
      handleNextSlide();
    } else if (isRightSwipe && currentSlideIndex > 0) {
      handlePrevSlide();
    }
  };

  const handleDeckChange = (deckId: string) => {
    setSelectedDeckId(deckId);
    setCurrentSlideIndex(0);
    setIsPlaying(false);
  };

  const handleAnswerQuiz = (slideId: number, optionIndex: number) => {
    setQuizAnswers((prev) => ({ ...prev, [slideId]: optionIndex }));
    setQuizSubmitted((prev) => ({ ...prev, [slideId]: true }));

    // Trigger celebration confetti if correct!
    if (currentSlide.quiz && optionIndex === currentSlide.quiz.correctIndex) {
      if (typeof window !== 'undefined') {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.65 }
        });
      }
    }
  };

  const handleResetQuiz = (slideId: number) => {
    setQuizAnswers((prev) => {
      const next = { ...prev };
      delete next[slideId];
      return next;
    });
    setQuizSubmitted((prev) => {
      const next = { ...prev };
      delete next[slideId];
      return next;
    });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        setIsFullscreen(!isFullscreen);
      });
    } else {
      document.exitFullscreen?.().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  const handleExitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    }
    setIsFullscreen(false);
  };

  return (
    <div className="space-y-6" ref={containerRef}>
      
      {/* Subject & Deck Selector Tabs */}
      <div className="bg-white border border-amber-200/80 rounded-3xl p-4 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-amber-100">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-white shadow-xs">
              <Presentation className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                เลือกบทเรียนและสไลด์ช่วยสอน (นักธรรมชั้นตรี)
              </h2>
              <p className="text-xs text-slate-500">
                เนื้อหามาตรฐานแม่กองธรรมสนามหลวง แบ่งตาม ๔ หมวดวิชาหลัก
              </p>
            </div>
          </div>

          {/* Mode Controls: Study Mode & View Mode */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Self-Study vs Presenter Mode */}
            <div className="flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setStudyMode('self')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  studyMode === 'self'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-emerald-800'
                }`}
                title="โหมดสำหรับผู้เรียนเปิดศึกษาและบันทึกความก้าวหน้าด้วยตนเอง"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>โหมดเรียนรู้เปิดเอง</span>
              </button>
              <button
                onClick={() => setStudyMode('presenter')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  studyMode === 'presenter'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-slate-600 hover:text-amber-800'
                }`}
                title="โหมดฉายสไลด์ในห้องเรียนพร้อมเครื่องมือผู้บรรยาย"
              >
                <Presentation className="w-3.5 h-3.5" />
                <span>โหมดฉายสไลด์</span>
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-amber-50 p-1 rounded-xl border border-amber-200 text-xs font-semibold">
              <button
                onClick={() => setViewMode('slides')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'slides'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-slate-600 hover:text-amber-800'
                }`}
              >
                <Presentation className="w-3.5 h-3.5" />
                <span>สไลด์</span>
              </button>
              <button
                onClick={() => setViewMode('mindmap')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'mindmap'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-slate-600 hover:text-amber-800'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>ผังมโนทัศน์</span>
              </button>
            </div>
          </div>
        </div>

        {/* Subject Filter Pills for Decks */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold pt-1 border-t border-amber-100/60">
          {[
            { id: 'all', label: `ทั้งหมด (${NAKDHAMMA_TRI_DECKS.length} บท)` },
            { id: 'dhamma', label: `ธรรมวิภาค (${NAKDHAMMA_TRI_DECKS.filter((d) => d.subjectId === 'dhamma').length})` },
            { id: 'buddha', label: `พุทธประวัติ (${NAKDHAMMA_TRI_DECKS.filter((d) => d.subjectId === 'buddha').length})` },
            { id: 'ceremony', label: `ศาสนพิธี (${NAKDHAMMA_TRI_DECKS.filter((d) => d.subjectId === 'ceremony').length})` },
            { id: 'vinai', label: `เบญจศีล / วินัย (${NAKDHAMMA_TRI_DECKS.filter((d) => d.subjectId === 'vinai').length})` },
            { id: 'kratu', label: `กระทู้ธรรม (${NAKDHAMMA_TRI_DECKS.filter((d) => d.subjectId === 'kratu').length})` }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setDeckSubjectFilter(tab.id)}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                deckSubjectFilter === tab.id
                  ? 'bg-amber-600 text-white shadow-xs font-bold'
                  : 'bg-slate-100 hover:bg-amber-50 text-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Subject Introduction Card (บทนำประจำวิชาและโครงสร้างหลักสูตร) */}
        <SubjectIntroductionCard
          subjectId={deckSubjectFilter as any}
          onSelectDeck={handleDeckChange}
        />

        {/* Decks organized by Major Categories / Subjects */}
        <div className="space-y-6 pt-2">
          {[
            { id: 'dhamma', name: 'หมวดวิชาธรรม (ธรรมวิภาค & คิหิปฏิบัติ & อุดมศึกษา)', icon: '📜', badge: '๕ ชุดสไลด์ · ๓๘ สไลด์' },
            { id: 'buddha', name: 'หมวดวิชาพุทธประวัติ (๕ กาล ๑๓ ปริเฉท)', icon: '🪷', badge: '๔ ชุดสไลด์ · ๒๙ สไลด์' },
            { id: 'ceremony', name: 'หมวดวิชาศาสนพิธี (ระเบียบพิธี & วันสำคัญ)', icon: '🏛️', badge: '๒ ชุดสไลด์ · ๑๔ สไลด์' },
            { id: 'vinai', name: 'หมวดวิชาวินัยบัญญัติ (เบญจศีลเบญจธรรม & วินัยมุข)', icon: '⚖️', badge: '๔ ชุดสไลด์ · ๒๖ สไลด์' },
            { id: 'kratu', name: 'หมวดวิชากระทู้ธรรม (พุทธศาสนสุภาษิต & เรียงความ)', icon: '✍️', badge: '๑ ชุดสไลด์ · ๑๐ สไลด์' }
          ]
            .filter((group) => deckSubjectFilter === 'all' || deckSubjectFilter === group.id)
            .map((group) => {
              const groupDecks = NAKDHAMMA_TRI_DECKS.filter((d) => d.subjectId === group.id);
              if (groupDecks.length === 0) return null;

              return (
                <div key={group.id} className="space-y-3 bg-slate-50/60 p-4 sm:p-5 rounded-3xl border border-slate-200">
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/80">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{group.icon}</span>
                      <h3 className="font-extrabold text-sm sm:text-base text-slate-800">
                        {group.name}
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-0.5 rounded-full border border-amber-200">
                      {group.badge}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {groupDecks.map((deck) => {
                      const isSelected = deck.id === selectedDeckId;
                      return (
                        <button
                          key={deck.id}
                          onClick={() => handleDeckChange(deck.id)}
                          className={`text-left p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                            isSelected
                              ? 'bg-gradient-to-br from-amber-50 to-orange-50/50 border-amber-400 shadow-sm ring-2 ring-amber-400/30'
                              : 'bg-white border-slate-200/80 hover:border-amber-300 text-slate-700 shadow-2xs hover:shadow-xs'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                                {deck.subjectName}
                              </span>
                              <span className="text-[10px] text-slate-400 flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {deck.estimatedMinutes} นาที
                              </span>
                            </div>
                            <h3 className="text-sm font-bold text-slate-800 line-clamp-1 mb-1">
                              {deck.title}
                            </h3>
                            <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                              {deck.description}
                            </p>
                          </div>

                          <div className="pt-3 mt-2 border-t border-amber-100/60 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                            <span>{deck.slidesCount} สไลด์</span>
                            <span className={`text-xs ${isSelected ? 'text-amber-600 font-bold' : 'text-slate-400'}`}>
                              {isSelected ? 'กำลังสอน ▶' : 'เลือกบทนี้'}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODE 1: SLIDE PRESENTATION VIEW */}
      {/* ========================================================================= */}
      {viewMode === 'slides' ? (
        <div className={`bg-white border border-amber-200/80 rounded-3xl overflow-hidden shadow-md transition-all ${
          isFullscreen ? 'fixed inset-0 z-50 rounded-none overflow-y-auto p-4 sm:p-8 bg-slate-900 text-white' : ''
        }`}>
          
          {/* Slide Player Top Toolbar */}
          <div className="px-5 py-3.5 bg-gradient-to-r from-amber-500/10 via-amber-400/10 to-orange-500/10 border-b border-amber-200/60 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-white font-bold shadow-2xs">
                {currentDeck.subjectName}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-amber-200 text-amber-900 font-semibold shadow-2xs">
                {currentSlide.categoryTag}
              </span>
            </div>

            {/* Slide Tracker & Controls */}
            <div className="flex items-center space-x-2">
              {/* Quiz Score Badge */}
              {totalDeckQuizzes > 0 && (
                <div 
                  onClick={scrollToQuiz}
                  className="cursor-pointer flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-amber-100/80 hover:bg-amber-200/80 border border-amber-300 text-amber-900 font-bold transition-all text-[11px]"
                  title="คลิกเพื่อเลื่อนไปยังคำถามเช็คความเข้าใจ"
                >
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>ตอบถูก {correctDeckQuizzes}/{totalDeckQuizzes}</span>
                </div>
              )}

              {/* Jump to Quiz button */}
              {currentSlide.quiz && (
                <button
                  onClick={scrollToQuiz}
                  className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold transition-all"
                  title="เลื่อนไปยังคำถามเช็คความเข้าใจของสไลด์นี้"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
                  <span className="hidden sm:inline">มีคำถามทบทวน</span>
                </button>
              )}

              <span className="font-bold text-slate-600">
                {currentSlideIndex + 1}/{currentDeck.slides.length}
              </span>

              {/* Auto Play toggle */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-1.5 rounded-lg border transition-all ${
                  isPlaying 
                    ? 'bg-rose-500 text-white border-rose-600' 
                    : 'bg-white text-slate-600 border-amber-200 hover:bg-amber-50'
                }`}
                title={isPlaying ? 'หยุดเล่นอัตโนมัติ' : 'เล่นสไลด์อัตโนมัติ (7 วินาที/หน้า)'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              {/* Teacher notes toggle */}
              <button
                onClick={() => setShowTeacherNotes(!showTeacherNotes)}
                className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg border transition-all font-semibold ${
                  showTeacherNotes
                    ? 'bg-indigo-600 text-white border-indigo-700'
                    : 'bg-white text-indigo-700 border-indigo-200 hover:bg-indigo-50'
                }`}
                title="เปิด/ปิด บันทึกช่วยสอนสำหรับพระอาจารย์"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">บันทึกช่วยสอน</span>
              </button>

              {/* Subject Introduction Button */}
              <button
                onClick={() => setShowIntroModal(true)}
                className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 font-bold transition-all text-xs"
                title="เปิดอ่านบทนำและโครงสร้างหลักสูตรของวิชานี้"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                <span className="hidden md:inline">บทนำวิชา</span>
              </button>

              {/* Fullscreen toggle */}
              <button
                onClick={toggleFullscreen}
                className="p-1.5 rounded-lg bg-white border border-amber-200 text-slate-600 hover:bg-amber-50 transition-all"
                title={isFullscreen ? 'ออกจากโหมดเต็มจอ' : 'โหมดเต็มจอ (สำหรับฉายโปรเจกเตอร์)'}
              >
                {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Slide Progress Bar */}
          <div className="w-full bg-amber-100 h-1.5">
            <div
              className="bg-amber-500 h-1.5 transition-all duration-300"
              style={{
                width: `${((currentSlideIndex + 1) / currentDeck.slides.length) * 100}%`
              }}
            />
          </div>

          {/* Self-Study Mode Progress Ribbon */}
          {studyMode === 'self' && (
            <div className="bg-emerald-50/90 border-b border-emerald-200/80 px-5 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">✓</span>
                <span className="font-bold text-emerald-950">ความก้าวหน้าการเรียนรู้บทนี้:</span>
                <span className="font-semibold text-emerald-800">
                  เข้าใจแล้ว {completedInCurrentDeck} / {currentDeck.slides.length} สไลด์ ({Math.round((completedInCurrentDeck / currentDeck.slides.length) * 100)}%)
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => toggleMarkUnderstood(currentSlideKey)}
                  className={`flex items-center space-x-1.5 px-3 py-1 rounded-xl font-bold transition-all text-xs active:scale-95 ${
                    isCurrentSlideCompleted
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-100'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{isCurrentSlideCompleted ? '✓ เข้าใจหัวข้อนี้แล้ว' : 'กดบันทึก: เข้าใจแล้ว'}</span>
                </button>
              </div>
            </div>
          )}

          {/* SLIDE CANVAS (THE ACTUAL SLIDE BODY) */}
          <div 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="p-4 sm:p-10 space-y-6 sm:space-y-8 min-h-[380px] sm:min-h-[480px] touch-pan-y"
          >
            
            {/* Mobile swipe and indicator banner */}
            <div className="md:hidden flex items-center justify-between text-[11px] text-amber-800 bg-amber-50/80 px-3 py-1.5 rounded-xl border border-amber-200/60 font-semibold">
              <span className="flex items-center gap-1">
                👈 ปัดซ้าย/ขวา เพื่อเปลี่ยนหน้า 👉
              </span>
              <span className="font-bold text-amber-900 bg-white px-2 py-0.5 rounded-md border border-amber-200">
                {currentSlideIndex + 1}/{currentDeck.slides.length}
              </span>
            </div>

            {/* Slide Header */}
            <div className="space-y-2 border-b border-amber-100 pb-4 sm:pb-5">
              <div className="inline-flex items-center space-x-1.5 text-[11px] sm:text-xs font-bold text-amber-700 bg-amber-100/70 px-2.5 sm:px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>นักธรรมชั้นตรี • สื่อการสอนชุดเก็งสอบสนามหลวง</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-800 leading-snug">
                {currentSlide.title}
              </h2>
              {currentSlide.subtitle && (
                <p className="text-xs sm:text-base text-amber-800/80 font-medium">
                  {currentSlide.subtitle}
                </p>
              )}
            </div>

            {/* Slide Bullet Points */}
            <div className="space-y-3.5">
              {currentSlide.bulletPoints.map((point, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <div className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    {idx + 1}
                  </div>
                  <div className="flex-1 font-medium">{point}</div>
                </div>
              ))}
            </div>

            {/* Diagrams / Visual Blocks (if present) */}
            {currentSlide.diagramItems && currentSlide.diagramItems.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-2">
                {currentSlide.diagramItems.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl border border-black/5 shadow-2xs ${item.color}`}
                  >
                    <div className="font-bold text-sm mb-1">{item.label}</div>
                    <div className="text-xs opacity-90 leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Pali Terms Vocabulary Cards (if present) */}
            {currentSlide.paliTerms && currentSlide.paliTerms.length > 0 && (
              <div className="bg-amber-50/50 border border-amber-200/80 rounded-2xl p-4 space-y-2.5">
                <div className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                  <span>คำศัพท์บาลีและคำจำกัดความตามแบบเรียน</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {currentSlide.paliTerms.map((term, idx) => (
                    <div key={idx} className="bg-white border border-amber-200/70 p-3 rounded-xl shadow-2xs">
                      <div className="font-bold text-amber-900 text-xs sm:text-sm">{term.pali}</div>
                      <div className="text-xs text-slate-600 font-semibold">{term.translation}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{term.meaning}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Custom Illustrated Diagram for Nak Dhamma Tri */}
            <div className="pt-2">
              <DhammaIllustration
                id={currentSlide.illustrationId}
                title={currentSlide.title}
                categoryTag={currentSlide.categoryTag}
                keyConcept={currentSlide.keyConcept}
                diagramItems={currentSlide.diagramItems}
                paliTerms={currentSlide.paliTerms}
                bulletPoints={currentSlide.bulletPoints}
              />
            </div>

            {/* Key Concept Callout */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-4 sm:p-5 text-white shadow-md shadow-amber-500/10 flex items-start space-x-3.5">
              <Award className="w-6 h-6 text-yellow-200 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold text-amber-100 uppercase tracking-wider block">
                  สรุปใจความสำคัญ (Key Takeaway)
                </span>
                <p className="text-sm sm:text-base font-bold leading-relaxed text-white mt-0.5">
                  {currentSlide.keyConcept}
                </p>
              </div>
            </div>

            {/* Interactive Quick Quiz Check (ท้ายสไลด์) */}
            {currentSlide.quiz && (
              <div ref={quizRef} className="bg-indigo-50/70 border-2 border-indigo-200/90 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-indigo-900 font-bold text-xs sm:text-sm">
                    <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs">?</span>
                    <span>คำถามเช็คความเข้าใจประจำสไลด์ (Knowledge Checkpoint)</span>
                  </div>
                  {quizSubmitted[currentSlide.id] && (
                    <button
                      onClick={() => handleResetQuiz(currentSlide.id)}
                      className="text-xs text-indigo-600 hover:text-indigo-800 font-bold flex items-center space-x-1 bg-white border border-indigo-200 px-2.5 py-1 rounded-lg shadow-2xs hover:bg-indigo-50 transition-all"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>ลองทำอีกครั้ง</span>
                    </button>
                  )}
                </div>

                <div className="bg-white p-4 rounded-2xl border border-indigo-100 shadow-2xs">
                  <p className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
                    {currentSlide.quiz.question}
                  </p>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentSlide.quiz.options.map((opt, optIdx) => {
                    const isSelected = quizAnswers[currentSlide.id] === optIdx;
                    const isCorrect = optIdx === currentSlide.quiz?.correctIndex;
                    const hasSubmitted = quizSubmitted[currentSlide.id];

                    let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:border-indigo-400 hover:bg-indigo-50/30';
                    if (hasSubmitted) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold ring-2 ring-emerald-400/40';
                      } else if (isSelected && !isCorrect) {
                        btnStyle = 'bg-rose-50 border-rose-400 text-rose-900 font-bold';
                      } else {
                        btnStyle = 'bg-white border-slate-200 text-slate-400 opacity-50';
                      }
                    } else if (isSelected) {
                      btnStyle = 'bg-indigo-50 border-indigo-400 text-indigo-900 font-bold';
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={hasSubmitted}
                        onClick={() => handleAnswerQuiz(currentSlide.id, optIdx)}
                        className={`text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                      >
                        <span className="flex-1 font-medium">{opt}</span>
                        {hasSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />}
                        {hasSubmitted && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-500 shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>

                {/* Answer Feedback Banner */}
                {quizSubmitted[currentSlide.id] && (
                  <div className={`p-4 rounded-2xl border transition-all space-y-2 text-xs sm:text-sm ${
                    quizAnswers[currentSlide.id] === currentSlide.quiz.correctIndex
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                      : 'bg-amber-50 border-amber-300 text-amber-950'
                  }`}>
                    <div className="flex items-center space-x-2 font-bold">
                      {quizAnswers[currentSlide.id] === currentSlide.quiz.correctIndex ? (
                        <>
                          <Sparkles className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-800">ยอดเยี่ยมมาก! ตอบถูกต้อง (+10 แต้มความเข้าใจ) 🎉</span>
                        </>
                      ) : (
                        <>
                          <Lightbulb className="w-4 h-4 text-amber-600" />
                          <span className="text-amber-800">ยังไม่ถูกต้อง ลองศึกษาคำอธิบายด้านล่างนี้นะครับ</span>
                        </>
                      )}
                    </div>
                    <p className="leading-relaxed text-slate-700 bg-white/80 p-3 rounded-xl border border-black/5">
                      <strong className="text-slate-900">เหตุผลและคำอธิบาย: </strong>
                      {currentSlide.quiz.explanation}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Self-Study Interactive Memory Trick Card (เปิดคลิกดูเพื่อเรียนรู้ด้วยตนเอง) */}
            <div className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-4 sm:p-5 space-y-3 shadow-2xs">
              <button
                onClick={() => setRevealedNotes(prev => ({ ...prev, [currentSlide.id]: !prev[currentSlide.id] }))}
                className="w-full flex items-center justify-between text-xs sm:text-sm font-bold text-amber-950 hover:text-amber-800 text-left"
              >
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs">💡</span>
                  <span>เคล็ดลับช่วยจำสำหรับผู้ศึกษาด้วยตนเอง & จุดเก็งข้อสอบสนามหลวง</span>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-amber-200/70 text-amber-900 text-xs font-bold shrink-0 ml-2">
                  {revealedNotes[currentSlide.id] ? 'ซ่อนเคล็ดลับ' : 'คลิกเพื่อดูคำแนะนำ'}
                </span>
              </button>

              {revealedNotes[currentSlide.id] && (
                <div className="pt-3 border-t border-amber-200/70 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                  <p><strong>คำแนะนำในการทบทวน: </strong>{currentSlide.teacherNotes}</p>
                  <div className="p-3 bg-amber-100/80 border border-amber-300/80 rounded-xl font-semibold text-amber-950 flex items-start space-x-2">
                    <Award className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-amber-900">จุดออกสอบ ๑๐๐%: </span>
                      {currentSlide.examTip}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Teacher Notes Drawer (สำหรับโหมดฉายสไลด์ผู้สอน) */}
            {studyMode === 'presenter' && showTeacherNotes && (
              <div className="bg-amber-50/70 border-l-4 border-amber-500 rounded-r-2xl p-5 space-y-3">
                <div className="flex items-center space-x-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span>บันทึกช่วยสอนสำหรับผู้บรรยาย / พระอาจารย์ (Teacher Notes)</span>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong className="text-amber-900">เทคนิคการสอน & จุดที่มักจำสับสน: </strong>
                  {currentSlide.teacherNotes}
                </div>

                <div className="bg-amber-100/80 p-3 rounded-xl border border-amber-300/80 text-xs text-amber-950 font-semibold flex items-start space-x-2">
                  <Award className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-900">จุดออกสอบสนามหลวง ๑๐๐%: </span>
                    {currentSlide.examTip}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Slide Footer Controls Bar */}
          <div className="px-5 py-4 bg-slate-50 border-t border-amber-200/70 flex flex-wrap items-center justify-between gap-4">
            
            {/* Prev button */}
            <button
              onClick={handlePrevSlide}
              disabled={currentSlideIndex === 0}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                currentSlideIndex === 0
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-white hover:bg-amber-50 text-slate-700 border border-slate-300 shadow-2xs active:scale-95'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>สไลด์ก่อนหน้า</span>
            </button>

            {/* Slide thumbnails / dots with completion checkmarks */}
            <div className="flex items-center space-x-1.5 max-w-[280px] sm:max-w-md overflow-x-auto py-1">
              {currentDeck.slides.map((slide, idx) => {
                const sKey = `${currentDeck.id}-${slide.id}`;
                const isDone = !!completedSlides[sKey];
                return (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`relative w-8 h-8 rounded-lg text-xs font-bold transition-all flex items-center justify-center shrink-0 ${
                      idx === currentSlideIndex
                        ? 'bg-amber-500 text-white shadow-xs scale-105'
                        : isDone
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-amber-100/60'
                    }`}
                    title={slide.title}
                  >
                    <span>{idx + 1}</span>
                    {isDone && idx !== currentSlideIndex && (
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[9px] font-bold">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Next and Action button */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => toggleMarkUnderstood(currentSlideKey)}
                className={`hidden sm:flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                  isCurrentSlideCompleted
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-emerald-50 hover:text-emerald-800'
                }`}
                title="คลิกเพื่อบันทึกว่าเข้าใจเนื้อหาหัวข้อนี้แล้ว"
              >
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isCurrentSlideCompleted ? 'บันทึกแล้ว' : 'ติ๊กเข้าใจแล้ว'}</span>
              </button>

              <button
                onClick={handleNextSlide}
                disabled={currentSlideIndex === currentDeck.slides.length - 1}
                className={`flex items-center space-x-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  currentSlideIndex === currentDeck.slides.length - 1
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-amber-500 hover:bg-amber-600 text-white shadow-sm shadow-amber-500/20 active:scale-95'
                }`}
              >
                <span>{currentSlideIndex === currentDeck.slides.length - 1 ? 'จบสไลด์บทนี้' : 'สไลด์ถัดไป'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Floating Mobile Bottom Navigation Bar (Sticky for easy one-hand thumb use) */}
          <div className="md:hidden sticky bottom-3 mx-3 mt-3 z-30 bg-white/95 backdrop-blur-md border border-amber-300 shadow-lg rounded-2xl p-2 flex items-center justify-between text-xs gap-2">
            <button
              onClick={handlePrevSlide}
              disabled={currentSlideIndex === 0}
              className={`px-3 py-2 rounded-xl font-bold flex items-center space-x-1 transition-all ${
                currentSlideIndex === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-95'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>ก่อนหน้า</span>
            </button>

            <div className="flex items-center space-x-2">
              <span className="font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-lg text-xs">
                {currentSlideIndex + 1}/{currentDeck.slides.length}
              </span>
              {studyMode === 'self' && (
                <button
                  onClick={() => toggleMarkUnderstood(currentSlideKey)}
                  className={`p-2 rounded-xl font-bold transition-all active:scale-95 ${
                    isCurrentSlideCompleted ? 'bg-emerald-600 text-white shadow-2xs' : 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                  }`}
                  title="บันทึกว่าเข้าใจแล้ว"
                >
                  <Check className="w-4 h-4" />
                </button>
              )}
            </div>

            <button
              onClick={handleNextSlide}
              disabled={currentSlideIndex === currentDeck.slides.length - 1}
              className={`px-3 py-2 rounded-xl font-bold flex items-center space-x-1 transition-all ${
                currentSlideIndex === currentDeck.slides.length - 1 ? 'text-slate-300 cursor-not-allowed' : 'text-white bg-amber-600 hover:bg-amber-700 shadow-xs active:scale-95'
              }`}
            >
              <span>ถัดไป</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* MODE 2: MINDMAP OVERVIEW TREE */
        /* ========================================================================= */
        <div className="bg-white border border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-amber-100">
            <div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-800">
                ผังมโนทัศน์ภาพรวม (Mindmap Hierarchy)
              </span>
              <h3 className="text-xl font-bold text-slate-800 mt-1">
                {currentDeck.title}
              </h3>
            </div>
            <button
              onClick={() => window.print()}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl border border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold transition-all"
            >
              <Printer className="w-3.5 h-3.5 text-amber-700" />
              <span>พิมพ์ผังเนื้อหา</span>
            </button>
          </div>

          {/* Mindmap tree nodes */}
          <div className="space-y-4">
            {currentDeck.slides.map((slide, sIdx) => (
              <div
                key={slide.id}
                className="p-5 rounded-2xl bg-amber-50/40 border border-amber-200 hover:border-amber-400 transition-all space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-7 h-7 rounded-xl bg-amber-500 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                      {sIdx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-800 text-base">{slide.title}</h4>
                      {slide.subtitle && <p className="text-xs text-slate-500">{slide.subtitle}</p>}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setCurrentSlideIndex(sIdx);
                      setViewMode('slides');
                    }}
                    className="text-xs font-bold text-amber-700 hover:text-amber-800 bg-white border border-amber-200 px-3 py-1.5 rounded-xl shadow-2xs hover:bg-amber-50 transition-all shrink-0"
                  >
                    เปิดสไลด์หน้านี้ &rarr;
                  </button>
                </div>

                {/* Sub branches */}
                <div className="pl-10 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-600">
                  {slide.bulletPoints.map((b, bIdx) => (
                    <div key={bIdx} className="p-2.5 rounded-xl bg-white border border-amber-100/70 shadow-2xs flex items-start space-x-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span className="leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>

                {/* Exam Tip pill */}
                <div className="pl-10 text-[11px] text-amber-900 bg-amber-100/60 p-2.5 rounded-xl border border-amber-200/60 flex items-center space-x-2">
                  <Award className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span><strong>จุดสอบ: </strong>{slide.examTip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subject Introduction Modal */}
      {showIntroModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-fadeIn">
          <div className="bg-white max-w-4xl w-full rounded-3xl max-h-[90vh] overflow-y-auto shadow-2xl space-y-4 p-5 sm:p-6 border border-amber-300">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">
                  บทนำและโครงสร้างหลักสูตร: {currentDeck.subjectName}
                </h3>
              </div>
              <button
                onClick={() => setShowIntroModal(false)}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
              >
                ปิดหน้าต่าง ✕
              </button>
            </div>

            <SubjectIntroductionCard
              subjectId={currentDeck.subjectId}
              defaultExpanded={true}
              onSelectDeck={(deckId) => {
                handleDeckChange(deckId);
                setShowIntroModal(false);
              }}
            />
          </div>
        </div>
      )}

    </div>
  );
};


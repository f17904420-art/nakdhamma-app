'use client';

import React, { useState } from 'react';
import { 
  SUBJECT_INTRODUCTIONS, 
  SubjectIntroduction 
} from '@/lib/subjectIntroductions';
import { 
  BookOpen, 
  Award, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  CheckCircle2, 
  FileText, 
  Layers, 
  HelpCircle, 
  Scroll, 
  Sun, 
  Shield, 
  ShieldCheck, 
  Edit3,
  Download,
  Presentation
} from 'lucide-react';

interface SubjectIntroductionCardProps {
  subjectId: 'dhamma' | 'buddha' | 'ceremony' | 'vinai' | 'kratu' | 'all';
  onSelectDeck?: (deckId: string) => void;
  defaultExpanded?: boolean;
}

const getSubjectIcon = (iconName: string, className: string = 'w-5 h-5') => {
  switch (iconName) {
    case 'Scroll': return <Scroll className={className} />;
    case 'Sun': return <Sun className={className} />;
    case 'Shield': return <Shield className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Edit3': return <Edit3 className={className} />;
    default: return <BookOpen className={className} />;
  }
};

export const SubjectIntroductionCard: React.FC<SubjectIntroductionCardProps> = ({
  subjectId,
  onSelectDeck,
  defaultExpanded = false
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'objectives' | 'blueprint' | 'exam' | 'books'>('overview');
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);

  // If 'all' is selected, show general overview or tabbed list
  const [selectedSubjectKey, setSelectedSubjectKey] = useState<string>(
    subjectId === 'all' ? 'dhamma' : subjectId
  );

  const currentSubject: SubjectIntroduction = 
    SUBJECT_INTRODUCTIONS[subjectId === 'all' ? selectedSubjectKey : subjectId] || 
    SUBJECT_INTRODUCTIONS.dhamma;

  return (
    <div className="bg-white border-2 border-amber-200/90 rounded-3xl shadow-md overflow-hidden transition-all space-y-0">
      
      {/* Top Banner */}
      <div className={`bg-gradient-to-r ${currentSubject.colorScheme.from} ${currentSubject.colorScheme.to} p-5 sm:p-6 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 flex-wrap gap-y-1">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/30">
                {getSubjectIcon(currentSubject.iconName, 'w-3.5 h-3.5')}
                <span>{currentSubject.badge}</span>
              </span>
              <span className="text-xs text-amber-100 font-serif italic">
                {currentSubject.paliName}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight drop-shadow-xs">
              {currentSubject.name}
            </h3>
            <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed max-w-3xl">
              {currentSubject.tagline}
            </p>
          </div>

          {/* Toggle Expand / Collapse Button */}
          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center space-x-1.5 bg-white text-slate-800 hover:bg-amber-50 font-bold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-sm transition-all active:scale-95"
            >
              <span>{isExpanded ? 'ย่อบทนำ' : 'อ่านบทนำและโครงสร้างวิชา'}</span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* If 'all' is selected, provide quick subject switch pills inside banner */}
        {subjectId === 'all' && (
          <div className="pt-4 mt-3 border-t border-white/20 flex flex-wrap gap-1.5">
            {Object.keys(SUBJECT_INTRODUCTIONS).map((key) => {
              const sub = SUBJECT_INTRODUCTIONS[key];
              const isCurr = selectedSubjectKey === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedSubjectKey(key)}
                  className={`text-xs font-bold px-3 py-1 rounded-lg transition-all ${
                    isCurr
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'bg-white/15 text-white hover:bg-white/25'
                  }`}
                >
                  {sub.shortName}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Expandable Content Body */}
      {isExpanded && (
        <div className="p-5 sm:p-7 space-y-6 animate-fadeIn">
          
          {/* Sub Navigation Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 border-b border-slate-100 no-scrollbar text-xs font-bold">
            <button
              onClick={() => setActiveSubTab('overview')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                activeSubTab === 'overview'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>บทนำและที่มาของวิชา</span>
            </button>

            <button
              onClick={() => setActiveSubTab('blueprint')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                activeSubTab === 'blueprint'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>โครงสร้างหัวข้อใหญ่ ({currentSubject.curriculumSections.length} หมวด)</span>
            </button>

            <button
              onClick={() => setActiveSubTab('objectives')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                activeSubTab === 'objectives'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>วัตถุประสงค์การเรียนรู้</span>
            </button>

            <button
              onClick={() => setActiveSubTab('exam')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                activeSubTab === 'exam'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>จุดเน้นออกสอบสนามหลวง</span>
            </button>

            <button
              onClick={() => setActiveSubTab('books')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                activeSubTab === 'books'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>หนังสือและหลักสูตรอ้างอิงตรง</span>
            </button>
          </div>

          {/* TAB 1: บทนำและที่มา (Overview) */}
          {activeSubTab === 'overview' && (
            <div className="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
              {currentSubject.introParagraphs.map((para, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-amber-50/40 p-3.5 rounded-2xl border border-amber-100">
                  <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="flex-1 leading-relaxed">{para}</p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: โครงสร้างหัวข้อใหญ่ (Curriculum Blueprint) */}
          {activeSubTab === 'blueprint' && (
            <div className="space-y-3.5">
              <div className="text-xs text-slate-500 font-semibold mb-2">
                ผังโครงสร้างเนื้อหาแบ่งตามชุดสไลด์ช่วยสอนในหมวด{currentSubject.shortName} (คลิกเพื่อกระโดดเข้าสู่บทเรียนสไลด์นั้นทันที):
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {currentSubject.curriculumSections.map((sec, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border-2 border-slate-200 hover:border-amber-400 bg-slate-50/50 hover:bg-white transition-all space-y-2.5 shadow-2xs group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
                        หมวดที่ {idx + 1}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500">
                        {sec.slideCount} สไลด์
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-800 text-xs sm:text-sm group-hover:text-amber-800 transition-colors">
                      {sec.deckTitle}
                    </h4>

                    {/* Topics bullet tags */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {sec.topics.slice(0, 4).map((top, tIdx) => (
                        <span key={tIdx} className="text-[10px] bg-white border border-slate-200 text-slate-600 px-2 py-0.5 rounded-md">
                          {top}
                        </span>
                      ))}
                      {sec.topics.length > 4 && (
                        <span className="text-[10px] text-amber-700 font-semibold self-center">
                          +{sec.topics.length - 4} หัวข้อ
                        </span>
                      )}
                    </div>

                    {/* Key Pali Terms */}
                    {sec.keyPaliTerms && sec.keyPaliTerms.length > 0 && (
                      <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-200/60 flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-amber-800">บาลีสำคัญ:</span>
                        <span className="font-serif italic text-amber-900">{sec.keyPaliTerms.slice(0, 3).join(', ')}</span>
                      </div>
                    )}

                    {onSelectDeck && (
                      <div className="pt-2 flex justify-end">
                        <button
                          onClick={() => onSelectDeck(sec.deckId)}
                          className="text-xs font-bold text-amber-600 hover:text-amber-800 flex items-center space-x-1 group-hover:underline"
                        >
                          <Presentation className="w-3.5 h-3.5" />
                          <span>เปิดสไลด์หมวดนี้</span>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: วัตถุประสงค์การเรียนรู้ (Learning Objectives) */}
          {activeSubTab === 'objectives' && (
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-700 mb-2">
                เมื่อศึกษา{currentSubject.shortName}ครบถ้วนแล้ว ผู้เรียนจะมีความรู้ความสามารถดังต่อไปนี้:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentSubject.learningObjectives.map((obj, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80 text-xs sm:text-sm text-emerald-950">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{obj}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: จุดเน้นออกสอบสนามหลวง (High-Yield Exam Tips) */}
          {activeSubTab === 'exam' && (
            <div className="space-y-3">
              <div className="text-xs font-bold text-amber-900 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>สรุปจุดออกสอบธรรมสนามหลวงย้อนหลัง ๓๐ ปี ที่พบบ่อยที่สุด:</span>
              </div>
              <div className="space-y-2.5">
                {currentSubject.examHighYieldTips.map((tip, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-950">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-white font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      ★
                    </span>
                    <span className="leading-relaxed font-medium">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: หนังสือและหลักสูตรอ้างอิงตรง (Reference Books) */}
          {activeSubTab === 'books' && (
            <div className="space-y-3.5">
              <div className="text-xs font-bold text-slate-700 mb-2">
                เอกสารและตำราเรียนทางการที่ใช้อ้างอิงเนื้อหาในสไลด์ชุดนี้ (คลิกเพื่อเปิดอ่านไฟล์ฉบับเต็มได้ทันที):
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {currentSubject.referenceBooks.map((book, idx) => (
                  <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2 flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">
                        {book.authorOrPublisher}
                      </div>
                      <h4 className="font-bold text-slate-800 text-sm">
                        {book.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {book.description}
                      </p>
                      <div className="text-[11px] font-semibold text-amber-900 pt-1">
                        ส่วนที่เกี่ยวข้อง: {book.pages}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <a
                        href={book.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-600 hover:text-amber-800 hover:underline"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>เปิดอ่านไฟล์ PDF ต้นฉบับ</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
};

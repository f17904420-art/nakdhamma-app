'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Presentation, 
  BookOpen, 
  Video, 
  ArrowLeft, 
  Sparkles, 
  Download, 
  Layers, 
  Search, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Filter,
  GraduationCap,
  Award,
  Scroll,
  Printer,
  ChevronRight
} from 'lucide-react';
import { TeachingSlideDeck } from '@/components/TeachingSlideDeck';
import { DhammaFlashcards } from '@/components/DhammaFlashcards';
import { DhammaInfographicsGallery } from '@/components/DhammaInfographicsGallery';
import { SubjectIntroductionCard } from '@/components/SubjectIntroductionCard';

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<'slides' | 'introductions' | 'flashcards' | 'infographics' | 'cheatsheets' | 'downloads'>('slides');

  return (
    <div className="space-y-6 sm:space-y-10 pb-16">
      
      {/* Top Hero Banner (Mobile optimized padding & typography) */}
      <section className="relative bg-gradient-to-br from-amber-500 via-orange-400 to-yellow-400 p-5 sm:p-12 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-amber-500/20 text-white">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl space-y-3.5 sm:space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-white shadow-xs">
            <Presentation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-200 shrink-0" />
            <span className="truncate">คลังสื่อการสอนและสไลด์บรรยาย • ธรรมศึกษาและนักธรรมชั้นตรี</span>
          </div>

          <h1 className="text-2xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm">
            สื่อการสอนและสไลด์ช่วยสอน <br className="hidden sm:inline" />
            <span className="text-amber-100 underline decoration-yellow-300 decoration-wavy underline-offset-6 sm:underline-offset-8">
              ธรรมศึกษาและนักธรรมชั้นตรี
            </span>
          </h1>

          <p className="text-amber-50 text-xs sm:text-base leading-relaxed font-medium">
            อิงตามหลักสูตรธรรมศึกษา ชั้นตรี ฉบับปรับปรุง พุทธศักราช ๒๕๕๗ สำนักงานแม่กองธรรมสนามหลวง และหลักสูตรนักธรรมชั้นตรี ครบถ้วนทั้งธรรมวิภาค, เบญจศีลเบญจธรรม/วินัยมุข, พุทธประวัติ (๕ กาล ๑๓ ปริเฉท), ศาสนพิธี และเรียงความแก้กระทู้ธรรม พร้อมระบบสไลด์ฉายในชั้นเรียน ผังมโนทัศน์ แฟลชการ์ด และไฟล์หนังสือเรียนฉบับทางการ
          </p>

          {/* Quick tab shortcuts (Scrollable touch row on mobile) */}
          <div className="flex items-center gap-2 sm:gap-2.5 pt-2 sm:pt-3 overflow-x-auto pb-1.5 -mx-1 px-1 no-scrollbar">
            <button
              onClick={() => setActiveTab('slides')}
              className={`shrink-0 whitespace-nowrap flex items-center space-x-1.5 sm:space-x-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 ${
                activeTab === 'slides'
                  ? 'bg-white text-amber-900 shadow-black/10'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Presentation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 shrink-0" />
              <span>สไลด์ช่วยสอน (๑๖ หมวด ๑๑๙ สไลด์)</span>
            </button>

            <button
              onClick={() => setActiveTab('introductions')}
              className={`shrink-0 whitespace-nowrap flex items-center space-x-1.5 sm:space-x-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 ${
                activeTab === 'introductions'
                  ? 'bg-white text-amber-900 shadow-black/10'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 shrink-0" />
              <span>บทนำ ๕ หมวดวิชา & โครงสร้าง</span>
            </button>

            <button
              onClick={() => setActiveTab('flashcards')}
              className={`shrink-0 whitespace-nowrap flex items-center space-x-1.5 sm:space-x-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 ${
                activeTab === 'flashcards'
                  ? 'bg-white text-amber-900 shadow-black/10'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300 shrink-0" />
              <span>บัตรคำจำแม่น (๘๐ ใบ)</span>
            </button>

            <button
              onClick={() => setActiveTab('infographics')}
              className={`shrink-0 whitespace-nowrap flex items-center space-x-1.5 sm:space-x-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 ${
                activeTab === 'infographics'
                  ? 'bg-white text-amber-900 shadow-black/10'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 shrink-0" />
              <span>คลังผังมโนทัศน์ (๓๑ ผัง)</span>
            </button>

            <button
              onClick={() => setActiveTab('cheatsheets')}
              className={`shrink-0 whitespace-nowrap flex items-center space-x-1.5 sm:space-x-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 ${
                activeTab === 'cheatsheets'
                  ? 'bg-white text-amber-900 shadow-black/10'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 shrink-0" />
              <span>สรุปย่อ ๕ หมวดวิชา</span>
            </button>

            <button
              onClick={() => setActiveTab('downloads')}
              className={`shrink-0 whitespace-nowrap flex items-center space-x-1.5 sm:space-x-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 ${
                activeTab === 'downloads'
                  ? 'bg-white text-amber-900 shadow-black/10'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 shrink-0" />
              <span>หนังสือเรียน & ดาวน์โหลด PDF</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 1: INTERACTIVE SLIDE DECK PLAYER */}
      {/* ========================================================================= */}
      {activeTab === 'slides' && (
        <section className="space-y-4">
          <TeachingSlideDeck />
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 1.5: SUBJECT INTRODUCTIONS & SYLLABUS BLUEPRINT */}
      {/* ========================================================================= */}
      {activeTab === 'introductions' && (
        <section className="space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-amber-200/80">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800">
                บทนำและโครงสร้างหลักสูตร ๕ หมวดวิชาทางการ
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                อิงตามหลักสูตรแม่กองธรรมสนามหลวง ธรรมศึกษาและนักธรรมชั้นตรี
              </p>
            </div>
            <button
              onClick={() => setActiveTab('slides')}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-amber-500 text-white text-xs font-bold hover:bg-amber-600 shadow-xs transition-all self-start sm:self-auto"
            >
              <Presentation className="w-4 h-4" />
              <span>ไปยังสไลด์ช่วยสอน</span>
            </button>
          </div>

          <div className="space-y-6">
            {(['dhamma', 'buddha', 'ceremony', 'vinai', 'kratu'] as const).map((subId) => (
              <SubjectIntroductionCard
                key={subId}
                subjectId={subId}
                defaultExpanded={subId === 'dhamma'}
                onSelectDeck={() => setActiveTab('slides')}
              />
            ))}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION: DHAMMA FLASHCARDS */}
      {/* ========================================================================= */}
      {activeTab === 'flashcards' && (
        <section className="space-y-4">
          <DhammaFlashcards />
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION: INFOGRAPHICS GALLERY */}
      {/* ========================================================================= */}
      {activeTab === 'infographics' && (
        <section className="space-y-4">
          <DhammaInfographicsGallery />
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 2: CHEATSHEETS & 5 SUBJECT SUMMARY CARDS */}
      {/* ========================================================================= */}
      {activeTab === 'cheatsheets' && (
        <section className="space-y-6">
          <div className="bg-white border border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-amber-100 pb-4">
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-800">
                สรุปเนื้อหาหลักสูตรปรับปรุง ๒๕๕๗
              </span>
              <h2 className="text-2xl font-bold text-slate-800 mt-1">
                โครงสร้าง ๕ วิชาหลัก สำหรับสอบธรรมศึกษาและนักธรรมชั้นตรี
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                เจาะลึกแก่นสำคัญของแต่ละวิชาตามหลักสูตรแม่กองธรรมสนามหลวง พร้อมองค์ประกอบที่มักออกสอบ ๑๐๐%
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: ธรรมวิภาค */}
              <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200 hover:border-amber-400 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-200/60 text-amber-900">
                    ๑๐๐ คะแนนเต็ม
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">วิชาที่ ๑: ธรรมวิภาค & คิหิปฏิบัติ (รวมฉบับอุดมศึกษา ๒๕๖๔)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  หลักธรรมตั้งแต่หมวด ๒ ถึงหมวด ๑๐, คิหิปฏิบัติ (จรรยาผู้ครองเรือน) และหลักพัฒนาตนเองระดับอุดมศึกษา
                </p>
                <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-amber-200/60 font-medium">
                  <div>• <strong>หมวด ๒-๔:</strong> สติ-สัมปชัญญะ, หิริ-โอตตัปปะ, ขันติ-โสรัจจะ, บุพการี-กตัญญูกตเวที, พระรัตนตรัย, ไตรสิกขา, อริยสัจ ๔, อิทธิบาท ๔, พรหมวิหาร ๔, ฆราวาสธรรม ๔, สังคหวัตถุ ๔, อธิษฐานธรรม ๔ (ปัญญา สัจจะ จาคะ อุปสมะ)</div>
                  <div>• <strong>หมวด ๕-๑๐:</strong> พละ ๕ (สัทธา วิริยะ สติ สมาธิ ปัญญา), อัปปมัญญา ๔, ขันธ์ ๕, สัปปุริสธรรม ๗, อริยทรัพย์ ๗ (ทรัพย์แท้ภายใน), โลกธรรม ๘, อริยมรรค ๘, บารมี ๑๐, กุศลกรรมบถ ๑๐, บุญกิริยาวัตถุ ๑๐</div>
                  <div>• <strong>คิหิปฏิบัติ:</strong> มิตรแท้ ๔ (๑๖ ลักษณะ), มิตรเทียม ๔, ทิศ ๖, อบายมุข ๖, สมบัติอุบาสก ๕ (ไม่ตื่นมงคลข่าวลือ เชื่อกรรม), มิจฉาวณิชชา ๕, หัวใจเศรษฐี (อุ อา กะ สะ)</div>
                </div>
              </div>

              {/* Card 2: เบญจศีล เบญจธรรม / วินัยมุข */}
              <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-200 hover:border-sky-400 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-sky-200/60 text-sky-900">
                    ๑๐๐ คะแนนเต็ม
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">วิชาที่ ๒: เบญจศีล เบญจธรรม & วินัยมุข เล่ม ๑ (ศีล ๒๒๗)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  หลักศีลธรรมภาคปฏิบัติของธรรมศึกษา (ศีล ๕ และธรรม ๕) พร้อมองค์วินิจฉัย และพระวินัยบัญญัติ ๒๒๗ สิกขาบทของนักธรรม
                </p>
                <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-sky-200/60 font-medium">
                  <div>• <strong>เบญจศีล ๕ (องค์วินิจฉัย):</strong> ปาณาติบาต (๕ องค์), อทินนาทาน (๕ องค์), กาเมสุมิจฉาจาร (๔ องค์/หญิง ๒๐ จำพวก), มุสาวาท (๔ องค์), สุราเมรัย (๔ องค์) พร้อมวิรัติ ๓ (สัมปัตตะ, สมาทาน, สมุจเฉท)</div>
                  <div>• <strong>เบญจธรรม ๕:</strong> เมตตากรุณา (อานิสงส์ ๑๑ ประการ), สัมมาอาชีวะ (เว้นมิจฉาวณิชชา ๕), กามสังวร (สทารสันโดษ/ปติวัตร), สัจจะ ๔ ด้าน, สติสัมปชัญญะ</div>
                  <div>• <strong>วินัยมุข (นักธรรม):</strong> ปาราชิก ๔, สังฆาทิเสส ๑๓ (วุฏฐานวิธี ปริวาส-มานัต-อัพภาน ๒๐ รูป), อนิยต ๒ (ที่ลับตา/ที่ลับหู), นิสสัคคิยปาจิตตีย์ ๓๐ (จีวรวรรค, โกสิยวรรค, ปัตตวรรค), ปาจิตตีย์ ๙๒ (๙ วรรค), ปาฏิเทสนียะ ๔, เสขิยวัตร ๗๕, อธิกรณสมถะ ๗ (ระงับอธิกรณ์ ๔)</div>
                </div>
              </div>

              {/* Card 3: พุทธประวัติ */}
              <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200 hover:border-emerald-400 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-200/60 text-emerald-900">
                    ๑๐๐ คะแนนเต็ม
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">วิชาที่ ๓: พุทธประวัติ (๕ ยุคกาล ๑๓ ปริเฉท & สังคายนา ๓ ครั้ง)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ประวัติของพระบรมศาสดาตามหลักสูตรปรับปรุง พ.ศ. ๒๕๕๗-๒๕๖๔ สัตตมหาสถาน และประวัติการสังคายนาพระไตรปิฎก
                </p>
                <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-emerald-200/60 font-medium">
                  <div>• <strong>ปุริมกาล (๑-๕):</strong> ศากยวงศ์, ประสูติ ณ ลุมพินีวัน, ออกบวชริมแม่น้ำอโนมา, ตรัสรู้ใต้ต้นมหาโพธิ์, เสวยวิมุตติสุข ณ สัตตมหาสถาน ๗ แห่ง (๔๙ วัน เกิดฉัพพรรณรังสี & ตปุสสะ-ภัลลิกะ ปฐมอุบาสกเทววาจิกสรณคมน์), ปฐมเทศนา ธัมมจักกัปปวัตตนสูตร แก่ปัญจวัคคีย์, พระเวฬุวันมหาวิหาร</div>
                  <div>• <strong>ปฐมโพธิกาล (๖-๘):</strong> ส่งพระสาวก ๖๐ รูป, จาตุรงคสันนิบาต วันมาฆบูชา (พระอรหันต์ ๑,๒๕๐ รูป), โปรดพระพุทธบิดา ณ กบิลพัสดุ์, พระอัครสาวก สารีบุตร-โมคคัลลานะ</div>
                  <div>• <strong>มัชฌิม-ปัจฉิม-อปรการ (๙-๑๓):</strong> พุทธกิจ ๔๕ พรรษา, สังเวชนียสถาน ๔ ตำบล, ปรินิพพาน ณ สาลวโนทยาน กุสินารา, วันอัฏฐมีบูชา ถวายพระเพลิง ณ มกุฏพันธนเจดีย์</div>
                  <div>• <strong>การสังคายนา ๓ ครั้ง:</strong> ครั้งที่ ๑ (ถ้ำสัตตบรรณคูหา ราชคฤห์), ครั้งที่ ๒ (วาลิการาม เวสาลี ปราบวัตถุ ๑๐ ประการ), ครั้งที่ ๓ (อโศการาม ปาฏลีบุตร คัมภีร์กถาวัตถุ และสมณทูตสายที่ ๘ พระโสณะและพระอุตตระสู่สุวรรณภูมิ/ไทย)</div>
                </div>
              </div>

              {/* Card 4: เรียงความแก้กระทู้ธรรม */}
              <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-200 hover:border-rose-400 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold">
                    <Scroll className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-rose-200/60 text-rose-900">
                    ๑๐๐ คะแนนเต็ม
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">วิชาที่ ๔: เรียงความแก้กระทู้ธรรม & เกณฑ์สนามหลวง</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  การเขียนบรรยายอธิบายขยายความพุทธศาสนสุภาษิต ๕ หมวด พร้อมกลยุทธ์การทำคะแนนตามเกณฑ์ ๔๐๐ คะแนนสนามหลวง
                </p>
                <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-rose-200/60 font-medium">
                  <div>• <strong>๕ หมวดสุภาษิตหลักสูตรตรี:</strong> ทานวรรค (การให้), ปาปวรรค (ความชั่ว), ปุญญวรรค (บุญกุศล), สติวรรค (สติระลึกได้), สีลวรรค (ศีลความประพฤติ)</div>
                  <div>• <strong>สัดส่วนคะแนน ๑๐๐ เต็ม:</strong> รูปแบบและขนาดยาว ๒ หน้า (๒๐ คะแนน), สุภาษิตเชื่อม ๑ บทพร้อมที่มา (๒๐ คะแนน), เนื้อหาอรรถาธิบายและนิทานชาดก (๔๐ คะแนน), ภาษา ไวยากรณ์ และความสะอาด (๒๐ คะแนน)</div>
                  <div>• <strong>เกณฑ์ตัดสินสนามหลวง ๔๐๐ คะแนน:</strong> ต้องได้คะแนนรวม ๒๘๐ คะแนนขึ้นไป (๗๐%) จึงจะสอบได้ แต่มี <strong>"กฎเหล็ก ๒๕ คะแนน"</strong> ห้ามมีวิชาใดวิชาหนึ่งได้ต่ำกว่า ๒๕ คะแนนเด็ดขาด หากต่ำกว่า ๒๕ ถือว่าสอบตกทันที และต้องเข้าสอบครบทั้ง ๔ วิชา</div>
                </div>
              </div>

              {/* Card 5: ศาสนพิธี ๖ บท */}
              <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-300 hover:border-amber-500 transition-all space-y-3 md:col-span-2">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-200/60 text-amber-900">
                    วิชาศาสนพิธี ๖ บท (ฉบับปรับปรุง ๒๕๕๗)
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">วิชาที่ ๕: ศาสนพิธีและมารยาทชาวพุทธ</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ระเบียบแบบแผนพิธีกรรมทางพระพุทธศาสนา ๔ หมวด และมารยาทชาวพุทธที่ถูกต้องตามแบบแผนของคณะสงฆ์ไทย
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-700 pt-2 border-t border-amber-200/60 font-medium">
                  <div className="p-3 bg-white rounded-xl border border-amber-200/80 space-y-1">
                    <strong className="text-amber-900 block text-xs">๑. เครื่องบูชา & โต๊ะหมู่</strong>
                    <span className="text-slate-600 block text-[11px]">โต๊ะหมู่ ๔, ๕, ๗, ๙ (กระถางธูป ๑ เสมอ, พานพุ่ม, เชิงเทียน, แจกัน), เครื่องทองน้อย vs ธูปเทียนแพ</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-amber-200/80 space-y-1">
                    <strong className="text-amber-900 block text-xs">๒. มารยาทชาวพุทธ</strong>
                    <span className="text-slate-600 block text-[11px]">กราบเบญจางคประดิษฐ์ ชาย (ท่าเทพบุตร) หญิง (ท่าเทพธิดา) ๓ จังหวะ, ไหว้ ๓ ระดับ (พระ, ผู้มีคุณ, คนเสมอกัน)</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-amber-200/80 space-y-1">
                    <strong className="text-amber-900 block text-xs">๓. บุญพิธี & ทานพิธี</strong>
                    <span className="text-slate-600 block text-[11px]">งานมงคล (พระคี่ น้ำมนต์ สายสิญจน์) vs อวมงคล (พระคู่ โยงสายสิญจน์หน้าศพ), สังฆทาน (ทานสงฆ์ส่วนรวม), กฐินทาน</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-amber-200/80 space-y-1">
                    <strong className="text-amber-900 block text-xs">๔. กุศลพิธี & บทอาราธนา</strong>
                    <span className="text-slate-600 block text-[11px]">แสดงตนเป็นพุทธมามกะ, อุโบสถศีล ๘, อาราธนาศีล ๕, อาราธนาพระปริตร, อาราธนาธรรม และหัตถบาส (ไม่เกิน ๑ ศอก)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 3: DOWNLOADS & OFFICIAL CURRICULUM TEXTBOOKS */}
      {/* ========================================================================= */}
      {activeTab === 'downloads' && (
        <section className="space-y-6">
          <div className="bg-white border border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-amber-100 pb-4">
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-800">
                คลังเอกสารและหนังสือเรียนทางการ
              </span>
              <h2 className="text-2xl font-bold text-slate-800 mt-1">
                คลังหนังสือเรียนและคู่มือเตรียมสอบทางการ (ฉบับสมบูรณ์ ๔ เล่มหลัก)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                รวบรวมไฟล์หนังสือเรียนมาตรฐานจากสำนักงานแม่กองธรรมสนามหลวง และคู่มือเตรียมสอบนักธรรมตรีฉบับสมบูรณ์ สามารถดาวน์โหลดไฟล์ PDF ไปศึกษาได้ทันที
              </p>
            </div>

            {/* 4 Official Books Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Book 1: ธศ.ตรี อุดมศึกษา ๒๕๖๔ */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-yellow-500/10 border-2 border-amber-300 shadow-sm flex flex-col sm:flex-row items-center gap-5">
                <div className="w-32 sm:w-40 shrink-0 rounded-2xl overflow-hidden shadow-md border border-amber-300 bg-white p-2 flex items-center justify-center">
                  <div className="text-center space-y-1">
                    <BookOpen className="w-12 h-12 text-amber-600 mx-auto" />
                    <span className="text-[10px] font-bold text-amber-800 block">ฉบับอุดมศึกษา</span>
                    <span className="text-[9px] text-slate-500 block">พ.ศ. ๒๕๖๔</span>
                  </div>
                </div>

                <div className="space-y-2.5 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-600 text-white">
                      แม่กองธรรมสนามหลวง
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                      ๒๔๔ หน้า (37.5 MB)
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                    หนังสือธรรมศึกษา ชั้นตรี ระดับอุดมศึกษาและประชาชนทั่วไป
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    ฉบับปรับปรุง พ.ศ. ๒๕๖๔ เพิ่มเนื้อหาการสังคายนา ๓ ครั้ง, สัตตมหาสถาน ๗ แห่ง, พละ ๕, อริยทรัพย์ ๗, อธิษฐานธรรม ๔ และการประยุกต์ใช้ในวิชาชีพ
                  </p>
                  <a
                    href="/curriculum/tri/หนังสือ-ธศ.ตรี-อุดม-๒๕๖๔.pdf"
                    download="หนังสือธรรมศึกษา_ชั้นตรี_ระดับอุดมศึกษา_๒๕๖๔.pdf"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-md active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>ดาวน์โหลดฉบับอุดมศึกษา (PDF 244 หน้า)</span>
                  </a>
                </div>
              </div>

              {/* Book 2: คู่มือเตรียมสอบนักธรรมตรี ๔๙๘ หน้า */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-500/10 via-blue-500/5 to-indigo-500/10 border-2 border-sky-300 shadow-sm flex flex-col sm:flex-row items-center gap-5">
                <div className="w-32 sm:w-40 shrink-0 rounded-2xl overflow-hidden shadow-md border border-sky-300 bg-white p-2 flex items-center justify-center">
                  <div className="text-center space-y-1">
                    <Award className="w-12 h-12 text-sky-600 mx-auto" />
                    <span className="text-[10px] font-bold text-sky-800 block">คู่มือนักธรรมตรี</span>
                    <span className="text-[9px] text-slate-500 block">ฉบับสมบูรณ์ ๔๙๘ หน้า</span>
                  </div>
                </div>

                <div className="space-y-2.5 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-600 text-white">
                      คู่มือเตรียมสอบ
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                      ๔๙๘ หน้า (29 MB)
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                    คู่มือเตรียมสอบนักธรรมชั้นตรี (ฉบับเจาะลึก ๔ วิชาหลัก)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    เจาะลึกวินัยมุข เล่ม ๑ สิกขาบท ๒๒๗ ข้ออย่างละเอียด (อนิยต ๒, นิสสัคคีย์ ๓๐, ปาจิตตีย์ ๙๒, ปาฏิเทสนียะ ๔, อธิกรณ์ ๔) ธรรมวิภาค นวโกวาท และแบบฟอร์มกระทู้
                  </p>
                  <a
                    href="/curriculum/tri/คู่มือเตรียมสอบนักธรรมตรี-ฉบับสมบูรณ์.pdf"
                    download="คู่มือเตรียมสอบนักธรรมชั้นตรี_ฉบับสมบูรณ์_๔๙๘หน้า.pdf"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all shadow-md active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>ดาวน์โหลดคู่มือนักธรรม (PDF 498 หน้า)</span>
                  </a>
                </div>
              </div>

              {/* Book 3: หลักสูตรธรรมศึกษาชั้นตรี ๒๕๕๗ (ฉบับสมบูรณ์ ๒๖๘ หน้า) */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-green-500/10 border-2 border-emerald-300 shadow-sm flex flex-col sm:flex-row items-center gap-5">
                <div className="w-32 sm:w-40 shrink-0 rounded-2xl overflow-hidden shadow-md border border-emerald-300 bg-white">
                  <img
                    src="/curriculum/tri/ปกธรรมศึกษา ชั้นตรี.jpg"
                    alt="ปกหนังสือเรียน หลักสูตรธรรมศึกษา ชั้นตรี ฉบับปรับปรุง ๒๕๕๗"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="space-y-2.5 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-600 text-white">
                      ฉบับมาตรฐาน พ.ศ. ๒๕๕๗
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      ๒๖๘ หน้า (2.7 MB)
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                    หลักสูตรธรรมศึกษา ชั้นตรี ฉบับปรับปรุง พุทธศักราช ๒๕๕๗
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    จัดพิมพ์โดยมหามกุฏราชวิทยาลัย ครบถ้วนทั้ง ๕ หมวดวิชา: กระทู้ธรรม ๕ วรรค, ธรรมวิภาค & คิหิปฏิบัติ, พุทธประวัติ ๑๓ ปริเฉท, เบญจศีลเบญจธรรม และศาสนพิธี ๖ บท
                  </p>
                  <a
                    href="/curriculum/tri/1-267.pdf"
                    download="หลักสูตรธรรมศึกษา_ชั้นตรี_๒๕๕๗_ฉบับสมบูรณ์.pdf"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>ดาวน์โหลดฉบับมาตรฐาน ๒๕๕๗ (PDF 268 หน้า)</span>
                  </a>
                </div>
              </div>

              {/* Book 4: บทนำ MOU และสารบัญ ๓๔ หน้า */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-rose-500/10 via-pink-500/5 to-orange-500/10 border-2 border-rose-300 shadow-sm flex flex-col sm:flex-row items-center gap-5">
                <div className="w-32 sm:w-40 shrink-0 rounded-2xl overflow-hidden shadow-md border border-rose-300 bg-white p-2 flex items-center justify-center">
                  <div className="text-center space-y-1">
                    <FileText className="w-12 h-12 text-rose-600 mx-auto" />
                    <span className="text-[10px] font-bold text-rose-800 block">บันทึกข้อตกลง</span>
                    <span className="text-[9px] text-slate-500 block">MOU & สารบัญ</span>
                  </div>
                </div>

                <div className="space-y-2.5 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-600 text-white">
                      เอกสารทางการ
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">
                      ๓๔ หน้า (865 KB)
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                    โครงสร้างหลักสูตร บันทึกความร่วมมือ MOU และสารบัญ
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    บันทึกข้อตกลงความร่วมมือการจัดการเรียนการสอนธรรมศึกษาระหว่างคณะสงฆ์กับกระทรวงศึกษาธิการ คำสั่งแม่กองธรรมสนามหลวง และผังโครงสร้างวิชา
                  </p>
                  <a
                    href="/curriculum/tri/1-34.pdf"
                    download="หลักสูตรธรรมศึกษา_ชั้นตรี_บันทึกMOU_สารบัญ.pdf"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-md active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>ดาวน์โหลด MOU & สารบัญ (PDF 34 หน้า)</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Link to Slide Deck */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-900 font-medium">
              <div className="flex items-center space-x-2">
                <Presentation className="w-4 h-4 text-amber-600 shrink-0" />
                <span>ต้องการฉายสไลด์สอนในชั้นเรียน? สามารถเปิดดูระบบสไลด์ ๑๖ หมวด ๑๑๙ สไลด์ได้ทันที</span>
              </div>
              <button
                onClick={() => setActiveTab('slides')}
                className="shrink-0 px-4 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold transition-all shadow-2xs"
              >
                <span>เปิดดูสไลด์ช่วยสอนในระบบ</span>
              </button>
            </div>

          </div>
        </section>
      )}

      {/* Cross links to Quiz & YouTube tutoring */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        <Link
          href="/quiz"
          className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md hover:shadow-lg transition-all flex items-center justify-between group"
        >
          <div className="space-y-1">
            <span className="text-xs text-emerald-100 font-bold block">ฝึกทำข้อสอบจริง</span>
            <h3 className="text-base font-bold">คลังข้อสอบนักธรรมตรี (เลือกตอบพร้อมเฉลย)</h3>
            <p className="text-xs text-emerald-100/90">มีข้อสอบครบทุกวิชา พร้อมจำลองเวลาสอบจริง</p>
          </div>
          <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link
          href="/youtube-tutoring"
          className="p-5 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-md hover:shadow-lg transition-all flex items-center justify-between group"
        >
          <div className="space-y-1">
            <span className="text-xs text-sky-100 font-bold block">วิดีโอติวสนามหลวง</span>
            <h3 className="text-base font-bold">ห้องเรียนวิดีโอติวเก็ง YouTube</h3>
            <p className="text-xs text-sky-100/90">คลิปบรรยายสรุปจากช่องพระอาจารย์และสถาบันชั้นนำ</p>
          </div>
          <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
}

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

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<'slides' | 'flashcards' | 'infographics' | 'cheatsheets' | 'downloads'>('slides');

  return (
    <div className="space-y-6 sm:space-y-10 pb-16">
      
      {/* Top Hero Banner (Mobile optimized padding & typography) */}
      <section className="relative bg-gradient-to-br from-amber-500 via-orange-400 to-yellow-400 p-5 sm:p-12 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-amber-500/20 text-white">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl space-y-3.5 sm:space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-white shadow-xs">
            <Presentation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-200 shrink-0" />
            <span className="truncate">คลังสื่อการสอนและสไลด์บรรยาย • นักธรรมชั้นตรี</span>
          </div>

          <h1 className="text-2xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm">
            สื่อการสอนและสไลด์ช่วยสอน <br className="hidden sm:inline" />
            <span className="text-amber-100 underline decoration-yellow-300 decoration-wavy underline-offset-6 sm:underline-offset-8">
              นักธรรมชั้นตรี
            </span>
          </h1>

          <p className="text-amber-50 text-xs sm:text-base leading-relaxed font-medium">
            คัดสรรและจัดทำขึ้นจากหลักสูตรและคัมภีร์มาตรฐานแม่กองธรรมสนามหลวง แบ่งหมวดหมู่ ๔ วิชาหลักอย่างละเอียด พร้อมระบบสไลด์ฉายในชั้นเรียน ผังมโนทัศน์ (Mindmap) บันทึกช่วยสอนสำหรับพระอาจารย์ และเก็งจุดออกสอบ ๑๐๐%
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
              <span>สไลด์ช่วยสอน (๑๐ บท)</span>
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
              <span>บัตรคำจำแม่น (Flashcards)</span>
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
              <span>คลังผังมโนทัศน์ (Gallery)</span>
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
              <span>สรุปย่อ ๔ หมวดวิชา</span>
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
              <span>เอกสารดาวน์โหลด</span>
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
      {/* SECTION 2: CHEATSHEETS & 4 SUBJECT SUMMARY CARDS */}
      {/* ========================================================================= */}
      {activeTab === 'cheatsheets' && (
        <section className="space-y-6">
          <div className="bg-white border border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-amber-100 pb-4">
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-800">
                สรุปเนื้อหาหลักสูตร
              </span>
              <h2 className="text-2xl font-bold text-slate-800 mt-1">
                โครงสร้าง ๔ วิชาหลัก สำหรับสอบนักธรรมชั้นตรี สนามหลวง
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                เจาะลึกแก่นสำคัญของแต่ละวิชา พร้อมเกณฑ์การให้คะแนนและสถิติข้อสอบ
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
                <h3 className="text-lg font-bold text-slate-800">วิชาที่ ๑: ธรรมวิภาค (นวโกวาท)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  รวบรวมหลักธรรมตั้งแต่หมวด ๒ ถึงหมวด ๔ และคิหิปฏิบัติ (จรรยาผู้ครองเรือน) ของสมเด็จพระมหาสมณเจ้า กรมพระยาวชิรญาณวโรรส
                </p>
                <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-amber-200/60 font-medium">
                  <div>• <strong>หมวด ๒:</strong> สติ-สัมปชัญญะ, หิริ-โอตตัปปะ, ขันติ-โสรัจจะ, บุพการี-กตัญญูกตเวที</div>
                  <div>• <strong>หมวด ๓:</strong> พระรัตนตรัย, ไตรสิกขา (ศีล สมาธิ ปัญญา), โอวาทปาติโมกข์ ๓, อกุศลมูล ๓</div>
                  <div>• <strong>หมวด ๔:</strong> อิทธิบาท ๔, พรหมวิหาร ๔, อริยสัจ ๔, ฆราวาสธรรม ๔, สังคหวัตถุ ๔</div>
                  <div>• <strong>คิหิปฏิบัติ:</strong> มิตรแท้ ๔, มิตรเทียม ๔, ทิศ ๖, อบายมุข ๔ และ ๖</div>
                </div>
              </div>

              {/* Card 2: พุทธประวัติ */}
              <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200 hover:border-emerald-400 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-200/60 text-emerald-900">
                    ๑๐๐ คะแนนเต็ม
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">วิชาที่ ๒: พุทธประวัติและศาสนพิธี</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ประวัติของพระบรมศาสดาตั้งแต่กำเนิดในชมพูทวีป การแสวงหาโมกขธรรม การประกาศพระศาสนา จนถึงปรินิพพาน และระเบียบพิธีสงฆ์
                </p>
                <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-emerald-200/60 font-medium">
                  <div>• <strong>ปริเฉท ๑-๒:</strong> ศากยวงศ์, ประสูติ ณ ลุมพินีวัน, เสด็จออกบวชริมฝั่งแม่น้ำอโนมา, ตรัสรู้ใต้ต้นพระศรีมหาโพธิ์</div>
                  <div>• <strong>ปริเฉท ๓:</strong> ปฐมเทศนา ธัมมจักกัปปวัตตนสูตร แก่ปัญจวัคคีย์ พระรัตนตรัยครบองค์ ๓</div>
                  <div>• <strong>ปริเฉท ๔-๖:</strong> ส่งสาวก ๖๐ รูป, โปรดชฎิล ๓ พี่น้อง, พระอัครสาวก, ดับขันธปรินิพพาน ณ กุสินารา</div>
                  <div>• <strong>ศาสนพิธี:</strong> วันสำคัญ ๔ วัน (มาฆะ, วิสาขะ, อาสาฬหะ, อัฏฐมี), พิธีทำบุญเลี้ยงพระ</div>
                </div>
              </div>

              {/* Card 3: วินัยมุข */}
              <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-200 hover:border-sky-400 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-sky-200/60 text-sky-900">
                    ๑๐๐ คะแนนเต็ม
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">วิชาที่ ๓: วินัยมุข เล่ม ๑ (ศีล ๒๒๗)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ข้อห้ามและข้ออนุญาตตามพระวินัยบัญญัติในพระปาติโมกข์ พร้อมกระบวนการไต่สวนและการออกจากอาบัติ
                </p>
                <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-sky-200/60 font-medium">
                  <div>• <strong>ปาราชิก ๔:</strong> ขาดจากภิกษุทันที (เสพเมถุน, ขโมยของ ๕ มาสก, ฆ่ามนุษย์, อวดอุตตริมนุสสธรรม)</div>
                  <div>• <strong>สังฆาทิเสส ๑๓:</strong> อาบัติหนักที่ต้องอยู่กรรม (ปริวาส-มานัต-อัพภาน โดยสงฆ์ ๒๐ รูป)</div>
                  <div>• <strong>นิสสัคคิยปาจิตตีย์ ๓๐:</strong> การเก็บผ้า จีวร บาตรเกินกำหนด ต้องสละของก่อนปลงอาบัติ</div>
                  <div>• <strong>เสขิยวัตร ๗๕:</strong> มารยาท ๔ หมวด (สารูป ๒๖, โภชน ๓๐, เทศนา ๑๖, ปกิณณกะ ๓) ล่วงละเมิดเป็นทุกกฏ</div>
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
                <h3 className="text-lg font-bold text-slate-800">วิชาที่ ๔: เรียงความแก้กระทู้ธรรม</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  การเขียนบรรยายอธิบายขยายความพุทธศาสนสุภาษิตบทตั้ง เชื่อมโยงกับสุภาษิตบทที่ ๒ อย่างมีแบบแผนและถูกต้องตามระเบียบ
                </p>
                <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-rose-200/60 font-medium">
                  <div>• <strong>ความยาวบังคับ:</strong> ต้องเขียนไม่น้อยกว่า ๒ หน้ากระดาษพิมพ์ขึ้นไป (เขียนไม่ถึงปรับตกทันที)</div>
                  <div>• <strong>สุภาษิตเชื่อม:</strong> นักธรรมชั้นตรีกำหนดให้มีสุภาษิตเชื่อม ๑ บท ที่มีความหมายสอดคล้องกับบทตั้ง</div>
                  <div>• <strong>โครงสร้าง ๔ ขั้น:</strong> คำนำ (นะโม+กระทู้ตั้ง) &rarr; เนื้อเรื่อง &rarr; สุภาษิตเชื่อม &rarr; บทสรุป</div>
                  <div>• <strong>ระเบียบสนามหลวง:</strong> ห้ามสะกดผิด, ห้ามลบคำผิดเลอะเทอะ, ห้ามระบุชื่อวัดหรือชื่อตนเอง</div>
                </div>
              </div>

              {/* Card 5: ศาสนพิธีและระเบียบสงฆ์ */}
              <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-300 hover:border-amber-500 transition-all space-y-3 md:col-span-2">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-200/60 text-amber-900">
                    วิชาประกอบสำคัญ (รวมในพุทธประวัติ)
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">วิชาประกอบ: ศาสนพิธีและระเบียบปฏิบัติ</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ระเบียบแบบแผนพิธีกรรมทางพระพุทธศาสนา ๔ หมวด สำหรับพระภิกษุสามเณรและพุทธศาสนิกชนที่ออกสอบทุกปี
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-700 pt-2 border-t border-amber-200/60 font-medium">
                  <div className="p-2.5 bg-white rounded-xl border border-amber-200/80">
                    <strong className="text-amber-900 block mb-0.5">๑. กุศลพิธี</strong>
                    แสดงตนเป็นพุทธมามกะ, พิธีรักษาอุโบสถศีล ๘ ในวันพระ
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-amber-200/80">
                    <strong className="text-amber-900 block mb-0.5">๒. บุญพิธี</strong>
                    งานมงคล (พระคี่ เวียนขวา มีน้ำมนต์) vs งานอวมงคล (พระคู่ โยงศพ)
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-amber-200/80">
                    <strong className="text-amber-900 block mb-0.5">๓. ทานพิธี</strong>
                    ถวายสังฆทาน, กฐินทาน (กาลทาน ๑ เดือน มีพระ ๕ รูป), ผ้าป่า
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-amber-200/80">
                    <strong className="text-amber-900 block mb-0.5">๔. ปกิณณกพิธี</strong>
                    หัตถบาส (ไม่เกิน ๑ ศอก), อาราธนาศีล/ปริตร/ธรรม, ยะถา-สัพพี
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 3: DOWNLOADS & EXTERNAL TEACHING AIDS */}
      {/* ========================================================================= */}
      {activeTab === 'downloads' && (
        <section className="space-y-6">
          <div className="bg-white border border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-amber-100 pb-4">
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-800">
                คลังสื่อเอกสารและดาวน์โหลด
              </span>
              <h2 className="text-2xl font-bold text-slate-800 mt-1">
                เอกสารประกอบการสอน สไลด์บรรยาย และแบบฝึกหัดนักธรรมตรี
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                รวบรวมแหล่งดาวน์โหลดคัมภีร์ทางการจากสำนักงานแม่กองธรรมสนามหลวง และสื่อประกอบการสอน
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-amber-50/40 border border-amber-200 p-5 rounded-2xl space-y-3 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-3">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base">หนังสือเรียน นวโกวาท (ฉบับสนามหลวง)</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    หนังสือเรียนมาตรฐานพระราชนิพนธ์ในสมเด็จพระมหาสมณเจ้า กรมพระยาวชิรญาณวโรรส รวมหมวดธรรมและวินัยบัญญัติ
                  </p>
                </div>
                <a
                  href="https://www.google.com/search?q=นวโกวาท+pdf+แม่กองธรรมสนามหลวง"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl bg-white border border-amber-200 text-amber-800 hover:bg-amber-100 text-xs font-bold transition-all shadow-2xs"
                >
                  <span>ค้นหาไฟล์ดาวน์โหลด PDF</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="bg-emerald-50/40 border border-emerald-200 p-5 rounded-2xl space-y-3 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center mb-3">
                    <Presentation className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base">สไลด์สรุปพุทธประวัติ ปริเฉท ๑-๖</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    ชุดแผนภูมิภาพไทม์ไลน์เหตุการณ์สำคัญ พรรษาสำคัญ และวันสำคัญทางพระพุทธศาสนา
                  </p>
                </div>
                <a
                  href="https://www.google.com/search?q=พุทธประวัติ+นักธรรมตรี+สไลด์+สรุป"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl bg-white border border-emerald-200 text-emerald-800 hover:bg-emerald-100 text-xs font-bold transition-all shadow-2xs"
                >
                  <span>ค้นหาสไลด์บรรยายออนไลน์</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="bg-rose-50/40 border border-rose-200 p-5 rounded-2xl space-y-3 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-700 flex items-center justify-center mb-3">
                    <Scroll className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base">คู่มือและตัวอย่างเขียนกระทู้ธรรม ๑๐๐ เต็ม</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    ตัวอย่างบทความกระทู้ธรรมสนามหลวงที่ได้รับคะแนนเต็ม ๑๐๐ พร้อมคำอธิบายจุดเชื่อมสุภาษิต
                  </p>
                </div>
                <Link
                  href="/sermon-guide"
                  className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl bg-white border border-rose-200 text-rose-800 hover:bg-rose-100 text-xs font-bold transition-all shadow-2xs"
                >
                  <span>เปิดคู่มือเขียนกระทู้ในแอป</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

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

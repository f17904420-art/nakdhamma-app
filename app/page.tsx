'use client';

import React from 'react';
import Link from 'next/link';
import { Award, BookOpen, Video, Scroll, ChevronRight, Sparkles, Star, ShieldCheck } from 'lucide-react';
import { QUIZ_QUESTIONS } from '@/lib/quizData';
import { youtubeTutorials } from '@/lib/youtubeData';
import { VideoCard } from '@/components/VideoCard';

export default function Home() {
  const triCount = QUIZ_QUESTIONS.filter((q) => q.grade === 'ตรี').length;
  const thoCount = QUIZ_QUESTIONS.filter((q) => q.grade === 'โท').length;
  const ekCount = QUIZ_QUESTIONS.filter((q) => q.grade === 'เอก').length;

  return (
    <div className="space-y-12 pb-8">
      
      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-br from-amber-500 via-orange-400 to-yellow-400 p-8 sm:p-12 rounded-3xl overflow-hidden shadow-xl shadow-amber-500/20 text-white">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl space-y-6 relative z-10">
          
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-xs">
            <Sparkles className="w-4 h-4 text-yellow-200" />
            <span>แพลตฟอร์มทบทวนความรู้สนามหลวง ยุคใหม่ พ.ศ. 2569</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm">
            เรียนรู้ ทบทวน และเก็งข้อสอบ <br />
            <span className="text-amber-100 underline decoration-yellow-300 decoration-wavy underline-offset-8">
              นักธรรม ตรี - โท - เอก
            </span> ออนไลน์
          </h1>

          <p className="text-amber-50 text-sm sm:text-base leading-relaxed font-medium">
            เรียนสนุก เข้าใจง่าย รวมคลังข้อสอบเลือกตอบพร้อมเฉลยละเอียดอ้างอิงพระไตรปิฎก 
            คลังวิดีโอติวสนามหลวงจาก YouTube และเครื่องมือช่วยจัดโครงสร้างการนำธรรมะไปเทศน์สอน 4 ขั้นตอน
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/quiz"
              className="flex items-center space-x-2 bg-white hover:bg-amber-50 text-amber-900 font-bold px-6 py-3.5 rounded-2xl transition-all shadow-lg shadow-black/10 active:scale-95 text-sm"
            >
              <Award className="w-5 h-5 text-amber-600" />
              <span>เริ่มทำแบบทดสอบสนามหลวง</span>
              <ChevronRight className="w-4 h-4 text-amber-600" />
            </Link>

            <Link
              href="/sermon-guide"
              className="flex items-center space-x-2 bg-amber-600/40 hover:bg-amber-600/60 text-white border border-white/40 backdrop-blur-sm px-6 py-3.5 rounded-2xl transition-all text-sm font-bold"
            >
              <Scroll className="w-5 h-5 text-yellow-200" />
              <span>คู่มือการจัดโครงสร้างเทศน์</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Grade Selection Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">เลือกระดับชั้นเรียนนักธรรม</h2>
            <p className="text-xs text-slate-500">เข้าสู่คลังข้อสอบและบทเรียนตามระดับที่ต้องการสอบ</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* นักธรรมชั้นตรี */}
          <div className="bg-white p-6 rounded-3xl border border-sky-200/80 shadow-sm hover:shadow-xl hover:border-sky-300 flex flex-col justify-between space-y-6 group transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-sky-600 font-bold uppercase tracking-wider">ระดับชั้นเริ่มต้น</span>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
                  นักธรรมชั้นตรี
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                ศึกษาธรรมวิภาค พุทธประวัติ วินัยมุข เล่ม 1 และการแต่งเรียงความแก้กระทู้ธรรมชั้นตรี
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono font-semibold">{triCount} คลังข้อสอบ</span>
              <Link
                href="/quiz?grade=ตรี"
                className="flex items-center space-x-1 text-sky-600 font-bold text-xs hover:underline"
              >
                <span>เริ่มสอบชั้นตรี</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* นักธรรมชั้นโท */}
          <div className="bg-white p-6 rounded-3xl border border-amber-200/80 shadow-sm hover:shadow-xl hover:border-amber-300 flex flex-col justify-between space-y-6 group transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-amber-600 font-bold uppercase tracking-wider">ระดับชั้นกลาง</span>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                  นักธรรมชั้นโท
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                ศึกษาธรรมวิภาคชั้นโท อริยสัจ 4 อนุพุพพิกถา วินัยมุข เล่ม 2 และสิขาบทปาติโมกข์
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono font-semibold">{thoCount} คลังข้อสอบ</span>
              <Link
                href="/quiz?grade=โท"
                className="flex items-center space-x-1 text-amber-600 font-bold text-xs hover:underline"
              >
                <span>เริ่มสอบชั้นโท</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* นักธรรมชั้นเอก */}
          <div className="bg-white p-6 rounded-3xl border border-rose-200/80 shadow-sm hover:shadow-xl hover:border-rose-300 flex flex-col justify-between space-y-6 group transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-rose-600 font-bold uppercase tracking-wider">ระดับชั้นสูง</span>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-rose-600 transition-colors">
                  นักธรรมชั้นเอก
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                ศึกษาเจาะลึกวิปัสสนาญาณ 9 โพธิปักขิยธรรม 37 วินัยมุข เล่ม 3 และพระอภิธรรมวิภาค
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono font-semibold">{ekCount} คลังข้อสอบ</span>
              <Link
                href="/quiz?grade=เอก"
                className="flex items-center space-x-1 text-rose-600 font-bold text-xs hover:underline"
              >
                <span>เริ่มสอบชั้นเอก</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* YouTube Tutoring Spotlight */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center space-x-2">
              <Video className="w-6 h-6 text-rose-500" />
              <span>วิดีโอติวเก็งสนามหลวงยอดนิยม</span>
            </h2>
            <p className="text-xs text-slate-500">คัดสรรคลิปวิดีโอสรุปเนื้อหาจากอาจารย์ผู้เชี่ยวชาญ</p>
          </div>
          <Link
            href="/youtube-tutoring"
            className="text-xs text-amber-600 font-bold hover:underline flex items-center space-x-1"
          >
            <span>ดูวิดีโอทั้งหมด</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {youtubeTutorials.slice(0, 2).map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      {/* Sermon Builder Callout */}
      <section className="bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-xl shadow-amber-500/15">
        <div className="space-y-2 text-center md:text-left">
          <span className="px-3 py-1 bg-white/20 text-white font-bold rounded-full text-xs backdrop-blur-md">
            สำหรับพระภิกษุ สามเณร และนักแสดงธรรม
          </span>
          <h2 className="text-2xl font-bold text-white">
            แนะนำโครงสร้างการนำธรรมะไปเทศน์สอน 4 ขั้นตอน
          </h2>
          <p className="text-xs text-amber-50 max-w-xl leading-relaxed">
            ออกแบบเรียงลำดับกัณฑ์เทศน์ ตั้งแต่นะโม ภาษิตบาลี การยกนิทานชาดก การอรรถาธิบาย และบทสรุปคติธรรม พร้อมคัดลอกร่างไปใช้งานได้ทันที
          </p>
        </div>

        <Link
          href="/sermon-guide"
          className="bg-white text-amber-900 font-bold px-6 py-3 rounded-2xl text-sm transition-all shadow-md hover:bg-amber-50 active:scale-95 shrink-0"
        >
          เปิดเครื่องมือจัดโครงสร้างเทศน์
        </Link>
      </section>

    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Video, Search, BookOpen, ExternalLink } from 'lucide-react';
import { youtubeTutorials, YOUTUBE_CHANNELS } from '@/lib/youtubeData';
import { VideoCard } from '@/components/VideoCard';

const ALL_GRADES = ['ทั้งหมด', 'นักธรรมชั้นตรี', 'นักธรรมชั้นโท', 'นักธรรมชั้นเอก'] as const;
const ALL_SUBJECTS = ['ทั้งหมด', 'กระทู้ธรรม', 'ธรรมวิภาค', 'พุทธประวัติ', 'วินัยมุข', 'บาลีสนามหลวง'] as const;

type GradeFilter = typeof ALL_GRADES[number];
type SubjectFilter = typeof ALL_SUBJECTS[number];

export default function YoutubeTutoringPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<GradeFilter>('ทั้งหมด');
  const [selectedSubject, setSelectedSubject] = useState<SubjectFilter>('ทั้งหมด');
  const [selectedChannel, setSelectedChannel] = useState<string>('ทั้งหมด');

  const filteredVideos = youtubeTutorials.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.summary.join(' ').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGrade = selectedGrade === 'ทั้งหมด' || video.grade === selectedGrade;
    const matchesSubject = selectedSubject === 'ทั้งหมด' || video.subject === selectedSubject;
    const matchesChannel = selectedChannel === 'ทั้งหมด' || video.channelHandle === selectedChannel;

    return matchesSearch && matchesGrade && matchesSubject && matchesChannel;
  });

  const isFiltered = searchTerm || selectedGrade !== 'ทั้งหมด' || selectedSubject !== 'ทั้งหมด' || selectedChannel !== 'ทั้งหมด';

  return (
    <div className="space-y-8 pb-8">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-rose-100 border border-rose-300 px-4 py-1.5 rounded-full text-xs text-rose-900 font-bold">
          <Video className="w-4 h-4 text-rose-600" />
          <span>คลังวิดีโอติวเก็งข้อสอบสนามหลวงจาก YouTube</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-800">
          ห้องเรียนติวเข้มวิดีโอนักธรรม
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          คัดสรรคลิปวิดีโอสอนธรรมะ พุทธประวัติ วินัย บาลีสนามหลวง จากช่อง YouTube ชั้นนำ
        </p>

        {/* Source Credit Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {YOUTUBE_CHANNELS.map((ch) => (
            <a
              key={ch.handle}
              href={ch.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 bg-amber-50 border border-amber-300 px-3 py-1.5 rounded-xl text-xs hover:bg-amber-100 transition-colors"
            >
              <span className="font-bold text-amber-800">{ch.displayName}</span>
              <span className="text-slate-400 text-[10px]">{ch.handle}</span>
              <ExternalLink className="w-3 h-3 text-amber-600" />
            </a>
          ))}
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-white p-5 rounded-3xl border border-amber-200 shadow-md space-y-5">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
          <input
            type="text"
            placeholder="ค้นหาชื่อวิดีโอ หรือคีย์เวิร์ดในสรุปเนื้อหา..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none"
          />
        </div>

        {/* Channel Filter — primary */}
        <div className="space-y-2">
          <p className="text-xs text-slate-700 font-bold">📺 กรองตามช่อง YouTube:</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedChannel('ทั้งหมด')}
              className={`px-4 py-2 rounded-xl text-xs font-bold border-2 transition-all ${
                selectedChannel === 'ทั้งหมด'
                  ? 'bg-slate-800 text-white border-slate-800'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
              }`}
            >
              ทุกช่อง ({youtubeTutorials.length} คลิป)
            </button>

            {YOUTUBE_CHANNELS.map((ch) => {
              const count = youtubeTutorials.filter((v) => v.channelHandle === ch.handle).length;
              const isSelected = selectedChannel === ch.handle;
              const colorMap: Record<string, string> = {
                '@PRAVITCHO': isSelected ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-amber-700 border-amber-300 hover:border-amber-500 hover:bg-amber-50',
                '@chatchawan_jankhoon': isSelected ? 'bg-sky-500 text-white border-sky-500' : 'bg-white text-sky-700 border-sky-300 hover:border-sky-500 hover:bg-sky-50',
              };
              return (
                <button
                  key={ch.handle}
                  onClick={() => setSelectedChannel(ch.handle)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border-2 transition-all flex items-center space-x-1.5 ${colorMap[ch.handle]}`}
                >
                  <span>{ch.displayName}</span>
                  <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${isSelected ? 'bg-white/20' : 'bg-slate-100'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grade + Subject Filter */}
        <div className="flex flex-wrap gap-4 pt-3 border-t border-slate-100">
          
          <div className="flex items-center space-x-2 flex-wrap gap-y-2">
            <span className="text-xs text-amber-800 font-bold">ระดับชั้น:</span>
            {ALL_GRADES.map((grade) => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedGrade === grade
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-amber-50'
                }`}
              >
                {grade === 'ทั้งหมด' ? 'ทั้งหมด' : grade.replace('นักธรรม', '')}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 flex-wrap gap-y-2">
            <span className="text-xs text-slate-500 font-bold">หมวดวิชา:</span>
            {ALL_SUBJECTS.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedSubject === sub
                    ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold'
                    : 'text-slate-500 hover:text-amber-700'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

        </div>

        {/* Active Filters summary + Clear */}
        {isFiltered && (
          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            <p className="text-xs text-slate-500">
              แสดง <span className="font-bold text-amber-700">{filteredVideos.length}</span> จาก {youtubeTutorials.length} คลิป
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedGrade('ทั้งหมด');
                setSelectedSubject('ทั้งหมด');
                setSelectedChannel('ทั้งหมด');
              }}
              className="text-xs font-bold text-rose-600 hover:underline"
            >
              ล้างตัวกรองทั้งหมด ×
            </button>
          </div>
        )}
      </div>

      {/* Videos Grid */}
      {filteredVideos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="bg-white p-12 rounded-3xl text-center space-y-4 border border-amber-200 shadow-sm">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <p className="text-slate-500 text-sm">ไม่พบวิดีโอในเงื่อนไขที่คุณเลือก</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedGrade('ทั้งหมด');
              setSelectedSubject('ทั้งหมด');
              setSelectedChannel('ทั้งหมด');
            }}
            className="px-4 py-2 bg-amber-100 text-amber-900 border border-amber-300 rounded-xl text-xs font-bold hover:bg-amber-200"
          >
            ล้างคำค้นหาและตัวกรอง
          </button>
        </div>
      )}

    </div>
  );
}
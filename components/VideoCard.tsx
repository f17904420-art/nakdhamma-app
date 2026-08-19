'use client';

import React, { useState } from 'react';
import { Play, Bookmark, Clock, ExternalLink, CheckCircle2, Share2, Check } from 'lucide-react';
import { YoutubeVideo, extractYoutubeId } from '@/lib/youtubeData';

interface VideoCardProps {
  video: YoutubeVideo;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  const videoId = extractYoutubeId(video.youtubeUrl);
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null;

  // Grade → color mapping
  const gradeColors: Record<string, string> = {
    'นักธรรมชั้นตรี': 'bg-sky-500 text-white',
    'นักธรรมชั้นโท': 'bg-amber-500 text-white',
    'นักธรรมชั้นเอก': 'bg-rose-500 text-white',
  };

  const subjectColors: Record<string, string> = {
    'กระทู้ธรรม': 'bg-purple-100 text-purple-800',
    'ธรรมวิภาค': 'bg-amber-100 text-amber-800',
    'พุทธประวัติ': 'bg-sky-100 text-sky-800',
    'วินัยมุข': 'bg-emerald-100 text-emerald-800',
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(video.youtubeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-amber-200/80 shadow-md hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col h-full group">
      
      {/* Video Thumbnail / Embed */}
      <div className="relative aspect-video bg-slate-100 overflow-hidden">
        {isPlaying && videoId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10" />

            {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80';
                }}
              />
            ) : (
              /* No video ID — link-only card */
              <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Play className="w-6 h-6 text-amber-700" />
                  </div>
                  <p className="text-xs text-amber-800 font-semibold px-4">คลิกเพื่อรับชมบน YouTube</p>
                </div>
              </div>
            )}

            {/* Grade Badge */}
            <div className="absolute top-3 left-3 z-20">
              <span className={`px-2.5 py-1 font-bold rounded-lg text-xs shadow-md ${gradeColors[video.grade] ?? 'bg-slate-600 text-white'}`}>
                {video.grade.replace('นักธรรม', '')}
              </span>
            </div>

            {/* Subject Badge */}
            <div className="absolute top-3 right-3 z-20">
              <span className={`px-2.5 py-1 font-bold rounded-lg text-xs shadow-xs ${subjectColors[video.subject] ?? 'bg-slate-100 text-slate-700'}`}>
                {video.subject}
              </span>
            </div>

            {/* Play Button Overlay */}
            {videoId ? (
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 z-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                aria-label="เล่นวิดีโอ"
              >
                <div className="w-14 h-14 bg-gradient-to-tr from-amber-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/40 text-white">
                  <Play className="w-7 h-7 fill-white ml-1" />
                </div>
              </button>
            ) : (
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                aria-label="เปิด YouTube"
              >
                <div className="w-14 h-14 bg-rose-600 rounded-full flex items-center justify-center shadow-lg shadow-rose-500/40 text-white">
                  <Play className="w-7 h-7 fill-white ml-1" />
                </div>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Video Info */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-3">
          {/* Channel + Source */}
          <div className="flex items-center justify-between text-xs">
            <a
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-700 font-bold hover:underline flex items-center space-x-1 truncate"
            >
              <span className="truncate">{video.channelName}</span>
              <ExternalLink className="w-3 h-3 shrink-0" />
            </a>
            <span className={`ml-2 shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
              video.channelHandle === '@PRAVITCHO'
                ? 'bg-amber-100 text-amber-700'
                : 'bg-sky-100 text-sky-700'
            }`}>
              {video.channelHandle}
            </span>
          </div>

          <h3 className="font-bold text-slate-800 text-sm sm:text-base line-clamp-2 group-hover:text-amber-600 transition-colors leading-snug">
            {video.title}
          </h3>

          {/* Key Takeaways */}
          <div className="space-y-1.5">
            <p className="text-[10px] text-amber-700 font-bold uppercase tracking-wider">📌 Key Takeaways</p>
            <ul className="space-y-1">
              {video.summary.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs text-slate-600 leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <a
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-rose-700 hover:text-rose-600 flex items-center space-x-1 underline"
          >
            <Play className="w-3.5 h-3.5 fill-rose-600" />
            <span>เปิดใน YouTube</span>
          </a>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-amber-600 hover:bg-amber-100 transition-colors"
              title="คัดลอกลิงก์วิดีโอ"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-xl transition-colors ${
                isBookmarked ? 'text-amber-600 bg-amber-100' : 'bg-slate-100 text-slate-500 hover:text-amber-600'
              }`}
              title={isBookmarked ? 'บันทึกไว้แล้ว' : 'บันทึกวิดีโอ'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

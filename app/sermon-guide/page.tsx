'use client';

import React, { useState } from 'react';
import { Scroll, PenLine, BookOpen, ChevronDown, ChevronUp, Copy, CheckCheck, ExternalLink } from 'lucide-react';
import { SermonBuilder } from '@/components/SermonBuilder';

interface KratuExample {
  year: string;
  pali: string;
  translation: string;
  gradeLevel: string;
  sampleEssay: string;
  linkSuggestions: string[];
}

const KRATU_EXAMPLES: KratuExample[] = [
  {
    year: '2559', pali: 'ปฏิรูปการี ธุรวา อุฏฺฐาตา วินฺทเต ธนํ',
    translation: 'คนขยันเอาธุระ ทำงานเหมาะเจาะ ย่อมหาทรัพย์ได้', gradeLevel: 'ตรี',
    sampleEssay: 'บัดนี้ จักได้อธิบายขยายความแห่งกระทู้ธรรมสุภาษิต ที่ได้ลิขิตไว้ ณ เบื้องต้น เพื่อเป็นแนวทางแห่งการศึกษาและปฏิบัติสืบไป\n\nความหมายของสุภาษิตนี้ สอนให้เห็นว่าบุคคลผู้ที่จะหาทรัพย์ได้นั้น ต้องประกอบด้วยคุณสมบัติ ๒ ประการ คือ ความขยันหมั่นเพียร (วิริยะ) และความฉลาดรู้จักทำงานอย่างเหมาะสม (ปฏิรูปการี) ต้องอาศัยทั้งสองประการบูรณาการกันจึงจะประสบผลสำเร็จ\n\nสมดังสุภาษิตที่มาใน ขุ. ธ. ว่า\n\nวิริเยน ทุกฺขมจฺเจติ\nคนล่วงทุกข์ได้เพราะความเพียร\n\nความว่า ความเพียรพยายามเป็นอุบายสำคัญสำหรับบุคคลจะพึงใช้เป็นพาหนะข้ามพ้นความยากลำบากต่างๆ ในชีวิต มีนัยดังพรรณนามาฉะนี้',
    linkSuggestions: ['วิริเยน ทุกฺขมจฺเจติ (คนล่วงทุกข์ได้เพราะความเพียร) - ขุ. ธ.','อุฏฺฐานวโต สติมโต (คนขยันมีสติ) - ขุ. ธ.','น หิ ปมชฺชโต ภิยฺโย (คนประมาทไม่ล่วงทุกข์ได้) - สํ. ส.']
  },
  {
    year: '2562', pali: 'สจฺเจน กิตฺติํ ปปฺโปติ',
    translation: 'คนย่อมได้เกียรติด้วยสัจจะ', gradeLevel: 'ตรี',
    sampleEssay: 'บัดนี้ จักได้อธิบายขยายความแห่งกระทู้ธรรมสุภาษิต ที่ได้ลิขิตไว้ ณ เบื้องต้น เพื่อเป็นแนวทางแห่งการศึกษาและปฏิบัติสืบไป\n\nสัจจะ แปลว่า ความสัตย์จริง ความซื่อตรง เป็นธรรมอันประเสริฐที่บุคคลพึงรักษาไว้ตลอดชีวิต ผู้ที่มีสัจจะย่อมได้รับความไว้วางใจ ชื่อเสียงเกียรติยศจึงพลอยเจริญงอกงามตาม\n\nสมดังสุภาษิตที่มาใน ขุ. ชา. เอก. ว่า\n\nสจฺจํ เว อมตา วาจา\nคำสัจแลเป็นวาจาอันไม่ตาย\n\nความว่า คำพูดที่เป็นความจริงย่อมดำรงอยู่ชั่วนิรันดร์ มีนัยดังพรรณนามาฉะนี้',
    linkSuggestions: ['สจฺจํ เว อมตา วาจา (คำสัจเป็นวาจาไม่ตาย) - ขุ. ชา. เอก.','สจฺจํ ภเณ น กุชฺเฌยฺย (พึงพูดสัจจะ ไม่พึงโกรธ) - ขุ. ธ.','วาจาสจฺจํ อมตา วาจา - องฺ. ทุก.']
  },
  {
    year: '2563', pali: 'อปฺปมาโท อมตํ ปทํ ปมาโท มจฺจุโน ปทํ',
    translation: 'ความไม่ประมาทเป็นทางไม่ตาย ความประมาทเป็นทางแห่งความตาย', gradeLevel: 'ตรี',
    sampleEssay: 'บัดนี้ จักได้อธิบายขยายความแห่งกระทู้ธรรมสุภาษิต ที่ได้ลิขิตไว้ ณ เบื้องต้น เพื่อเป็นแนวทางแห่งการศึกษาและปฏิบัติสืบไป\n\nความประมาทคือการขาดสติระลึกรู้ ปล่อยใจให้ลอยล่องตามกระแสโลก ตรงกันข้าม ผู้ดำเนินชีวิตด้วยความไม่ประมาทคือมีสติ รู้จักเวลา รู้จักประมาณ ย่อมประสบความเจริญทั้งโลกนี้และโลกหน้า\n\nสมดังสุภาษิตที่มาใน ขุ. ธ. ว่า\n\nอปฺปมาทรโต ภิกฺขุ\nภิกษุผู้ยินดีในความไม่ประมาท\n\nมีนัยดังพรรณนามาฉะนี้',
    linkSuggestions: ['สติ โลกสฺมิ ชาคโต (สติคือผู้ตื่นในโลก) - สํ. ส.','อปฺปมาทรโต ภิกฺขุ (ภิกษุผู้ยินดีในความไม่ประมาท) - ขุ. ธ.','อปฺปมาทสฺส วิปาโก - องฺ. จตุกฺก.']
  },
  {
    year: '2564', pali: 'นตฺถิ ปญฺญาสมา อาภา',
    translation: 'แสงสว่างเสมอด้วยปัญญาไม่มี', gradeLevel: 'โท',
    sampleEssay: 'บัดนี้ จักได้อธิบายขยายความแห่งกระทู้ธรรมสุภาษิต ที่ได้ลิขิตไว้ ณ เบื้องต้น เพื่อเป็นแนวทางแห่งการศึกษาและปฏิบัติสืบไป\n\nปัญญาเป็นแสงสว่างกำจัดความมืดมนคือโมหะออกจากจิตใจ ทำให้เห็นหนทางดำเนินชีวิตที่ถูกต้อง\n\nสมดังสุภาษิตที่มาใน ขุ. ธ. ว่า\n\nปญฺญา นรานํ รตนํ\nปัญญาเป็นรัตนะของนรชน\n\nความว่า แก้วรัตนะต่างๆ ล้วนมีราคาประเมินได้ แต่ปัญญาซึ่งเป็นรัตนะสูงสุดไม่มีสิ่งใดเปรียบ...\n\nสมดังสุภาษิตที่มาใน องฺ. จตุกฺก. ว่า\n\nจตฺตาริ สมาธิปฺปธานิยงฺคานิ\nองค์แห่งสมาธิอันยอดเยี่ยม ๔ ประการ\n\nมีนัยดังพรรณนามาฉะนี้',
    linkSuggestions: ['ปญฺญา นรานํ รตนํ (ปัญญาเป็นรัตนะของนรชน) - ขุ. ธ.','สุตวา ลภติ ปญฺญํ (ผู้ฟังย่อมได้ปัญญา) - องฺ. ปญฺจก.','ปญฺญาว ธเนน เสยฺโย (ปัญญาประเสริฐกว่าทรัพย์) - ขุ. ชา.']
  },
  {
    year: '2565', pali: 'สีลํ กิเรว กลฺยาณํ สีลํ สุขวหํ สทา',
    translation: 'ศีลนั่นเทียวเป็นความงาม ศีลนำสุขมาให้ทุกเมื่อ', gradeLevel: 'เอก',
    sampleEssay: 'บัดนี้ จักได้อธิบายขยายความแห่งกระทู้ธรรมสุภาษิต ที่ได้ลิขิตไว้ ณ เบื้องต้น เพื่อเป็นแนวทางแห่งการศึกษาและปฏิบัติสืบไป\n\nศีลเป็นรากฐานแห่งคุณงามความดีทั้งปวง ผู้มีศีลย่อมดูงดงาม น่าเคารพนับถือ\n\nสมดังสุภาษิตที่มาใน ขุ. ธ. ว่า\n\nสีลํ พลํ อปฺปฏิมํ\nศีลเป็นกำลังหาที่เปรียบมิได้\n\nความว่า ศีลเสมือนเกราะป้องกันภัยของชีวิต ทำให้ผู้ปฏิบัติมีความมั่นคงปลอดภัย...\n\nสมดังสุภาษิตที่มาใน วิสุทฺธิ. ว่า\n\nสมาธิ จิตฺตสฺส เอกคฺคตา\nสมาธิคือความตั้งมั่นเป็นอารมณ์เดียว\n\nความว่า เมื่อรักษาศีลแล้ว จิตย่อมตั้งมั่น สมาธิจึงเกิดขึ้นได้โดยง่าย...\n\nสมดังสุภาษิตที่มาใน ม. มู. ว่า\n\nตณฺหาย วิปฺปหาเนน สพฺพทุกฺขํ นชฺชติ\nเพราะละตัณหาได้ ทุกข์ทั้งปวงย่อมดับไป\n\nมีนัยดังพรรณนามาฉะนี้',
    linkSuggestions: ['สีลํ พลํ อปฺปฏิมํ (ศีลเป็นกำลังหาที่เปรียบมิได้) - ขุ. ธ.','สมาธิ จิตฺตสฺส เอกคฺคตา - วิสุทฺธิ.','ตณฺหาย วิปฺปหาเนน สพฺพทุกฺขํ นชฺชติ - ม. มู.']
  }
];

function KratuBuilder() {
  const [selectedGrade, setSelectedGrade] = useState('ตรี');
  const [expandedEssay, setExpandedEssay] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = KRATU_EXAMPLES.filter(k => k.gradeLevel === selectedGrade);
  const linkCount: Record<string, number> = { 'ตรี': 1, 'โท': 2, 'เอก': 3 };
  const pageLength: Record<string, string> = { 'ตรี': '~2 หน้า', 'โท': '~2.5-3 หน้า', 'เอก': '~3.5-4 หน้า' };

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => { setCopied(id); setTimeout(() => setCopied(null), 2000); });
  };

  const steps = [
    { num: '1', title: 'เขียนกระทู้ตั้ง', desc: 'เขียนบาลีพร้อมคำแปล จัดกึ่งกลางหน้ากระดาษ', color: 'bg-amber-500' },
    { num: '2', title: 'คำนำ (อารัมภบท)', desc: '"บัดนี้ จักได้อธิบายขยายความ..."', color: 'bg-amber-500' },
    { num: '3', title: 'อรรถาธิบายกระทู้ตั้ง', desc: 'อธิบายความหมาย ยกอุทาหรณ์ประกอบ', color: 'bg-amber-500' },
    ...Array.from({ length: linkCount[selectedGrade] || 1 }).map((_, i) => ({
      num: `${i + 4}`, title: `กระทู้เชื่อมบทที่ ${i + 1}`,
      desc: '"สมดังสุภาษิตที่มาใน... ว่า" → บาลีกึ่งกลาง → อธิบายเชื่อมโยง', color: 'bg-orange-400'
    })),
    { num: '✓', title: 'บทสรุปปิดท้าย', desc: '"มีนัยดังพรรณนามาฉะนี้"', color: 'bg-emerald-500' }
  ];

  const templates = [
    { label: 'คำนำ (อารัมภบท)', text: 'บัดนี้ จักได้อธิบายขยายความแห่งกระทู้ธรรมสุภาษิต ที่ได้ลิขิตไว้ ณ เบื้องต้น เพื่อเป็นแนวทางแห่งการศึกษาและปฏิบัติสืบไป' },
    { label: 'คำเชื่อมกระทู้เชื่อม', text: 'สมดังสุภาษิตที่มาใน (ชื่อคัมภีร์) ว่า' },
    { label: 'คำปิดท้าย', text: 'มีนัยดังพรรณนามาฉะนี้' },
    { label: 'สำนวนเชื่อมเนื้อหา', text: 'และยังมีพระพุทธภาษิตที่ยืนยันความนัยนี้อีกว่า' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-5 space-y-4">
        <div className="flex items-center space-x-2 text-amber-800 font-bold text-sm">
          <PenLine className="w-4 h-4 text-amber-600" />
          <span>เลือกระดับชั้นและโครงสร้างการเขียน</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {['ตรี', 'โท', 'เอก'].map((g) => (
            <div key={g} onClick={() => { setSelectedGrade(g); setExpandedEssay(null); }}
              className={`p-3 rounded-xl border-2 cursor-pointer transition-all text-center ${selectedGrade === g ? 'border-amber-500 bg-amber-100 shadow-md' : 'border-amber-100 bg-white hover:border-amber-300'}`}>
              <div className="font-bold text-amber-800 text-sm">ชั้น{g}</div>
              <div className="text-xs text-slate-500 mt-1">เชื่อม <span className="font-bold text-amber-700">{linkCount[g]} บท</span> · {pageLength[g]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-amber-200 p-5 space-y-3">
        <h3 className="font-bold text-slate-800 text-sm flex items-center space-x-2">
          <BookOpen className="w-4 h-4 text-amber-600" />
          <span>โครงสร้างมาตรฐานชั้น{selectedGrade}</span>
        </h3>
        <ol className="space-y-2 text-xs text-slate-600">
          {steps.map((s, i) => (
            <li key={i} className="flex items-start space-x-3">
              <span className={`w-6 h-6 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center shrink-0`}>{s.num}</span>
              <div><div className="font-bold text-slate-700">{s.title}</div><div className="text-slate-400 mt-0.5 italic">{s.desc}</div></div>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-bold text-slate-700 text-sm flex items-center space-x-2">
            <Scroll className="w-4 h-4 text-amber-600" />
            <span>ตัวอย่างข้อสอบจริงสนามหลวง – ชั้น{selectedGrade}</span>
          </h3>
          <a href="https://watpamahachai.org/wp-content/uploads/2024/07/%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%95%E0%B8%A3%E0%B8%B5-59-65.pdf"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full transition-all">
            <ExternalLink className="w-3 h-3" />
            <span>PDF ข้อสอบย้อนหลัง 59-65</span>
          </a>
        </div>

        {filtered.length === 0 && <div className="bg-slate-50 rounded-2xl p-8 text-center text-slate-400 text-sm">ยังไม่มีตัวอย่างสำหรับชั้น{selectedGrade}</div>}

        {filtered.map((ex) => (
          <div key={ex.year} className="bg-white rounded-2xl border border-amber-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-amber-100">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">ปี {ex.year}</span>
                <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full">ชั้น{ex.gradeLevel}</span>
              </div>
              <div className="font-bold text-slate-800 text-base">{ex.pali}</div>
              <div className="text-amber-700 text-sm font-medium mt-1">"{ex.translation}"</div>
            </div>
            <div className="p-4 bg-amber-50/50 border-b border-amber-100">
              <div className="text-xs text-amber-700 font-bold mb-2">แนะนำกระทู้เชื่อม ({linkCount[ex.gradeLevel]} บท):</div>
              <div className="space-y-1.5">
                {ex.linkSuggestions.slice(0, linkCount[ex.gradeLevel]).map((s, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs">
                    <span className="w-5 h-5 rounded-full bg-orange-400 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-slate-600 leading-relaxed flex-1">{s}</span>
                    <button onClick={() => copyText(s.split(' - ')[0], `${ex.year}-link-${i}`)} className="shrink-0 text-amber-600 hover:text-amber-800">
                      {copied === `${ex.year}-link-${i}` ? <CheckCheck className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4">
              <button onClick={() => setExpandedEssay(expandedEssay === ex.year ? null : ex.year)}
                className="flex items-center space-x-2 text-xs font-bold text-amber-700 hover:text-amber-900 transition-colors">
                {expandedEssay === ex.year ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                <span>{expandedEssay === ex.year ? 'ซ่อนตัวอย่าง' : 'ดูตัวอย่างเรียงความย่อ'}</span>
              </button>
              {expandedEssay === ex.year && (
                <div className="mt-4 space-y-3">
                  <div className="relative bg-amber-50/80 border border-amber-200 rounded-xl p-4">
                    <button onClick={() => copyText(ex.sampleEssay, `${ex.year}-essay`)} className="absolute top-3 right-3 text-amber-600 hover:text-amber-800">
                      {copied === `${ex.year}-essay` ? <CheckCheck className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <pre className="text-xs text-slate-700 leading-relaxed whitespace-pre-wrap font-sans pr-8">{ex.sampleEssay}</pre>
                  </div>
                  <a href="https://prakaspon.com/%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%B9%E0%B9%89%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1-5/"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 bg-white hover:bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-3 py-2 rounded-xl transition-all">
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>อ่านตัวอย่างเพิ่มเติมที่ ครูประกาศผล (prakaspon.com)</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3">
        <div className="font-bold text-slate-800 text-sm">สำนวนสำเร็จรูปที่ต้องจำ</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {templates.map((item) => (
            <div key={item.label} className="bg-white rounded-xl border border-amber-100 p-3 space-y-1.5">
              <div className="font-bold text-amber-700 text-[11px]">{item.label}</div>
              <div className="text-slate-600 leading-relaxed italic text-[11px]">"{item.text}"</div>
              <button onClick={() => copyText(item.text, item.label)} className="flex items-center space-x-1 text-[10px] text-amber-600 hover:text-amber-800 font-bold transition-colors">
                {copied === item.label ? <CheckCheck className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                <span>{copied === item.label ? 'คัดลอกแล้ว!' : 'คัดลอก'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SermonGuidePage() {
  const [activeTab, setActiveTab] = useState<'sermon' | 'kratu'>('kratu');

  return (
    <div className="space-y-8 pb-8">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-300 px-4 py-1.5 rounded-full text-xs text-amber-900 font-bold shadow-xs">
          <Scroll className="w-4 h-4 text-amber-600" />
          <span>คู่มือการจัดเรียงกัณฑ์เทศน์และการเขียนกระทู้ธรรม</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-800">เขียนกระทู้ธรรม & โครงสร้างเทศนา</h1>
        <p className="text-xs sm:text-sm text-slate-600">
          คู่มือครบวงจรสำหรับการเขียนเรียงความแก้กระทู้ธรรม ชั้นตรี-โท-เอก พร้อมตัวอย่างอ้างอิงจากข้อสอบสนามหลวงจริง
        </p>
      </div>

      <div className="flex space-x-2 border-b border-amber-200">
        <button onClick={() => setActiveTab('kratu')}
          className={`flex items-center space-x-2 px-5 py-3 text-sm font-bold border-b-2 transition-all ${activeTab === 'kratu' ? 'border-amber-500 text-amber-800' : 'border-transparent text-slate-500 hover:text-amber-700'}`}>
          <PenLine className="w-4 h-4" /><span>เขียนกระทู้ธรรม</span>
        </button>
        <button onClick={() => setActiveTab('sermon')}
          className={`flex items-center space-x-2 px-5 py-3 text-sm font-bold border-b-2 transition-all ${activeTab === 'sermon' ? 'border-amber-500 text-amber-800' : 'border-transparent text-slate-500 hover:text-amber-700'}`}>
          <Scroll className="w-4 h-4" /><span>โครงสร้างบทเทศน์ 4 ขั้น</span>
        </button>
      </div>

      {activeTab === 'kratu' ? <KratuBuilder /> : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { num: '1', title: 'นโม & สุภาษิต', desc: 'ตั้งนะโม 3 จบ ยกคาถาบาลีและอธิบายความหมายรวมเพื่อสะกิดใจผู้ฟัง' },
              { num: '2', title: 'ยกอุทาหรณ์', desc: 'เล่านิทานชาดก หรือเหตุการณ์จริงในสังคมให้เห็นภาพพฤติกรรมและผลกรรม' },
              { num: '3', title: 'อรรถาธิบาย', desc: 'ขยายความข้อธรรมะเป็นข้อๆ ให้เข้าใจง่ายและนำไปปฏิบัติได้' },
              { num: '4', title: 'สรุปคติธรรม & ให้พร', desc: 'สรุปประมวลความสำคัญ ตอกย้ำหัวใจธรรมะ และให้พรอนุโมทนา' }
            ].map((s) => (
              <div key={s.num} className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm space-y-2">
                <div className="flex items-center space-x-2 text-amber-700 font-bold text-xs">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">{s.num}</span>
                  <span>{s.title}</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <SermonBuilder />
        </>
      )}
    </div>
  );
}

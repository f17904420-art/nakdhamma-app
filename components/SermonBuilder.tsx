'use client';

import React, { useState } from 'react';
import { Scroll, Copy, Check, Layers } from 'lucide-react';
import { SERMON_STEPS, SERMON_TEMPLATES, SermonTemplate } from '@/lib/sermonData';

export const SermonBuilder: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<SermonTemplate>(SERMON_TEMPLATES[0]);
  const [customTopic, setCustomTopic] = useState(selectedTemplate.title);
  const [step1Text, setStep1Text] = useState(selectedTemplate.structure.step1Intro);
  const [step2Text, setStep2Text] = useState(selectedTemplate.structure.step2Example);
  const [step3Text, setStep3Text] = useState(selectedTemplate.structure.step3Explanation);
  const [step4Text, setStep4Text] = useState(selectedTemplate.structure.step4Summary);
  const [copied, setCopied] = useState(false);

  const handleSelectTemplate = (template: SermonTemplate) => {
    setSelectedTemplate(template);
    setCustomTopic(template.title);
    setStep1Text(template.structure.step1Intro);
    setStep2Text(template.structure.step2Example);
    setStep3Text(template.structure.step3Explanation);
    setStep4Text(template.structure.step4Summary);
  };

  const handleCopySermonOutline = () => {
    const fullText = `
โครงสร้างการเทศนาธรรม: ${customTopic}
โอกาส: ${selectedTemplate.occasion}
ผู้ฟัง: ${selectedTemplate.targetAudience}

บาลีสุภาษิตประจำกระทู้:
"${selectedTemplate.paliQuote}"
คำแปล: "${selectedTemplate.paliTranslation}"

=========================================
โครงสร้างการแสดงธรรม 4 ขั้นตอน
=========================================

[ขั้นตอนที่ 1: บทเริ่มต้น & ตั้งนะโม]
${step1Text}

[ขั้นตอนที่ 2: ยกอุทาหรณ์ & นิทานชาดก]
${step2Text}

[ขั้นตอนที่ 3: อรรถาธิบายหลักธรรมะ]
${step3Text}

[ขั้นตอนที่ 4: สรุปคติธรรม & ให้พร]
${step4Text}

-- ร่างโครงสร้างด้วย เว็บเรียนนักธรรมออนไลน์ (Nak Dhamma Learning App)
`.trim();

    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Template Selector Cards */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800 flex items-center space-x-2">
          <Layers className="w-5 h-5 text-amber-500" />
          <span>เลือกแม่แบบเทศนาตามโอกาส (Occasion Templates)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SERMON_TEMPLATES.map((tpl) => {
            const isSelected = selectedTemplate.id === tpl.id;
            return (
              <button
                key={tpl.id}
                onClick={() => handleSelectTemplate(tpl)}
                className={`text-left p-5 rounded-2xl border-2 transition-all ${
                  isSelected
                    ? 'bg-amber-50 border-amber-400 text-amber-900 shadow-md'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-amber-300'
                }`}
              >
                <span className="text-xs text-amber-600 font-bold block mb-1">
                  {tpl.occasion}
                </span>
                <h4 className="font-bold text-sm text-slate-800 mb-2">{tpl.title}</h4>
                <p className="text-[11px] text-slate-500 line-clamp-1 italic font-serif">
                  "{tpl.paliQuote}"
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Template Header & Quote Box */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-amber-200 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-100 pb-4">
          <div>
            <span className="px-3 py-1 bg-amber-100 text-amber-800 font-bold rounded-lg text-xs">
              {selectedTemplate.occasion}
            </span>
            <h2 className="text-xl font-bold text-slate-800 mt-2">{selectedTemplate.title}</h2>
          </div>

          <button
            onClick={handleCopySermonOutline}
            className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-400 hover:from-amber-600 hover:to-orange-500 text-white font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-amber-500/20 text-xs shrink-0 active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>คัดลอกร่างสำเร็จ!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>คัดลอกโครงสร้างไปใช้งาน</span>
              </>
            )}
          </button>
        </div>

        {/* Pali Quote Spotlight */}
        <div className="bg-amber-50/80 p-5 rounded-2xl border border-amber-200/80 text-center space-y-1">
          <p className="text-amber-800 font-serif text-lg tracking-wide font-bold">
            "{selectedTemplate.paliQuote}"
          </p>
          <p className="text-slate-600 text-xs italic">
            คำแปล: {selectedTemplate.paliTranslation}
          </p>
        </div>
      </div>

      {/* 4-Step Interactive Editor */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-slate-800 flex items-center space-x-2">
          <Scroll className="w-5 h-5 text-amber-500" />
          <span>โครงสร้างการเทศนา 4 ขั้นตอน (ปรับแก้เนื้อหาได้)</span>
        </h3>

        <div className="grid grid-cols-1 gap-6">
          
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 bg-amber-500 text-white rounded-xl font-bold flex items-center justify-center text-xs shadow-xs">
                1
              </span>
              <span className="font-bold text-slate-800 text-sm">
                {SERMON_STEPS[0].title} ({SERMON_STEPS[0].paliName})
              </span>
            </div>
            <p className="text-xs text-slate-500">{SERMON_STEPS[0].description}</p>
            <textarea
              value={step1Text}
              onChange={(e) => setStep1Text(e.target.value)}
              rows={3}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none"
            />
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 bg-amber-500 text-white rounded-xl font-bold flex items-center justify-center text-xs shadow-xs">
                2
              </span>
              <span className="font-bold text-slate-800 text-sm">
                {SERMON_STEPS[1].title} ({SERMON_STEPS[1].paliName})
              </span>
            </div>
            <p className="text-xs text-slate-500">{SERMON_STEPS[1].description}</p>
            <textarea
              value={step2Text}
              onChange={(e) => setStep2Text(e.target.value)}
              rows={3}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none"
            />
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 bg-amber-500 text-white rounded-xl font-bold flex items-center justify-center text-xs shadow-xs">
                3
              </span>
              <span className="font-bold text-slate-800 text-sm">
                {SERMON_STEPS[2].title} ({SERMON_STEPS[2].paliName})
              </span>
            </div>
            <p className="text-xs text-slate-500">{SERMON_STEPS[2].description}</p>
            <textarea
              value={step3Text}
              onChange={(e) => setStep3Text(e.target.value)}
              rows={3}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none"
            />
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 bg-amber-500 text-white rounded-xl font-bold flex items-center justify-center text-xs shadow-xs">
                4
              </span>
              <span className="font-bold text-slate-800 text-sm">
                {SERMON_STEPS[3].title} ({SERMON_STEPS[3].paliName})
              </span>
            </div>
            <p className="text-xs text-slate-500">{SERMON_STEPS[3].description}</p>
            <textarea
              value={step4Text}
              onChange={(e) => setStep4Text(e.target.value)}
              rows={3}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none"
            />
          </div>

        </div>
      </div>

    </div>
  );
};

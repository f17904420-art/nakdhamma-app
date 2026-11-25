'use client';

import React from 'react';
import { 
  Compass, 
  Sparkles, 
  BookOpen, 
  Award, 
  Heart, 
  Shield, 
  Flame, 
  Sun, 
  Moon, 
  User, 
  Users, 
  TreePine, 
  Feather,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  Layers,
  ArrowRight,
  GraduationCap,
  FileText,
  AlertTriangle,
  Lightbulb,
  Check,
  Scale,
  Milestone,
  Gift,
  Crosshair,
  Coins,
  Send,
  HeartHandshake,
  ScrollText
} from 'lucide-react';

export type IllustrationId = 
  | 'sati-sampajanna'
  | 'hiri-ottappa'
  | 'pubbakari'
  | 'tri-sikha'
  | 'kusal-akusal'
  | 'dhamma-summary'
  | 'four-noble-truths'
  | 'iddhipada-four'
  | 'brahmavihara-four'
  | 'sangahavatthu-four'
  | 'friends-compare'
  | 'direction-six'
  | 'sakya-birth'
  | 'devaduta-renunciation'
  | 'enlightenment-bodhi'
  | 'dhammacakka-first-sermon'
  | 'four-holy-days'
  | 'vinaya-seven-apatti'
  | 'parajika-four'
  | 'sanghadisesa-steps'
  | 'sekhiya-seventyfive'
  | 'vinaya-patimokkha-all'
  | 'kratu-four-steps'
  | 'kratu-rules'
  | 'kratu-proverbs'
  | 'kratu-wisdom'
  | 'kratu-exam-success'
  // New visual illustrations for comprehensive curriculum
  | 'magga-eight'
  | 'ovada-patimokkha'
  | 'khandha-five'
  | 'sila-dhamma-five'
  | 'ratana-three'
  | 'lokadhamma-eight'
  | 'barami-ten'
  | 'apayamuk-six'
  | 'buddha-disciples'
  | 'adhikarana-seven'
  | 'ceremony-types'
  | 'ceremony-monkhol-a-monkhol'
  | 'ceremony-kathina'
  // Additional rich illustrations
  | 'kammpath-ten'
  | 'boon-ten'
  | 'dittadhamma-four'
  | 'sappurisa-seven'
  | 'anatta-sermon'
  | 'first-temple-veluvana'
  | 'sixty-monks-mission'
  | 'chants-paritta'
  | 'dāna-words'
  | 'kratu-sample-format'
  | 'table-altar-set'
  | 'four-buddha-places'
  | 'buddha-parinibbana'
  | 'buddha-cremation-stupa'
  | 'vinaya-rules';

export interface IllustrationProps {
  id?: IllustrationId | string;
  title?: string;
  categoryTag?: string;
  keyConcept?: string;
  paliTerms?: { pali: string; translation: string; meaning: string }[];
  diagramItems?: { label: string; desc: string; color: string }[];
  bulletPoints?: string[];
}

export const DhammaIllustration: React.FC<IllustrationProps> = (props) => {
  const { id, title, categoryTag, keyConcept, paliTerms, diagramItems, bulletPoints } = props;
  switch (id) {

    // -------------------------------------------------------------
    // 1. สติ - สัมปชัญญะ (ธรรมมีอุปการะมาก)
    // -------------------------------------------------------------
    case 'sati-sampajanna':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50/70 border border-amber-200/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between mb-3 border-b border-amber-200/60 pb-2">
            <span className="text-xs font-bold text-amber-800 flex items-center gap-1.5">
              <Sun className="w-4 h-4 text-amber-600" />
              <span>ภาพจำลอง: สติ (คัดท้าย) & สัมปชัญญะ (กัปตันเรือ)</span>
            </span>
            <span className="text-[10px] bg-amber-200/70 text-amber-900 px-2 py-0.5 rounded-md font-bold">
              ธรรมมีอุปการะมาก ๒
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-2xs space-y-2 text-center relative overflow-hidden">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xl">
                ⚓
              </div>
              <h4 className="font-bold text-amber-900 text-sm">สติ (ความระลึกได้)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                เกิดขึ้น<strong>ก่อนทำ พูด คิด</strong> คอยดึงใจไม่ให้เผลอไผล นึกถึงหน้าที่ ไม่ประมาท
              </p>
              <div className="text-[11px] font-semibold text-amber-700 bg-amber-50 py-1 px-2 rounded-lg">
                เปรียบเสมือน: "หางเสือเรือ"
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-orange-200 shadow-2xs space-y-2 text-center relative overflow-hidden">
              <div className="w-12 h-12 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl">
                🧭
              </div>
              <h4 className="font-bold text-orange-900 text-sm">สัมปชัญญะ (ความรู้ตัว)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                เกิดขึ้น<strong>ขณะกำลังทำ พูด คิด</strong> รู้ตัวทั่วพร้อม ชัดเจนในอารมณ์ปัจจุบัน
              </p>
              <div className="text-[11px] font-semibold text-orange-700 bg-orange-50 py-1 px-2 rounded-lg">
                เปรียบเสมือน: "กัปตันมองคลื่นลม"
              </div>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 2. หิริ-โอตตัปปะ & ขันติ-โสรัจจะ
    // -------------------------------------------------------------
    case 'hiri-ottappa':
      return (
        <div className="bg-gradient-to-br from-sky-50 to-indigo-50/60 border border-sky-200/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between mb-3 border-b border-sky-200/60 pb-2">
            <span className="text-xs font-bold text-sky-900 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-sky-600" />
              <span>ภาพเปรียบเทียบ: โลกปาลธรรม (คุ้มครองโลก) & โสภณธรรม (ทำให้งาม)</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-sky-200/80 shadow-2xs space-y-2">
              <div className="flex items-center space-x-2 text-sky-900 font-bold text-xs">
                <span className="w-6 h-6 rounded-md bg-sky-100 flex items-center justify-center text-sky-700 font-bold">1</span>
                <span>หิริ & โอตตัปปะ (คุ้มครองโลก)</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="p-2.5 bg-sky-50/70 rounded-lg">
                  <strong>หิริ (ละอายบาป):</strong> เหมือนคนรักสะอาด รังเกียจก้อนสิ่งปฏิกูล จึงไม่ยอมจับต้อง
                </div>
                <div className="p-2.5 bg-sky-50/70 rounded-lg">
                  <strong>โอตตัปปะ (กลัวบาป):</strong> เหมือนคนกลัวเหล็กเผาไฟแดงจัด ไม่กล้าแตะต้องเพราะกลัวไฟลวก
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-rose-200/80 shadow-2xs space-y-2">
              <div className="flex items-center space-x-2 text-rose-900 font-bold text-xs">
                <span className="w-6 h-6 rounded-md bg-rose-100 flex items-center justify-center text-rose-700 font-bold">2</span>
                <span>ขันติ & โสรัจจะ (ทำให้งาม)</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="p-2.5 bg-rose-50/70 rounded-lg">
                  <strong>ขันติ (อดทน):</strong> ทนต่อแดด ลม ฝน ความหิว และคำด่าว่า ไม่หวั่นไหว
                </div>
                <div className="p-2.5 bg-rose-50/70 rounded-lg">
                  <strong>โสรัจจะ (สงบเสงี่ยม):</strong> กิริยาเรียบร้อย นอบน้อม ผ่องใส มีเสน่ห์จากภายใน
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 3. บุพการี & กตัญญูกตเวที
    // -------------------------------------------------------------
    case 'pubbakari':
      return (
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-emerald-200/60 pb-2">
            <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-emerald-600" />
              <span>ภาพผังความสัมพันธ์: บุคคลหาได้ยาก ๒ จำพวกในโลก</span>
            </span>
            <span className="text-[10px] bg-emerald-200/80 text-emerald-900 px-2 py-0.5 rounded-md font-bold">
              ทุลลภบุคคล ๒
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-emerald-200 text-center space-y-2 shadow-2xs">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-2xl">
                🤲
              </div>
              <h4 className="font-bold text-emerald-900 text-sm">๑. บุพการี (ผู้ให้ก่อน)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                บุคคลผู้ทำอุปการคุณเกื้อกูลแก่ผู้อื่นก่อน โดยไม่หวังสิ่งตอบแทน เช่น บิดา มารดา ครูอาจารย์ พระพุทธเจ้า
              </p>
              <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                ต้นกำเนิดแห่งคุณความดี
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-teal-200 text-center space-y-2 shadow-2xs">
              <div className="w-12 h-12 mx-auto rounded-full bg-teal-100 flex items-center justify-center text-2xl">
                🙏
              </div>
              <h4 className="font-bold text-teal-900 text-sm">๒. กตัญญูกตเวที (ผู้รู้คุณ & ตอบแทน)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                บุคคลผู้ระลึกซึ้งถึงน้ำใจและคุณความดีที่ท่านทำแล้ว และหาทางปรนนิบัติเลี้ยงดู ตอบแทนพระคุณ
              </p>
              <span className="inline-block text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                เครื่องหมายของคนดี
              </span>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 4. ไตรสิกขา (ศีล สมาธิ ปัญญา)
    // -------------------------------------------------------------
    case 'tri-sikha':
      return (
        <div className="bg-gradient-to-br from-emerald-50 via-teal-50/50 to-amber-50/40 border border-emerald-200/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between mb-3 border-b border-emerald-200/60 pb-2">
            <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>เสาหลัก ๓ ประการแห่งการพัฒนาชีวิต (ไตรสิกขา)</span>
            </span>
            <span className="text-[10px] bg-emerald-200/70 text-emerald-900 px-2 py-0.5 rounded-md font-bold">
              ศีล • สมาธิ • ปัญญา
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="bg-white p-3.5 rounded-xl border border-emerald-200 shadow-2xs space-y-1.5">
              <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-xl">
                🛡️
              </div>
              <h4 className="font-bold text-emerald-900 text-xs sm:text-sm">๑. อธิศีลสิกขา</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                ควบคุมกายและวาจาให้เรียบร้อย เป็นฐานรากที่มั่นคง ป้องกันโทษหยาบ
              </p>
              <div className="text-[10px] font-bold text-emerald-700 bg-emerald-50 py-0.5 px-1.5 rounded">
                กาย-วาจาสุจริต
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-sky-200 shadow-2xs space-y-1.5">
              <div className="w-10 h-10 mx-auto rounded-full bg-sky-100 flex items-center justify-center text-xl">
                🧘‍♂️
              </div>
              <h4 className="font-bold text-sky-900 text-xs sm:text-sm">๒. อธิจิตตสิกขา</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                ฝึกอบรมจิตใจให้มีสมาธิ ตั้งมั่น สงบ แน่วแน่ ป้องกันนิวรณ์และกิเลสชั้นกลาง
              </p>
              <div className="text-[10px] font-bold text-sky-700 bg-sky-50 py-0.5 px-1.5 rounded">
                จิตตั้งมั่นแน่วแน่
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-amber-200 shadow-2xs space-y-1.5">
              <div className="w-10 h-10 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-xl">
                💡
              </div>
              <h4 className="font-bold text-amber-900 text-xs sm:text-sm">๓. อธิปัญญาสิกขา</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                เห็นแจ้งตามกฎไตรลักษณ์ รู้แจ้งอริยสัจ ๔ ตัดกิเลสละเอียด (อนุสัย) สู่พระนิพพาน
              </p>
              <div className="text-[10px] font-bold text-amber-700 bg-amber-50 py-0.5 px-1.5 rounded">
                รู้แจ้งตัดกิเลสสิ้น
              </div>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 5. อกุศลมูล ๓ vs กุศลมูล ๓
    // -------------------------------------------------------------
    case 'kusal-akusal':
      return (
        <div className="bg-white border border-amber-200/90 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-100 pb-2">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <TreePine className="w-4 h-4 text-amber-600" />
              <span>ภาพเปรียบเทียบ: ต้นกำเนิดรากเหง้าแห่งความชั่ว vs รากเหง้าแห่งความดี</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl space-y-2">
              <div className="font-bold text-rose-800 text-xs flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-rose-600" />
                <span>อกุศลมูล ๓ (รากเหง้าแห่งบาป)</span>
              </div>
              <div className="space-y-1.5 text-xs text-rose-950">
                <div className="p-2 bg-white/80 rounded-lg"><strong>โลภะ:</strong> ความอยากได้ อยากครอบครอง ละโมบเกินชอบ</div>
                <div className="p-2 bg-white/80 rounded-lg"><strong>โทสะ:</strong> ความโกรธเคือง ขัดเคืองใจ มุ่งร้ายทำลาย</div>
                <div className="p-2 bg-white/80 rounded-lg"><strong>โมหะ:</strong> ความหลงผิด ไม่รู้จริงตามอริยสัจ (อวิชชา)</div>
              </div>
            </div>

            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
              <div className="font-bold text-emerald-800 text-xs flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>กุศลมูล ๓ (รากเหง้าแห่งบุญ)</span>
              </div>
              <div className="space-y-1.5 text-xs text-emerald-950">
                <div className="p-2 bg-white/80 rounded-lg"><strong>อโลภะ:</strong> ความไม่อยากได้ เสียสละ การบริจาคทาน</div>
                <div className="p-2 bg-white/80 rounded-lg"><strong>อโทสะ:</strong> ความไม่โกรธ มีเมตตากรุณา ปรารถนาดี</div>
                <div className="p-2 bg-white/80 rounded-lg"><strong>อโมหะ:</strong> ความไม่หลง มีปัญญา รู้ถูกผิด บาปบุญ</div>
              </div>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 6. สรุปจุดเก็งสอบ ๑๐๐% หมวด ๒-๓
    // -------------------------------------------------------------
    case 'dhamma-summary':
      return (
        <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 border border-amber-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-200/70 pb-2">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-600" />
              <span>ผังสูตรสรุปช่วยจำฉบับพกพา: เก็งสอบสนามหลวง ๑๐๐%</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
            <div className="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs">
              <span className="font-bold text-amber-800 block">สติ-สัมปชัญญะ</span>
              <span className="text-slate-500 text-[11px]">ธรรมมีอุปการะมาก</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs">
              <span className="font-bold text-sky-800 block">หิริ-โอตตัปปะ</span>
              <span className="text-slate-500 text-[11px]">ธรรมคุ้มครองโลก</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs">
              <span className="font-bold text-rose-800 block">ขันติ-โสรัจจะ</span>
              <span className="text-slate-500 text-[11px]">ธรรมทำให้งาม</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs">
              <span className="font-bold text-emerald-800 block">บุพการี-กตัญญู</span>
              <span className="text-slate-500 text-[11px]">บุคคลหาได้ยาก ๒</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs">
              <span className="font-bold text-indigo-800 block">ไตรสิกขา ๓</span>
              <span className="text-slate-500 text-[11px]">ศีล • สมาธิ • ปัญญา</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs">
              <span className="font-bold text-purple-800 block">อกุศลมูล ๓</span>
              <span className="text-slate-500 text-[11px]">โลภะ • โทสะ • โมหะ</span>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 7. อริยสัจ ๔
    // -------------------------------------------------------------
    case 'four-noble-truths':
      return (
        <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-rose-500/10 border border-amber-300 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between mb-3 border-b border-amber-200/70 pb-2">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-orange-500" />
              <span>ภาพสรุป: อริยสัจ ๔ และ กิจที่พึงกระทำ (หัวใจคำสอน)</span>
            </span>
            <span className="text-[10px] bg-amber-500 text-white px-2 py-0.5 rounded-md font-bold">
              ความจริง ๔ ประการ
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-white p-3.5 rounded-xl border-l-4 border-rose-500 shadow-2xs space-y-1">
              <span className="text-[10px] font-bold text-rose-600 uppercase">สัจจะที่ ๑</span>
              <h4 className="font-bold text-slate-800 text-sm">ทุกข์ (โรค)</h4>
              <p className="text-xs text-slate-500">ความไม่สบายกาย-ใจ สภาพที่ทนได้ยาก</p>
              <div className="pt-2 text-[11px] font-bold text-rose-700">
                หน้าที่: <u>ปริญเญยยะ</u> (พึงกำหนดรู้)
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border-l-4 border-amber-500 shadow-2xs space-y-1">
              <span className="text-[10px] font-bold text-amber-600 uppercase">สัจจะที่ ๒</span>
              <h4 className="font-bold text-slate-800 text-sm">สมุทัย (เหตุของโรค)</h4>
              <p className="text-xs text-slate-500">ตัณหา ๓ (กาม, ภว, วิภวตัณหา)</p>
              <div className="pt-2 text-[11px] font-bold text-amber-700">
                หน้าที่: <u>ปหาตัพพะ</u> (พึงละเสีย)
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border-l-4 border-emerald-500 shadow-2xs space-y-1">
              <span className="text-[10px] font-bold text-emerald-600 uppercase">สัจจะที่ ๓</span>
              <h4 className="font-bold text-slate-800 text-sm">นิโรธ (หายจากโรค)</h4>
              <p className="text-xs text-slate-500">ความดับตัณหา ความพ้นทุกข์ นิพพาน</p>
              <div className="pt-2 text-[11px] font-bold text-emerald-700">
                หน้าที่: <u>สัจฉิกาตัพพะ</u> (พึงทำให้แจ้ง)
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border-l-4 border-sky-500 shadow-2xs space-y-1">
              <span className="text-[10px] font-bold text-sky-600 uppercase">สัจจะที่ ๔</span>
              <h4 className="font-bold text-slate-800 text-sm">มรรค (ยารักษาโรค)</h4>
              <p className="text-xs text-slate-500">อริยมรรคมีองค์ ๘ ทางสายกลาง</p>
              <div className="pt-2 text-[11px] font-bold text-sky-700">
                หน้าที่: <u>ภาเวตัพพะ</u> (พึงเจริญ/ลงมือทำ)
              </div>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 8. อิทธิบาท ๔ (บันไดสู่ความสำเร็จ)
    // -------------------------------------------------------------
    case 'four-idhipada':
    case 'iddhipada-four':
      return (
        <div className="bg-gradient-to-br from-pink-50 to-orange-50 border border-pink-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-pink-200/70 pb-2">
            <span className="text-xs font-bold text-pink-900 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-pink-600" />
              <span>ภาพผังบันได ๔ ขั้นสู่ความสำเร็จ (อิทธิบาท ๔)</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 text-center">
            <div className="p-3 bg-white rounded-xl border border-pink-200 shadow-2xs space-y-1">
              <div className="text-xl">💖</div>
              <h5 className="font-bold text-pink-900 text-xs sm:text-sm">๑. ฉันทะ</h5>
              <p className="text-[11px] text-slate-500">ความพอใจ รักใคร่ ยินดีในงาน</p>
              <span className="text-[10px] text-pink-700 font-bold bg-pink-50 px-2 py-0.5 rounded">ใจรัก</span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-orange-200 shadow-2xs space-y-1">
              <div className="text-xl">⚡</div>
              <h5 className="font-bold text-orange-900 text-xs sm:text-sm">๒. วิริยะ</h5>
              <p className="text-[11px] text-slate-500">ความขยัน หมั่นเพียร ไม่ยอมแพ้</p>
              <span className="text-[10px] text-orange-700 font-bold bg-orange-50 px-2 py-0.5 rounded">ลุยทำ</span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-blue-200 shadow-2xs space-y-1">
              <div className="text-xl">🎯</div>
              <h5 className="font-bold text-blue-900 text-xs sm:text-sm">๓. จิตตะ</h5>
              <p className="text-[11px] text-slate-500">ความเอาใจใส่ จดจ่อ มีสมาธิ</p>
              <span className="text-[10px] text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded">เกาะติด</span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-emerald-200 shadow-2xs space-y-1">
              <div className="text-xl">🔍</div>
              <h5 className="font-bold text-emerald-900 text-xs sm:text-sm">๔. วิมังสา</h5>
              <p className="text-[11px] text-slate-500">ความใคร่ครวญ ตรวจสอบข้อบกพร่อง</p>
              <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">พัฒนา</span>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 9. พรหมวิหาร ๔ & ฆราวาสธรรม ๔
    // -------------------------------------------------------------
    case 'brahmavihara-4':
    case 'brahmavihara-four':
      return (
        <div className="bg-white border border-amber-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-100 pb-2">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-rose-500" />
              <span>ผังคู่ขนาน: พรหมวิหาร ๔ (จิตใจผู้นำ) & ฆราวาสธรรม ๔ (ครองเรือนผาสุก)</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 bg-purple-50/70 border border-purple-200 rounded-xl space-y-1.5">
              <span className="font-bold text-purple-900 block">👑 พรหมวิหาร ๔ (ธรรมผู้ใหญ่)</span>
              <div>• <strong>เมตตา:</strong> อยากให้เป็นสุข (ตรงข้ามพยาบาท)</div>
              <div>• <strong>กรุณา:</strong> อยากให้พ้นทุกข์ (ตรงข้ามเบียดเบียน)</div>
              <div>• <strong>มุทิตา:</strong> พลอยยินดีเมื่อได้ดี (ตรงข้ามริษยา)</div>
              <div>• <strong>อุเบกขา:</strong> วางใจเป็นกลางตามกรรม (ตรงข้ามลำเอียง)</div>
            </div>

            <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1.5">
              <span className="font-bold text-amber-900 block">🏡 ฆราวาสธรรม ๔ (ธรรมผู้ครองเรือน)</span>
              <div>• <strong>สัจจะ:</strong> ความจริงใจ ซื่อสัตย์ต่อกัน</div>
              <div>• <strong>ทมะ:</strong> การฝึกข่มจิต ปรับปรุงตนเอง</div>
              <div>• <strong>ขันติ:</strong> อดทนต่อความยากลำบากร่วมกัน</div>
              <div>• <strong>จาคะ:</strong> เสียสละ เอื้อเฟื้อเผื่อแผ่ ไม่เห็นแก่ตัว</div>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 10. สังคหวัตถุ ๔
    // -------------------------------------------------------------
    case 'sangahavatthu-four':
      return (
        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-indigo-200/60 pb-2">
            <span className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-indigo-600" />
              <span>ภาพสัญลักษณ์: สังคหวัตถุ ๔ (ลิ่มสลักเพลารถ เชื่อมประสานใจคน)</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
            <div className="p-3 bg-white rounded-xl border border-indigo-100 shadow-2xs space-y-1">
              <div className="text-lg">🎁</div>
              <h5 className="font-bold text-indigo-900">ทาน</h5>
              <p className="text-[11px] text-slate-500">ผูกมิตรด้วยการให้ปัน</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-indigo-100 shadow-2xs space-y-1">
              <div className="text-lg">💬</div>
              <h5 className="font-bold text-indigo-900">ปิยวาจา</h5>
              <p className="text-[11px] text-slate-500">ผูกใจด้วยคำไพเราะ</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-indigo-100 shadow-2xs space-y-1">
              <div className="text-lg">🤝</div>
              <h5 className="font-bold text-indigo-900">อัตถจริยา</h5>
              <p className="text-[11px] text-slate-500">ผูกรักด้วยการช่วยเหลืองาน</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-indigo-100 shadow-2xs space-y-1">
              <div className="text-lg">⚖️</div>
              <h5 className="font-bold text-indigo-900">สมานัตตตา</h5>
              <p className="text-[11px] text-slate-500">ผูกพันด้วยความเสมอต้นเสมอปลาย</p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 11. มิตรแท้ vs มิตรเทียม
    // -------------------------------------------------------------
    case 'five-friends':
    case 'friends-compare':
      return (
        <div className="bg-white border border-amber-200/90 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-100 pb-2">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-amber-600" />
              <span>ผังเปรียบเทียบ: มิตรเทียม ๔ (ศัตรูในคราบมิตร) vs มิตรแท้ ๔ (เพื่อนแท้ควรคบ)</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200 space-y-2">
              <div className="flex items-center space-x-2 text-rose-800 font-bold text-xs">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>มิตรเทียม ๔ จำพวก (คนเทียมมิตร ไม่ควรคบ)</span>
              </div>
              <div className="space-y-1 text-xs text-rose-950">
                <div className="p-2 bg-white/80 rounded-lg">๑. <strong>คนปอกลอก:</strong> เอาแต่ได้ ให้แต่น้อย หวังผลประโยชน์</div>
                <div className="p-2 bg-white/80 rounded-lg">๒. <strong>คนดีแต่พูด:</strong> อ้างสิ่งที่ล่วงไปแล้ว หรือพูดสิ่งยังไม่มาถึง ช่วยอะไรไม่ได้</div>
                <div className="p-2 bg-white/80 rounded-lg">๓. <strong>คนหัวประจบ:</strong> ต่อหน้าสรรเสริญ ลับหลังนินทา คล้อยตามความชั่ว</div>
                <div className="p-2 bg-white/80 rounded-lg">๔. <strong>คนชักชวนฉิบหาย:</strong> ชวนดื่มสุรา เที่ยวกลางคืน เล่นการพนัน คบคนชั่ว</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-800 font-bold text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>มิตรแท้ ๔ จำพวก (กัลยาณมิตร ควรคบหา)</span>
              </div>
              <div className="space-y-1 text-xs text-emerald-950">
                <div className="p-2 bg-white/80 rounded-lg">๑. <strong>มิตรอุปการะ:</strong> ป้องกันเพื่อนเมื่อประมาท คุ้มครองทรัพย์สินยามวิกฤต</div>
                <div className="p-2 bg-white/80 rounded-lg">๒. <strong>มิตรร่วมสุขร่วมทุกข์:</strong> บอกความลับแก่เพื่อน ปิดความลับ ไม่ทิ้งยามยาก</div>
                <div className="p-2 bg-white/80 rounded-lg">๓. <strong>มิตรแนะประโยชน์:</strong> ห้ามจากความชั่ว ให้ตั้งในความดี ให้ฟังสิ่งที่ไม่เคยฟัง</div>
                <div className="p-2 bg-white/80 rounded-lg">๔. <strong>มิตรมีใจรักใคร่:</strong> สุขด้วยเมื่อเพื่อนสุข ทุกข์ด้วยเมื่อเพื่อนทุกข์ ปกป้องชื่อเสียง</div>
              </div>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 12. ทิศ ๖
    // -------------------------------------------------------------
    case 'six-directions':
    case 'direction-six':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between mb-3 border-b border-amber-200/60 pb-2">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-amber-600" />
              <span>เข็มทิศความสัมพันธ์ทางสังคม: แผนภาพทิศ ๖ รอบตัวเรา</span>
            </span>
            <span className="text-[10px] bg-amber-200/70 text-amber-900 px-2 py-0.5 rounded-md font-bold">
              คิหิปฏิบัติ
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
            <div className="bg-white p-3 rounded-xl border border-amber-200 shadow-2xs space-y-1">
              <div className="text-[10px] font-bold text-amber-600 uppercase">ทิศเบื้องหน้า (ปุรัตถิม)</div>
              <div className="text-base font-bold text-slate-800">บิดามารดา</div>
              <p className="text-[11px] text-slate-500">ผู้มีพระคุณ เลี้ยงดูมาก่อน</p>
              <span className="text-[10px] text-emerald-700 font-semibold block">หน้าที่: เลี้ยงดูตอบแทน</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-sky-200 shadow-2xs space-y-1">
              <div className="text-[10px] font-bold text-sky-600 uppercase">ทิศเบื้องขวา (ทักขิณ)</div>
              <div className="text-base font-bold text-slate-800">ครูอาจารย์</div>
              <p className="text-[11px] text-slate-500">ประสิทธิ์ประสาทวิชาการ</p>
              <span className="text-[10px] text-emerald-700 font-semibold block">หน้าที่: เคารพ เชื่อฟัง</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-rose-200 shadow-2xs space-y-1">
              <div className="text-[10px] font-bold text-rose-600 uppercase">ทิศเบื้องหลัง (ปัจฉิม)</div>
              <div className="text-base font-bold text-slate-800">บุตรภรรยา</div>
              <p className="text-[11px] text-slate-500">ครอบครัวที่ต้องปกป้อง</p>
              <span className="text-[10px] text-emerald-700 font-semibold block">หน้าที่: ยกย่อง ไม่นอกใจ</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-indigo-200 shadow-2xs space-y-1">
              <div className="text-[10px] font-bold text-indigo-600 uppercase">ทิศเบื้องซ้าย (อุตตร)</div>
              <div className="text-base font-bold text-slate-800">มิตรสหาย</div>
              <p className="text-[11px] text-slate-500">เพื่อนเคียงข้างเกื้อกูล</p>
              <span className="text-[10px] text-emerald-700 font-semibold block">หน้าที่: แบ่งปัน ไม่ทิ้งยามยาก</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs space-y-1">
              <div className="text-[10px] font-bold text-slate-600 uppercase">ทิศเบื้องต่ำ (เหฏฐิม)</div>
              <div className="text-base font-bold text-slate-800">คนรับใช้ / ลูกจ้าง</div>
              <p className="text-[11px] text-slate-500">ผู้ช่วยเหลือกิจการงาน</p>
              <span className="text-[10px] text-emerald-700 font-semibold block">หน้าที่: ดูแลตามสมควร เมตตา</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-purple-200 shadow-2xs space-y-1">
              <div className="text-[10px] font-bold text-purple-600 uppercase">ทิศเบื้องบน (อุปริม)</div>
              <div className="text-base font-bold text-slate-800">สมณพราหมณ์ (พระ)</div>
              <p className="text-[11px] text-slate-500">ผู้นำทางจิตวิญญาณ</p>
              <span className="text-[10px] text-emerald-700 font-semibold block">หน้าที่: อุปถัมภ์ด้วยปัจจัย ๔</span>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 13. พุทธประวัติ: ประสูติ ณ ลุมพินีวัน
    // -------------------------------------------------------------
    case 'sakya-birth':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-emerald-50 border border-amber-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-200/60 pb-2">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Sun className="w-4 h-4 text-amber-600" />
              <span>พุทธประวัติ ปริเฉท ๑: มหาบุรุษกำเนิด ณ สวนลุมพินีวัน</span>
            </span>
            <span className="text-[10px] bg-amber-200/70 text-amber-900 px-2 py-0.5 rounded-md font-bold">
              เพ็ญเดือน ๖ (วิสาขบูชา)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 bg-white rounded-xl border border-amber-200 text-center space-y-1 shadow-2xs">
              <div className="text-2xl">🏛️</div>
              <h5 className="font-bold text-slate-800">กบิลพัสดุ์ - เทวทหะ</h5>
              <p className="text-slate-500 text-[11px]">ประสูติกึ่งกลางระหว่าง ๒ เมือง ณ ใต้ร่มไม้รัง สวนลุมพินีวัน</p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-emerald-200 text-center space-y-1 shadow-2xs">
              <div className="text-2xl">🪷</div>
              <h5 className="font-bold text-emerald-900">ย่างพระบาท ๗ ก้าว</h5>
              <p className="text-slate-500 text-[11px]">ดอกบัวผุดขึ้นรองรับ เปล่งอาสภิวาจา "เราเป็นผู้เลิศที่สุดในโลก"</p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-sky-200 text-center space-y-1 shadow-2xs">
              <div className="text-2xl">☝️</div>
              <h5 className="font-bold text-sky-900">โกณฑัญญะ ชูนิ้วเดียว</h5>
              <p className="text-slate-500 text-[11px]">พราหมณ์หนุ่มฟันธงทางเดียว เสด็จออกบวชและตรัสรู้แน่นอน</p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 14. เทวทูต ๔ & ออกบวช
    // -------------------------------------------------------------
    case 'devaduta-renunciation':
      return (
        <div className="bg-gradient-to-br from-slate-50 to-amber-50 border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-amber-600" />
              <span>แผนภาพเทวทูต ๔: จุดพลิกผันสู่การออกมหาภิเนษกรมณ์</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
            <div className="p-3 bg-white rounded-xl border border-rose-200 shadow-2xs space-y-1">
              <div className="text-xl">👴</div>
              <h5 className="font-bold text-rose-900">๑. คนแก่</h5>
              <p className="text-[10px] text-slate-500">สังเวชในความชรา</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-rose-200 shadow-2xs space-y-1">
              <div className="text-xl">🤒</div>
              <h5 className="font-bold text-rose-900">๒. คนเจ็บ</h5>
              <p className="text-[10px] text-slate-500">สังเวชในโรคาพาธ</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-rose-200 shadow-2xs space-y-1">
              <div className="text-xl">💀</div>
              <h5 className="font-bold text-rose-900">๓. คนตาย</h5>
              <p className="text-[10px] text-slate-500">สังเวชในความแตกดับ</p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-300 shadow-2xs space-y-1">
              <div className="text-xl">🧘‍♂️</div>
              <h5 className="font-bold text-emerald-900">๔. บรรพชิต</h5>
              <p className="text-[10px] text-emerald-700 font-semibold">ทางสว่างพ้นทุกข์</p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 15. ตรัสรู้ ณ โพธิบัลลังก์
    // -------------------------------------------------------------
    case 'buddha-enlightenment':
    case 'enlightenment-bodhi':
      return (
        <div className="bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-900 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-700/60 pb-2">
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>พุทธประวัติ ปริเฉท ๒: ราตรีแห่งการตรัสรู้ ณ ต้นพระศรีมหาโพธิ์</span>
              </span>
              <span className="text-[10px] bg-amber-500/20 text-yellow-200 border border-yellow-400/30 px-2 py-0.5 rounded-md font-bold">
                วันเพ็ญเดือน ๖ (วิสาขบูชา)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 space-y-1.5">
                <div className="text-amber-300 font-bold flex items-center gap-1">
                  <Moon className="w-3.5 h-3.5" />
                  <span>ปฐมยาม (หัวค่ำ)</span>
                </div>
                <h5 className="font-bold text-white text-sm">ปุพเพนิวาสานุสสติญาณ</h5>
                <p className="text-emerald-100/80 leading-relaxed text-[11px]">
                  ปัญญาหยั่งรู้ระลึกชาติหนหลังของพระองค์เองได้อย่างไม่จำกัด
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 space-y-1.5">
                <div className="text-amber-300 font-bold flex items-center gap-1">
                  <Moon className="w-3.5 h-3.5" />
                  <span>มัชฌิมยาม (เที่ยงคืน)</span>
                </div>
                <h5 className="font-bold text-white text-sm">จุตูปปาตญาณ (ทิพยจักษุ)</h5>
                <p className="text-emerald-100/80 leading-relaxed text-[11px]">
                  ปัญญาหยั่งรู้การจุติและเกิดของสรรพสัตว์ทั้งหลายว่าเป็นไปตามผลแห่งกรรม
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/15 backdrop-blur-md border border-amber-400/30 space-y-1.5 shadow-sm">
                <div className="text-yellow-300 font-bold flex items-center gap-1">
                  <Sun className="w-3.5 h-3.5" />
                  <span>ปัจฉิมยาม (ใกล้รุ่ง)</span>
                </div>
                <h5 className="font-bold text-yellow-200 text-sm">อาสวักขยญาณ (ตรัสรู้)</h5>
                <p className="text-amber-100/90 leading-relaxed text-[11px]">
                  ปัญญาหยั่งรู้ความสิ้นไปแห่งอาสวกิเลส ทำลายอวิชชา ตรัสรู้อนุตตรสัมมาสัมโพธิญาณ
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 16. ปฐมเทศนา
    // -------------------------------------------------------------
    case 'dhammacakkappavattana':
    case 'dhammacakka-first-sermon':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/90 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-200/60 pb-2">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Sun className="w-4 h-4 text-amber-600" />
              <span>พุทธประวัติ ปริเฉท ๓: การหมุนกงล้อแห่งพระธรรม และ พระรัตนตรัยครบองค์ ๓</span>
            </span>
            <span className="text-[10px] bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded-md font-bold">
              วันเพ็ญเดือน ๘ (อาสาฬหบูชา)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="bg-white p-3.5 rounded-xl border border-amber-200 shadow-2xs space-y-1">
              <div className="w-10 h-10 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-xl">
                ☸️
              </div>
              <h5 className="font-bold text-amber-900 text-xs sm:text-sm">พระพุทธรัตนะ</h5>
              <p className="text-[11px] text-slate-500">
                พระสัมมาสัมพุทธเจ้า ผู้ตรัสรู้ชอบได้โดยพระองค์เอง ทรงแสดงปฐมเทศนา
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-sky-200 shadow-2xs space-y-1">
              <div className="w-10 h-10 mx-auto rounded-full bg-sky-100 flex items-center justify-center text-xl">
                📜
              </div>
              <h5 className="font-bold text-sky-900 text-xs sm:text-sm">พระธรรมรัตนะ</h5>
              <p className="text-[11px] text-slate-500">
                ธัมมจักกัปปวัตตนสูตร แสดงทางสายกลาง (มรรค ๘) และอริยสัจ ๔
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-emerald-200 shadow-2xs space-y-1">
              <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-xl">
                🪷
              </div>
              <h5 className="font-bold text-emerald-900 text-xs sm:text-sm">พระสงฆรัตนะ</h5>
              <p className="text-[11px] text-slate-500">
                พระอัญญาโกณฑัญญะ ได้ดวงตาเห็นธรรม ขอบวชเป็นพระสงฆ์รูปแรกในโลก
              </p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 17. ๔ วันสำคัญทางพุทธศาสนา
    // -------------------------------------------------------------
    case 'four-holy-days':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-rose-50 border border-amber-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-200/70 pb-2">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>ปฏิทิน ๔ วันสำคัญทางพระพุทธศาสนา</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
            <div className="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-1">
              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">เพ็ญเดือน ๓</span>
              <h5 className="font-bold text-slate-800">มาฆบูชา</h5>
              <p className="text-[10px] text-slate-500">จาตุรงคสันนิบาต ๑,๒๕๐ รูป / โอวาทปาติโมกข์</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-rose-200 shadow-2xs space-y-1">
              <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">เพ็ญเดือน ๖</span>
              <h5 className="font-bold text-slate-800">วิสาขบูชา</h5>
              <p className="text-[10px] text-slate-500">ประสูติ • ตรัสรู้ • ปรินิพพาน วันสำคัญสากลโลก</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-sky-200 shadow-2xs space-y-1">
              <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">เพ็ญเดือน ๘</span>
              <h5 className="font-bold text-slate-800">อาสาฬหบูชา</h5>
              <p className="text-[10px] text-slate-500">ปฐมเทศนา / พระรัตนตรัยครบองค์ ๓</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-purple-200 shadow-2xs space-y-1">
              <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">แรม ๘ ค่ำ ๖</span>
              <h5 className="font-bold text-slate-800">อัฏฐมีบูชา</h5>
              <p className="text-[10px] text-slate-500">ถวายพระเพลิงพระพุทธสรีระ ณ กุสินารา</p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 18. อาบัติ ๗ กอง
    // -------------------------------------------------------------
    case 'seven-apatti':
    case 'vinaya-seven-apatti':
      return (
        <div className="bg-white border border-sky-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-sky-100 pb-2">
            <span className="text-xs font-bold text-sky-900 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-sky-600" />
              <span>ภาพโครงสร้างอาบัติ ๗ กอง (เรียงลำดับโทษหนักไปหาเบา)</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl space-y-1">
              <span className="font-bold text-red-800 block">🛑 ครุกาบัติ (โทษหนัก)</span>
              <div>๑. <strong>ปาราชิก:</strong> ขาดจากภิกษุทันที รักษาไม่หาย</div>
              <div>๒. <strong>สังฆาทิเสส:</strong> โทษหนัก ต้องอยู่กรรมโดยสงฆ์ ๒๐ รูป</div>
            </div>

            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
              <span className="font-bold text-emerald-800 block">🟢 ลหุกาบัติ (โทษเบา ปลงอาบัติได้)</span>
              <div>๓. <strong>อนิยต:</strong> ความผิดไม่แน่ชัด ไต่สวนตามข้อเท็จจริง</div>
              <div>๔. <strong>ถุลลัจจัย / ๕. ปาจิตตีย์ / ๖. ปาฏิเทสนียะ</strong></div>
              <div>๗. <strong>ทุกกฏ & ทุพภาษิต:</strong> ความผิดเล็กน้อย มารยาท</div>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 19. ปาราชิก ๔ (ขาดจากพระทันที)
    // -------------------------------------------------------------
    case 'parajika-four':
      return (
        <div className="bg-rose-50/60 border border-rose-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-rose-200 pb-2">
            <span className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>ภาพสรุป: ปาราชิก ๔ สิกขาบท (อุปมาตาลยอดด้วน / คนถูกตัดศีรษะ)</span>
            </span>
            <span className="text-[10px] bg-rose-600 text-white px-2 py-0.5 rounded-md font-bold">ขาดทันที</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-center text-xs">
            <div className="p-3 bg-white rounded-xl border border-rose-200 shadow-2xs space-y-1">
              <div className="text-xl">🚫</div>
              <h5 className="font-bold text-rose-900">๑. เสพเมถุน</h5>
              <p className="text-[10px] text-slate-500">ร่วมประเวณีมนุษย์/สัตว์</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-rose-200 shadow-2xs space-y-1">
              <div className="text-xl">💰</div>
              <h5 className="font-bold text-rose-900">๒. ลักทรัพย์</h5>
              <p className="text-[10px] text-slate-500">ราคาตั้งแต่ ๕ มาสกขึ้นไป</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-rose-200 shadow-2xs space-y-1">
              <div className="text-xl">⚔️</div>
              <h5 className="font-bold text-rose-900">๓. ฆ่ามนุษย์</h5>
              <p className="text-[10px] text-slate-500">ฆ่าเองหรือจ้างวานยุยง</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-rose-200 shadow-2xs space-y-1">
              <div className="text-xl">🗣️</div>
              <h5 className="font-bold text-rose-900">๔. อวดอุตตริฯ</h5>
              <p className="text-[10px] text-slate-500">อวดฌาน/มรรคผลที่ไม่มีจริง</p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 20. สังฆาทิเสส ๑๓ & วุฏฐานวิธี
    // -------------------------------------------------------------
    case 'sanghadisesa-steps':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-200 pb-2">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-orange-600" />
              <span>ผังกระบวนการออกจากอาบัติสังฆาทิเสส (วุฏฐานวิธี ๓ ขั้นตอน)</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
            <div className="p-3.5 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-1">
              <span className="font-bold text-amber-800 block text-sm">๑. อยู่ปริวาส</span>
              <p className="text-[11px] text-slate-500">อยู่ชดใช้กรรมเท่ากับจำนวนวันที่ปกปิดอาบัติไว้</p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-blue-200 shadow-2xs space-y-1">
              <span className="font-bold text-blue-800 block text-sm">๒. ประพฤติมานัต</span>
              <p className="text-[11px] text-slate-500">ประพฤติวัตรสำรวมตนอย่างเคร่งครัดเป็นเวลา ๖ ราตรี</p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-emerald-200 shadow-2xs space-y-1">
              <span className="font-bold text-emerald-800 block text-sm">๓. สวดอัพภาน</span>
              <p className="text-[11px] text-slate-500">พระสงฆ์ครบองค์ ๒๐ รูป สวดเรียกเข้าหมู่พ้นมลทิน</p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 21. เสขิยวัตร ๗๕
    // -------------------------------------------------------------
    case 'sekhiya-seventyfive':
      return (
        <div className="bg-white border border-emerald-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
            <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>ภาพจัดหมวดหมู่: เสขิยวัตร ๗๕ ข้อ (มารยาทอันงดงามของสมณะ)</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
              <span className="font-bold text-amber-900 block text-sm">สารูป (๒๖ ข้อ)</span>
              <p className="text-[10px] text-slate-500">การนุ่งห่ม เดิน นั่งในละแวกบ้าน</p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
              <span className="font-bold text-emerald-900 block text-sm">โภชนฯ (๓๐ ข้อ)</span>
              <p className="text-[10px] text-slate-500">มารยาทในการรับและฉันภัตตาหาร</p>
            </div>
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-200 space-y-1">
              <span className="font-bold text-sky-900 block text-sm">ธัมมเทสนาฯ (๑๖ ข้อ)</span>
              <p className="text-[10px] text-slate-500">เคารพธรรม ไม่แสดงธรรมแก่คนไม่เคารพ</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-xl border border-purple-200 space-y-1">
              <span className="font-bold text-purple-900 block text-sm">ปกิณณกะ (๓ ข้อ)</span>
              <p className="text-[10px] text-slate-500">มารยาทการขับถ่าย รักษาสิ่งแวดล้อม</p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 22. สรุปศีล ๒๒๗ สิกขาบท
    // -------------------------------------------------------------
    case 'patimokkha-227':
    case 'vinaya-patimokkha-all':
      return (
        <div className="bg-white border border-amber-200/90 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-100 pb-2">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-sky-600" />
              <span>ผังโครงสร้างพีระมิด: ศีล ๒๒๗ สิกขาบทในพระภิกขุปาติโมกข์</span>
            </span>
          </div>

          <div className="space-y-2">
            <div className="p-3 bg-red-500 text-white rounded-xl flex items-center justify-between shadow-2xs">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-white/20 font-bold text-xs">๔ ข้อ</span>
                <span className="font-bold text-xs sm:text-sm">ปาราชิก (ขาดจากความเป็นพระทันที)</span>
              </div>
              <span className="text-xs text-red-100">รักษาไม่หาย</span>
            </div>
            <div className="p-3 bg-orange-500 text-white rounded-xl flex items-center justify-between shadow-2xs">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-white/20 font-bold text-xs">๑๓ ข้อ</span>
                <span className="font-bold text-xs sm:text-sm">สังฆาทิเสส (อยู่กรรม)</span>
              </div>
              <span className="text-xs text-orange-100">ปริวาส-มานัต-อัพภาน ๒๐ รูป</span>
            </div>
            <div className="p-3 bg-amber-500 text-white rounded-xl flex items-center justify-between shadow-2xs">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-white/20 font-bold text-xs">๓๒ ข้อ</span>
                <span className="font-bold text-xs sm:text-sm">อนิยต ๒ + นิสสัคคิยปาจิตตีย์ ๓๐</span>
              </div>
              <span className="text-xs text-amber-100">สละของก่อนปลงอาบัติ</span>
            </div>
            <div className="p-3 bg-sky-600 text-white rounded-xl flex items-center justify-between shadow-2xs">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-white/20 font-bold text-xs">๙๖ ข้อ</span>
                <span className="font-bold text-xs sm:text-sm">สุทธิกปาจิตตีย์ ๙๒ + ปาฏิเทสนียะ ๔</span>
              </div>
              <span className="text-xs text-sky-100">ปลงอาบัติต่อหน้าภิกษุ</span>
            </div>
            <div className="p-3 bg-emerald-600 text-white rounded-xl flex items-center justify-between shadow-2xs">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-white/20 font-bold text-xs">๘๒ ข้อ</span>
                <span className="font-bold text-xs sm:text-sm">เสขิยวัตร ๗๕ + อธิกรณสมถะ ๗</span>
              </div>
              <span className="text-xs text-emerald-100">รวมเป็น ๒๒๗ สิกขาบท</span>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 23. โครงสร้าง ๔ ขั้นตอนกระทู้
    // -------------------------------------------------------------
    case 'kratu-structure':
    case 'kratu-four-steps':
      return (
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200/90 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-rose-200/60 pb-2">
            <span className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
              <Feather className="w-4 h-4 text-rose-600" />
              <span>ผังขั้นตอนการเขียนกระทู้ธรรม ๔ ลำดับ (แม่กองธรรมสนามหลวง)</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 text-center">
            <div className="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-1">
              <div className="text-[10px] font-bold text-amber-700 bg-amber-50 rounded py-0.5">ขั้นตอนที่ ๑</div>
              <h5 className="font-bold text-slate-800 text-xs sm:text-sm">บทนำ (อารัมภบท)</h5>
              <p className="text-[11px] text-slate-500">นะโม ๓ จบ ตรงกลาง + กระทู้ตั้ง + คำแปล</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-sky-200 shadow-2xs space-y-1">
              <div className="text-[10px] font-bold text-sky-700 bg-sky-50 rounded py-0.5">ขั้นตอนที่ ๒</div>
              <h5 className="font-bold text-slate-800 text-xs sm:text-sm">เนื้อเรื่อง (อธิบาย)</h5>
              <p className="text-[11px] text-slate-500">ขยายความหมาย ชี้เหตุ-ผล อุปมา</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-emerald-200 shadow-2xs space-y-1">
              <div className="text-[10px] font-bold text-emerald-700 bg-emerald-50 rounded py-0.5">ขั้นตอนที่ ๓</div>
              <h5 className="font-bold text-slate-800 text-xs sm:text-sm">สุภาษิตเชื่อม</h5>
              <p className="text-[11px] text-slate-500">อ้างบาลีเสริม ๑ บท อธิบายเชื่อมรับกัน</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-purple-200 shadow-2xs space-y-1">
              <div className="text-[10px] font-bold text-purple-700 bg-purple-50 rounded py-0.5">ขั้นตอนที่ ๔</div>
              <h5 className="font-bold text-slate-800 text-xs sm:text-sm">บทสรุป (ลงท้าย)</h5>
              <p className="text-[11px] text-slate-500">สรุปความ ย้ำกระทู้ตั้ง จบด้วย มีประการฉะนี้แล ฯ</p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 24. กฎเหล็กสนามหลวง (กระทู้ธรรม)
    // -------------------------------------------------------------
    case 'kratu-rules':
      return (
        <div className="bg-rose-50/60 border border-rose-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-rose-200 pb-2">
            <span className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>ภาพจำลองระเบียบสนามหลวง: กระดาษคำตอบ & กฎเหล็ก</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded-xl border border-rose-200 shadow-2xs space-y-1">
              <div className="text-lg">📄</div>
              <h5 className="font-bold text-rose-900">ไม่ต่ำกว่า ๒ หน้า</h5>
              <p className="text-slate-500 text-[11px]">เขียนไม่ถึง ๒ หน้ากระดาษพิมพ์ ปรับตกทันที!</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-1">
              <div className="text-lg">✏️</div>
              <h5 className="font-bold text-amber-900">สะกดคำแม่นยำ</h5>
              <p className="text-slate-500 text-[11px]">สะกดผิดหักจุดละ ๑ คะแนน ห้ามลบเลอะเทอะ</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-emerald-200 shadow-2xs space-y-1">
              <div className="text-lg">🔗</div>
              <h5 className="font-bold text-emerald-900">สุภาษิตเชื่อม ๑ บท</h5>
              <p className="text-slate-500 text-[11px]">ชั้นตรีต้องมี ๑ บท ห้ามขาดและห้ามเกิน</p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 25. คลังสุภาษิตเชื่อม (กรรม & ศีล)
    // -------------------------------------------------------------
    case 'kratu-proverbs':
      return (
        <div className="bg-white border border-amber-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-100 pb-2">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>การ์ดสุภาษิตเชื่อมยอดฮิต: หมวดกรรม & หมวดศีล</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
              <span className="font-bold text-amber-900 block">กมฺมุนา วตฺตตี โลโก</span>
              <p className="text-slate-600 font-semibold text-[11px]">สัตว์โลกย่อมเป็นไปตามกรรม</p>
              <span className="text-[10px] text-amber-700 bg-white px-2 py-0.5 rounded border border-amber-200 inline-block">ใช้เชื่อม: หมวดกรรม / ความเพียร</span>
            </div>

            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
              <span className="font-bold text-emerald-900 block">สีลํ โลเก อนุตฺตรํ</span>
              <p className="text-slate-600 font-semibold text-[11px]">ศีลเป็นเลิศในโลก</p>
              <span className="text-[10px] text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200 inline-block">ใช้เชื่อม: หมวดความประพฤติ / กายวาจา</span>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 26. คลังสุภาษิตเชื่อม (ปัญญา & ความเพียร)
    // -------------------------------------------------------------
    case 'kratu-wisdom':
      return (
        <div className="bg-white border border-indigo-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-indigo-100 pb-2">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>การ์ดสุภาษิตเชื่อมยอดฮิต: หมวดปัญญา & หมวดความเพียร</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-200 space-y-1">
              <span className="font-bold text-indigo-900 block">ปญฺญา โลกสฺมิ ปชฺโชโต</span>
              <p className="text-slate-600 font-semibold text-[11px]">ปัญญาเป็นแสงสว่างในโลก</p>
              <span className="text-[10px] text-indigo-700 bg-white px-2 py-0.5 rounded border border-indigo-200 inline-block">ใช้เชื่อม: หมวดปัญญา / การศึกษา</span>
            </div>

            <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 space-y-1">
              <span className="font-bold text-rose-900 block">วิริเยน ทุกฺขมจฺเจติ</span>
              <p className="text-slate-600 font-semibold text-[11px]">คนล่วงทุกข์ได้เพราะความเพียร</p>
              <span className="text-[10px] text-rose-700 bg-white px-2 py-0.5 rounded border border-rose-200 inline-block">ใช้เชื่อม: หมวดความเพียร / อุปสรรค</span>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 27. ผังบริหารเวลาสอบกระทู้ ๓ ชั่วโมง (๑๐๐ คะแนนเต็ม)
    // -------------------------------------------------------------
    case 'kratu-exam-success':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-emerald-50 border border-emerald-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-emerald-200 pb-2">
            <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>ผังบริหารเวลาสอบ ๓ ชั่วโมง พิชิต ๑๐๐ คะแนนเต็ม</span>
            </span>
            <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-md font-bold">เทคนิคสนามหลวง</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
            <div className="p-3.5 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-1">
              <div className="text-amber-700 font-bold text-sm">๑๕ นาทีแรก</div>
              <p className="text-slate-700 font-medium">อ่านโจทย์ วางโครงเรื่อง เลือกสุภาษิตเชื่อม ๑ บท</p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-emerald-200 shadow-2xs space-y-1">
              <div className="text-emerald-700 font-bold text-sm">๒ ชั่วโมงกลาง</div>
              <p className="text-slate-700 font-medium">ลงมือเขียนบรรยายจริงให้ได้ ๒ หน้าครึ่ง</p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-sky-200 shadow-2xs space-y-1">
              <div className="text-sky-700 font-bold text-sm">๔๕ นาทีสุดท้าย</div>
              <p className="text-slate-700 font-medium">ตรวจทานสะกดคำและคำเชื่อมทีละบรรทัด</p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 28. อริยมรรคมีองค์ ๘ (มัชฌิมาปฏิปทา / ไตรสิกขา)
    // -------------------------------------------------------------
    case 'magga-eight':
      return (
        <div className="bg-gradient-to-br from-amber-500/10 via-white to-orange-500/10 border border-amber-300 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-amber-200 pb-2">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Milestone className="w-4 h-4 text-amber-600" />
              <span>อริยมรรคมีองค์ ๘: ทางสายกลางเพื่อความพ้นทุกข์ (สงเคราะห์ลงในไตรสิกขา)</span>
            </span>
            <span className="text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded-md font-bold">มรรค ๘</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            {/* ปัญญาสิกขา */}
            <div className="p-3.5 bg-amber-50/80 rounded-xl border border-amber-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-900 text-sm">หมวดปัญญา (๒)</span>
                <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded font-semibold">ทัศนะนำทาง</span>
              </div>
              <ul className="space-y-1.5 text-slate-700">
                <li className="flex items-start gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">๑</span>
                  <div>
                    <strong className="text-amber-950 font-bold">สัมมาทิฏฐิ:</strong> เห็นชอบ (เห็นอริยสัจ ๔, เชื่อกรรมและผลของกรรม)
                  </div>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">๒</span>
                  <div>
                    <strong className="text-amber-950 font-bold">สัมมาสังกัปปะ:</strong> ดำริชอบ (ดำริออกจากกาม, ไม่พยาบาท, ไม่เบียดเบียน)
                  </div>
                </li>
              </ul>
            </div>

            {/* สีลสิกขา */}
            <div className="p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-900 text-sm">หมวดศีล (๓)</span>
                <span className="text-[10px] bg-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded font-semibold">กายและวาจา</span>
              </div>
              <ul className="space-y-1.5 text-slate-700">
                <li className="flex items-start gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">๓</span>
                  <div>
                    <strong className="text-emerald-950 font-bold">สัมมาวาจา:</strong> เจรจาชอบ (เว้นเท็จ, ส่อเสียด, คำหยาบ, เพ้อเจ้อ)
                  </div>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">๔</span>
                  <div>
                    <strong className="text-emerald-950 font-bold">สัมมากัมมันตะ:</strong> ทำการงานชอบ (เว้นฆ่าสัตว์, ลักทรัพย์, ประพฤติผิดในกาม)
                  </div>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">๕</span>
                  <div>
                    <strong className="text-emerald-950 font-bold">สัมมาอาชีวะ:</strong> เลี้ยงชีพชอบ (เว้นมิจฉาวณิชชาและอาชีพทุจริต)
                  </div>
                </li>
              </ul>
            </div>

            {/* สมาธิสิกขา */}
            <div className="p-3.5 bg-sky-50/80 rounded-xl border border-sky-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sky-900 text-sm">หมวดสมาธิ (๓)</span>
                <span className="text-[10px] bg-sky-200 text-sky-900 px-1.5 py-0.5 rounded font-semibold">จิตใจสงบมั่นคง</span>
              </div>
              <ul className="space-y-1.5 text-slate-700">
                <li className="flex items-start gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-sky-200 text-sky-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">๖</span>
                  <div>
                    <strong className="text-sky-950 font-bold">สัมมาวายามะ:</strong> พยายามชอบ (สังวรปธาน, ปหานปธาน, ภาวนาปธาน, อนุรักขนาปธาน)
                  </div>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-sky-200 text-sky-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">๗</span>
                  <div>
                    <strong className="text-sky-950 font-bold">สัมมาสติ:</strong> ระลึกชอบ (สติปัฏฐาน ๔: กาย เวทนา จิต ธรรม)
                  </div>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-sky-200 text-sky-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">๘</span>
                  <div>
                    <strong className="text-sky-950 font-bold">สัมมาสมาธิ:</strong> ตั้งใจมั่นชอบ (ฝึกสมาธิแน่วแน่จนบรรลุฌาน)
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 29. โอวาทปาติโมกข์ ๓ (หัวใจพระพุทธศาสนา)
    // -------------------------------------------------------------
    case 'ovada-patimokkha':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-300 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-amber-200 pb-2">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Sun className="w-4 h-4 text-amber-600" />
              <span>โอวาทปาติโมกข์ ๓: หัวใจคำสอนพระพุทธศาสนา (วันมาฆบูชา)</span>
            </span>
            <span className="text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded-md font-bold">หลักการ ๓</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-4 bg-white/90 rounded-xl border border-rose-200 text-center space-y-2 shadow-2xs">
              <div className="w-10 h-10 mx-auto rounded-full bg-rose-100 text-rose-700 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div className="font-bold text-rose-900 text-sm">๑. ไม่ทำบาปทั้งปวง</div>
              <div className="text-[11px] font-serif italic text-rose-800">"สพฺพปาปสฺส อกรณํ"</div>
              <p className="text-slate-600 text-[11px]">งดเว้นความชั่วทางกาย วาจา และใจ รักษากายวาจาให้บริสุทธิ์ผุดผ่อง</p>
            </div>

            <div className="p-4 bg-white/90 rounded-xl border border-emerald-200 text-center space-y-2 shadow-2xs">
              <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="font-bold text-emerald-900 text-sm">๒. ทำกุศลให้ถึงพร้อม</div>
              <div className="text-[11px] font-serif italic text-emerald-800">"กุสลสฺสูปสมฺปทา"</div>
              <p className="text-slate-600 text-[11px]">สร้างสมคุณงามความดี บำเพ็ญบุญกิริยาวัตถุ เจริญเมตตาภาวนา</p>
            </div>

            <div className="p-4 bg-white/90 rounded-xl border border-sky-200 text-center space-y-2 shadow-2xs">
              <div className="w-10 h-10 mx-auto rounded-full bg-sky-100 text-sky-700 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <div className="font-bold text-sky-900 text-sm">๓. ทำจิตให้ผ่องใส</div>
              <div className="text-[11px] font-serif italic text-sky-800">"สจิตฺตปริโยทปนํ"</div>
              <p className="text-slate-600 text-[11px]">ชำระจิตใจให้บริสุทธิ์ ปราศจากนิวรณ์และกิเลสเครื่องเศร้าหมอง</p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 30. เบญจขันธ์ ๕ (รูปและนาม)
    // -------------------------------------------------------------
    case 'five-aggregates':
    case 'khandha-five':
      return (
        <div className="bg-white border border-indigo-200 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-indigo-100 pb-2">
            <span className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>เบญจขันธ์ ๕: กองแห่งชีวิต (รูปธรรม ๑ และ นามธรรม ๔)</span>
            </span>
            <span className="text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded-md font-bold">ขันธ์ ๕</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 text-xs text-center">
            {/* รูป */}
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
              <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded font-bold">รูปธรรม</span>
              <div className="font-bold text-amber-900 text-sm">รูปขันธ์</div>
              <p className="text-slate-600 text-[11px]">ร่างกาย, ธาตุ ๔ (ดิน น้ำ ลม ไฟ) ที่มองเห็นและสัมผัสได้</p>
            </div>

            {/* เวทนา */}
            <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 space-y-1">
              <span className="text-[10px] bg-rose-200 text-rose-900 px-1.5 py-0.5 rounded font-bold">นามธรรม</span>
              <div className="font-bold text-rose-900 text-sm">เวทนาขันธ์</div>
              <p className="text-slate-600 text-[11px]">ความรู้สึกเสวยอารมณ์: สุข ทุกข์ หรือไม่สุขไม่ทุกข์</p>
            </div>

            {/* สัญญา */}
            <div className="p-3 bg-purple-50 rounded-xl border border-purple-200 space-y-1">
              <span className="text-[10px] bg-purple-200 text-purple-900 px-1.5 py-0.5 rounded font-bold">นามธรรม</span>
              <div className="font-bold text-purple-900 text-sm">สัญญาขันธ์</div>
              <p className="text-slate-600 text-[11px]">ความจำได้หมายรู้ จดจำรูป เสียง กลิ่น รส และสัญญาเก่า</p>
            </div>

            {/* สังขาร */}
            <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 space-y-1">
              <span className="text-[10px] bg-blue-200 text-blue-900 px-1.5 py-0.5 rounded font-bold">นามธรรม</span>
              <div className="font-bold text-blue-900 text-sm">สังขารขันธ์</div>
              <p className="text-slate-600 text-[11px]">เจตนาความคิดปรุงแต่งจิต ให้เป็นกุศล อกุศล หรือกลางๆ</p>
            </div>

            {/* วิญญาณ */}
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
              <span className="text-[10px] bg-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded font-bold">นามธรรม</span>
              <div className="font-bold text-emerald-900 text-sm">วิญญาณขันธ์</div>
              <p className="text-slate-600 text-[11px]">ความรู้แจ้งอารมณ์ผ่านทางตา หู จมูก ลิ้น กาย ใจ</p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 31. เบญจศีล ๕ คู่กับ เบญจธรรม ๕ (ข้อห้าม vs ข้อปฏิบัติ)
    // -------------------------------------------------------------
    case 'five-precepts':
    case 'sila-dhamma-five':
      return (
        <div className="bg-white border border-emerald-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
            <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-emerald-600" />
              <span>เบญจศีล ๕ คู่กับ เบญจธรรม ๕: วินัยข้อห้ามและคุณธรรมข้อปฏิบัติ</span>
            </span>
            <span className="text-[10px] bg-emerald-700 text-white px-2 py-0.5 rounded-md font-bold">ศีล ๕ - ธรรม ๕</span>
          </div>

          <div className="space-y-2 text-xs">
            {[
              { num: '๑', sila: 'เว้นจากการฆ่าสัตว์ตัดชีวิต (ปาณาติบาต)', dhamma: 'มีเมตตากรุณาต่อสัตว์และมนุษย์', color: 'rose' },
              { num: '๒', sila: 'เว้นจากการลักทรัพย์ (อทินนาทาน)', dhamma: 'สัมมาอาชีวะ (หาเลี้ยงชีพด้วยความสุจริต)', color: 'amber' },
              { num: '๓', sila: 'เว้นจากการประพฤติผิดในกาม (กาเมสุมิจฉาจาร)', dhamma: 'กามสังวร (ความสำรวมระวังและสันโดษในคู่ครอง)', color: 'purple' },
              { num: '๔', sila: 'เว้นจากการพูดเท็จ พูดส่อเสียด (มุสาวาท)', dhamma: 'สัจจะ (การพูดความจริง จริงใจ รักษาวาจา)', color: 'blue' },
              { num: '๕', sila: 'เว้นจากการดื่มสุราเมรัย ของมึนเมา (สุราเมรัย)', dhamma: 'สติสัมปชัญญะ (ความระลึกได้และความรู้ตัวรอบคอบ)', color: 'emerald' },
            ].map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 items-center">
                <div className="sm:col-span-1 text-center font-bold text-slate-800 bg-white rounded-lg py-1 border border-slate-200">
                  ข้อ {item.num}
                </div>
                <div className="sm:col-span-5 bg-rose-50/70 p-2 rounded-lg border border-rose-200 text-rose-950 font-medium">
                  <span className="text-[10px] font-bold text-rose-700 block">เบญจศีล (ข้อห้าม/ละเว้น):</span>
                  {item.sila}
                </div>
                <div className="hidden sm:flex sm:col-span-1 justify-center text-slate-400 font-bold">
                  ↔
                </div>
                <div className="sm:col-span-5 bg-emerald-50/70 p-2 rounded-lg border border-emerald-200 text-emerald-950 font-medium">
                  <span className="text-[10px] font-bold text-emerald-700 block">เบญจธรรม (ข้อหนุน/ปฏิบัติ):</span>
                  {item.dhamma}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 32. พระรัตนตรัย ๓ ประการ (พุทธ ธรรม สงฆ์)
    // -------------------------------------------------------------
    case 'ratana-three':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-300 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-amber-200 pb-2">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>พระรัตนตรัย: แก้วอันประเสริฐ ๓ ประการที่พึ่งอันสูงสุดของชาวพุทธ</span>
            </span>
            <span className="text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded-md font-bold">สรณะ ๓</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-4 bg-white rounded-xl border border-amber-200 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">พุทธ</div>
                <div>
                  <h4 className="font-bold text-amber-900 text-sm">พระพุทธรัตนะ</h4>
                  <span className="text-[10px] text-amber-700 font-semibold">พระผู้ตรัสรู้ชอบเอง</span>
                </div>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                ประกอบด้วยพระคุณ ๓ ประการ: <strong>พระปัญญาคุณ</strong> (รู้แจ้งเห็นจริง), <strong>พระบริสุทธิคุณ</strong> (หมดจดจากกิเลส), และ <strong>พระมหากรุณาธิคุณ</strong> (โปรดเวไนยสัตว์)
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-emerald-200 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">ธรรม</div>
                <div>
                  <h4 className="font-bold text-emerald-900 text-sm">พระธรรมรัตนะ</h4>
                  <span className="text-[10px] text-emerald-700 font-semibold">คำสั่งสอนของพระศาสดา</span>
                </div>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                เป็นสวากขาตธรรม อันพระพุทธองค์ตรัสไว้ดีแล้ว เป็น <strong>นิยยานิกธรรม</strong> นำผู้ปฏิบัติตามให้พ้นทุกข์ได้จริง ให้ผลไม่จำกัดกาล (อกาลิโก)
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-sky-200 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center font-bold">สงฆ์</div>
                <div>
                  <h4 className="font-bold text-sky-900 text-sm">พระสังฆรัตนะ</h4>
                  <span className="text-[10px] text-sky-700 font-semibold">หมู่สาวกผู้ปฏิบัติดีปฏิบัติชอบ</span>
                </div>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                เป็น <strong>สุปฏิปันโน</strong> ปฏิบัติดีตามพระธรรมวินัย เป็นเนื้อนาบุญของโลก ไม่มีนาบุญอื่นยิ่งกว่า เป็นผู้สืบทอดอายุพระพุทธศาสนา
              </p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 33. โลกธรรม ๘ (อิฏฐารมณ์ vs อนิฏฐารมณ์)
    // -------------------------------------------------------------
    case 'lokadhamma-eight':
      return (
        <div className="bg-white border border-slate-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-amber-600" />
              <span>โลกธรรม ๘: ธรรมดาประจำโลกที่ทุกคนต้องประสบ (ไม่ควรหลงยินดี-ยินร้าย)</span>
            </span>
            <span className="text-[10px] bg-slate-800 text-white px-2 py-0.5 rounded-md font-bold">โลกธรรม ๘</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2">
              <div className="font-bold text-emerald-900 text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>ฝ่ายน่าปรารถนา (อิฏฐารมณ์ ๔)</span>
              </div>
              <ul className="space-y-1 text-slate-700 text-[11px]">
                <li>• <strong>ได้ลาภ:</strong> ได้ทรัพย์สินศฤงคาร ข้าวของเงินทอง</li>
                <li>• <strong>ได้ยศ:</strong> ได้ตำแหน่ง อำนาจ เกียรติยศชื่อเสียง</li>
                <li>• <strong>สรรเสริญ:</strong> ได้รับคำยกย่อง ชื่นชม สดุดี</li>
                <li>• <strong>มีความสุข:</strong> ความสบายกาย สบายใจ ความรื่นรมย์</li>
              </ul>
              <div className="text-[10px] text-emerald-800 bg-white p-1.5 rounded border border-emerald-200 font-medium">
                💡 ข้อเตือนใจ: อย่าหลงใหลมัวเมา เพราะสิ่งเหล่านี้ไม่เที่ยงแท้ แปรปรวนได้
              </div>
            </div>

            <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-200 space-y-2">
              <div className="font-bold text-rose-900 text-sm flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>ฝ่ายไม่น่าปรารถนา (อนิฏฐารมณ์ ๔)</span>
              </div>
              <ul className="space-y-1 text-slate-700 text-[11px]">
                <li>• <strong>เสื่อมลาภ:</strong> ทรัพย์สินหมดไป สูญเสียของรัก</li>
                <li>• <strong>เสื่อมยศ:</strong> หลุดจากตำแหน่ง หมดวาสนาบารมี</li>
                <li>• <strong>นินทา:</strong> ถูกติฉินนินทา ใส่ร้าย ว่าร้าย</li>
                <li>• <strong>มีความทุกข์:</strong> ความไม่สบายกาย ไม่สบายใจ อุปสรรค</li>
              </ul>
              <div className="text-[10px] text-rose-800 bg-white p-1.5 rounded border border-rose-200 font-medium">
                💡 ข้อเตือนใจ: อย่าเศร้าโศกเสียใจ ทำใจให้เป็นกลาง (อุเบกขา) ด้วยปัญญา
              </div>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 34. บารมี ๑๐ ทัศ (คุณธรรมสร้างมหาบุรุษ)
    // -------------------------------------------------------------
    case 'barami-ten':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-200 pb-2">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-600" />
              <span>บารมี ๑๐ ทัศ: คุณธรรมที่พระโพธิสัตว์บำเพ็ญจนบรรลุอนุตตรสัมมาสัมโพธิญาณ</span>
            </span>
            <span className="text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded-md font-bold">ทศบารมี</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs text-center">
            {[
              { name: '๑. ทานบารมี', desc: 'การเสียสละ แบ่งปัน' },
              { name: '๒. ศีลบารมี', desc: 'การรักษากายวาจา' },
              { name: '๓. เนกขัมมบารมี', desc: 'การออกบวช สละกาม' },
              { name: '๔. ปัญญาบารมี', desc: 'การรู้แจ้งแทงตลอด' },
              { name: '๕. วิริยบารมี', desc: 'ความเพียรไม่ย่อท้อ' },
              { name: '๖. ขันติบารมี', desc: 'ความอดทนอดกลั้น' },
              { name: '๗. สัจจบารมี', desc: 'ความจริงใจ ซื่อตรง' },
              { name: '๘. อธิษฐานบารมี', desc: 'ความตั้งใจเด็ดเดี่ยว' },
              { name: '๙. เมตตาบารมี', desc: 'ความปรารถนาดี' },
              { name: '๑๐. อุเบกขาบารมี', desc: 'จิตตั้งมั่นเป็นกลาง' },
            ].map((b, i) => (
              <div key={i} className="p-2.5 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-1">
                <div className="font-bold text-amber-900 text-xs">{b.name}</div>
                <div className="text-[10px] text-slate-600 font-medium">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 35. อบายมุข ๖ (ปากทางแห่งความพินาศ)
    // -------------------------------------------------------------
    case 'apayamuk-six':
      return (
        <div className="bg-white border border-rose-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-rose-100 pb-2">
            <span className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>อบายมุข ๖: หลุมพราง ๖ ประการที่นำพาชีวิตไปสู่ความวิบัติและความยากจน</span>
            </span>
            <span className="text-[10px] bg-rose-600 text-white px-2 py-0.5 rounded-md font-bold">คิหิปฏิบัติ</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
            {[
              { num: '๑', title: 'ดื่มน้ำเมา', desc: 'เสียทรัพย์ ทะเลาะวิวาท เกิดโรค ถูกนินทา เสียสติปัญญา' },
              { num: '๒', title: 'เที่ยวกลางคืน', desc: 'ชื่อว่าไม่คุ้มครองตัว ไม่คุ้มครองครอบครัว เป็นเป้าหมายของความระแวง' },
              { num: '๓', title: 'เที่ยวดูการละเล่น', desc: 'จิตฟุ้งซ่าน ละเลยหน้าที่การงาน ขวนขวายหาแต่สิ่งบันเทิง' },
              { num: '๔', title: 'เล่นการพนัน', desc: 'ผู้ชนะย่อมก่อเวร ผู้แพ้ย่อมเสียดายทรัพย์ ไม่มีใครอยากแต่งงานด้วย' },
              { num: '๕', title: 'คบคนชั่วเป็นมิตร', desc: 'ชักนำไปสู่ความหายนะ มิตรนักเลง มิตรขี้เมา มิตรหลอกลวง' },
              { num: '๖', title: 'เกียจคร้านทำการงาน', desc: 'อ้างหนาวนัก ร้อนนัก สายนัก เช้านัก ทรัพย์ใหม่ไม่เกิด ทรัพย์เก่าหมดไป' },
            ].map((a, i) => (
              <div key={i} className="p-3 bg-rose-50/60 rounded-xl border border-rose-200 space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-900 font-bold flex items-center justify-center text-xs">
                    {a.num}
                  </span>
                  <span className="font-bold text-rose-950 text-sm">{a.title}</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 36. พระอัครสาวกและพระสาวกสำคัญ
    // -------------------------------------------------------------
    case 'buddha-disciples':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-200 pb-2">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-amber-600" />
              <span>พระอัครสาวกและพระมหาเถระคนสำคัญในพุทธกาล</span>
            </span>
            <span className="text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded-md font-bold">พุทธประวัติ</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 text-xs">
            <div className="p-3 bg-white rounded-xl border border-amber-200 space-y-1">
              <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">อัครสาวกเบื้องขวา</span>
              <div className="font-bold text-amber-950 text-sm">พระสารีบุตร</div>
              <p className="text-slate-600 text-[11px]">เป็นเลิศทาง <strong>ปัญญามาก</strong> และเป็นธรรมเสนาบดีช่วยพระบรมศาสดาเผยแผ่ธรรม</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-amber-200 space-y-1">
              <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">อัครสาวกเบื้องซ้าย</span>
              <div className="font-bold text-amber-950 text-sm">พระมหาโมคคัลลานะ</div>
              <p className="text-slate-600 text-[11px]">เป็นเลิศทาง <strong>มีฤทธิ์มาก</strong> ปราบพญานาคนันโทปนันทและโปรดสัตว์ในนรกสวรรค์</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-amber-200 space-y-1">
              <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">พุทธอุปัฏฐาก</span>
              <div className="font-bold text-amber-950 text-sm">พระอานนท์</div>
              <p className="text-slate-600 text-[11px]">เป็นเลิศทาง <strong>พหูสูต มีสติ มีคติ มีธิติ</strong> ผู้จำพระสูตรและสวดรวบรวมในปฐมสังคายนา</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-amber-200 space-y-1">
              <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">ประธานปฐมสังคายนา</span>
              <div className="font-bold text-amber-950 text-sm">พระมหากัสสปะ</div>
              <p className="text-slate-600 text-[11px]">เป็นเลิศทาง <strong>ถือธุดงควัตร</strong> เคร่งครัด เป็นผู้ริเริ่มจัดประชุมปฐมสังคายนา ณ ถ้ำสัตตบรรณคูหา</p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 37. อธิกรณสมถะ ๗ (ธรรมระงับอธิกรณ์ ๔)
    // -------------------------------------------------------------
    case 'adhikarana-seven':
      return (
        <div className="bg-white border border-indigo-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-indigo-100 pb-2">
            <span className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-indigo-600" />
              <span>อธิกรณสมถะ ๗: วิธีระงับเรื่องพิพาทและข้อขัดแย้งในสงฆ์</span>
            </span>
            <span className="text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded-md font-bold">วินัยมุข เล่ม ๑</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {[
              { name: '๑. สัมมุขาวินัย', desc: 'ระงับในที่พร้อมหน้าสงฆ์ บุคคล และวัตถุ (ต้องมีในทุกอธิกรณ์)' },
              { name: '๒. สติวินัย', desc: 'ระงับโดยยกความบริสุทธิ์ให้แก่พระอรหันต์ว่าท่านมีสติสมบูรณ์ ไม่แกล้งทำผิด' },
              { name: '๓. อมูฬหวินัย', desc: 'ระงับโดยยกประโยชน์ให้แก่ผู้ทำผิดในขณะเป็นบ้า (หายบ้าแล้วไม่ต้องรับโทษ)' },
              { name: '๔. ปฏิญญาตกรณะ', desc: 'ปรับอาบัติตามคำรับสารภาพของจำเลย' },
              { name: '๕. เยภุยยสิกา', desc: 'ตัดสินตามเสียงข้างมากของสงฆ์ผู้ชอบธรรม' },
              { name: '๖. ตัสสปาปิยสิกา', desc: 'ลงโทษแก่ผู้กลับกลอก พูดจาไม่อยู่กับร่องกับรอย' },
              { name: '๗. ติณวัตถารกวินัย', desc: 'ประนีประนอมเลิกแล้วต่อกัน เปรียบเหมือนเอาหญ้ากลบสิ่งปฏิกูล' },
            ].map((item, idx) => (
              <div key={idx} className="p-2.5 bg-indigo-50/70 rounded-xl border border-indigo-200 space-y-0.5">
                <span className="font-bold text-indigo-950 block">{item.name}</span>
                <p className="text-slate-600 text-[11px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 38. ศาสนพิธี ๔ หมวด
    // -------------------------------------------------------------
    case 'ceremony-types':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-200 pb-2">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>ศาสนพิธี ๔ หมวด: แบบแผนพิธีกรรมทางพระพุทธศาสนาตามหลักสูตรนักธรรม</span>
            </span>
            <span className="text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded-md font-bold">ศาสนพิธี</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 text-xs text-center">
            <div className="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-1">
              <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">หมวดที่ ๑</span>
              <div className="font-bold text-amber-950 text-sm">กุศลพิธี</div>
              <p className="text-slate-600 text-[11px]">พิธีกรรมอบรมความดี เช่น แสดงตนเป็นพุทธมามกะ, พิธีรักษาอุโบสถศีล</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-1">
              <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">หมวดที่ ๒</span>
              <div className="font-bold text-amber-950 text-sm">บุญพิธี</div>
              <p className="text-slate-600 text-[11px]">พิธีทำบุญของคฤหัสถ์ แบ่งเป็น งานมงคล (ฉลอง, ขึ้นบ้านใหม่) และ งานอวมงคล (งานศพ)</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-1">
              <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">หมวดที่ ๓</span>
              <div className="font-bold text-amber-950 text-sm">ทานพิธี</div>
              <p className="text-slate-600 text-[11px]">พิธีถวายทานต่างๆ เช่น ถวายสังฆทาน, ถวายผ้ากฐิน, ถวายผ้าป่า, ถวายภัตตาหาร</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-1">
              <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">หมวดที่ ๔</span>
              <div className="font-bold text-amber-950 text-sm">ปกิณณกพิธี</div>
              <p className="text-slate-600 text-[11px]">พิธีเบ็ดเตล็ด เช่น การอาราธนาศีล อาราธนาพระปริตร การประเคนของ การกรวดน้ำ</p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 39. งานมงคล vs งานอวมงคล
    // -------------------------------------------------------------
    case 'ceremony-monkhol-a-monkhol':
      return (
        <div className="bg-white border border-amber-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-200 pb-2">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-amber-600" />
              <span>เปรียบเทียบระเบียบปฏิบัติ: งานมงคล vs งานอวมงคล</span>
            </span>
            <span className="text-[10px] bg-amber-700 text-white px-2 py-0.5 rounded-md font-bold">จุดเน้นข้อสอบ</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2">
              <div className="font-bold text-emerald-950 text-sm flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>งานมงคล (ขึ้นบ้านใหม่, บวช, ทำบุญวันเกิด)</span>
              </div>
              <ul className="space-y-1.5 text-slate-700 text-[11px]">
                <li>• <strong>จำนวนพระ:</strong> นิมนต์จำนวนคี่ เช่น ๕, ๗, ๙ รูป (ยกเว้นงานแต่งงานอาจนิมนต์คู่ เช่น ๘ หรือ ๑๐)</li>
                <li>• <strong>ด้ายสายสิญจน์:</strong> วงรอบฐานพระพุทธรูป เวียนขวา (ทักษิณาวรรต) แล้วโยงสู่พระสงฆ์</li>
                <li>• <strong>น้ำพระพุทธมนต์:</strong> มีบาตรน้ำมนต์ เทียนน้ำมนต์ และประพรมน้ำมนต์เพื่อความเป็นสิริมงคล</li>
                <li>• <strong>การอาราธนา:</strong> อาราธนาศีล ๕ และอาราธนาพระปริตรบทเต็ม (วิปัตติปะฏิพาหายะ...)</li>
              </ul>
            </div>

            <div className="p-3.5 bg-slate-100 rounded-xl border border-slate-300 space-y-2">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1">
                <Shield className="w-4 h-4 text-slate-600" />
                <span>งานอวมงคล (งานศพ, ทำบุญอัฐิ, หน้าศพ)</span>
              </div>
              <ul className="space-y-1.5 text-slate-700 text-[11px]">
                <li>• <strong>จำนวนพระ:</strong> สวดอภิธรรม ๔ รูป, สวดมาติกาบังสุกุล มักนิมนต์คู่ (๔, ๘, ๑๐) หรือ ๕, ๗ รูปตามสมควร</li>
                <li>• <strong>ด้ายสายสิญจน์:</strong> โยงจากศพหรือโกศมายังพระสงฆ์ ไม่ผูกเวียนขวารอบพระพุทธรูป</li>
                <li>• <strong>น้ำมนต์:</strong> ไม่มีพิธีทำน้ำพระพุทธมนต์ และไม่มีการประพรมน้ำมนต์</li>
                <li>• <strong>การอาราธนา:</strong> ใช้คำว่า "ปรารภผู้ล่วงลับ" สวดพระอภิธรรมไม่ต้องอาราธนาศีล/ปริตรล่วงหน้า</li>
              </ul>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 40. พิธีทอดกฐินและอานิสงส์กฐิน
    // -------------------------------------------------------------
    case 'ceremony-kathina':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-orange-200 pb-2">
            <span className="text-xs font-bold text-orange-950 flex items-center gap-1.5">
              <Gift className="w-4 h-4 text-orange-600" />
              <span>พิธีทอดกฐิน: กาลทานอันยิ่งใหญ่ ๑ ปีทำได้เพียง ๑ ครั้ง</span>
            </span>
            <span className="text-[10px] bg-orange-600 text-white px-2 py-0.5 rounded-md font-bold">ทานพิธี</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-center">
            <div className="p-3 bg-white rounded-xl border border-orange-200 shadow-2xs space-y-1">
              <span className="font-bold text-orange-900 block text-xs">กำหนดเวลา (กาลทาน)</span>
              <p className="text-slate-600 text-[11px]">
                มีกำหนดเวลา ๑ เดือนเต็ม: ตั้งแต่วันแรม ๑ ค่ำ เดือน ๑๑ ถึงวันขึ้น ๑๕ ค่ำ เดือน ๑๒
              </p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-orange-200 shadow-2xs space-y-1">
              <span className="font-bold text-orange-900 block text-xs">เงื่อนไขพระสงฆ์</span>
              <p className="text-slate-600 text-[11px]">
                วัดนั้นต้องมีพระภิกษุจำพรรษาครบ ๓ เดือนโดยไม่ขาดพรรษาอย่างน้อย <strong>๕ รูป</strong> ขึ้นไป
              </p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-orange-200 shadow-2xs space-y-1">
              <span className="font-bold text-orange-900 block text-xs">อานิสงส์กฐิน ๕ ประการ</span>
              <p className="text-slate-600 text-[11px]">
                เที่ยวไปไม่ต้องบอกลา, ไม่ต้องเอาไตรจีวรไปครบสำรับ, ฉันคณะโภชน์ได้, เก็บอดิเรกจีวรได้ตามปรารถนา
              </p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 41. โครงสร้างแบบฟอร์มการเขียนกระทู้ธรรมจริง
    // -------------------------------------------------------------
    case 'kratu-sample-format':
      return (
        <div className="bg-white border border-amber-300 rounded-2xl p-5 shadow-xs space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-amber-200 pb-2">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-amber-600" />
              <span>แบบฟอร์มการเขียนเรียงความแก้กระทู้ธรรมจริง (มาตรฐานแม่กองธรรมสนามหลวง)</span>
            </span>
            <span className="text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded-md font-bold">ตัวอย่างฟอร์มจริง</span>
          </div>

          <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200 text-xs space-y-3 text-slate-800 leading-relaxed font-serif">
            {/* สุภาษิตบทตั้ง */}
            <div className="text-center space-y-1 py-1 border-b border-amber-200">
              <div className="font-bold text-amber-950 text-sm tracking-wide">อตฺตา หิ อตฺตโน นาโถ.</div>
              <div className="text-slate-600 italic">ตนแล เป็นที่พึ่งของตน.</div>
            </div>

            {/* คำนำ */}
            <div>
              <p className="text-justify indent-6">
                <strong>[คำนำ]</strong> บัดนี้ จักได้อธิบายขยายเนื้อความแห่งกระทู้ธรรมภาษิตที่ได้ยกขึ้นเป็นอุเทศ ณ เบื้องต้นนั้น พอเป็นแนวทางแห่งการประพฤติปฏิบัติและประดับสติปัญญาของสาธุชนสืบต่อไป...
              </p>
            </div>

            {/* เนื้อเรื่องและการอ้างสุภาษิต */}
            <div>
              <p className="text-justify indent-6">
                <strong>[เนื้อเรื่อง]</strong> คำว่า "ตนเป็นที่พึ่งของตน" นั้น อธิบายความว่า มนุษย์ทุกคนเกิดมาในโลก ย่อมต้องอาศัยสองมือหนึ่งสมองของตนในการสร้างคุณงามความดี การพึ่งพาผู้อื่นย่อมไม่ยั่งยืน... สมดังพระพุทธศาสนสุภาษิตที่มาใน...ว่า :
              </p>
              <div className="my-2 p-2 bg-white rounded-lg border border-amber-200 text-center font-bold text-amber-900">
                กมฺมุนา วตฺตตี โลโก. (สัตว์โลกย่อมเป็นไปตามกรรม.)
              </div>
              <p className="text-justify indent-6">
                ความหมายแห่งธรรมภาษิตนี้ว่า การกระทำของตนเองนั่นแหละที่เป็นผู้กำหนดชะตาชีวิต บุคคลหว่านพืชเช่นใดย่อมได้รับผลเช่นนั้น...
              </p>
            </div>

            {/* สรุป */}
            <div>
              <p className="text-justify indent-6">
                <strong>[สรุป]</strong> สรุปความว่า บุคคลผู้ปรารถนาความสุขความเจริญ พึงฝึกหัดตนให้พึ่งพาตนเองได้ทั้งทางกาย วาจา และใจ... สมดังพุทธภาษิตที่ยกขึ้นเป็นอุเทศ ณ เบื้องต้นว่า <em>"อตฺตา หิ อตฺตโน นาโถ"</em> ตนแลเป็นที่พึ่งของตน ดังพรรณนามาด้วยประการฉะนี้ ฯ
              </p>
            </div>
          </div>
        </div>
      );


    // -------------------------------------------------------------
    // 42. กุศลกรรมบถ ๑๐ & อกุศลกรรมบถ ๑๐
    // -------------------------------------------------------------
    case 'kammpath-ten':
      return (
        <div className="bg-white border border-amber-300 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-amber-200 pb-2">
            <span className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-amber-600" />
              <span>กรรมบถ ๑๐: ทางแห่งกรรมสุจริต (กุศล) vs กรรมทุจริต (อกุศล) ๓ ทวาร</span>
            </span>
            <span className="text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded-md font-bold">กาย-วาจา-ใจ</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            {/* กายกรรม ๓ */}
            <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200 space-y-2">
              <div className="font-bold text-amber-950 text-sm flex items-center justify-between">
                <span>กายกรรม ๓</span>
                <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded">ทางกาย</span>
              </div>
              <ul className="space-y-1 text-slate-700 text-[11px]">
                <li>• <strong>เว้นฆ่าสัตว์:</strong> ไม่ทำลายชีวิต มีเมตตา</li>
                <li>• <strong>เว้นลักทรัพย์:</strong> ไม่ขโมย ถือสันโดษ</li>
                <li>• <strong>เว้นประพฤติผิดในกาม:</strong> สันโดษในคู่ตน</li>
              </ul>
            </div>

            {/* วจีกรรม ๔ */}
            <div className="p-3 bg-sky-50/70 rounded-xl border border-sky-200 space-y-2">
              <div className="font-bold text-sky-950 text-sm flex items-center justify-between">
                <span>วจีกรรม ๔</span>
                <span className="text-[10px] bg-sky-200 text-sky-900 px-1.5 py-0.5 rounded">ทางวาจา</span>
              </div>
              <ul className="space-y-1 text-slate-700 text-[11px]">
                <li>• <strong>เว้นพูดเท็จ:</strong> พูดแต่คำสัตย์จริง</li>
                <li>• <strong>เว้นพูดส่อเสียด:</strong> ไม่ยุแยงประสานสามัคคี</li>
                <li>• <strong>เว้นพูดคำหยาบ:</strong> พูดไพเราะสุภาพ</li>
                <li>• <strong>เว้นพูดเพ้อเจ้อ:</strong> พูดมีสาระประโยชน์</li>
              </ul>
            </div>

            {/* มโนกรรม ๓ */}
            <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-2">
              <div className="font-bold text-emerald-950 text-sm flex items-center justify-between">
                <span>มโนกรรม ๓</span>
                <span className="text-[10px] bg-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded">ทางใจ</span>
              </div>
              <ul className="space-y-1 text-slate-700 text-[11px]">
                <li>• <strong>ไม่อยากได้ของเขา:</strong> ไม่เพ่งเล็งละโมบ</li>
                <li>• <strong>ไม่พยาบาท:</strong> ปรารถนาดีต่อสรรพสัตว์</li>
                <li>• <strong>สัมมาทิฏฐิ:</strong> เห็นถูกตามคลองธรรม</li>
              </ul>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 43. บุญกิริยาวัตถุ ๑๐ ประการ
    // -------------------------------------------------------------
    case 'boon-ten':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-200 pb-2">
            <span className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>บุญกิริยาวัตถุ ๑๐: ที่ตั้งแห่งการทำบุญ ๑๐ วิธีในพระพุทธศาสนา</span>
            </span>
            <span className="text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded-md font-bold">บุญ ๑๐ ทาง</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs text-center">
            {[
              { name: '๑. ทานมัย', desc: 'ทำบุญด้วยการแบ่งปัน' },
              { name: '๒. สีลมัย', desc: 'ทำบุญด้วยการรักษาศีล' },
              { name: '๓. ภาวนามัย', desc: 'ทำบุญด้วยการเจริญจิต' },
              { name: '๔. อปจายนมัย', desc: 'ทำบุญด้วยการอ่อนน้อม' },
              { name: '๕. เวยยาวัจจมัย', desc: 'ทำบุญด้วยการช่วยงาน' },
              { name: '๖. ปัตติทานมัย', desc: 'ทำบุญด้วยการอุทิศบุญ' },
              { name: '๗. ปัตตานุโมทนา', desc: 'ทำบุญด้วยยินดีในบุญ' },
              { name: '๘. ธัมมัสสวนะ', desc: 'ทำบุญด้วยการฟังธรรม' },
              { name: '๙. ธัมมเทสนา', desc: 'ทำบุญด้วยการสั่งสอน' },
              { name: '๑๐. ทิฏฐุชุกัมม์', desc: 'ทำความเห็นให้ถูกต้อง' },
            ].map((item, idx) => (
              <div key={idx} className="p-2.5 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-0.5">
                <span className="font-bold text-amber-900 block text-xs">{item.name}</span>
                <span className="text-[10px] text-slate-600">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 44. ทิฏฐธัมมิกัตถประโยชน์ ๔ (หัวใจเศรษฐี อุ อา กะ สะ)
    // -------------------------------------------------------------
    case 'dittadhamma-four':
      return (
        <div className="bg-white border border-amber-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-200 pb-2">
            <span className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
              <Coins className="w-4 h-4 text-amber-600" />
              <span>ทิฏฐธัมมิกัตถประโยชน์ ๔: "หัวใจเศรษฐี" (อุ อา กะ สะ) ประโยชน์ในชาตินี้</span>
            </span>
            <span className="text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded-md font-bold">อุ อา กะ สะ</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 text-xs">
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 space-y-1 text-center">
              <div className="w-8 h-8 mx-auto rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-sm shadow-xs">อุ</div>
              <span className="font-bold text-amber-950 block text-xs">อุฏฐานสัมปทา</span>
              <p className="text-slate-600 text-[11px]">ถึงพร้อมด้วยความหมั่น ขยันสร้างทรัพย์ สุจริต</p>
            </div>

            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1 text-center">
              <div className="w-8 h-8 mx-auto rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">อา</div>
              <span className="font-bold text-emerald-950 block text-xs">อารักขสัมปทา</span>
              <p className="text-slate-600 text-[11px]">ถึงพร้อมด้วยการรักษาทรัพย์ ปลอดภัยจากภัยโจร</p>
            </div>

            <div className="p-3 bg-sky-50 rounded-xl border border-sky-200 space-y-1 text-center">
              <div className="w-8 h-8 mx-auto rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">กะ</div>
              <span className="font-bold text-sky-950 block text-xs">กัลยาณมิตตตา</span>
              <p className="text-slate-600 text-[11px]">ถึงพร้อมด้วยการคบคนดี เว้นมิตรชั่วและอบายมุข</p>
            </div>

            <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-200 space-y-1 text-center">
              <div className="w-8 h-8 mx-auto rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">สะ</div>
              <span className="font-bold text-indigo-950 block text-xs">สมชีวิตา</span>
              <p className="text-slate-600 text-[11px]">การครองชีพพอเหมาะพอดี ไม่ฟุ่มเฟือยไม่ตระหนี่</p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 45. สัปปุริสธรรม ๗ (ธรรมของสัตบุรุษ)
    // -------------------------------------------------------------
    case 'seven-ariyadhamma':
    case 'sappurisa-seven':
      return (
        <div className="bg-white border border-indigo-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-indigo-100 pb-2">
            <span className="text-xs font-bold text-indigo-950 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-indigo-600" />
              <span>สัปปุริสธรรม ๗: คุณสมบัติ ๗ ประการของผู้มีความรู้และผู้นำที่ดี</span>
            </span>
            <span className="text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded-md font-bold">ธรรมคนดี</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 text-xs text-center">
            {[
              { num: '๑', title: 'ธัมมัญญุตา', desc: 'รู้จักเหตุ' },
              { num: '๒', title: 'อัตถัญญุตา', desc: 'รู้จักผล' },
              { num: '๓', title: 'อัตตัญญุตา', desc: 'รู้จักตน' },
              { num: '๔', title: 'มัตตัญญุตา', desc: 'รู้จักประมาณ' },
              { num: '๕', title: 'กาลัญญุตา', desc: 'รู้จักกาล' },
              { num: '๖', title: 'ปริสัญญุตา', desc: 'รู้จักชุมชน' },
              { num: '๗', title: 'ปุคคลัญญุตา', desc: 'รู้จักบุคคล' },
            ].map((item, idx) => (
              <div key={idx} className="p-2 bg-indigo-50/70 rounded-xl border border-indigo-200 space-y-1">
                <span className="w-5 h-5 mx-auto rounded-full bg-indigo-200 text-indigo-900 font-bold flex items-center justify-center text-[11px]">{item.num}</span>
                <span className="font-bold text-indigo-950 block text-[11px]">{item.title}</span>
                <span className="text-[10px] text-slate-600">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 46. อนัตตลักขณสูตร (พระสูตรโปรดปัญจวัคคีย์บรรลุพระอรหันต์)
    // -------------------------------------------------------------
    case 'anatta-sermon':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-200 pb-2">
            <span className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
              <Sun className="w-4 h-4 text-amber-600" />
              <span>อนัตตลักขณสูตร: พระสูตรที่ ๒ ที่ทรงแสดงโปรดปัญจวัคคีย์จนบรรลุพระอรหันต์</span>
            </span>
            <span className="text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded-md font-bold">พระอรหันต์ ๕ องค์แรก</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 bg-white rounded-xl border border-amber-200 space-y-1 text-center shadow-2xs">
              <span className="font-bold text-amber-900 text-sm block">๑. อนิจจัง</span>
              <p className="text-slate-600 text-[11px]">ขันธ์ ๕ (รูป เวทนา สัญญา สังขาร วิญญาณ) ไม่เที่ยง เกิดขึ้น ตั้งอยู่ แปรปรวน ดับไป</p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-rose-200 space-y-1 text-center shadow-2xs">
              <span className="font-bold text-rose-900 text-sm block">๒. ทุกขัง</span>
              <p className="text-slate-600 text-[11px]">ขันธ์ ๕ เป็นทุกข์ ทนอยู่ในสภาพเดิมไม่ได้ บีบคั้น</p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-emerald-200 space-y-1 text-center shadow-2xs">
              <span className="font-bold text-emerald-900 text-sm block">๓. อนัตตา</span>
              <p className="text-slate-600 text-[11px]">ขันธ์ ๕ มิใช่ตัวตน บังคับไม่ได้ ว่าตามอำนาจไม่ได้ สละความยึดมั่น</p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 47. วัดเวฬุวันมหาวิหาร และการโปรดพระเจ้าพิมพิสาร
    // -------------------------------------------------------------
    case 'first-temple-veluvana':
      return (
        <div className="bg-white border border-emerald-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-emerald-200 pb-2">
            <span className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
              <TreePine className="w-4 h-4 text-emerald-600" />
              <span>พระเวฬุวันมหาวิหาร: วัดแห่งแรกในพระพุทธศาสนา ณ กรุงราชคฤห์</span>
            </span>
            <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-md font-bold">ปฐมอาราม</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
              <span className="font-bold text-emerald-900 block">พระเจ้าพิมพิสารถวายอาราม</span>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                ทรงหลั่งน้ำทักษิโณทกลงบนพระหัตถ์ของพระบรมศาสดา อุทิศพระราชอุทยานป่าไผ่ (เวฬุวัน) ให้เป็นสังฆาราม เป็นวัดแห่งแรกในโลก
              </p>
            </div>

            <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
              <span className="font-bold text-amber-900 block">สถานที่เกิดเหตุการณ์ประวัติศาสตร์</span>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                เป็นที่ประชุมจาตุรงคสันนิบาต วันมาฆบูชา (พระอรหันต์ ๑,๒๕๐ รูป) และเป็นที่ประทับจำพรรษาแรกๆ ในแคว้นมคธ
              </p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 48. ส่งพระสาวก ๖๐ รูปเผยแผ่พระพุทธศาสนา
    // -------------------------------------------------------------
    case 'sixty-monks-mission':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-orange-200 pb-2">
            <span className="text-xs font-bold text-orange-950 flex items-center gap-1.5">
              <Send className="w-4 h-4 text-orange-600" />
              <span>การส่งพระสาวก ๖๐ รูปไปประกาศพระศาสนา (พระอรหันต์รุ่นแรก)</span>
            </span>
            <span className="text-[10px] bg-orange-600 text-white px-2 py-0.5 rounded-md font-bold">พุทธวจนะส่งสาวก</span>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-orange-200 text-xs space-y-2">
            <div className="text-center italic font-serif text-amber-900 text-xs sm:text-sm font-semibold">
              "จรถ ภิกฺขเว จาริกํ พหุชนหิตาย พหุชนสุขาย โลกานุกมฺปาย..."
            </div>
            <p className="text-slate-700 text-[11px] leading-relaxed text-justify">
              "ภิกษุทั้งหลาย! เธอทั้งหลายจงจาริกไป เพื่อประโยชน์เกื้อกูลแก่ชนหมู่มาก เพื่อความสุขแก่ชนหมู่มาก เพื่ออนุเคราะห์แก่ชาวโลก... จงแสดงธรรมงามในเบื้องต้น งามในท่ามกลาง งามในที่สุด พร้อมทั้งอรรถและพยัญชนะ... อย่าไปรวมทางเดียวกันสองรูป..."
            </p>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 49. รวมคำอาราธนาสำคัญ (ศีล, พระปริตร, ธรรม)
    // -------------------------------------------------------------
    case 'chants-paritta':
      return (
        <div className="bg-white border border-sky-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-sky-200 pb-2">
            <span className="text-xs font-bold text-sky-950 flex items-center gap-1.5">
              <ScrollText className="w-4 h-4 text-sky-600" />
              <span>รวมคำอาราธนาในศาสนพิธี: อาราธนาศีล ๕, พระปริตร, และพระธรรม</span>
            </span>
            <span className="text-[10px] bg-sky-600 text-white px-2 py-0.5 rounded-md font-bold">ระเบียบบทสวด</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-200 space-y-1">
              <span className="font-bold text-sky-900 block text-xs">๑. อาราธนาศีล ๕</span>
              <p className="text-slate-600 font-serif italic text-[11px]">"มะยัง ภันเต วิสุง วิสุง รักขะณัตถายะ ติสะระเณนะ สะหะ ปัญจะ สีลานิ ยาจามะ..."</p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
              <span className="font-bold text-emerald-900 block text-xs">๒. อาราธนาพระปริตร</span>
              <p className="text-slate-600 font-serif italic text-[11px]">"วิปัตติปะฏิพาหายะ สัพพะสัมปัตติสิทธิยา สัพพะทุกขะวินาสายะ ปะริตตัง พรูถะ มังคะลัง..."</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
              <span className="font-bold text-amber-900 block text-xs">๓. อาราธนาธรรม</span>
              <p className="text-slate-600 font-serif italic text-[11px]">"พรหมา จ โลกาธิปตี สะหัมปะติ กัตอัญชะลี อันธิวะรัง อะยาจิถะ สันตีธะ สัตตาปปะระชักขะชาติกา..."</p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 50. คำถวายทานสำคัญ (สังฆทาน, ผ้าป่า, กฐิน)
    // -------------------------------------------------------------
    case 'dāna-words':
      return (
        <div className="bg-white border border-amber-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-200 pb-2">
            <span className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
              <Gift className="w-4 h-4 text-amber-600" />
              <span>คำถวายทานยอดนิยมในทานพิธี: สังฆทาน, ผ้าป่า, และผ้ากฐิน</span>
            </span>
            <span className="text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded-md font-bold">ทานพิธี</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
              <span className="font-bold text-amber-900 block text-xs">ถวายสังฆทาน</span>
              <p className="text-slate-600 font-serif italic text-[11px]">"อิมานิ มะยัง ภันเต ภัตตานิ สะปะริวารานิ ภิกขุสังฆัสสะ โอโณชะยามะ..."</p>
              <span className="text-[10px] text-amber-700 block">ถวายภัตตาหารเพื่อสงฆ์</span>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
              <span className="font-bold text-emerald-900 block text-xs">ถวายผ้าป่า</span>
              <p className="text-slate-600 font-serif italic text-[11px]">"อิมานิ มะยัง ภันเต ปังสุกูละจีวะรานิ สะปะริวารานิ ภิกขุสังฆัสสะ..."</p>
              <span className="text-[10px] text-emerald-700 block">ถวายผ้าบังสุกุลจีวร</span>
            </div>
            <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 space-y-1">
              <span className="font-bold text-rose-900 block text-xs">ถวายผ้ากฐิน</span>
              <p className="text-slate-600 font-serif italic text-[11px]">"อิมัง ภันเต สะปะริวารัง กะฐินะจีวะระทุสสัง สังฆัสสะ โอโณชะยามะ..."</p>
              <span className="text-[10px] text-rose-700 block">กาลทาน ๑ เดือนเท่านั้น</span>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 51. การจัดโต๊ะหมู่บูชาและเครื่องสักการะ (table-altar-set)
    // -------------------------------------------------------------
    case 'table-altar-set':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50/60 border border-amber-300 rounded-2xl p-5 shadow-xs space-y-3.5">
          <div className="flex items-center justify-between border-b border-amber-200/80 pb-2">
            <span className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>ผังมาตรฐานการจัดโต๊ะหมู่บูชาและลำดับการจุดธูปเทียนบูชาพระ</span>
            </span>
            <span className="text-[10px] bg-amber-500 text-white px-2.5 py-0.5 rounded-full font-bold">ศาสนพิธี</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 bg-white rounded-xl border border-amber-200 text-center space-y-2 shadow-2xs">
              <div className="w-10 h-10 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-lg font-bold">
                🪷
              </div>
              <span className="font-bold text-amber-900 block text-xs">ชั้นสูงสุด: พระพุทธรูป</span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                ประดิษฐาน ณ โต๊ะตัวบนสุดตรงกลาง หันพระพักตร์ไปทางทิศตะวันออกหรือทิศเหนือ
              </p>
            </div>

            <div className="p-3.5 bg-white rounded-xl border border-amber-200 text-center space-y-2 shadow-2xs">
              <div className="w-10 h-10 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-lg font-bold">
                🕯️
              </div>
              <span className="font-bold text-amber-900 block text-xs">แจกันดอกไม้ ๒ ข้าง & เชิงเทียน ๒ เล่ม</span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                ดอกไม้บูชาพระสงฆ์ · เทียนเล่มขวาบูชาพระธรรม · เทียนเล่มซ้ายบูชาพระวินัย
              </p>
            </div>

            <div className="p-3.5 bg-white rounded-xl border border-amber-200 text-center space-y-2 shadow-2xs">
              <div className="w-10 h-10 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-lg font-bold">
                💨
              </div>
              <span className="font-bold text-amber-900 block text-xs">แถวหน้า: กระถางธูป ๓ ดอก</span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                บูชาพระพุทธคุณ ๓ ประการ: พระบริสุทธิคุณ, พระปัญญาคุณ, พระมหากรุณาธิคุณ
              </p>
            </div>
          </div>

          <div className="bg-amber-100/70 rounded-xl p-2.5 text-[11px] text-amber-900 font-semibold flex items-center justify-between flex-wrap gap-2">
            <span>✨ <strong>ลำดับการจุด:</strong> จุดเทียนขวาของพระพุทธรูปก่อน ➔ จุดเทียนซ้าย ➔ จุดธูป ๓ ดอก ➔ กราบเบญจางคประดิษฐ์ ๓ ครั้ง</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 52. สังเวชนียสถาน ๔ ตำบล (four-buddha-places)
    // -------------------------------------------------------------
    case 'four-buddha-places':
      return (
        <div className="bg-white border border-sky-300 rounded-2xl p-5 shadow-xs space-y-3.5">
          <div className="flex items-center justify-between border-b border-sky-100 pb-2">
            <span className="text-xs font-bold text-sky-950 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-sky-600" />
              <span>ผัง ๔ สังเวชนียสถาน: สถานที่อันเป็นที่ตั้งแห่งความเลื่อมใสของพุทธบริษัท</span>
            </span>
            <span className="text-[10px] bg-sky-600 text-white px-2 py-0.5 rounded-md font-bold">พุทธประวัติ</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-200 space-y-1">
              <span className="font-bold text-sky-900 block">๑. สถานที่ประสูติ</span>
              <p className="text-[11px] font-semibold text-slate-700">ลุมพินีวัน (เนปาล)</p>
              <p className="text-[10px] text-slate-500">วันเพ็ญเดือน ๖ ใต้ต้นรัง สาลวโนทยาน</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
              <span className="font-bold text-amber-900 block">๒. สถานที่ตรัสรู้</span>
              <p className="text-[11px] font-semibold text-slate-700">พุทธคยา (อินเดีย)</p>
              <p className="text-[10px] text-slate-500">ควงไม้ศรีมหาโพธิ์ ริมฝั่งแม่น้ำเนรัญชรา</p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
              <span className="font-bold text-emerald-900 block">๓. สถานที่ปฐมเทศนา</span>
              <p className="text-[11px] font-semibold text-slate-700">สารนาถ (พาราณสี)</p>
              <p className="text-[10px] text-slate-500">ป่าอิสิปตนมฤคทายวัน โปรดปัญจวัคคีย์</p>
            </div>
            <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 space-y-1">
              <span className="font-bold text-rose-900 block">๔. สถานที่ปรินิพพาน</span>
              <p className="text-[11px] font-semibold text-slate-700">กุสินารา (อินเดีย)</p>
              <p className="text-[10px] text-slate-500">สาลวโนทยานแห่งมัลลกษัตริย์ ระหว่างต้นสาละคู่</p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 53. มหาปรินิพพาน (buddha-parinibbana)
    // -------------------------------------------------------------
    case 'buddha-parinibbana':
      return (
        <div className="bg-gradient-to-br from-purple-50 to-rose-50/70 border border-purple-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-purple-200/80 pb-2">
            <span className="text-xs font-bold text-purple-950 flex items-center gap-1.5">
              <Moon className="w-4 h-4 text-purple-600" />
              <span>เหตุการณ์มหาปรินิพพาน ณ สาลวโนทยาน เมืองกุสินารา</span>
            </span>
            <span className="text-[10px] bg-purple-600 text-white px-2 py-0.5 rounded-md font-bold">ปัจฉิมกาล</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded-xl border border-purple-200 space-y-1">
              <span className="font-bold text-purple-900 block">พระสุภัททะ ปัจฉิมสาวก</span>
              <p className="text-[11px] text-slate-600">
                ปริพาชกทูลถามความจริง ทรงแสดงอริยมรรคมีองค์ ๘ จนบรรลุพระอรหันต์เป็นองค์สุดท้าย
              </p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-purple-200 space-y-1">
              <span className="font-bold text-purple-900 block">พระปัจฉิมโอวาท</span>
              <p className="text-[11px] text-slate-600 font-serif italic">
                "วยธมฺมา สงฺขารา อปฺปมาเทน สมฺปาเทถ" (สังขารเสื่อมเป็นธรรมดา จงยังความไม่ประมาทให้ถึงพร้อม)
              </p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-purple-200 space-y-1">
              <span className="font-bold text-purple-900 block">ศาสดาแทนพระองค์</span>
              <p className="text-[11px] text-slate-600">
                พระธรรมและพระวินัยที่ทรงแสดงไว้ดีแล้ว จักเป็นศาสดาแทนพระองค์เมื่อล่วงลับไป
              </p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 54. ถวายพระเพลิง & แจกพระธาตุ (buddha-cremation-stupa)
    // -------------------------------------------------------------
    case 'buddha-cremation-stupa':
      return (
        <div className="bg-white border border-amber-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-amber-200 pb-2">
            <span className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-orange-500" />
              <span>การถวายพระเพลิง ณ มกุฏพันธนเจดีย์ & โทณพราหมณ์แบ่งพระบรมสารีริกธาตุ</span>
            </span>
            <span className="text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded-md font-bold">อปรการ</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
              <span className="font-bold text-amber-900 block">🔥 มกุฏพันธนเจดีย์แห่งมัลลกษัตริย์</span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                ไฟไม่ติดจนกระทั่งพระมหากัสสปะพร้อมด้วยพระสงฆ์ ๕๐๐ รูปเดินทางมาถึงและกราบถวายบังคมพระยุคลบาท เพลิงทิพย์จึงลุกโชนขึ้นเอง
              </p>
            </div>
            <div className="p-3.5 bg-orange-50 rounded-xl border border-orange-200 space-y-1">
              <span className="font-bold text-orange-900 block">⚖️ โทณพราหมณ์ตวงแบ่งพระบรมสารีริกธาตุ</span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                ใช้ทะนานทองตวงพระบรมสารีริกธาตุแบ่งออกเป็น ๘ ส่วนเท่ากันแก่กษัตริย์ ๘ แว่นแคว้น เพื่อนำไปสร้างพระสถูปเจดีย์บูชา
              </p>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // 55. ลำดับความหนักเบาพระวินัย (vinaya-rules)
    // -------------------------------------------------------------
    case 'vinaya-rules':
      return (
        <div className="bg-white border border-emerald-300 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
            <span className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-emerald-600" />
              <span>ลำดับชั้นความหนักเบาแห่งสิกขาบทพระวินัย (พระปาติโมกข์ ๒๒๗ ข้อ)</span>
            </span>
            <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-md font-bold">วินัยมุข</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
            <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 space-y-1">
              <span className="font-bold text-rose-900 block">ปาราชิก ๔ ข้อ</span>
              <p className="text-[11px] text-rose-700 font-semibold">ขาดจากความเป็นพระทันที</p>
              <p className="text-[10px] text-slate-500">เสพเมถุน, ลัก ๕ มาสก, ฆ่ามนุษย์, อวดอุตตริมนุสสธรรม</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
              <span className="font-bold text-amber-900 block">สังฆาทิเสส ๑๓ ข้อ</span>
              <p className="text-[11px] text-amber-700 font-semibold">อาบัติหนัก ต้องอยู่กรรม</p>
              <p className="text-[10px] text-slate-500">ต้องอาศัยสงฆ์ ๒๐ รูปสวดอัพภานเรียกเข้าหมู่</p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
              <span className="font-bold text-emerald-900 block">นิสสัคคิยปาจิตตีย์ ๓๐</span>
              <p className="text-[11px] text-emerald-700 font-semibold">ต้องสละของก่อนปลงอาบัติ</p>
              <p className="text-[10px] text-slate-500">จีวรวรรค ๑๐, โกสิยวรรค ๑๐, ปัตตวรรค ๑๐</p>
            </div>
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-200 space-y-1">
              <span className="font-bold text-sky-900 block">ปาจิตตีย์ ๙๒ & เสขิยวัตร ๗๕</span>
              <p className="text-[11px] text-sky-700 font-semibold">อาบัติเบา & มารยาทอันดีงาม</p>
              <p className="text-[10px] text-slate-500">สารูป ๒๖, โภชนะ ๓๐, เทศนา ๑๖, ปกิณณกะ ๓</p>
            </div>
          </div>
        </div>
      );

    default:
      // Smart Dynamic Buddhist Diagram for any slide without bespoke illustration
      return (
        <div className="bg-gradient-to-br from-amber-50/80 via-white to-orange-50/50 border-2 border-amber-200/90 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3.5">
          <div className="flex items-center justify-between border-b border-amber-100 pb-2">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>แผนภาพประกอบการสอน: {title || 'สรุปมโนทัศน์ประจำสไลด์'}</span>
            </span>
            {categoryTag && (
              <span className="text-[10px] bg-amber-200/80 text-amber-900 px-2.5 py-0.5 rounded-full font-bold">
                {categoryTag}
              </span>
            )}
          </div>

          {diagramItems && diagramItems.length > 0 && (
            <div className={`grid grid-cols-1 ${
              diagramItems.length === 2 ? 'sm:grid-cols-2' :
              diagramItems.length === 3 ? 'sm:grid-cols-3' :
              diagramItems.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' :
              'sm:grid-cols-2 md:grid-cols-3'
            } gap-2.5`}>
              {diagramItems.map((item, idx) => {
                const isEmerald = item.color === 'emerald';
                const isSky = item.color === 'sky';
                const isPurple = item.color === 'purple';
                const isRose = item.color === 'rose';

                const bgClass = isEmerald ? 'bg-emerald-50 border-emerald-200 text-emerald-900' :
                  isSky ? 'bg-sky-50 border-sky-200 text-sky-900' :
                  isPurple ? 'bg-purple-50 border-purple-200 text-purple-900' :
                  isRose ? 'bg-rose-50 border-rose-200 text-rose-900' :
                  'bg-amber-50 border-amber-200 text-amber-900';

                const badgeClass = isEmerald ? 'bg-emerald-200 text-emerald-900' :
                  isSky ? 'bg-sky-200 text-sky-900' :
                  isPurple ? 'bg-purple-200 text-purple-900' :
                  isRose ? 'bg-rose-200 text-rose-900' :
                  'bg-amber-200 text-amber-900';

                return (
                  <div key={idx} className={`p-3 rounded-xl border ${bgClass} space-y-1 shadow-2xs`}>
                    <div className="flex items-center justify-between">
                      <span className={`w-5 h-5 rounded-full ${badgeClass} flex items-center justify-center text-[10px] font-extrabold`}>
                        {idx + 1}
                      </span>
                      <span className="text-xs font-bold">{item.label}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed pt-0.5">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          )}

          {paliTerms && paliTerms.length > 0 && (
            <div className="pt-0.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {paliTerms.slice(0, 3).map((term, idx) => (
                  <div key={idx} className="bg-white/90 border border-amber-200/60 p-2.5 rounded-lg text-xs space-y-0.5">
                    <div className="font-bold text-amber-900 text-xs">{term.pali}</div>
                    <div className="text-slate-600 font-semibold text-[11px]">{term.translation}</div>
                    <div className="text-slate-400 text-[10px]">{term.meaning}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {keyConcept && (
            <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 border border-amber-300/80 rounded-xl p-2.5 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-950 leading-relaxed font-semibold">
                <span className="font-extrabold text-amber-900">หัวใจสำคัญ: </span>
                {keyConcept}
              </div>
            </div>
          )}
        </div>
      );
  }
};

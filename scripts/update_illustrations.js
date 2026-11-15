// Script to update components/DhammaIllustrations.tsx with new illustrations
const fs = require('fs');

let code = fs.readFileSync('components/DhammaIllustrations.tsx', 'utf8');

// 1. Update imports
if (!code.includes('Coins,')) {
  code = code.replace(
    '  Crosshair\n} from \'lucide-react\';',
    '  Crosshair,\n  Coins,\n  Send,\n  HeartHandshake,\n  ScrollText\n} from \'lucide-react\';'
  );
}

// 2. Update IllustrationId type
const newIds = `  // Additional rich illustrations
  | 'kammpath-ten'
  | 'boon-ten'
  | 'dittadhamma-four'
  | 'sappurisa-seven'
  | 'anatta-sermon'
  | 'first-temple-veluvana'
  | 'sixty-monks-mission'
  | 'chants-paritta'
  | 'dāna-words'
  | 'kratu-sample-format';`;

if (!code.includes('kammpath-ten')) {
  code = code.replace("  | 'kratu-sample-format';", newIds);
}

// 3. New illustration cases
const newCases = `
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
`;

if (!code.includes("case 'kammpath-ten':")) {
  code = code.replace("    default:\n      return null;", newCases + "\n    default:\n      return null;");
}

fs.writeFileSync('components/DhammaIllustrations.tsx', code, 'utf8');
console.log('Successfully updated components/DhammaIllustrations.tsx!');


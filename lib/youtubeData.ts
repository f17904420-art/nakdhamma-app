// ข้อมูลคลิปติวเก็งข้อสอบสนามหลวงนักธรรม
// แหล่งอ้างอิง:
//   [1] ปวิชฺโช (PRAVITCHO) | https://www.pravitcho.com/ | YouTube: https://www.youtube.com/@PRAVITCHO
//   [2] เตรียมสอบ_นักธรรมบาลี | YouTube: http://www.youtube.com/@chatchawan_jankhoon

export interface YoutubeVideo {
  id: string;
  title: string;
  youtubeUrl: string;
  channelName: string;
  channelHandle: string; // e.g. "@PRAVITCHO"
  sourceWebsite: string;
  grade: 'นักธรรมชั้นตรี' | 'นักธรรมชั้นโท' | 'นักธรรมชั้นเอก';
  subject: 'กระทู้ธรรม' | 'ธรรมวิภาค' | 'พุทธประวัติ' | 'วินัยมุข' | 'บาลีสนามหลวง';
  summary: string[];
}

// =====================================================
//  ช่อง 1 — ปวิชฺโช (PRAVITCHO)
// =====================================================
const PRAVITCHO_VIDEOS: YoutubeVideo[] = [
  // --- นักธรรมชั้นตรี ---
  {
    id: "pravitcho-tri-dhamma-01",
    title: "เก็งข้อสอบวิชาธรรมวิภาค นักธรรมชั้นตรี หมวดธรรม 1-4",
    youtubeUrl: "https://www.youtube.com/@PRAVITCHO",
    channelName: "ปวิชฺโช: ติวเข้มสอบธรรมสนามหลวง",
    channelHandle: "@PRAVITCHO",
    sourceWebsite: "https://www.pravitcho.com/",
    grade: "นักธรรมชั้นตรี",
    subject: "ธรรมวิภาค",
    summary: [
      "สรุปธรรมหมวด 1-4 ที่ออกสอบบ่อย เช่น ทาน ศีล ภาวนา, กายทุจริต วจีทุจริต มโนทุจริต",
      "เน้นโอวาทปาติโมกข์ ๓ ประการ และหลักธรรมบาป/บุญพื้นฐาน",
      "เทคนิคการจำหัวข้อธรรมะเป็น key word ย่อสั้น ใช้สอบได้จริง"
    ]
  },
  {
    id: "pravitcho-tri-buddhaprawi-01",
    title: "สรุปวิชาพุทธประวัติ นักธรรมชั้นตรี ตั้งแต่ประสูติจนถึงปฐมเทศนา",
    youtubeUrl: "https://www.youtube.com/@PRAVITCHO",
    channelName: "ปวิชฺโช: ติวเข้มสอบธรรมสนามหลวง",
    channelHandle: "@PRAVITCHO",
    sourceWebsite: "https://www.pravitcho.com/",
    grade: "นักธรรมชั้นตรี",
    subject: "พุทธประวัติ",
    summary: [
      "ทบทวนเหตุการณ์สำคัญในพุทธประวัติตามลำดับ: ประสูติ ตรัสรู้ ปฐมเทศนา ปรินิพพาน",
      "เจาะลึกปัญจวัคคีย์ทั้ง 5 และธัมมจักกัปปวัตตนสูตร",
      "แนวข้อสอบที่ออกซ้ำมากที่สุด พร้อมแนวตอบที่ถูกต้อง"
    ]
  },
  {
    id: "pravitcho-tri-vinai-01",
    title: "วินัยมุข เล่ม 1 สรุปเนื้อหาจุดสำคัญที่ออกสอบสนามหลวง นักธรรมตรี",
    youtubeUrl: "https://www.youtube.com/@PRAVITCHO",
    channelName: "ปวิชฺโช: ติวเข้มสอบธรรมสนามหลวง",
    channelHandle: "@PRAVITCHO",
    sourceWebsite: "https://www.pravitcho.com/",
    grade: "นักธรรมชั้นตรี",
    subject: "วินัยมุข",
    summary: [
      "สรุปหลักเบญจศีล ศีล 5 ข้อ พร้อมอธิบายความหมายและตัวอย่างที่ชัดเจน",
      "อธิบายอาบัติเบา-หนักที่นักเรียนมักสับสน พร้อมวิธีจำง่าย",
      "เก็งแนวข้อสอบวินัยมุขที่ออกซ้ำย้อนหลัง 5 ปีสนามหลวง"
    ]
  },
  {
    id: "pravitcho-tri-kratu-01",
    title: "เทคนิคการแต่งกระทู้ธรรม นักธรรมชั้นตรี ให้ได้คะแนนเต็ม",
    youtubeUrl: "https://www.youtube.com/@PRAVITCHO",
    channelName: "ปวิชฺโช: ติวเข้มสอบธรรมสนามหลวง",
    channelHandle: "@PRAVITCHO",
    sourceWebsite: "https://www.pravitcho.com/",
    grade: "นักธรรมชั้นตรี",
    subject: "กระทู้ธรรม",
    summary: [
      "โครงสร้างการเขียนกระทู้ธรรมตรีแบบครบถ้วน: บทนำ กระทู้เชื่อม อรรถกถา บทสรุป",
      "ตัวอย่างการเขียนอธิบายสุภาษิตบาลี พร้อมจุดที่กรรมการตรวจนิยมหัก",
      "แนะนำสุภาษิตที่มักถูกนำมาออกข้อสอบซ้ำๆ ทุกปี"
    ]
  },
  // --- นักธรรมชั้นโท ---
  {
    id: "pravitcho-tho-01",
    title: "เก็งข้อสอบวิชาธรรมวิภาค นักธรรมชั้นโท ปัญหาถาม-ตอบ",
    youtubeUrl: "https://www.youtube.com/watch?v=WqDJ7y23KhU",
    channelName: "ปวิชฺโช: ติวเข้มสอบธรรมสนามหลวง",
    channelHandle: "@PRAVITCHO",
    sourceWebsite: "https://www.pravitcho.com/",
    grade: "นักธรรมชั้นโท",
    subject: "ธรรมวิภาค",
    summary: [
      "ทบทวนหมวดธรรมะสำคัญ เช่น กรรมฐาน ๒, ปฏิสันถาร ๒, อกุศลวิตก ๓",
      "เน้นจุดออกสอบเรื่องปาฏิหาริย์ ๓ และอัปปมัญญา ๔",
      "อธิบายสรุปบทธรรมบารมี ๑๐ และธุดงค์ ๑๓ เพื่อเตรียมสอบสนามหลวง"
    ]
  },
  {
    id: "pravitcho-tho-vinai-01",
    title: "วินัยมุข เล่ม 2 สรุปสิขาบทปาติโมกข์และอาบัติ 7 กอง นักธรรมโท",
    youtubeUrl: "https://www.youtube.com/@PRAVITCHO",
    channelName: "ปวิชฺโช: ติวเข้มสอบธรรมสนามหลวง",
    channelHandle: "@PRAVITCHO",
    sourceWebsite: "https://www.pravitcho.com/",
    grade: "นักธรรมชั้นโท",
    subject: "วินัยมุข",
    summary: [
      "จำแนกอาบัติ 7 กองพร้อมตัวอย่างการกระทำที่เข้าข่ายแต่ละกอง",
      "สรุปสังฆาทิเสส 13 ข้อ จุดที่ออกสอบบ่อยที่สุด",
      "เทคนิคตอบคำถามวินัยมุขเชิงประยุกต์ ที่กรรมการมักออกประยุกต์ใช้"
    ]
  },
  // --- นักธรรมชั้นเอก ---
  {
    id: "pravitcho-eak-01",
    title: "เก็งข้อสอบนักธรรมชั้นเอก วิชาพุทธานุพุทธประวัติ",
    youtubeUrl: "https://www.youtube.com/watch?v=yLyi6oS-GbQ",
    channelName: "ปวิชฺโช: ติวเข้มสอบธรรมสนามหลวง",
    channelHandle: "@PRAVITCHO",
    sourceWebsite: "https://www.pravitcho.com/",
    grade: "นักธรรมชั้นเอก",
    subject: "พุทธประวัติ",
    summary: [
      "เก็งแนวคำถาม-คำตอบ วิชาพุทธานุพุทธประวัติ สำหรับนักธรรมเอก",
      "เจาะลึกประวัติพระสาวกและเหตุการณ์สำคัญในพุทธศาสนา",
      "เทคนิคการตอบคำถามให้ตรงประเด็นตามเกณฑ์ตรวจสอบสนามหลวง"
    ]
  },
  {
    id: "pravitcho-eak-dhamma-01",
    title: "เก็งข้อสอบธรรมวิภาค นักธรรมชั้นเอก โพธิปักขิยธรรม ๓๗ และวิปัสสนาญาณ",
    youtubeUrl: "https://www.youtube.com/@PRAVITCHO",
    channelName: "ปวิชฺโช: ติวเข้มสอบธรรมสนามหลวง",
    channelHandle: "@PRAVITCHO",
    sourceWebsite: "https://www.pravitcho.com/",
    grade: "นักธรรมชั้นเอก",
    subject: "ธรรมวิภาค",
    summary: [
      "สรุปโพธิปักขิยธรรม ๓๗ ประการ แบ่งเป็น ๗ หมวด พร้อมวิธีจำที่รวดเร็ว",
      "อธิบายวิปัสสนาญาณ ๙ ขั้นตอน ตั้งแต่เริ่มต้นจนถึงมรรคญาณ",
      "เน้นคำถามยากที่ออกในระดับเอก พร้อมแนวตอบที่ครบถ้วน"
    ]
  },
  {
    id: "pravitcho-eak-vinai-01",
    title: "สรุปวินัยมุข เล่ม 3 นักธรรมชั้นเอก ภิกขุปาติโมกข์ฉบับสมบูรณ์",
    youtubeUrl: "https://www.youtube.com/@PRAVITCHO",
    channelName: "ปวิชฺโช: ติวเข้มสอบธรรมสนามหลวง",
    channelHandle: "@PRAVITCHO",
    sourceWebsite: "https://www.pravitcho.com/",
    grade: "นักธรรมชั้นเอก",
    subject: "วินัยมุข",
    summary: [
      "อธิบายหลักวินัยขั้นสูงที่พระภิกษุต้องรู้ก่อนเป็นนักธรรมเอก",
      "สรุปจุดสำคัญของการประชุมสังฆกรรมและหลักกฎสงฆ์",
      "เก็งประเด็นคำถามที่ออกซ้ำในการสอบสนามหลวง 3-5 ปีล่าสุด"
    ]
  },
];

// =====================================================
//  ช่อง 2 — เตรียมสอบ_นักธรรมบาลี (@chatchawan_jankhoon)
// =====================================================
const CHATCHAWAN_VIDEOS: YoutubeVideo[] = [
  // --- นักธรรมชั้นตรี ---
  {
    id: "chatchawan-tri-dhamma-01",
    title: "เรียนธรรมวิภาคนักธรรมตรี หมวด 2 ฉบับเข้าใจง่าย",
    youtubeUrl: "http://www.youtube.com/@chatchawan_jankhoon",
    channelName: "เตรียมสอบ_นักธรรมบาลี",
    channelHandle: "@chatchawan_jankhoon",
    sourceWebsite: "http://www.youtube.com/@chatchawan_jankhoon",
    grade: "นักธรรมชั้นตรี",
    subject: "ธรรมวิภาค",
    summary: [
      "อธิบายธรรมหมวด 2 เช่น สุจริต-ทุจริต, สังคหวัตถุ ๒ ในแบบเข้าใจง่าย",
      "ยกตัวอย่างชีวิตจริงเปรียบเทียบให้เห็นภาพชัด จำได้นาน",
      "สรุปจุดออกข้อสอบบ่อยที่สุดในระดับตรี"
    ]
  },
  {
    id: "chatchawan-tri-dhamma-02",
    title: "สรุปธรรมะนักธรรมตรี หมวด 3 ครบจบในคลิปเดียว",
    youtubeUrl: "http://www.youtube.com/@chatchawan_jankhoon",
    channelName: "เตรียมสอบ_นักธรรมบาลี",
    channelHandle: "@chatchawan_jankhoon",
    sourceWebsite: "http://www.youtube.com/@chatchawan_jankhoon",
    grade: "นักธรรมชั้นตรี",
    subject: "ธรรมวิภาค",
    summary: [
      "สรุปธรรมหมวด 3 ครบทุกข้อ เช่น รัตนะ ๓, ทุจริต ๓, สุจริต ๓",
      "เทคนิคการจำหมวดธรรมแบบเรียงลำดับแบบสัมพันธ์กัน",
      "แบบฝึกหัดทบทวนพร้อมเฉลยอธิบายภายในคลิป"
    ]
  },
  {
    id: "chatchawan-tri-vinai-01",
    title: "วินัยมุขนักธรรมตรี บทที่ 1-3 อธิบายแบบเข้าใจง่ายสำหรับมือใหม่",
    youtubeUrl: "http://www.youtube.com/@chatchawan_jankhoon",
    channelName: "เตรียมสอบ_นักธรรมบาลี",
    channelHandle: "@chatchawan_jankhoon",
    sourceWebsite: "http://www.youtube.com/@chatchawan_jankhoon",
    grade: "นักธรรมชั้นตรี",
    subject: "วินัยมุข",
    summary: [
      "แนะนำวินัยมุขสำหรับผู้เริ่มต้นเรียนนักธรรมตรี ไม่ต้องมีพื้นฐาน",
      "อธิบายศีล 5 เบญจศีล พร้อมเหตุผลและประโยชน์ในชีวิตจริง",
      "ฝึกอ่านและท่องจำคำบาลีพื้นฐานที่จำเป็นสำหรับการสอบ"
    ]
  },
  {
    id: "chatchawan-tri-kratu-01",
    title: "เขียนกระทู้ธรรมชั้นตรีอย่างไรให้ผ่าน ตัวอย่างพร้อมอธิบาย",
    youtubeUrl: "http://www.youtube.com/@chatchawan_jankhoon",
    channelName: "เตรียมสอบ_นักธรรมบาลี",
    channelHandle: "@chatchawan_jankhoon",
    sourceWebsite: "http://www.youtube.com/@chatchawan_jankhoon",
    grade: "นักธรรมชั้นตรี",
    subject: "กระทู้ธรรม",
    summary: [
      "แสดงตัวอย่างกระทู้ธรรมตรีที่เขียนถูกต้องสมบูรณ์ พร้อมคำอธิบายทีละส่วน",
      "ชี้จุดที่นักเรียนทำผิดบ่อยที่สุด เช่น กระทู้เชื่อม การย่อหน้า",
      "เทคนิคการใช้ภาษาธรรมะที่กรรมการตรวจชอบและให้คะแนนสูง"
    ]
  },
  // --- นักธรรมชั้นโท ---
  {
    id: "chatchawan-tho-dhamma-01",
    title: "ธรรมวิภาคนักธรรมโท หมวดสำคัญ เก็งสอบสนามหลวง ๒๕๖๘",
    youtubeUrl: "http://www.youtube.com/@chatchawan_jankhoon",
    channelName: "เตรียมสอบ_นักธรรมบาลี",
    channelHandle: "@chatchawan_jankhoon",
    sourceWebsite: "http://www.youtube.com/@chatchawan_jankhoon",
    grade: "นักธรรมชั้นโท",
    subject: "ธรรมวิภาค",
    summary: [
      "สรุปหมวดธรรมระดับโทที่ออกสอบบ่อย เช่น มรรค ๘, อริยสัจ ๔, ขันธ์ ๕",
      "อธิบายความสัมพันธ์ระหว่างหมวดธรรมต่างๆ ให้เข้าใจเป็นระบบ",
      "เก็งโจทย์ปีก่อนพร้อมเฉลยแนวคิดอย่างละเอียด"
    ]
  },
  {
    id: "chatchawan-tho-buddha-01",
    title: "พุทธประวัตินักธรรมโท สรุปเหตุการณ์หลังตรัสรู้ถึงปรินิพพาน",
    youtubeUrl: "http://www.youtube.com/@chatchawan_jankhoon",
    channelName: "เตรียมสอบ_นักธรรมบาลี",
    channelHandle: "@chatchawan_jankhoon",
    sourceWebsite: "http://www.youtube.com/@chatchawan_jankhoon",
    grade: "นักธรรมชั้นโท",
    subject: "พุทธประวัติ",
    summary: [
      "ลำดับเหตุการณ์พุทธประวัติช่วงโปรดสัตว์ถึงปรินิพพาน ครบถ้วนตามเนื้อหาโท",
      "เน้นพระสาวกสำคัญ พระอัครสาวก และการสังคายนาพระธรรมวินัย",
      "สรุปประเด็นที่ออกสอบระดับโทพร้อมแนวตอบที่กระชับ"
    ]
  },
  // --- นักธรรมชั้นเอก ---
  {
    id: "chatchawan-eak-dhamma-01",
    title: "ธรรมวิภาคนักธรรมเอก โพธิปักขิยธรรม และอภิธรรมเบื้องต้น",
    youtubeUrl: "http://www.youtube.com/@chatchawan_jankhoon",
    channelName: "เตรียมสอบ_นักธรรมบาลี",
    channelHandle: "@chatchawan_jankhoon",
    sourceWebsite: "http://www.youtube.com/@chatchawan_jankhoon",
    grade: "นักธรรมชั้นเอก",
    subject: "ธรรมวิภาค",
    summary: [
      "สรุปโพธิปักขิยธรรม ๓๗ ในรูปแบบตารางที่จำง่าย แยกตามหมวดอย่างชัดเจน",
      "อธิบายจิต เจตสิก และรูปในอภิธรรมเบื้องต้น เหมาะสำหรับผู้เรียนระดับเอก",
      "เจาะประเด็นยากที่ออกสอบในระดับเอกพร้อมเฉลยอย่างละเอียด"
    ]
  },
  {
    id: "chatchawan-eak-bali-01",
    title: "บาลีสนามหลวง ชั้น 3 แปลบาลีเป็นไทย หลักวากยสัมพันธ์เบื้องต้น",
    youtubeUrl: "http://www.youtube.com/@chatchawan_jankhoon",
    channelName: "เตรียมสอบ_นักธรรมบาลี",
    channelHandle: "@chatchawan_jankhoon",
    sourceWebsite: "http://www.youtube.com/@chatchawan_jankhoon",
    grade: "นักธรรมชั้นเอก",
    subject: "บาลีสนามหลวง",
    summary: [
      "สอนหลักวากยสัมพันธ์บาลีเบื้องต้น: นาม กิริยา กรรก วิภัตติ",
      "ฝึกแปลประโยคบาลีจากข้อสอบสนามหลวงย้อนหลัง พร้อมอธิบายทีละคำ",
      "เทคนิคการอ่านออกเสียงและท่องจำศัพท์บาลีที่ออกสอบซ้ำบ่อยที่สุด"
    ]
  },
];

// รวมข้อมูลจากทุกช่อง
export const youtubeTutorials: YoutubeVideo[] = [
  ...PRAVITCHO_VIDEOS,
  ...CHATCHAWAN_VIDEOS,
];

// รายชื่อช่องทั้งหมดสำหรับ filter
export const YOUTUBE_CHANNELS = [
  {
    handle: "@PRAVITCHO",
    displayName: "ปวิชฺโช (PRAVITCHO)",
    channelUrl: "https://www.youtube.com/@PRAVITCHO",
    websiteUrl: "https://www.pravitcho.com/",
  },
  {
    handle: "@chatchawan_jankhoon",
    displayName: "เตรียมสอบ_นักธรรมบาลี",
    channelUrl: "http://www.youtube.com/@chatchawan_jankhoon",
    websiteUrl: "http://www.youtube.com/@chatchawan_jankhoon",
  },
] as const;

// Helper: แปลง YouTube URL เป็น Video ID
export function extractYoutubeId(url: string): string {
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : '';
}

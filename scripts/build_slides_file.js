// scripts/build_slides_file.js
const fs = require('fs');
const path = require('path');

const { dhammaDecks } = require('./data/slides_dhamma.js');
const { vinaiDecks } = require('./data/slides_vinai.js');
const { buddhaDecks } = require('./data/slides_buddha.js');
const { ceremonyDecks } = require('./data/slides_ceremony.js');
const { kratuDecks } = require('./data/slides_kratu.js');

const allDecks = [
  ...dhammaDecks,
  ...vinaiDecks,
  ...buddhaDecks,
  ...ceremonyDecks,
  ...kratuDecks
];

// Update slidesCount to match slides.length
allDecks.forEach(d => {
  d.slidesCount = d.slides.length;
});

console.log('Total slide decks:', allDecks.length);
let totalSlides = 0;
allDecks.forEach((d, i) => {
  totalSlides += d.slides.length;
  console.log(`${i+1}. [${d.subjectId}] ${d.id}: ${d.title} (${d.slides.length} slides)`);
});
console.log('Total slides across all decks:', totalSlides);

const header = `// ข้อมูลสื่อการสอนและสไลด์ช่วยสอน นักธรรมชั้นตรี และ ธรรมศึกษาชั้นตรี
// อ้างอิงตาม "หลักสูตรธรรมศึกษา ชั้นตรี ฉบับปรับปรุง พุทธศักราช ๒๕๕๗" (แม่กองธรรมสนามหลวง)
// ครอบคลุม ๕ หมวดวิชาหลัก: ธรรมวิภาค & คิหิปฏิบัติ, เบญจศีลเบญจธรรม, พุทธประวัติ (๑๓ ปริเฉท ๕ กาล), ศาสนพิธี (๖ บท), และ กระทู้ธรรม (๕ วรรค)

export interface SlideQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface SlideContent {
  id: number;
  title: string;
  subtitle?: string;
  categoryTag: string;
  bulletPoints: string[];
  keyConcept: string;
  illustrationId?: string;
  paliTerms?: { pali: string; translation: string; meaning: string }[];
  diagramItems?: { label: string; desc: string; color: string }[];
  teacherNotes: string; // บันทึกช่วยสอนสำหรับพระอาจารย์ / ติวเตอร์
  examTip: string; // จุดออกสอบสนามหลวงที่ต้องเน้น
  quiz?: SlideQuestion;
}

export interface SlideDeck {
  id: string;
  subjectId: 'dhamma' | 'buddha' | 'vinai' | 'kratu' | 'ceremony';
  subjectName: string;
  title: string;
  description: string;
  grade: 'นักธรรมชั้นตรี';
  estimatedMinutes: number;
  slidesCount: number;
  colorScheme: {
    bg: string;
    border: string;
    badge: string;
    primary: string;
    accent: string;
  };
  slides: SlideContent[];
}

export const NAKDHAMMA_TRI_DECKS: SlideDeck[] = `;

const fileContent = header + JSON.stringify(allDecks, null, 2) + ';\n';

fs.writeFileSync(path.join(__dirname, '../lib/teachingSlidesData.ts'), fileContent, 'utf-8');
console.log('Successfully wrote to lib/teachingSlidesData.ts!');

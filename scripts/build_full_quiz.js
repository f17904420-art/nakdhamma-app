const fs = require('fs');
const path = require('path');

const { generateTriK } = require('./data/tri_k');
const { generateTriB } = require('./data/tri_b');
const { generateTriV } = require('./data/tri_v');
const { generateTriD } = require('./data/tri_d');
const { generatePast30Tri } = require('./data/past30_tri');

const { generateThoK } = require('./data/tho_k');
const { generateThoB } = require('./data/tho_b');
const { generateThoV } = require('./data/tho_v');
const { generateThoD } = require('./data/tho_d');
const { generatePast30Tho } = require('./data/past30_tho');

const { generateEkK } = require('./data/ek_k');
const { generateEkB } = require('./data/ek_b');
const { generateEkV } = require('./data/ek_v');
const { generateEkD } = require('./data/ek_d');
const { generatePast30Ek } = require('./data/past30_ek');

console.log('Generating questions from all 15 modules (including past 30 years)...');

const rawQuestions = [
  // นักธรรมตรี
  ...generateTriK(),
  ...generateTriB(),
  ...generateTriV(),
  ...generateTriD(),
  ...generatePast30Tri(),

  // นักธรรมโท
  ...generateThoK(),
  ...generateThoB(),
  ...generateThoV(),
  ...generateThoD(),
  ...generatePast30Tho(),

  // นักธรรมเอก
  ...generateEkK(),
  ...generateEkB(),
  ...generateEkV(),
  ...generateEkD(),
  ...generatePast30Ek()
];

console.log(`Raw question count: ${rawQuestions.length}`);

// Normalization helper for deduplication
function normalize(str) {
  return str.replace(/['"“”‘’?.،,\s:;\-()]/g, '').toLowerCase().trim();
}

// 1. Deduplicate by exact normalized question text
const seen = new Map();
const duplicates = [];
const deduplicated = [];

rawQuestions.forEach((q) => {
  const norm = `${q.grade}:${normalize(q.question)}`;
  if (seen.has(norm)) {
    duplicates.push({
      droppedId: q.id,
      keptId: seen.get(norm),
      question: q.question.slice(0, 70)
    });
  } else {
    seen.set(norm, q.id);
    deduplicated.push(q);
  }
});

console.log(`Deduplication result: Removed ${duplicates.length} duplicate(s). Kept ${deduplicated.length} questions.`);
if (duplicates.length > 0) {
  console.log('Duplicates removed:', duplicates);
}

// Assertions & balance check
const counts = { 0: 0, 1: 0, 2: 0, 3: 0 };
const years = {};
const byGrade = {};
const bySubject = {};

deduplicated.forEach((q, idx) => {
  if (!q.id || !q.grade || !q.subject || !q.question || !Array.isArray(q.options) || q.options.length !== 4) {
    throw new Error(`Question at index ${idx} is malformed: ${JSON.stringify(q)}`);
  }
  if (typeof q.correctIndex !== 'number' || q.correctIndex < 0 || q.correctIndex > 3) {
    throw new Error(`Question at index ${idx} has invalid correctIndex: ${q.correctIndex}`);
  }
  counts[q.correctIndex]++;
  years[q.year] = (years[q.year] || 0) + 1;
  byGrade[q.grade] = (byGrade[q.grade] || 0) + 1;
  bySubject[q.subject] = (bySubject[q.subject] || 0) + 1;
});

console.log('Correct index distribution (A, B, C, D):', counts);
console.log('Total unique years (Past 30 years):', Object.keys(years).length);
console.log('Years list:', Object.keys(years).sort().join(', '));
console.log('By Grade:', byGrade);
console.log('By Subject:', bySubject);

const tsContent = `export interface QuizQuestion {
  id: string;
  grade: string;
  subject: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  reference: string;
  sourceName?: string;
  sourceUrl?: string;
  year?: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = ${JSON.stringify(deduplicated, null, 2)};
`;

const outputPath = path.join(__dirname, '..', 'lib', 'quizData.ts');
fs.writeFileSync(outputPath, tsContent, 'utf-8');
console.log(`Successfully written ${deduplicated.length} questions to ${outputPath}`);

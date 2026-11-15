const { createQuestion } = require('./builder_utils');
const { rawEkDPart1 } = require('./ek_d_part1');
const { rawEkDPart2 } = require('./ek_d_part2');
const { rawEkDPart3 } = require('./ek_d_part3');
const { rawEkDPart4 } = require('./ek_d_part4');

function generateEkD() {
  const combined = [
    ...rawEkDPart1,
    ...rawEkDPart2,
    ...rawEkDPart3,
    ...rawEkDPart4
  ];

  if (combined.length !== 200) {
    throw new Error(`Expected 200 questions for ek_d, got ${combined.length}`);
  }

  return combined.map((item, idx) => {
    return createQuestion({
      id: `ek-d-${String(idx + 1).padStart(3, '0')}`,
      grade: 'เอก',
      subject: 'ธรรมวิจารณ์',
      year: item.year || '๒๕๖๖',
      question: item.q,
      correct: item.c,
      distractors: item.d,
      explanation: item.e,
      reference: item.ref,
      targetIndex: idx % 4
    });
  });
}

module.exports = { generateEkD };

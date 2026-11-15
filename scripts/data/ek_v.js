const { createQuestion } = require('./builder_utils');
const { rawEkVPart1 } = require('./ek_v_part1');
const { rawEkVPart2 } = require('./ek_v_part2');

function generateEkV() {
  const combined = [...rawEkVPart1, ...rawEkVPart2];
  if (combined.length !== 100) {
    throw new Error(`Expected 100 questions for ek_v, got ${combined.length}`);
  }

  return combined.map((item, idx) => {
    return createQuestion({
      id: `ek-v-${String(idx + 1).padStart(3, '0')}`,
      grade: 'เอก',
      subject: 'วินัยบัญญัติ',
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

module.exports = { generateEkV };

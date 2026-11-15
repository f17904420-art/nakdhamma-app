const { createQuestion } = require('./builder_utils');
const { rawEkBPart1 } = require('./ek_b_part1');
const { rawEkBPart2 } = require('./ek_b_part2');

function generateEkB() {
  const combined = [...rawEkBPart1, ...rawEkBPart2];
  if (combined.length !== 100) {
    throw new Error(`Expected 100 questions for ek_b, got ${combined.length}`);
  }

  return combined.map((item, idx) => {
    return createQuestion({
      id: `ek-b-${String(idx + 1).padStart(3, '0')}`,
      grade: 'เอก',
      subject: 'พุทธประวัติ',
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

module.exports = { generateEkB };

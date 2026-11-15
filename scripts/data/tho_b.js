const { createQuestion } = require('./builder_utils');
const { rawThoBPart1 } = require('./tho_b_part1');
const { rawThoBPart2 } = require('./tho_b_part2');

function generateThoB() {
  const combined = [...rawThoBPart1, ...rawThoBPart2];
  if (combined.length !== 100) {
    throw new Error(`Expected 100 questions for tho_b, got ${combined.length}`);
  }

  return combined.map((item, idx) => {
    return createQuestion({
      id: `tho-b-${String(idx + 1).padStart(3, '0')}`,
      grade: 'โท',
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

module.exports = { generateThoB };

const { createQuestion } = require('./builder_utils');
const { rawThoVPart1 } = require('./tho_v_part1');
const { rawThoVPart2 } = require('./tho_v_part2');

function generateThoV() {
  const combined = [...rawThoVPart1, ...rawThoVPart2];
  if (combined.length !== 100) {
    throw new Error(`Expected 100 questions for tho_v, got ${combined.length}`);
  }

  return combined.map((item, idx) => {
    return createQuestion({
      id: `tho-v-${String(idx + 1).padStart(3, '0')}`,
      grade: 'โท',
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

module.exports = { generateThoV };

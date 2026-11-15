const { createQuestion } = require('./builder_utils');
const { rawThoDPart1 } = require('./tho_d_part1');
const { rawThoDPart2 } = require('./tho_d_part2');
const { rawThoDPart3 } = require('./tho_d_part3');
const { rawThoDPart4 } = require('./tho_d_part4');

function generateThoD() {
  const combined = [
    ...rawThoDPart1,
    ...rawThoDPart2,
    ...rawThoDPart3,
    ...rawThoDPart4
  ];

  if (combined.length !== 200) {
    throw new Error(`Expected 200 questions for tho_d, got ${combined.length}`);
  }

  return combined.map((item, idx) => {
    return createQuestion({
      id: `tho-d-${String(idx + 1).padStart(3, '0')}`,
      grade: 'โท',
      subject: 'ธรรมวิภาค',
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

module.exports = { generateThoD };

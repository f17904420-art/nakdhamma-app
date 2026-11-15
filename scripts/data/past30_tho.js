const { createQuestion } = require('./builder_utils');
const { rawPast30ThoPart1 } = require('./past30_tho_part1');
const { rawPast30ThoPart2 } = require('./past30_tho_part2');

function generatePast30Tho() {
  const combined = [...rawPast30ThoPart1, ...rawPast30ThoPart2];
  if (combined.length !== 100) {
    throw new Error(`Expected 100 questions for past30_tho, got ${combined.length}`);
  }

  return combined.map((item, idx) => {
    return createQuestion({
      id: `past30-tho-${String(idx + 1).padStart(3, '0')}`,
      grade: 'โท',
      subject: item.subject,
      year: item.year,
      question: item.q,
      correct: item.c,
      distractors: item.d,
      explanation: item.e,
      reference: item.ref,
      targetIndex: idx % 4
    });
  });
}

module.exports = { generatePast30Tho };

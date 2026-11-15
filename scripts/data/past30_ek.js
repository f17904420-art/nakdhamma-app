const { createQuestion } = require('./builder_utils');
const { rawPast30EkPart1 } = require('./past30_ek_part1');
const { rawPast30EkPart2 } = require('./past30_ek_part2');

function generatePast30Ek() {
  const combined = [...rawPast30EkPart1, ...rawPast30EkPart2];
  if (combined.length !== 100) {
    throw new Error(`Expected 100 questions for past30_ek, got ${combined.length}`);
  }

  return combined.map((item, idx) => {
    return createQuestion({
      id: `past30-ek-${String(idx + 1).padStart(3, '0')}`,
      grade: 'เอก',
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

module.exports = { generatePast30Ek };

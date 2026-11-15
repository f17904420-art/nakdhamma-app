const { createQuestion } = require('./builder_utils');
const { rawPast30TriPart1 } = require('./past30_tri_part1');
const { rawPast30TriPart2 } = require('./past30_tri_part2');

function generatePast30Tri() {
  const combined = [...rawPast30TriPart1, ...rawPast30TriPart2];
  if (combined.length !== 100) {
    throw new Error(`Expected 100 questions for past30_tri, got ${combined.length}`);
  }

  return combined.map((item, idx) => {
    return createQuestion({
      id: `past30-tri-${String(idx + 1).padStart(3, '0')}`,
      grade: 'ตรี',
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

module.exports = { generatePast30Tri };

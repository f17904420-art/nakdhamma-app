const { createQuestion } = require('./builder_utils');
const { generateTriDPart1 } = require('./tri_d_part1');
const { generateTriDPart2 } = require('./tri_d_part2');
const { generateTriDPart3 } = require('./tri_d_part3');
const { generateTriDPart4 } = require('./tri_d_part4');

function generateTriD() {
  const p1 = generateTriDPart1();
  const p2 = generateTriDPart2();
  const p3 = generateTriDPart3();
  const p4 = generateTriDPart4();

  const combined = [...p1, ...p2, ...p3, ...p4];
  if (combined.length !== 200) {
    throw new Error(`Expected 200 questions for tri-d, got ${combined.length}`);
  }

  return combined.map((item, idx) => {
    return createQuestion({
      id: `tri-d-${String(idx + 1).padStart(3, '0')}`,
      grade: 'ตรี',
      subject: 'ธรรมวิภาค',
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

module.exports = { generateTriD };

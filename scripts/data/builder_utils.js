/**
 * Utility functions for generating balanced and analytical quiz questions
 */

function createQuestion({
  id,
  grade,
  subject,
  year = 'ข้อสอบสนามหลวง',
  question,
  correct,
  distractors,
  explanation,
  reference,
  sourceName = 'แม่กองธรรมสนามหลวง',
  sourceUrl = 'https://thammapedia.com/dhamma/naktham.php',
  targetIndex
}) {
  if (!distractors || distractors.length !== 3) {
    throw new Error(`Question ${id} must have exactly 3 distractors, got ${distractors ? distractors.length : 0}`);
  }

  const options = [...distractors];
  options.splice(targetIndex, 0, correct);

  return {
    id,
    grade,
    subject,
    year,
    question,
    options,
    correctIndex: targetIndex,
    explanation,
    reference,
    sourceName,
    sourceUrl
  };
}

module.exports = {
  createQuestion
};

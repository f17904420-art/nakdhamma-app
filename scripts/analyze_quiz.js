const fs = require('fs');

const { generateTriK } = require('./data/tri_k');
const { generateTriB } = require('./data/tri_b');
const { generateTriV } = require('./data/tri_v');
const { generateTriD } = require('./data/tri_d');
const { generateThoK } = require('./data/tho_k');
const { generateThoB } = require('./data/tho_b');
const { generateThoV } = require('./data/tho_v');
const { generateThoD } = require('./data/tho_d');
const { generateEkK } = require('./data/ek_k');
const { generateEkB } = require('./data/ek_b');
const { generateEkV } = require('./data/ek_v');
const { generateEkD } = require('./data/ek_d');
const { generatePast30Tri } = require('./data/past30_tri');
const { generatePast30Tho } = require('./data/past30_tho');
const { generatePast30Ek } = require('./data/past30_ek');

const allRaw = [
  ...generateTriK(), ...generateTriB(), ...generateTriV(), ...generateTriD(), ...generatePast30Tri(),
  ...generateThoK(), ...generateThoB(), ...generateThoV(), ...generateThoD(), ...generatePast30Tho(),
  ...generateEkK(), ...generateEkB(), ...generateEkV(), ...generateEkD(), ...generatePast30Ek()
];

function getShingles(str, n = 4) {
  const clean = str.replace(/['"“”‘’?.،,\s:;\-()]/g, '');
  const s = new Set();
  for (let i = 0; i <= clean.length - n; i++) {
    s.add(clean.substring(i, i + n));
  }
  return s;
}

function jaccard(s1, s2) {
  if (s1.size === 0 || s2.size === 0) return 0;
  let intersection = 0;
  for (const item of s1) {
    if (s2.has(item)) intersection++;
  }
  return intersection / (s1.size + s2.size - intersection);
}

const nearDuplicates = [];

for (let i = 0; i < allRaw.length; i++) {
  const s1 = getShingles(allRaw[i].question);
  for (let j = i + 1; j < allRaw.length; j++) {
    if (allRaw[i].grade === allRaw[j].grade) {
      const s2 = getShingles(allRaw[j].question);
      const sim = jaccard(s1, s2);
      if (sim > 0.85) {
        nearDuplicates.push({
          q1: { id: allRaw[i].id, text: allRaw[i].question },
          q2: { id: allRaw[j].id, text: allRaw[j].question },
          sim: sim.toFixed(3)
        });
      }
    }
  }
}

console.log('Near duplicates found (similarity > 0.85):', nearDuplicates.length);
nearDuplicates.forEach((d, idx) => {
  console.log(`[${idx + 1}] sim: ${d.sim}`);
  console.log('  Q1:', d.q1.id, d.q1.text.slice(0, 80));
  console.log('  Q2:', d.q2.id, d.q2.text.slice(0, 80));
});

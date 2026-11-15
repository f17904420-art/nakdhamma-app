const fs = require('fs');
const path = require('path');

// Helper to write file cleanly
function writeFile(filename, content) {
  fs.writeFileSync(path.join(__dirname, 'data', filename), content, 'utf8');
  console.log(`Wrote ${filename}`);
}

console.log('Starting build_tho_data.js generation...');

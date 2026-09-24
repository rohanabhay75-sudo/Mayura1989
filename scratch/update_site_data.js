const fs = require('fs');

const siteDataPath = './src/data/siteData.ts';
const content = fs.readFileSync(siteDataPath, 'utf8');

const tasks = require('./image_tasks.json');
const map = {};
tasks.forEach(t => {
  map[t.id] = t.targetRel;
});

const lines = content.split('\n');
let currentId = null;
let updatedCount = 0;

const newLines = lines.map(line => {
  const idMatch = line.match(/id:\s*["']([^"']+)["']/);
  if (idMatch) {
    currentId = idMatch[1];
  }
  
  const imgMatch = line.match(/^(\s*image:\s*["'])([^"']+)(["'],?\s*)$/);
  if (imgMatch && currentId && map[currentId]) {
    updatedCount++;
    const newLine = `${imgMatch[1]}${map[currentId]}${imgMatch[3]}`;
    return newLine;
  }
  
  return line;
});

fs.writeFileSync(siteDataPath, newLines.join('\n'), 'utf8');
console.log(`Successfully updated ${updatedCount} dish images in siteData.ts!`);

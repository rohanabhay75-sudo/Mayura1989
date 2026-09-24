const fs = require('fs');
const content = fs.readFileSync('./src/data/siteData.ts', 'utf8');

const regex = /{\s*id:\s*['"]([^'"]+)['"],\s*name:\s*['"]([^'"]+)['"][\s\S]*?image:\s*['"]([^'"]+)['"]/g;
const dishes = [];
let match;
while ((match = regex.exec(content)) !== null) {
  dishes.push({
    id: match[1],
    name: match[2],
    image: match[3]
  });
}

console.log('Total dishes matched:', dishes.length);

const imgCount = {};
for (const d of dishes) {
  imgCount[d.image] = (imgCount[d.image] || 0) + 1;
}

const dupes = Object.entries(imgCount).filter(([k, v]) => v > 1).sort((a,b) => b[1] - a[1]);
console.log('Duplicate image paths count:', dupes.length);
dupes.forEach(([k, v]) => console.log(`${k} is used by ${v} dishes`));

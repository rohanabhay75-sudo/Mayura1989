const fs = require('fs');

const content = fs.readFileSync('./src/data/siteData.ts', 'utf8');

// Parse dishes from fullMenu array
const fullMenuMatch = content.match(/export const fullMenu: DishType\[\] = (\[[\s\S]*?\n\];)/);
if (!fullMenuMatch) {
  console.log('fullMenu not found');
  process.exit(1);
}

// Extract dish objects
const dishBlocks = fullMenuMatch[1].match(/\{[\s\S]*?\}/g) || [];
console.log('Total dishes in fullMenu:', dishBlocks.length);

const dishes = dishBlocks.map((block, idx) => {
  const idM = block.match(/id:\s*['"]([^'"]+)['"]/);
  const nameM = block.match(/name:\s*['"]([^'"]+)['"]/);
  const catM = block.match(/category:\s*['"]([^'"]+)['"]/);
  const imgM = block.match(/image:\s*['"]([^'"]+)['"]/);
  return {
    index: idx,
    id: idM ? idM[1] : `dish-${idx}`,
    name: nameM ? nameM[1] : 'Unknown',
    category: catM ? catM[1] : 'Unknown',
    image: imgM ? imgM[1] : ''
  };
});

console.log('First 5 dishes:', dishes.slice(0, 5));
console.log('Last 5 dishes:', dishes.slice(-5));

// Check duplicates
const imgMap = {};
dishes.forEach(d => {
  if (!imgMap[d.image]) imgMap[d.image] = [];
  imgMap[d.image].push(d);
});

const shared = Object.entries(imgMap).filter(([img, list]) => list.length > 1);
console.log(`\nThere are ${shared.length} images shared by multiple dishes.`);
let totalSharing = 0;
shared.forEach(([img, list]) => {
  console.log(`- ${img} shared by ${list.length} dishes:`);
  list.forEach(d => console.log(`    [${d.id}] "${d.name}" (${d.category})`));
  totalSharing += list.length;
});
console.log(`\nTotal dish entries sharing duplicate images: ${totalSharing}`);

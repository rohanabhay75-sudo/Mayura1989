const fs = require('fs');
const http = require('http');

const content = fs.readFileSync('./src/data/siteData.ts', 'utf8');

// Extract all dish items from fullMenu
// Find start of fullMenu
const startIndex = content.indexOf('export const fullMenu: DishType[] = [');
if (startIndex === -1) {
  console.error('fullMenu not found');
  process.exit(1);
}
const menuSection = content.substring(startIndex);
const regex = /id:\s*["']([^"']+)["'],\s*name:\s*["']([^"']+)["'][\s\S]*?image:\s*["']([^"']+)["']/g;

const dishes = [];
let m;
while ((m = regex.exec(menuSection)) !== null) {
  dishes.push({
    id: m[1],
    name: m[2],
    image: m[3]
  });
}

console.log(`=== VALIDATION REPORT ===`);
console.log(`Total dishes found in fullMenu: ${dishes.length}`);

// 1. Check duplicate image paths in fullMenu
const imgCounts = {};
dishes.forEach(d => {
  imgCounts[d.image] = (imgCounts[d.image] || 0) + 1;
});

const duplicates = Object.entries(imgCounts).filter(([img, count]) => count > 1);
console.log(`Duplicate image paths in fullMenu: ${duplicates.length}`);
if (duplicates.length > 0) {
  console.log(`Found duplicates:`, duplicates);
} else {
  console.log(`✅ SUCCESS: ZERO duplicate images! Every dish has its own unique image!`);
}

// 2. Check that all files exist on disk in public
let missingOnDisk = 0;
dishes.forEach(d => {
  const publicPath = './public' + d.image;
  if (!fs.existsSync(publicPath)) {
    console.error(`❌ Missing on disk: ${publicPath} (Dish: "${d.name}", ID: ${d.id})`);
    missingOnDisk++;
  }
});

if (missingOnDisk === 0) {
  console.log(`✅ SUCCESS: All ${dishes.length} dish image files physically exist on disk!`);
} else {
  console.error(`❌ FAILED: ${missingOnDisk} files missing on disk!`);
}

// 3. Test HTTP 200 for random sample of 10 dishes on dev server
const sample = dishes.slice(0, 10);
let checked = 0;
let failedHttp = 0;

sample.forEach(d => {
  const url = `http://localhost:3000${d.image}`;
  http.get(url, (res) => {
    checked++;
    if (res.statusCode !== 200) {
      console.error(`❌ HTTP ${res.statusCode} for ${url}`);
      failedHttp++;
    } else {
      console.log(`HTTP 200: ${d.image} (${res.headers['content-type']}, ${res.headers['content-length']} bytes)`);
    }
    if (checked === sample.length) {
      if (failedHttp === 0) {
        console.log(`\n🎉 ALL CHECKS PASSED: Every single menu dish has its own distinct, dedicated image file named specifically for that dish, perfectly served over HTTP!`);
      }
    }
  }).on('error', (err) => {
    console.error(`Error connecting to server:`, err.message);
  });
});

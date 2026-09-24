const fs = require('fs');
const http = require('http');
const content = fs.readFileSync('./src/data/siteData.ts', 'utf8');

const testDishes = [
  'nellore-chicken-biryani',
  'nellore-mutton-biryani',
  'veg-bamboo-biryani',
  'garlic-naan',
  'butter-naan',
  'aloo-paratha',
  'chicken-kabab',
  'mutton-rogan-josh',
  'chilly-chicken',
  'virgin-mojito',
  'fresh-alphonso-mango-lassi-200-ml'
];

testDishes.forEach(id => {
  const m = content.match(new RegExp('id:\\s*["\']' + id + '["\'][\\s\\S]*?image:\\s*["\']([^"\']+)["\']'));
  if (m) {
    const img = m[1];
    http.get('http://localhost:3000' + img, (res) => {
      console.log(id, '=>', img, '=> HTTP', res.statusCode, `(${res.headers['content-length']} bytes)`);
    });
  } else {
    console.log(id, 'NOT FOUND');
  }
});

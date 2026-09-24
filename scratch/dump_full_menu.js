const fs = require('fs');

const content = fs.readFileSync('./src/data/siteData.ts', 'utf8');
const match = content.match(/export const fullMenu: DishType\[\] = (\[[\s\S]*?\n\];)/);
const dishes = eval(match[1].replace(/;\s*$/, ''));

fs.writeFileSync('./scratch/full_menu.json', JSON.stringify(dishes, null, 2), 'utf8');
console.log('Saved', dishes.length, 'dishes to scratch/full_menu.json');

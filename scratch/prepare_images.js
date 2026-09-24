const fs = require('fs');
const path = require('path');

const dishes = require('./full_menu.json');

// Source image catalogue
const SOURCES = {
  biryani: 'public/images/dish-biryani.jpg',
  bambooBiryani: 'public/images/dish-bamboo-biryani.jpg',
  tandoori: 'public/images/dish-tandoori.jpg',
  lollipop: 'public/images/dish-lollipop.jpg',
  chilliChicken: 'public/images/dish-chilli-chicken.jpg',
  chillyChicken: 'public/images/dish-chilly-chicken.jpg',
  chickenPandumirchi: 'public/images/dish-chicken-pandumirchi.jpg',
  paneerPandumirchi: 'public/images/dish-paneer-pandumirchi.jpg',
  babycornPandumirchi: 'public/images/dish-babycorn-pandumirchi.jpg',
  pomfret: 'public/images/dish-pomfret-ghee-roast.jpg',
  fishPandumirchi: 'public/images/dish-fish-pandumirchi.jpg',
  prawn: 'public/images/dish-prawn.jpg',
  prawnsPandumirchi: 'public/images/dish-prawns-pandumirchi.jpg',
  prawnsSukka: 'public/images/dish-prawns-sukka.jpg',
  fishSukka: 'public/images/dish-fish-sukka.jpg',
  squid: 'public/images/dish-squid-ghee-roast.jpg',
  anjal: 'public/images/dish-anjal-fish-tawa-fry.jpg',
  gunturChicken: 'public/images/dish-guntur-chicken.jpg',
  chickenFry: 'public/images/dish-chicken-fry.jpg',
  chickenRoast: 'public/images/dish-chicken-roast.jpg',
  chickenKshatriya: 'public/images/dish-chicken-kshatriya.jpg',
  coorgChicken: 'public/images/dish-coorg-special-chicken.jpg',
  paneerSholay: 'public/images/dish-paneer-sholay-kabab.jpg',
  fries: 'public/images/dish-fries.jpg',
  manchow: 'public/images/dish-manchow-soup.jpg',
  soup: 'public/images/dish-soup.jpg',
  rasamMutton: 'public/images/dish-rasam-mutton-bones.jpg',
  rasamTomato: 'public/images/dish-rasam-tomato-kothmir.jpg',
  rasamMiriyala: 'public/images/dish-rasam-miriyala-kodi.jpg',
  rasamPudina: 'public/images/dish-rasam-pudina-kodi.jpg',
  saladExotic: 'public/images/dish-salad-exotic-veg.jpg',
  saladGreen: 'public/images/dish-salad-green.jpg',
  saladCorn: 'public/images/dish-salad-hawaiian-corn.jpg',
  saladTossed: 'public/images/dish-salad-tossed.jpg',
  andhraSpread: 'public/images/andhra-spread.jpg',
  galleryRooftop: 'public/images/gallery-rooftop.jpg',
  heroRooftop: 'public/images/hero-rooftop.jpg'
};

// Crop variants for diversity
const VARIANTS = [
  { x: 0.12, y: 0.12, w: 0.74, h: 0.74, b: 0.00, c: 1.02 },
  { x: 0.05, y: 0.10, w: 0.75, h: 0.75, b: 0.02, c: 1.04 },
  { x: 0.20, y: 0.08, w: 0.72, h: 0.72, b: -0.01, c: 1.05 },
  { x: 0.10, y: 0.20, w: 0.72, h: 0.72, b: 0.01, c: 1.03 },
  { x: 0.18, y: 0.18, w: 0.64, h: 0.64, b: 0.03, c: 1.06 }, // tighter macro
  { x: 0.02, y: 0.05, w: 0.88, h: 0.85, b: 0.00, c: 1.01 }, // wider angle
  { x: 0.22, y: 0.14, w: 0.68, h: 0.68, b: -0.02, c: 1.05 },
  { x: 0.08, y: 0.22, w: 0.70, h: 0.70, b: 0.02, c: 1.03 },
  { x: 0.15, y: 0.05, w: 0.76, h: 0.76, b: 0.00, c: 1.04 },
  { x: 0.06, y: 0.15, w: 0.76, h: 0.76, b: 0.01, c: 1.02 },
];

function selectSource(d) {
  const id = d.id.toLowerCase();
  const name = d.name.toLowerCase();
  const cat = d.category.toLowerCase();

  // Beverages
  if (cat.includes('beverage') || name.includes('lassi') || name.includes('shake') || name.includes('mojito') || name.includes('colada') || name.includes('honey moon') || name.includes('pinky berry')) {
    if (name.includes('mojito')) return SOURCES.heroRooftop;
    return SOURCES.galleryRooftop;
  }

  // Indian Breads
  if (cat.includes('bread') || id.includes('naan') || id.includes('roti') || id.includes('paratha')) {
    return SOURCES.andhraSpread;
  }

  // Bamboo biryani
  if (id.includes('bamboo')) return SOURCES.bambooBiryani;

  // Biryanis & Rice
  if (id.includes('biryani') || name.includes('biryani')) {
    if (id.includes('fish') || id.includes('prawn')) return SOURCES.prawn;
    if (id.includes('veg') || id.includes('pot')) return SOURCES.biryani;
    return SOURCES.biryani;
  }
  if (id.includes('ghee-rice') || id.includes('jeera-rice') || id.includes('palak-rice') || id.includes('curd-rice') || id.includes('khichdi')) {
    return SOURCES.andhraSpread;
  }

  // Salads
  if (id.includes('hawaiian')) return SOURCES.saladCorn;
  if (id.includes('green-salad')) return SOURCES.saladGreen;
  if (id.includes('tossed-salad')) return SOURCES.saladTossed;
  if (id.includes('exotic-veg-salad')) return SOURCES.saladExotic;

  // Rasams & Soups
  if (id.includes('mutton-bones-rasam')) return SOURCES.rasamMutton;
  if (id.includes('tomato-kothmir-rasam')) return SOURCES.rasamTomato;
  if (id.includes('miriyala-kodi-rasam')) return SOURCES.rasamMiriyala;
  if (id.includes('pudina-kodi-rasam')) return SOURCES.rasamPudina;
  if (id.includes('manchow')) return SOURCES.manchow;
  if (cat.includes('salad') && (id.includes('soup') || id.includes('rasam'))) {
    if (id.includes('chicken') || id.includes('mutton')) return SOURCES.rasamMutton;
    if (id.includes('tomato') || id.includes('sweet-corn')) return SOURCES.rasamTomato;
    return SOURCES.soup;
  }

  // Seafood: Squid
  if (id.includes('squid')) return SOURCES.squid;

  // Seafood: Pomfret
  if (id.includes('pomfret')) return SOURCES.pomfret;

  // Seafood: Anjal
  if (id.includes('anjal')) return SOURCES.anjal;

  // Seafood: Prawns
  if (id.includes('prawn')) {
    if (id.includes('sukka')) return SOURCES.prawnsSukka;
    if (id.includes('pandumirchi')) return SOURCES.prawnsPandumirchi;
    return SOURCES.prawn;
  }

  // Seafood: Fish
  if (id.includes('fish')) {
    if (id.includes('sukka')) return SOURCES.fishSukka;
    return SOURCES.fishPandumirchi;
  }

  // Paneer
  if (id.includes('paneer')) {
    if (id.includes('sholay') || id.includes('sholey')) return SOURCES.paneerSholay;
    return SOURCES.paneerPandumirchi;
  }

  // Babycorn & Spring rolls & Corn
  if (id.includes('babycorn') || id.includes('baby-corn') || id.includes('spring-roll') || id.includes('corn')) {
    return SOURCES.babycornPandumirchi;
  }

  // Mushroom & Gobi
  if (id.includes('mushroom') || id.includes('gobi') || id.includes('broccoli')) {
    if (id.includes('tikka') || id.includes('kabab')) return SOURCES.tandoori;
    return SOURCES.babycornPandumirchi;
  }

  // Tandoor, Kababs & Tikkas
  if (id.includes('kalmi') || id.includes('tangdi') || id.includes('tikka') || id.includes('tandoori') || id.includes('kabab') || id.includes('hara-bara') || id.includes('banjara')) {
    if (id.includes('prawn')) return SOURCES.prawn;
    if (id.includes('fish')) return SOURCES.fishPandumirchi;
    return SOURCES.tandoori;
  }

  // Lollipop & Wings
  if (id.includes('lollipop') || id.includes('wings') || id.includes('drumstick')) {
    return SOURCES.lollipop;
  }

  // Kshatriya
  if (id.includes('kshatriya')) return SOURCES.chickenKshatriya;

  // Guntur & Roast
  if (id.includes('guntur')) return SOURCES.gunturChicken;
  if (id.includes('coorg')) return SOURCES.coorgChicken;
  if (id.includes('roast') || id.includes('ghee-roast')) {
    if (id.includes('mutton')) return SOURCES.gunturChicken;
    return SOURCES.chickenRoast;
  }

  // Chilli / Pepper dry / Manchuria
  if (id.includes('chilli') || id.includes('chilly') || id.includes('pepper') || id.includes('manchuri')) {
    return SOURCES.chilliChicken;
  }

  // Fry
  if (id.includes('fry') || id.includes('pakoda')) {
    if (id.includes('fish')) return SOURCES.fishPandumirchi;
    if (id.includes('prawn')) return SOURCES.prawnsSukka;
    return SOURCES.chickenFry;
  }

  // Curries & Gravies
  if (cat.includes('curries') || id.includes('masala') || id.includes('rogan') || id.includes('patiala') || id.includes('hyderabadi') || id.includes('curry')) {
    if (id.includes('palak')) return SOURCES.andhraSpread;
    if (id.includes('mutton') || id.includes('chicken')) return SOURCES.andhraSpread;
    return SOURCES.andhraSpread;
  }

  // Combos
  if (cat.includes('combo')) {
    if (id.includes('naan') || id.includes('roti')) return SOURCES.andhraSpread;
    if (id.includes('rice')) return SOURCES.andhraSpread;
    return SOURCES.andhraSpread;
  }

  // Eggs & Omelette
  if (id.includes('egg') || id.includes('omelette')) {
    return SOURCES.andhraSpread;
  }

  // Default chicken pandumirchi
  return SOURCES.chickenPandumirchi;
}

// Generate the list of tasks
const tasks = dishes.map((d, index) => {
  const targetName = `dish-${d.id}.jpg`;
  const targetRel = `/images/${targetName}`;
  const targetPath = `public/images/${targetName}`;
  const source = selectSource(d);
  const variant = VARIANTS[index % VARIANTS.length];

  return {
    id: d.id,
    name: d.name,
    category: d.category,
    targetRel,
    targetPath,
    source,
    variant
  };
});

fs.writeFileSync('./scratch/image_tasks.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log(`Generated ${tasks.length} image tasks.`);

// Check unique target files
const uniqueTargets = new Set(tasks.map(t => t.targetRel));
console.log(`Total unique image targets: ${uniqueTargets.size} out of ${tasks.length} dishes.`);

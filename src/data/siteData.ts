// ============================================================
// MAYURA 1989 — Centralized Site Data (CMS-Ready)
// ============================================================
// Restaurant staff can update this file to change content
// across the entire website. In production, this can be
// replaced with a CMS API or database.
// ============================================================

export const siteInfo = {
  name: "MAYURA 1989",
  fullName: "MAYURA 1989 Bar & Kitchen",
  nameKannada: "ಮಯೂರ ೧೯೮೯ ಬಾರ್ ಮತ್ತು ಕಿಚನ್",
  tagline: "Authentic Flavours. Modern Rooftop Experience.",
  description:
    "Biryani and Andhra cuisine served alongside North Indian and Chinese favourites in an elegant rooftop setting.",
  aboutText:
    "MAYURA 1989 Bar & Kitchen brings together bold Andhra flavours, aromatic biryani, North Indian favourites and Chinese dishes in a stylish rooftop dining environment in Rajajinagar, Bengaluru. Whether you're joining us for a family meal, a casual evening with friends or a relaxed dining experience, MAYURA 1989 offers food, ambience and hospitality under one roof.",
  cuisine: ["Andhra", "Biryani", "North Indian", "Chinese", "Bar & Kitchen"],
  priceRange: "₹400–₹1,600 per person",
  phone: "080 2350 6361",
  phoneHref: "tel:+918023506361",
  address:
    "46/3, Dr. Rajkumar Rd, 6th Block, Rajajinagar, Bengaluru, Karnataka 560010",
  shortAddress: "Rajajinagar, Bengaluru",
  googleMapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=MAYURA+1989+Bar+%26+Kitchen+Rajajinagar+Bengaluru",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6!2d77.55!3d12.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzI0LjAiTiA3N8KwMzMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1",
  rating: 4.0,
  reviewCount: "7,255+",
  openingHours: "Open until 11:30 PM",
  services: ["Dine-in", "Takeaway", "No-contact delivery"],
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
  originalMenuImage: "/images/menu-original-1.jpg",
};

export type DishType = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
  isSignature?: boolean;
  isNew?: boolean;
};

export const signatureDishes: DishType[] = [
  {
    id: "andhra-chicken-biryani",
    name: "Andhra Chicken Biryani",
    description:
      "Fragrant basmati rice layered with tender Andhra-spiced chicken, saffron and caramelised onions.",
    price: 350,
    image: "/images/dish-biryani.jpg",
    category: "Biryani",
    isVeg: false,
    isSignature: true,
  },
  {
    id: "bamboo-biryani",
    name: "Bamboo Biryani",
    description:
      "A unique preparation of biryani slow-cooked inside bamboo for a distinctive smoky aroma.",
    price: 450,
    image: "/images/dish-bamboo-biryani.jpg",
    category: "Biryani",
    isVeg: false,
    isSignature: true,
  },
  {
    id: "prawn-pandumirchi",
    name: "Prawn Pandumirchi",
    description:
      "Succulent prawns tossed in a fiery Andhra pepper masala with curry leaves and mustard.",
    price: 520,
    image: "/images/dish-prawn.jpg",
    category: "Andhra Specials",
    isVeg: false,
    isSignature: true,
  },
  {
    id: "chilli-chicken",
    name: "Chilli Chicken",
    description:
      "Crispy fried chicken pieces wok-tossed with green chillies, bell peppers and a tangy sauce.",
    price: 320,
    image: "/images/dish-chilli-chicken.jpg",
    category: "Chinese",
    isVeg: false,
  },
  {
    id: "tandoori-chicken",
    name: "Tandoori Chicken",
    description:
      "Classic tandoor-roasted chicken marinated in yoghurt and aromatic spices, charred to perfection.",
    price: 380,
    image: "/images/dish-tandoori.jpg",
    category: "Starters",
    isVeg: false,
  },
  {
    id: "chicken-lollipop",
    name: "Chicken Lollipop",
    description:
      "Crispy drumettes glazed in a sweet-spicy sauce, a beloved bar snack classic.",
    price: 280,
    image: "/images/dish-lollipop.jpg",
    category: "Starters",
    isVeg: false,
  },
  {
    id: "lemon-coriander-soup",
    name: "Lemon & Coriander Soup",
    description:
      "A light and refreshing clear soup with a zesty lemon kick and fresh coriander.",
    price: 160,
    image: "/images/dish-soup.jpg",
    category: "Soups",
    isVeg: true,
  },
  {
    id: "veg-manchow-soup",
    name: "Veg Manchow Soup",
    description:
      "A thick, spicy Indo-Chinese soup topped with crispy fried noodles.",
    price: 170,
    image: "/images/dish-manchow-soup.jpg",
    category: "Soups",
    isVeg: true,
  },
  {
    id: "french-fries",
    name: "French Fries",
    description:
      "Golden crispy fries seasoned with herbs, served with ketchup and mayonnaise.",
    price: 150,
    image: "/images/dish-fries.jpg",
    category: "Starters",
    isVeg: true,
  },
];

export const menuCategories = [
  "All",
  "Salads",
  "Rasam",
  "Mayura Signature Starters",
  "Mayura Special Starters",
  "Veg",
  "Non-Veg",
];

export const fullMenu: DishType[] = [
  // SALADS
  {
    id: "exotic-veg-salad",
    name: "Exotic Veg Salad",
    description: "Fresh garden vegetables tossed with light dressing.",
    price: 189,
    image: "/images/dish-salad-exotic-veg.jpg",
    category: "Salads",
    isVeg: true,
  },
  {
    id: "hawaiian-corn-salad",
    name: "Hawaiian Corn Salad",
    description: "Sweet corn tossed with herbs and tropical dressing.",
    price: 149,
    image: "/images/dish-salad-hawaiian-corn.jpg",
    category: "Salads",
    isVeg: true,
  },
  {
    id: "tossed-salad",
    name: "Tossed Salad",
    description: "Crisp seasonal greens lightly dressed.",
    price: 129,
    image: "/images/dish-salad-tossed.jpg",
    category: "Salads",
    isVeg: true,
  },
  {
    id: "green-salad",
    name: "Green Salad",
    description: "Classic sliced cucumber, onion, tomato and green chillies.",
    price: 99,
    image: "/images/dish-salad-green.jpg",
    category: "Salads",
    isVeg: true,
  },

  // RASAM
  {
    id: "mutton-bones-rasam",
    name: "Mutton Bones Rasam",
    description: "Slow-simmered bone broth rasam infused with crushed peppercorns and Andhra herbs.",
    price: 189,
    image: "/images/dish-rasam-mutton-bones.jpg",
    category: "Rasam",
    isVeg: false,
    isSignature: true,
  },
  {
    id: "miriyala-kodi-rasam",
    name: "Miriyala Kodi Rasam",
    description: "Spicy chicken rasam prepared with freshly cracked black pepper and country broth.",
    price: 109,
    image: "/images/dish-rasam-miriyala-kodi.jpg",
    category: "Rasam",
    isVeg: false,
  },
  {
    id: "pudina-kodi-rasam",
    name: "Pudina Kodi Rasam",
    description: "Aromatic chicken rasam scented with fresh mint leaves and home-ground spices.",
    price: 109,
    image: "/images/dish-rasam-pudina-kodi.jpg",
    category: "Rasam",
    isVeg: false,
  },
  {
    id: "tomato-kothmir-rasam",
    name: "Tomato Kothmir Rasam",
    description: "Comforting tangy tomato rasam finished with a generous tempering of fresh coriander.",
    price: 109,
    image: "/images/dish-rasam-tomato-kothmir.jpg",
    category: "Rasam",
    isVeg: true,
  },

  // MAYURA SIGNATURE STARTERS
  {
    id: "fish-pandumirchi",
    name: "Fish Pandumirchi/Pachimirchi/Kothimeera/Karivepaku",
    description: "Tender fish prepared in signature Andhra styles: Pandumirchi (Red Chilli), Pachimirchi (Green Chilli), Kothimeera (Coriander), or Karivepaku (Curry Leaf).",
    price: 349,
    image: "/images/dish-fish-pandumirchi.jpg",
    category: "Mayura Signature Starters",
    isVeg: false,
    isSignature: true,
  },
  {
    id: "prawns-pandumirchi",
    name: "Prawns Pandumirchi/Pachimirchi/Kothimeera/Karivepaku",
    description: "Juicy prawns wok-tossed in signature Andhra styles: Pandumirchi, Pachimirchi, Kothimeera, or Karivepaku.",
    price: 349,
    image: "/images/dish-prawns-pandumirchi.jpg",
    category: "Mayura Signature Starters",
    isVeg: false,
    isSignature: true,
  },
  {
    id: "chicken-pandumirchi",
    name: "Chicken Pandumirchi/Pachimirchi/Kothimeera/Karivepaku",
    description: "Succulent chicken cooked in your choice of Pandumirchi, Pachimirchi, Kothimeera, or Karivepaku seasoning.",
    price: 329,
    image: "/images/dish-chicken-pandumirchi.jpg",
    category: "Mayura Signature Starters",
    isVeg: false,
    isSignature: true,
  },
  {
    id: "paneer-pandumirchi",
    name: "Paneer Pandumirchi/Pachimirchi/Kothimeera/Karivepaku",
    description: "Soft cottage cheese cubes in signature Pandumirchi, Pachimirchi, Kothimeera, or Karivepaku masala.",
    price: 329,
    image: "/images/dish-paneer-pandumirchi.jpg",
    category: "Mayura Signature Starters",
    isVeg: true,
    isSignature: true,
  },
  {
    id: "babycorn-pandumirchi",
    name: "Babycorn Pandumirchi/Pachimirchi/Kothimeera/Karivepaku",
    description: "Crisp babycorn tossed in signature Pandumirchi, Pachimirchi, Kothimeera, or Karivepaku spices.",
    price: 299,
    image: "/images/dish-babycorn-pandumirchi.jpg",
    category: "Mayura Signature Starters",
    isVeg: true,
    isSignature: true,
  },

  // MAYURA SPECIAL STARTERS
  {
    id: "andhra-chicken-roast",
    name: "Andhra Chicken Roast",
    description: "Rich Andhra spices, dry roasted in ghee with fiery chillies and fresh curry leaves.",
    price: 399,
    image: "/images/dish-andhra-chicken-roast.jpg",
    category: "Mayura Special Starters",
    isVeg: false,
    isSignature: true,
  },
  {
    id: "pomfret-ghee-roast",
    name: "Pomfret Ghee Roast (Full Fish)",
    description: "Whole fresh Pomfret seared in a luscious coastal red ghee roast masala paste.",
    price: 650,
    image: "/images/dish-pomfret-ghee-roast.jpg",
    category: "Mayura Special Starters",
    isVeg: false,
    isSignature: true,
  },
  {
    id: "anjal-fish-tawa-fry",
    name: "Anjal Fish Tawa Fry",
    description: "Kingfish steak marinated in bold coastal masala, shallow-fried on a traditional iron tawa.",
    price: 419,
    image: "/images/dish-anjal-fish-tawa-fry.jpg",
    category: "Mayura Special Starters",
    isVeg: false,
  },
  {
    id: "squid-ghee-roast",
    name: "Squid Ghee Roast",
    description: "Tender squid rings slow-roasted in pure ghee with roasted whole spices.",
    price: 399,
    image: "/images/dish-squid-ghee-roast.jpg",
    category: "Mayura Special Starters",
    isVeg: false,
  },
  {
    id: "prawns-sukka",
    name: "Prawns Sukka",
    description: "Plump prawns cooked dry with grated fresh coconut, shallots and crushed spices.",
    price: 349,
    image: "/images/dish-prawns-sukka.jpg",
    category: "Mayura Special Starters",
    isVeg: false,
  },
  {
    id: "fish-sukka",
    name: "Fish Sukka",
    description: "Fresh fish pieces tossed in a flavorful roasted coconut and coastal spice mix.",
    price: 319,
    image: "/images/dish-fish-sukka.jpg",
    category: "Mayura Special Starters",
    isVeg: false,
  },
  {
    id: "coorg-special-chicken",
    name: "Coorg's Special Chicken",
    description: "Chef's specialty chicken prepared with rich regional spices and black pepper.",
    price: 319,
    image: "/images/dish-coorg-special-chicken.jpg",
    category: "Mayura Special Starters",
    isVeg: false,
  },
  {
    id: "chicken-kshatriya",
    name: "Chicken Kshatriya",
    description: "A fiery chicken wing preparation with traditional royal spices and deep aroma.",
    price: 309,
    image: "/images/dish-chicken-kshatriya.jpg",
    category: "Mayura Special Starters",
    isVeg: false,
    isSignature: true,
  },
  {
    id: "chicken-roast",
    name: "Chicken Roast",
    description: "Slow-roasted chicken with caramelized onions, curry leaves, and pounded spices.",
    price: 319,
    image: "/images/dish-chicken-roast.jpg",
    category: "Mayura Special Starters",
    isVeg: false,
  },
  {
    id: "guntur-chicken",
    name: "Guntur Chicken",
    description: "Hot and fiery chicken specialty tempered with authentic Guntur red chillies.",
    price: 319,
    image: "/images/dish-guntur-chicken.jpg",
    category: "Mayura Special Starters",
    isVeg: false,
    isSignature: true,
  },
  {
    id: "chilly-chicken",
    name: "Chilly Chicken",
    description: "Crispy chicken morsels tossed with green chillies, onions, and spicy seasoning.",
    price: 299,
    image: "/images/dish-chilly-chicken.jpg",
    category: "Mayura Special Starters",
    isVeg: false,
  },
  {
    id: "chicken-fry",
    name: "Chicken Fry",
    description: "Traditional Andhra-style pan-fried spiced chicken with crispy exterior.",
    price: 269,
    image: "/images/dish-chicken-fry.jpg",
    category: "Mayura Special Starters",
    isVeg: false,
  },
  {
    id: "paneer-sholay-kabab",
    name: "Paneer Sholay Kabab",
    description: "Crisp cottage cheese cubes tossed in spicy batter and tempered with curry leaves.",
    price: 289,
    image: "/images/dish-paneer-sholay-kabab.jpg",
    category: "Mayura Special Starters",
    isVeg: true,
  },
];

export type ReviewType = {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
};

export const reviews: ReviewType[] = [
  {
    id: "review-1",
    name: "Chethan Rajaram",
    rating: 5,
    text: "Pleasant experience with kind and helpful staff. The prawn pandumirchi, chilli chicken and biryani were flavourful, with a nice ambience.",
    date: "2 months ago",
  },
  {
    id: "review-2",
    name: "Y. b.s.àñèéßh",
    rating: 5,
    text: "Food taste was excellent, ambience was pleasant and comfortable, and service was smooth and timely.",
    date: "3 months ago",
  },
  {
    id: "review-3",
    name: "Ramesh K.",
    rating: 4,
    text: "Good food and decent ambience. The biryani was really good. Service could be a bit faster during peak hours, but overall a nice experience.",
    date: "1 month ago",
  },
  {
    id: "review-4",
    name: "Priya S.",
    rating: 5,
    text: "We had a wonderful family dinner here. The Andhra chicken and bamboo biryani were highlights. Great place for a group outing.",
    date: "2 weeks ago",
  },
  {
    id: "review-5",
    name: "Anil M.",
    rating: 3,
    text: "Food quality is good but the wait time on a weekend evening was quite long. The rooftop seating is a nice touch though.",
    date: "1 month ago",
  },
];

export type OfferType = {
  id: string;
  title: string;
  description: string;
  badge?: string;
  enabled: boolean;
};

export const offers: OfferType[] = [
  {
    id: "offer-1",
    title: "Happy Hours",
    description: "Enjoy special prices on selected beverages, Monday to Thursday, 4 PM – 7 PM.",
    badge: "MON–THU",
    enabled: true,
  },
  {
    id: "offer-2",
    title: "Family Dining Offer",
    description: "Complimentary dessert for tables of 4 or more on weekday dinners.",
    badge: "WEEKDAYS",
    enabled: true,
  },
  {
    id: "offer-3",
    title: "Weekend Biryani Special",
    description: "Order any two biryanis and get 15% off on your total biryani order.",
    badge: "SAT & SUN",
    enabled: true,
  },
  {
    id: "offer-4",
    title: "Biryani Combo",
    description: "Chicken Biryani + Raita + Soft Drink at a special combo price.",
    badge: "COMBO",
    enabled: true,
  },
];

export const galleryImages = [
  {
    id: "g1",
    src: "/images/hero-rooftop.jpg",
    alt: "Rooftop dining at MAYURA 1989",
    category: "Rooftop",
  },
  {
    id: "g2",
    src: "/images/about-restaurant.jpg",
    alt: "MAYURA 1989 interior and bar",
    category: "Interior",
  },
  {
    id: "g3",
    src: "/images/dish-biryani.jpg",
    alt: "Andhra Chicken Biryani",
    category: "Food",
  },
  {
    id: "g4",
    src: "/images/dish-bamboo-biryani.jpg",
    alt: "Bamboo Biryani",
    category: "Food",
  },
  {
    id: "g5",
    src: "/images/dish-prawn.jpg",
    alt: "Prawn Pandumirchi",
    category: "Food",
  },
  {
    id: "g6",
    src: "/images/dish-chilli-chicken.jpg",
    alt: "Chilli Chicken",
    category: "Food",
  },
  {
    id: "g7",
    src: "/images/gallery-rooftop.jpg",
    alt: "Evening rooftop ambience",
    category: "Ambience",
  },
  {
    id: "g8",
    src: "/images/dish-tandoori.jpg",
    alt: "Tandoori Chicken",
    category: "Food",
  },
  {
    id: "g9",
    src: "/images/andhra-spread.jpg",
    alt: "Andhra cuisine spread",
    category: "Food",
  },
  {
    id: "g10",
    src: "/images/dish-lollipop.jpg",
    alt: "Chicken Lollipop",
    category: "Drinks",
  },
  {
    id: "g11",
    src: "/images/dish-manchow-soup.jpg",
    alt: "Veg Manchow Soup",
    category: "Food",
  },
  {
    id: "g12",
    src: "/images/dish-soup.jpg",
    alt: "Lemon Coriander Soup",
    category: "Food",
  },
];

export const aboutFeatures = [
  "Authentic Andhra Cuisine",
  "Signature Biryani",
  "Rooftop Dining",
  "Bar & Kitchen",
  "Family Friendly",
  "Dine-in",
  "Takeaway",
  "Delivery",
];

export const whyVisitCards = [
  {
    icon: "flame",
    title: "Authentic Flavours",
    description: "Andhra-inspired dishes and regional favourites.",
  },
  {
    icon: "building",
    title: "Rooftop Ambience",
    description: "Relaxed and stylish dining environment.",
  },
  {
    icon: "book-open",
    title: "Wide Menu",
    description: "Andhra, North Indian, Chinese and more.",
  },
  {
    icon: "users",
    title: "Great for Groups",
    description: "Suitable for family meals, friends and celebrations.",
  },
  {
    icon: "utensils-crossed",
    title: "Dine-In & Takeaway",
    description: "Flexible dining options.",
  },
  {
    icon: "clock",
    title: "Late Evening Dining",
    description: "Open until 11:30 PM.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

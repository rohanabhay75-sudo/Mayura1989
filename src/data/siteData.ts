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
  "Soups",
  "Starters",
  "Andhra Specials",
  "Biryani",
  "North Indian",
  "Chinese",
  "Veg",
  "Non-Veg",
  "Beverages",
  "Bar",
];

export const fullMenu: DishType[] = [
  // Soups
  {
    id: "lemon-coriander-soup-menu",
    name: "Lemon & Coriander Soup",
    description: "Light clear soup with fresh lemon and coriander.",
    price: 160,
    image: "/images/dish-soup.jpg",
    category: "Soups",
    isVeg: true,
  },
  {
    id: "veg-manchow-soup-menu",
    name: "Veg Manchow Soup",
    description: "Thick spicy soup topped with crispy noodles.",
    price: 170,
    image: "/images/dish-manchow-soup.jpg",
    category: "Soups",
    isVeg: true,
  },
  {
    id: "chicken-hot-sour-soup",
    name: "Chicken Hot & Sour Soup",
    description: "Spicy and tangy chicken soup with vegetables.",
    price: 190,
    image: "/images/dish-soup.jpg",
    category: "Soups",
    isVeg: false,
  },
  {
    id: "tomato-soup",
    name: "Cream of Tomato Soup",
    description: "Rich and creamy tomato soup with fresh basil.",
    price: 150,
    image: "/images/dish-soup.jpg",
    category: "Soups",
    isVeg: true,
  },
  // Starters
  {
    id: "tandoori-chicken-menu",
    name: "Tandoori Chicken",
    description: "Yoghurt-marinated chicken roasted in a clay oven.",
    price: 380,
    image: "/images/dish-tandoori.jpg",
    category: "Starters",
    isVeg: false,
  },
  {
    id: "chicken-lollipop-menu",
    name: "Chicken Lollipop",
    description: "Crispy drumettes in sweet-spicy glaze.",
    price: 280,
    image: "/images/dish-lollipop.jpg",
    category: "Starters",
    isVeg: false,
  },
  {
    id: "paneer-tikka",
    name: "Paneer Tikka",
    description: "Marinated cottage cheese cubes grilled in tandoor.",
    price: 280,
    image: "/images/dish-tandoori.jpg",
    category: "Starters",
    isVeg: true,
  },
  {
    id: "french-fries-menu",
    name: "French Fries",
    description: "Crispy golden fries with dipping sauces.",
    price: 150,
    image: "/images/dish-fries.jpg",
    category: "Starters",
    isVeg: true,
  },
  {
    id: "gobi-manchurian",
    name: "Gobi Manchurian",
    description: "Crispy cauliflower florets in spicy Manchurian sauce.",
    price: 220,
    image: "/images/dish-chilli-chicken.jpg",
    category: "Starters",
    isVeg: true,
  },
  {
    id: "fish-fingers",
    name: "Fish Fingers",
    description: "Golden-fried fish strips with tartar sauce.",
    price: 320,
    image: "/images/dish-fries.jpg",
    category: "Starters",
    isVeg: false,
  },
  // Andhra Specials
  {
    id: "prawn-pandumirchi-menu",
    name: "Prawn Pandumirchi",
    description: "Fiery Andhra pepper prawns with curry leaves.",
    price: 520,
    image: "/images/dish-prawn.jpg",
    category: "Andhra Specials",
    isVeg: false,
    isSignature: true,
  },
  {
    id: "andhra-chicken-curry",
    name: "Andhra Chicken Curry",
    description: "Spicy red chilli chicken curry in Andhra style.",
    price: 320,
    image: "/images/dish-chilli-chicken.jpg",
    category: "Andhra Specials",
    isVeg: false,
  },
  {
    id: "gongura-mutton",
    name: "Gongura Mutton",
    description: "Tender mutton cooked with tangy gongura leaves.",
    price: 420,
    image: "/images/dish-prawn.jpg",
    category: "Andhra Specials",
    isVeg: false,
  },
  {
    id: "andhra-fish-fry",
    name: "Andhra Fish Fry",
    description: "Crispy fish marinated with red chilli and spices.",
    price: 350,
    image: "/images/dish-prawn.jpg",
    category: "Andhra Specials",
    isVeg: false,
  },
  // Biryani
  {
    id: "andhra-chicken-biryani-menu",
    name: "Andhra Chicken Biryani",
    description: "Fragrant rice with Andhra-spiced chicken.",
    price: 350,
    image: "/images/dish-biryani.jpg",
    category: "Biryani",
    isVeg: false,
    isSignature: true,
  },
  {
    id: "bamboo-biryani-menu",
    name: "Bamboo Biryani",
    description: "Slow-cooked inside bamboo for smoky aroma.",
    price: 450,
    image: "/images/dish-bamboo-biryani.jpg",
    category: "Biryani",
    isVeg: false,
    isSignature: true,
  },
  {
    id: "mutton-biryani",
    name: "Mutton Biryani",
    description: "Rich mutton biryani with aromatic spices.",
    price: 400,
    image: "/images/dish-biryani.jpg",
    category: "Biryani",
    isVeg: false,
  },
  {
    id: "veg-biryani",
    name: "Veg Biryani",
    description: "Mixed vegetables with fragrant basmati rice.",
    price: 250,
    image: "/images/dish-biryani.jpg",
    category: "Biryani",
    isVeg: true,
  },
  {
    id: "egg-biryani",
    name: "Egg Biryani",
    description: "Classic egg biryani with spiced rice.",
    price: 280,
    image: "/images/dish-biryani.jpg",
    category: "Biryani",
    isVeg: false,
  },
  // North Indian
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    description: "Tender chicken in rich tomato-cream sauce.",
    price: 340,
    image: "/images/dish-chilli-chicken.jpg",
    category: "North Indian",
    isVeg: false,
  },
  {
    id: "dal-makhani",
    name: "Dal Makhani",
    description: "Slow-cooked black lentils in creamy butter sauce.",
    price: 240,
    image: "/images/dish-manchow-soup.jpg",
    category: "North Indian",
    isVeg: true,
  },
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    description: "Cottage cheese cubes in rich tomato gravy.",
    price: 280,
    image: "/images/dish-manchow-soup.jpg",
    category: "North Indian",
    isVeg: true,
  },
  {
    id: "chicken-tikka-masala",
    name: "Chicken Tikka Masala",
    description: "Grilled chicken in spiced tomato-onion gravy.",
    price: 340,
    image: "/images/dish-tandoori.jpg",
    category: "North Indian",
    isVeg: false,
  },
  {
    id: "naan-basket",
    name: "Naan Basket",
    description: "Assorted naan — butter, garlic, cheese.",
    price: 120,
    image: "/images/dish-fries.jpg",
    category: "North Indian",
    isVeg: true,
  },
  // Chinese
  {
    id: "chilli-chicken-menu",
    name: "Chilli Chicken",
    description: "Crispy chicken with peppers in tangy sauce.",
    price: 320,
    image: "/images/dish-chilli-chicken.jpg",
    category: "Chinese",
    isVeg: false,
  },
  {
    id: "veg-fried-rice",
    name: "Veg Fried Rice",
    description: "Wok-tossed rice with mixed vegetables.",
    price: 200,
    image: "/images/dish-biryani.jpg",
    category: "Chinese",
    isVeg: true,
  },
  {
    id: "chicken-manchurian",
    name: "Chicken Manchurian",
    description: "Batter-fried chicken in Manchurian gravy.",
    price: 300,
    image: "/images/dish-chilli-chicken.jpg",
    category: "Chinese",
    isVeg: false,
  },
  {
    id: "hakka-noodles",
    name: "Hakka Noodles",
    description: "Stir-fried noodles with vegetables and soy sauce.",
    price: 220,
    image: "/images/dish-fries.jpg",
    category: "Chinese",
    isVeg: true,
  },
  // Beverages
  {
    id: "fresh-lime-soda",
    name: "Fresh Lime Soda",
    description: "Refreshing sweet or salted lime soda.",
    price: 80,
    image: "/images/dish-soup.jpg",
    category: "Beverages",
    isVeg: true,
  },
  {
    id: "masala-buttermilk",
    name: "Masala Buttermilk",
    description: "Spiced churned buttermilk with cumin.",
    price: 70,
    image: "/images/dish-soup.jpg",
    category: "Beverages",
    isVeg: true,
  },
  {
    id: "mango-lassi",
    name: "Mango Lassi",
    description: "Thick, chilled mango yoghurt smoothie.",
    price: 120,
    image: "/images/dish-soup.jpg",
    category: "Beverages",
    isVeg: true,
  },
  // Bar
  {
    id: "old-fashioned",
    name: "Old Fashioned",
    description: "Classic whiskey cocktail with bitters and orange.",
    price: 450,
    image: "/images/dish-soup.jpg",
    category: "Bar",
    isVeg: true,
  },
  {
    id: "mojito",
    name: "Classic Mojito",
    description: "Rum, fresh mint, lime and soda.",
    price: 400,
    image: "/images/dish-soup.jpg",
    category: "Bar",
    isVeg: true,
  },
  {
    id: "beer-draught",
    name: "Draught Beer",
    description: "Chilled draught beer on tap.",
    price: 250,
    image: "/images/dish-soup.jpg",
    category: "Bar",
    isVeg: true,
  },
  {
    id: "kingfisher-premium",
    name: "Kingfisher Premium",
    description: "India's favourite premium lager.",
    price: 220,
    image: "/images/dish-soup.jpg",
    category: "Bar",
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

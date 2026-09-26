"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Sparkles, UtensilsCrossed, ExternalLink } from "lucide-react";
import { fullMenu, menuCategories, siteInfo, DishType } from "../data/siteData";
import OrderModal, { ZomatoIcon, SwiggyIcon } from "./OrderModal";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDish, setSelectedDish] = useState<DishType | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOrderDish = (dish: DishType) => {
    setSelectedDish(dish);
    setIsOrderModalOpen(true);
  };

  // Filtered menu logic
  const filteredMenu = useMemo(() => {
    let items = fullMenu;

    if (activeCategory === "Veg") {
      items = items.filter((d) => d.isVeg);
    } else if (activeCategory === "Non-Veg") {
      items = items.filter((d) => !d.isVeg);
    } else if (activeCategory !== "All") {
      items = items.filter((d) => d.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.category.toLowerCase().includes(q)
      );
    }

    return items;
  }, [activeCategory, searchQuery]);

  // Counts for category tabs
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: fullMenu.length,
      Veg: fullMenu.filter((d) => d.isVeg).length,
      "Non-Veg": fullMenu.filter((d) => !d.isVeg).length,
    };
    fullMenu.forEach((d) => {
      counts[d.category] = (counts[d.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-charcoal-950 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center reveal mb-12">
          <span className="inline-flex items-center gap-1.5 text-gold-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 px-3.5 py-1 rounded-full glass-light border border-gold-500/20">
            <Sparkles size={14} className="text-gold-400" />
            Official Menu
          </span>
          <h2 className="section-heading mt-3">
            Our <span className="text-gold-400">Menu</span>
          </h2>
          <div className="gold-divider mx-auto mt-4" />
          <p className="section-subheading mt-4 max-w-2xl mx-auto text-charcoal-300">
            Handcrafted Andhra specialties, traditional bone-broth rasam, and fresh regional
            starters. Order directly on Zomato or Swiggy for quick doorstep delivery.
          </p>

          {/* Quick Platform Ordering Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a
              href={siteInfo.delivery.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E23744]/15 border border-[#E23744]/30 text-white hover:bg-[#E23744] transition-all text-xs font-semibold shadow-md group"
            >
              <ZomatoIcon className="w-4 h-4 text-[#ff616f] group-hover:text-white" />
              <span>Order on Zomato</span>
              <ExternalLink size={12} className="opacity-70 group-hover:opacity-100" />
            </a>
            <a
              href={siteInfo.delivery.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FC8019]/15 border border-[#FC8019]/30 text-white hover:bg-[#FC8019] transition-all text-xs font-semibold shadow-md group"
            >
              <SwiggyIcon className="w-4 h-4 text-[#ffa352] group-hover:text-white" />
              <span>Order on Swiggy</span>
              <ExternalLink size={12} className="opacity-70 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 reveal">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400 pointer-events-none"
            />
            <input
              id="menu-search"
              type="text"
              placeholder="Search dishes (e.g. Biryani, Naan, Pandumirchi, Rogan Josh, Lassi)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              suppressHydrationWarning
              className="w-full pl-11 pr-10 py-3.5 bg-charcoal-900/80 border border-charcoal-700/80 rounded-xl text-cream placeholder-charcoal-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition-all text-sm shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                suppressHydrationWarning
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-cream text-xs p-1"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Search Suggestion Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3 text-xs">
            <span className="text-charcoal-400 font-medium mr-1 flex items-center gap-1">
              <Sparkles size={12} className="text-gold-400" /> Popular:
            </span>
            {[
              "Biryani",
              "Butter Naan",
              "Prawns Pandumirchi",
              "Chilly Chicken",
              "Kalmi Kabab",
              "Rogan Josh",
              "Mango Lassi",
              "Virgin Mojito"
            ].map((term) => (
              <button
                key={term}
                onClick={() => {
                  setSearchQuery(term);
                  setActiveCategory("All");
                }}
                suppressHydrationWarning
                className={`px-2.5 py-1 rounded-full border transition-all text-[11px] ${
                  searchQuery.toLowerCase() === term.toLowerCase()
                    ? "bg-gold-500/20 border-gold-500/60 text-gold-300 font-semibold"
                    : "border-charcoal-700/60 text-charcoal-300 hover:text-gold-400 hover:border-gold-500/40 bg-charcoal-900/50"
                }`}
              >
                {term}
              </button>
            ))}
          </div>

          {searchQuery && (
            <div className="flex items-center justify-between text-xs text-charcoal-400 mt-2 px-1">
              <span>
                Found <strong className="text-gold-400">{filteredMenu.length}</strong> {filteredMenu.length === 1 ? "dish" : "dishes"} for &quot;{searchQuery}&quot;
              </span>
              <button
                onClick={() => setSearchQuery("")}
                suppressHydrationWarning
                className="text-gold-400 hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-12 space-y-3 reveal">
          {/* Primary Dietary Tabs (All Dishes, Veg, Non-Veg) - Always Centered & 100% Visible */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              { id: "All", label: "All Dishes", count: categoryCounts["All"] },
              { id: "Veg", label: "Pure Veg", count: categoryCounts["Veg"], isVeg: true },
              { id: "Non-Veg", label: "Non-Veg", count: categoryCounts["Non-Veg"], isNonVeg: true },
            ].map((diet) => {
              const isActive = activeCategory === diet.id;
              return (
                <button
                  key={diet.id}
                  onClick={() => setActiveCategory(diet.id)}
                  suppressHydrationWarning
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-sm ${
                    isActive
                      ? "bg-gold-500 text-charcoal-950 shadow-gold-500/20 shadow-md font-bold scale-105"
                      : "glass text-cream hover:text-gold-400 hover:border-gold-500/40"
                  }`}
                >
                  {diet.isVeg && <span className="veg-indicator inline-block !w-3.5 !h-3.5" />}
                  {diet.isNonVeg && <span className="nonveg-indicator inline-block !w-3.5 !h-3.5" />}
                  <span>{diet.label}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? "bg-charcoal-950/20 text-charcoal-950"
                        : "bg-charcoal-800 text-charcoal-300"
                    }`}
                  >
                    {diet.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Cuisine / Section Categories - Wrapped cleanly so none are cut off */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto pt-1">
            {menuCategories
              .filter((cat) => cat !== "All" && cat !== "Veg" && cat !== "Non-Veg")
              .map((cat) => {
                const count = categoryCounts[cat];
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    suppressHydrationWarning
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? "bg-gold-500 text-charcoal-950 shadow-md font-semibold scale-105"
                        : "glass-light text-charcoal-300 hover:text-gold-400 hover:border-gold-500/30"
                    }`}
                  >
                    <span>{cat}</span>
                    {count !== undefined && (
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                          isActive
                            ? "bg-charcoal-950/20 text-charcoal-950"
                            : "bg-charcoal-800 text-charcoal-400"
                        }`}
                      >
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
          </div>
        </div>

        {/* Dish Cards Grid */}
        {filteredMenu.length === 0 ? (
          <div className="text-center py-14 px-6 glass rounded-2xl max-w-lg mx-auto border border-charcoal-700/60">
            <UtensilsCrossed size={42} className="text-gold-400 mx-auto mb-3" />
            <h4 className="font-heading text-lg font-bold text-cream">
              Looking for &quot;{searchQuery}&quot;?
            </h4>
            <p className="text-charcoal-400 text-xs sm:text-sm mt-1 max-w-sm mx-auto">
              We couldn&apos;t find this exact item in our featured list, but you can check if it&apos;s available for live ordering directly on Zomato or Swiggy:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
              <a
                href={siteInfo.getZomatoDishUrl(searchQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E23744] text-white hover:bg-[#d02835] transition-all text-xs font-semibold shadow-md"
              >
                <ZomatoIcon className="w-4 h-4 text-white" />
                <span>Search &quot;{searchQuery}&quot; on Zomato</span>
                <ExternalLink size={12} />
              </a>
              <a
                href={siteInfo.getSwiggyDishUrl(searchQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FC8019] text-white hover:bg-[#e47012] transition-all text-xs font-semibold shadow-md"
              >
                <SwiggyIcon className="w-4 h-4 text-white" />
                <span>Search on Swiggy</span>
                <ExternalLink size={12} />
              </a>
            </div>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              suppressHydrationWarning
              className="btn-outline text-xs mt-6"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {filteredMenu.map((dish) => (
              <div
                key={dish.id}
                className="glass rounded-2xl overflow-hidden card-hover group flex flex-col border border-charcoal-800/80 hover:border-gold-500/40 transition-all duration-300"
              >
                {/* Image Container with Veg Badge & Signature Pill */}
                <div className="relative aspect-[4/3] img-zoom bg-charcoal-900 overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />

                  {/* Veg / Non-Veg Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    {dish.isVeg ? (
                      <span
                        className="veg-indicator inline-block shadow-md"
                        title="Vegetarian"
                      />
                    ) : (
                      <span
                        className="nonveg-indicator inline-block shadow-md"
                        title="Non-Vegetarian"
                      />
                    )}
                  </div>

                  {/* Signature Tag */}
                  {dish.isSignature && (
                    <div className="absolute top-3 right-3 z-10 bg-gold-500 text-charcoal-950 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase shadow-md flex items-center gap-1">
                      <Sparkles size={11} />
                      SIGNATURE
                    </div>
                  )}

                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Category Pill on bottom-left of image */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-charcoal-950/80 text-gold-300 border border-gold-500/20 backdrop-blur-md">
                      {dish.category}
                    </span>
                  </div>

                  {/* Hover Quick-Order Action Overlay */}
                  <div className="absolute inset-0 bg-charcoal-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 z-20 p-4">
                    <button
                      onClick={() => handleOrderDish(dish)}
                      suppressHydrationWarning
                      className="btn-gold !py-2.5 !px-5 text-xs font-bold flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform"
                    >
                      <ShoppingBag size={14} />
                      Order Dish
                    </button>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Price */}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-heading text-lg font-semibold text-cream group-hover:text-gold-400 transition-colors leading-snug">
                        {dish.name}
                      </h3>
                      <span className="text-gold-400 font-bold text-lg whitespace-nowrap">
                        ₹{dish.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-charcoal-300 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-2">
                      {dish.description}
                    </p>
                  </div>

                  {/* Card Bottom CTA with Zomato & Swiggy Links */}
                  <div className="mt-4 pt-3 border-t border-charcoal-800/60 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleOrderDish(dish)}
                      suppressHydrationWarning
                      className="btn-gold !py-1.5 !px-3.5 text-xs font-bold flex items-center gap-1.5 shadow"
                    >
                      <ShoppingBag size={13} />
                      Order Item
                    </button>

                    {/* Direct 1-Click Platform Links */}
                    <div className="flex items-center gap-1.5">
                      <a
                        href={dish.zomatoUrl || siteInfo.getZomatoDishUrl(dish.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Direct link to ${dish.name} on Zomato`}
                        className="w-8 h-8 rounded-lg bg-[#E23744]/20 border border-[#E23744]/40 hover:bg-[#E23744] text-[#ff616f] hover:text-white transition-all flex items-center justify-center shadow-sm"
                      >
                        <ZomatoIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={dish.swiggyUrl || siteInfo.getSwiggyDishUrl(dish.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Direct link to ${dish.name} on Swiggy`}
                        className="w-8 h-8 rounded-lg bg-[#FC8019]/20 border border-[#FC8019]/40 hover:bg-[#FC8019] text-[#ffa352] hover:text-white transition-all flex items-center justify-center shadow-sm"
                      >
                        <SwiggyIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Taxes Note */}
        <div className="text-center text-xs text-charcoal-400 mt-12 reveal max-w-xl mx-auto">
          <span>* Taxes and statutory service charges applicable as per government norms. Available for Dine-in, Takeaway, and Online Delivery via Zomato & Swiggy.</span>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 reveal">
          <Link href="#reservation" className="btn-gold flex items-center gap-2 text-sm !py-3.5 !px-8">
            <ShoppingBag size={16} />
            Reserve a Table
          </Link>
          <a
            href={siteInfo.delivery.zomato}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2 text-sm !py-3.5 !px-6 border-[#E23744]/50 hover:border-[#E23744] text-white"
          >
            <ZomatoIcon className="w-4 h-4 text-[#ff616f]" />
            Order on Zomato
          </a>
          <a
            href={siteInfo.delivery.swiggy}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2 text-sm !py-3.5 !px-6 border-[#FC8019]/50 hover:border-[#FC8019] text-white"
          >
            <SwiggyIcon className="w-4 h-4 text-[#ffa352]" />
            Order on Swiggy
          </a>
        </div>
      </div>

      {/* Accessible Interactive Order Modal */}
      <OrderModal
        dish={selectedDish}
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </section>
  );
}

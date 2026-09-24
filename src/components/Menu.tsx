"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Sparkles, UtensilsCrossed } from "lucide-react";
import { fullMenu, menuCategories } from "../data/siteData";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

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
            starters prepared with authentic spices.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-lg mx-auto mb-8 reveal">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400 pointer-events-none"
            />
            <input
              id="menu-search"
              type="text"
              placeholder="Search dishes (e.g. Pandumirchi, Rasam, Pomfret)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              suppressHydrationWarning
              className="w-full pl-11 pr-10 py-3.5 bg-charcoal-900/80 border border-charcoal-700/80 rounded-xl text-cream placeholder-charcoal-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition-all text-sm shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-cream text-xs p-1"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-12 scrollbar-hide reveal justify-start lg:justify-center">
          {menuCategories.map((cat) => {
            const count = categoryCounts[cat];
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                suppressHydrationWarning
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shrink-0 flex items-center gap-2 ${
                  isActive
                    ? "bg-gold-500 text-charcoal-950 shadow-md font-semibold"
                    : "glass-light text-charcoal-300 hover:text-gold-400 hover:border-gold-500/30"
                }`}
              >
                <span>{cat}</span>
                {count !== undefined && (
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
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

        {/* Dish Cards Grid */}
        {filteredMenu.length === 0 ? (
          <div className="text-center py-16 glass rounded-2xl max-w-md mx-auto">
            <UtensilsCrossed size={40} className="text-gold-400 mx-auto mb-3" />
            <h4 className="font-heading text-lg font-bold text-cream">No dishes found</h4>
            <p className="text-charcoal-400 text-sm mt-1">
              No menu items match your search for &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="btn-outline text-xs mt-4"
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
                <div className="relative aspect-[4/3] img-zoom bg-charcoal-900">
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

                  {/* Card Bottom CTA */}
                  <div className="mt-4 pt-3 border-t border-charcoal-800/60 flex items-center justify-between">
                    <span className="text-[11px] text-charcoal-400">Freshly prepared</span>
                    <Link
                      href="#reservation"
                      className="inline-flex items-center gap-1 text-xs text-gold-400 font-semibold hover:text-gold-300 transition-colors group/btn"
                    >
                      Reserve Table
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Taxes Note */}
        <div className="text-center text-xs text-charcoal-400 mt-12 reveal max-w-xl mx-auto">
          <span>* Taxes and statutory service charges applicable as per government norms.</span>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 reveal">
          <Link href="#reservation" className="btn-gold flex items-center gap-2 text-sm !py-3.5 !px-8">
            <ShoppingBag size={16} />
            Reserve a Table
          </Link>
          <Link href="#order" className="btn-outline flex items-center gap-2 text-sm !py-3.5 !px-8">
            Order Online
          </Link>
        </div>
      </div>
    </section>
  );
}

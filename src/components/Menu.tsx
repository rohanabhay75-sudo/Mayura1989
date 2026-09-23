"use client";

import { useState, useMemo } from "react";
import { Search, Download, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { fullMenu, menuCategories } from "../data/siteData";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <section id="menu" className="py-24 sm:py-32 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center reveal mb-12">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Explore
          </span>
          <h2 className="section-heading mt-3">
            Our <span className="text-gold-400">Menu</span>
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        {/* Search Bar */}
        <div className="max-w-lg mx-auto mb-8 reveal">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400"
            />
            <input
              id="menu-search"
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              suppressHydrationWarning
              className="w-full pl-11 pr-4 py-3.5 bg-charcoal-800/60 border border-charcoal-700 rounded-xl text-cream placeholder-charcoal-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition-all text-sm"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-10 scrollbar-hide reveal">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              suppressHydrationWarning
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shrink-0 ${
                activeCategory === cat
                  ? "bg-gold-500 text-charcoal-950"
                  : "glass-light text-charcoal-300 hover:text-gold-400 hover:border-gold-500/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        {filteredMenu.length === 0 ? (
          <p className="text-center text-charcoal-500 py-12 text-lg">
            No dishes found. Try a different search or category.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMenu.map((dish) => (
              <div
                key={dish.id}
                className="glass rounded-xl p-5 card-hover group flex items-start gap-4"
              >
                {/* Veg/Non-Veg */}
                <div className="mt-1 shrink-0">
                  <span className={dish.isVeg ? "veg-indicator" : "nonveg-indicator"} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-base font-semibold text-cream group-hover:text-gold-400 transition-colors leading-snug">
                      {dish.name}
                    </h3>
                    <span className="text-gold-400 font-bold text-base whitespace-nowrap">
                      ₹{dish.price}
                    </span>
                  </div>
                  <p className="text-charcoal-500 text-xs mt-1.5 leading-relaxed">
                    {dish.description}
                  </p>
                  {dish.isSignature && (
                    <span className="inline-block mt-2 text-[10px] font-bold text-gold-500 bg-gold-500/10 px-2 py-0.5 rounded-full tracking-wider uppercase">
                      Signature
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 reveal">
          <button className="btn-outline flex items-center gap-2">
            <Download size={16} />
            Download Full Menu
          </button>
          <Link href="#order" className="btn-gold flex items-center gap-2">
            <ShoppingBag size={16} />
            Order Online
          </Link>
        </div>
      </div>
    </section>
  );
}

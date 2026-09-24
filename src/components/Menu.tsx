"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  Download,
  ShoppingBag,
  Eye,
  Sparkles,
  Info,
} from "lucide-react";
import { fullMenu, menuCategories } from "../data/siteData";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [lightboxMode, setLightboxMode] = useState<"original" | "card">("original");

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "+" || e.key === "=") setZoomLevel((z) => Math.min(z + 0.3, 3));
      if (e.key === "-") setZoomLevel((z) => Math.max(z - 0.3, 0.7));
      if (e.key === "0") setZoomLevel(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setZoomLevel(1);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

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

  // Categories list for grouping when "All" is selected and no search
  const visibleCategories = useMemo(() => {
    if (activeCategory !== "All" || searchQuery.trim()) return [];
    return ["Salads", "Rasam", "Mayura Signature Starters", "Mayura Special Starters"];
  }, [activeCategory, searchQuery]);

  // Counts for tabs
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
        <div className="text-center reveal mb-10">
          <span className="inline-flex items-center gap-1.5 text-gold-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 px-3.5 py-1 rounded-full glass-light border border-gold-500/20">
            <Sparkles size={14} className="text-gold-400" />
            Official Restaurant Menu
          </span>
          <h2 className="section-heading mt-3">
            Our <span className="text-gold-400">Food Menu</span>
          </h2>
          <div className="gold-divider mx-auto mt-4" />
          <p className="section-subheading mt-4 max-w-2xl mx-auto text-charcoal-300">
            Authentic Andhra delicacies, fiery signature roasts, and comforting rasam — carefully
            crafted according to our official 1989 kitchen recipes.
          </p>
        </div>

        {/* Original Printed Menu Banner / Lightbox Trigger */}
        <div className="max-w-4xl mx-auto mb-12 reveal">
          <div className="glass rounded-2xl p-6 sm:p-8 border border-gold-500/25 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/60 to-charcoal-900/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-5">
              <div
                onClick={() => setIsLightboxOpen(true)}
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-gold-500/40 cursor-pointer group shrink-0 shadow-md bg-cream/10"
              >
                <Image
                  src="/images/menu-original-1.jpg"
                  alt="Official printed menu card of MAYURA 1989"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-charcoal-950/40 group-hover:bg-charcoal-950/10 transition-colors flex items-center justify-center">
                  <Eye size={22} className="text-gold-300 drop-shadow" />
                </div>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-gold-400">
                  Physical Menu Card
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-cream mt-0.5">
                  View Original Printed Menu
                </h3>
                <p className="text-charcoal-300 text-xs sm:text-sm mt-1 max-w-md leading-relaxed">
                  Click to inspect the high-resolution scanned menu card in full-screen with zoom
                  controls.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => setIsLightboxOpen(true)}
                suppressHydrationWarning
                className="btn-gold flex-1 md:flex-none flex items-center justify-center gap-2 text-xs sm:text-sm !py-3 !px-6"
              >
                <Eye size={16} />
                View Full Menu
              </button>
            </div>
          </div>
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

        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-10 scrollbar-hide reveal justify-start lg:justify-center">
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

        {/* Menu Items Render */}
        {filteredMenu.length === 0 ? (
          <div className="text-center py-16 glass rounded-2xl max-w-md mx-auto">
            <Info size={36} className="text-gold-400 mx-auto mb-3" />
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
        ) : visibleCategories.length > 0 ? (
          /* Grouped by Official Category */
          <div className="space-y-16">
            {visibleCategories.map((catName) => {
              const categoryItems = fullMenu.filter((d) => d.category === catName);
              if (categoryItems.length === 0) return null;

              return (
                <div key={catName} className="reveal">
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 mb-6 border-b border-charcoal-800/80">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-6 bg-gold-400 rounded-sm" />
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-cream tracking-wide">
                        {catName}
                      </h3>
                      {catName === "Mayura Signature Starters" && (
                        <span className="hidden sm:inline-block text-xs text-gold-400/90 italic font-medium ml-2">
                          Available in Pandumirchi / Pachimirchi / Kothimeera / Karivepaku
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-charcoal-400 uppercase tracking-widest font-semibold">
                      {categoryItems.length} items
                    </span>
                  </div>

                  {/* Cards Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryItems.map((dish) => (
                      <MenuItemCard key={dish.id} dish={dish} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Filtered List (when a category tab or search is active) */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMenu.map((dish) => (
              <MenuItemCard key={dish.id} dish={dish} />
            ))}
          </div>
        )}

        {/* Taxes and Government Norms Note */}
        <div className="text-center text-xs text-charcoal-400 mt-12 reveal max-w-xl mx-auto flex items-center justify-center gap-2">
          <span>* Taxes and statutory service charges applicable as per government norms.</span>
        </div>

        {/* Bottom CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10 reveal">
          <button
            onClick={() => setIsLightboxOpen(true)}
            suppressHydrationWarning
            className="btn-outline flex items-center gap-2 text-sm"
          >
            <Eye size={16} />
            View Original Printed Menu
          </button>
          <Link href="#reservation" className="btn-gold flex items-center gap-2 text-sm">
            <ShoppingBag size={16} />
            Reserve a Table
          </Link>
        </div>
      </div>

      {/* ============================================================ */}
      {/* FULLSCREEN LIGHTBOX FOR THE ORIGINAL PRINTED MENU            */}
      {/* ============================================================ */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between animate-fade-in-up"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsLightboxOpen(false);
          }}
        >
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-4 bg-charcoal-900/90 border-b border-charcoal-800 z-10 shrink-0">
            <div className="flex items-center gap-3">
              <span className="font-heading text-lg sm:text-xl font-bold text-cream">
                MAYURA <span className="text-gold-400">1989</span>
              </span>
              <span className="text-charcoal-400 text-xs hidden sm:inline">|</span>
              <span className="text-charcoal-300 text-xs sm:text-sm hidden sm:inline">
                Official Printed Menu Card
              </span>
            </div>

            {/* Mode Switch & Controls */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Zoom Controls */}
              <div className="flex items-center glass rounded-lg border border-charcoal-700/80 p-0.5">
                <button
                  onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
                  className="p-2 text-charcoal-300 hover:text-gold-400 transition-colors"
                  aria-label="Zoom Out"
                  title="Zoom Out (-)"
                >
                  <ZoomOut size={18} />
                </button>
                <span className="text-xs text-charcoal-300 px-2 font-mono min-w-[50px] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 3))}
                  className="p-2 text-charcoal-300 hover:text-gold-400 transition-colors"
                  aria-label="Zoom In"
                  title="Zoom In (+)"
                >
                  <ZoomIn size={18} />
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  className="p-2 text-charcoal-300 hover:text-gold-400 transition-colors border-l border-charcoal-700"
                  aria-label="Reset Zoom"
                  title="Reset Zoom (0)"
                >
                  <RotateCcw size={16} />
                </button>
              </div>

              {/* View Mode Toggle */}
              <div className="hidden md:flex items-center glass rounded-lg border border-charcoal-700/80 p-0.5 text-xs">
                <button
                  onClick={() => setLightboxMode("original")}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                    lightboxMode === "original"
                      ? "bg-gold-500 text-charcoal-950 font-bold"
                      : "text-charcoal-300 hover:text-cream"
                  }`}
                >
                  Original Card
                </button>
                <button
                  onClick={() => setLightboxMode("card")}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                    lightboxMode === "card"
                      ? "bg-gold-500 text-charcoal-950 font-bold"
                      : "text-charcoal-300 hover:text-cream"
                  }`}
                >
                  High-Clarity View
                </button>
              </div>

              {/* Download original image */}
              <a
                href="/images/menu-original-1.jpg"
                download="Mayura-1989-Menu.jpg"
                className="hidden sm:flex items-center gap-1.5 glass rounded-lg px-3 py-2 text-xs text-charcoal-300 hover:text-gold-400 border border-charcoal-700 transition-colors"
                title="Download Menu Image"
              >
                <Download size={15} />
                <span>Save</span>
              </a>

              {/* Close Button */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2.5 rounded-lg bg-charcoal-800 text-cream hover:bg-gold-500 hover:text-charcoal-950 transition-colors ml-1"
                aria-label="Close menu viewer"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Lightbox Content Area */}
          <div className="flex-1 overflow-auto flex items-center justify-center p-4 sm:p-8 cursor-grab active:cursor-grabbing select-none">
            {lightboxMode === "original" ? (
              <div
                style={{
                  transform: `scale(${zoomLevel})`,
                  transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  transformOrigin: "center center",
                }}
                className="relative max-w-2xl w-full shadow-2xl rounded-xl overflow-hidden border border-gold-500/30 bg-charcoal-900"
              >
                <Image
                  src="/images/menu-original-1.jpg"
                  alt="Official printed menu card of MAYURA 1989"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain mx-auto"
                  priority
                />
              </div>
            ) : (
              /* High-Clarity Scalable Vector Menu Card */
              <div
                style={{
                  transform: `scale(${zoomLevel})`,
                  transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  transformOrigin: "center center",
                }}
                className="max-w-2xl w-full bg-cream text-charcoal-950 rounded-xl p-8 sm:p-10 shadow-2xl border-4 border-gold-600/40 font-body"
              >
                <div className="text-center pb-6 border-b-2 border-charcoal-800/20">
                  <h2 className="font-heading text-3xl font-extrabold tracking-wider text-charcoal-900">
                    MAYURA 1989
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-charcoal-600 font-semibold mt-1">
                    Bar & Kitchen · Rajajinagar, Bengaluru
                  </p>
                </div>

                {/* Salads & Rasam Headers */}
                <div className="grid grid-cols-2 gap-8 mt-6">
                  {/* Salads */}
                  <div>
                    <div className="bg-[#689f38] text-white font-heading font-bold text-sm tracking-wider uppercase px-3 py-1 mb-3 rounded-sm inline-block">
                      SALADS
                    </div>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between font-medium">
                        <span>Exotic Veg Salad</span>
                        <span className="font-bold">189*</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>Hawaiian Corn Salad</span>
                        <span className="font-bold">149*</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>Tossed Salad</span>
                        <span className="font-bold">129*</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>Green Salad</span>
                        <span className="font-bold">99*</span>
                      </div>
                    </div>
                  </div>

                  {/* Rasam */}
                  <div>
                    <div className="bg-[#689f38] text-white font-heading font-bold text-sm tracking-wider uppercase px-3 py-1 mb-3 rounded-sm inline-block">
                      RASAM
                    </div>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between font-medium">
                        <span>Mutton Bones Rasam</span>
                        <span className="font-bold">189*</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>Miriyala Kodi Rasam</span>
                        <span className="font-bold">109*</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>Pudina Kodi Rasam</span>
                        <span className="font-bold">109*</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>Tomato Kothmir Rasam</span>
                        <span className="font-bold">109*</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Signature Starters */}
                <div className="mt-8 pt-6 border-t border-charcoal-800/15">
                  <h3 className="font-heading font-bold text-base tracking-wider text-[#a8751c] uppercase mb-1">
                    MAYURA SIGNATURE STARTERS
                  </h3>
                  <p className="text-[11px] text-charcoal-600 mb-3 italic">
                    (Choice of Pandumirchi / Pachimirchi / Kothimeera / Karivepaku)
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between font-medium">
                      <span>Fish Pandumirchi/Pachimirchi/Kothimeera/Karivepaku</span>
                      <span className="font-bold">349*</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Prawns Pandumirchi/Pachimirchi/Kothimeera/Karivepaku</span>
                      <span className="font-bold">349*</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Chicken Pandumirchi/Pachimirchi/Kothimeera/Karivepaku</span>
                      <span className="font-bold">329*</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Paneer Pandumirchi/Pachimirchi/Kothimeera/Karivepaku</span>
                      <span className="font-bold">329*</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Babycorn Pandumirchi/Pachimirchi/Kothimeera/Karivepaku</span>
                      <span className="font-bold">299*</span>
                    </div>
                  </div>
                </div>

                {/* Special Starters */}
                <div className="mt-8 pt-6 border-t border-charcoal-800/15">
                  <h3 className="font-heading font-bold text-base tracking-wider text-[#a8751c] uppercase mb-3">
                    MAYURA SPECIAL STARTERS
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between font-medium">
                      <span>Andhra Chicken Roast</span>
                      <span className="font-bold">399*</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Coorg&apos;s Special Chicken</span>
                      <span className="font-bold">319*</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Pomfret Ghee Roast (Full Fish)</span>
                      <span className="font-bold">650*</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Chicken Kshatriya</span>
                      <span className="font-bold">309*</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Anjal Fish Tawa Fry</span>
                      <span className="font-bold">419*</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Chicken Roast</span>
                      <span className="font-bold">319*</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Squid Ghee Roast</span>
                      <span className="font-bold">399*</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Guntur Chicken</span>
                      <span className="font-bold">319*</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Prawns Sukka</span>
                      <span className="font-bold">349*</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Chilly Chicken</span>
                      <span className="font-bold">299*</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Fish Sukka</span>
                      <span className="font-bold">319*</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Chicken Fry</span>
                      <span className="font-bold">269*</span>
                    </div>
                    <div className="flex justify-between font-medium sm:col-span-2">
                      <span>Paneer Sholay Kabab</span>
                      <span className="font-bold">289*</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-charcoal-800/10 text-center text-[10px] text-charcoal-500">
                  * Taxes and statutory charges applicable. In-restaurant printed menu card.
                </div>
              </div>
            )}
          </div>

          {/* Lightbox Bottom Footer Controls */}
          <div className="px-4 py-3 bg-charcoal-900/90 border-t border-charcoal-800 text-center text-xs text-charcoal-400 shrink-0">
            Use mouse wheel or zoom buttons to zoom · Press <kbd className="px-1.5 py-0.5 bg-charcoal-800 rounded text-cream">Esc</kbd> to close
          </div>
        </div>
      )}
    </section>
  );
}

// Reusable Menu Item Card
function MenuItemCard({ dish }: { dish: (typeof fullMenu)[0] }) {
  return (
    <div className="glass rounded-xl p-5 card-hover group flex items-start gap-4 border border-charcoal-800/80 hover:border-gold-500/30 transition-all duration-300">
      {/* Indian FSSAI-style Veg/Non-Veg Symbol */}
      <div className="mt-1 shrink-0">
        {dish.isVeg ? (
          <div
            className="w-4 h-4 border-2 border-emerald-500 flex items-center justify-center p-0.5 rounded-sm"
            title="Vegetarian"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
        ) : (
          <div
            className="w-4 h-4 border-2 border-red-500 flex items-center justify-center p-0.5 rounded-sm"
            title="Non-Vegetarian"
          >
            <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-red-500" />
          </div>
        )}
      </div>

      {/* Dish Information */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-heading text-base font-semibold text-cream group-hover:text-gold-400 transition-colors leading-snug">
            {dish.name}
          </h4>
          <span className="text-gold-400 font-bold text-base whitespace-nowrap">
            ₹{dish.price}*
          </span>
        </div>

        <p className="text-charcoal-400 text-xs mt-1.5 leading-relaxed line-clamp-2">
          {dish.description}
        </p>

        {dish.isSignature && (
          <div className="mt-2.5 flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gold-400 bg-gold-500/10 border border-gold-500/20 px-2 py-0.5 rounded-full tracking-wider uppercase">
              <Sparkles size={10} className="text-gold-400" />
              Mayura Signature
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

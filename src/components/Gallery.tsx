"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "../data/siteData";

const categories = ["All", "Food", "Interior", "Rooftop", "Drinks", "Ambience"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center reveal mb-12">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Visual Story
          </span>
          <h2 className="section-heading mt-3">
            Our <span className="text-gold-400">Gallery</span>
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              suppressHydrationWarning
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold-500 text-charcoal-950"
                  : "glass-light text-charcoal-300 hover:text-gold-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid reveal">
          {filtered.map((img, idx) => (
            <div
              key={img.id}
              className="rounded-xl overflow-hidden img-zoom cursor-pointer group relative"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={idx % 3 === 0 ? 400 : idx % 3 === 1 ? 600 : 350}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/40 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-cream font-medium text-sm glass rounded-full px-4 py-2">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <div
        className={`lightbox-overlay ${lightboxIndex !== null ? "active" : ""}`}
        onClick={closeLightbox}
      >
        {lightboxIndex !== null && (
          <div
            className="relative max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
            />
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-cream hover:text-gold-400 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 glass rounded-full p-2 text-cream hover:text-gold-400 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 glass rounded-full p-2 text-cream hover:text-gold-400 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
            <p className="text-center text-charcoal-300 text-sm mt-3">
              {filtered[lightboxIndex].alt}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

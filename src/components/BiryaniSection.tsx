"use client";

import Image from "next/image";

export default function BiryaniSection() {
  const highlights = [
    "Signature Biryani",
    "Bamboo Biryani",
    "Chicken Biryani",
    "Special Rice Preparations",
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-charcoal-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Large Image */}
          <div className="reveal-left order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden img-zoom shadow-2xl shadow-black/50">
              <Image
                src="/images/dish-biryani.jpg"
                alt="Signature Andhra Chicken Biryani in copper pot"
                width={600}
                height={600}
                className="w-full h-auto object-cover aspect-square"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl border border-gold-500/20 pointer-events-none" />
              {/* Price badge */}
              <div className="absolute bottom-4 right-4 glass rounded-full px-4 py-2">
                <span className="text-gold-400 font-bold text-sm">From ₹250</span>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="reveal-right order-1 lg:order-2">
            <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
              Our Speciality
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mt-4 leading-tight">
              The Art of <span className="text-gold-400">Biryani</span>
            </h2>
            <div className="gold-divider !mx-0 mt-4 mb-6" />
            <p className="text-charcoal-200 text-base sm:text-lg leading-relaxed">
              Fragrant rice, perfectly seasoned meat and rich spices come together in every
              plate of MAYURA 1989 biryani.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mt-8">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 glass-light rounded-full px-4 py-2.5 text-sm text-cream font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-gold-400 shrink-0" />
                  {item}
                </span>
              ))}
            </div>

            {/* Secondary image */}
            <div className="mt-8 rounded-xl overflow-hidden img-zoom">
              <Image
                src="/images/dish-bamboo-biryani.jpg"
                alt="Bamboo Biryani with smoky aroma"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

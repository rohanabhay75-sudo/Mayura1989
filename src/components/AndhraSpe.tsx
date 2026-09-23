"use client";

import Image from "next/image";

export default function AndhraSpe() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/andhra-spread.jpg"
          alt="Andhra cuisine spread with rich curries and rice"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/95 to-charcoal-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="reveal-left">
            <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
              Regional Speciality
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mt-4 leading-tight">
              Bold <span className="text-gold-400">Andhra</span> Flavours
            </h2>
            <div className="gold-divider !mx-0 mt-4 mb-6" />
            <p className="text-charcoal-200 text-base sm:text-lg leading-relaxed">
              Experience rich spices, aromatic preparations and authentic South Indian flavours
              crafted for lovers of bold and memorable food.
            </p>

            {/* Featured dishes */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { name: "Prawn Pandumirchi", desc: "Fiery pepper prawns" },
                { name: "Andhra Chicken", desc: "Spicy red chilli curry" },
                { name: "Andhra Biryani", desc: "Bold spiced biryani" },
                { name: "Regional Specials", desc: "Rotating chef picks" },
              ].map((dish) => (
                <div
                  key={dish.name}
                  className="glass-light rounded-xl p-4 hover:border-gold-500/30 transition-all"
                >
                  <h3 className="font-heading text-base font-semibold text-gold-400">
                    {dish.name}
                  </h3>
                  <p className="text-charcoal-400 text-xs mt-1">{dish.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="reveal-right">
            <div className="relative rounded-2xl overflow-hidden img-zoom shadow-2xl shadow-black/50">
              <Image
                src="/images/dish-prawn.jpg"
                alt="Prawn Pandumirchi, Andhra-style spicy prawns"
                width={600}
                height={600}
                className="w-full h-auto object-cover aspect-square"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl border border-gold-500/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

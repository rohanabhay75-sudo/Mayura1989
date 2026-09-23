"use client";

import Image from "next/image";
import Link from "next/link";

export default function RooftopAmbience() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Full-width background */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery-rooftop.jpg"
          alt="MAYURA 1989 rooftop dining with evening ambience"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="reveal">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            The Experience
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mt-4 leading-tight">
            Dine Above the <span className="text-gold-400">Ordinary</span>
          </h2>
          <div className="gold-divider mt-6" />
          <p className="text-charcoal-200 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
            Enjoy great food in a relaxed rooftop setting designed for memorable evenings
            with family and friends.
          </p>

          {/* Feature icons */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {["Rooftop Seating", "Evening Ambience", "Warm Lights", "Bar Atmosphere"].map(
              (feature) => (
                <span
                  key={feature}
                  className="glass rounded-full px-5 py-2.5 text-sm text-gold-300 font-medium"
                >
                  {feature}
                </span>
              )
            )}
          </div>

          <div className="mt-10">
            <Link href="#gallery" className="btn-gold">
              Explore Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

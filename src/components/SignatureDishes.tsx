"use client";

import Image from "next/image";
import Link from "next/link";
import { signatureDishes } from "../data/siteData";

export default function SignatureDishes() {
  return (
    <section className="py-24 sm:py-32 bg-charcoal-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center reveal mb-16">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Chef&apos;s Picks
          </span>
          <h2 className="section-heading mt-3">
            Taste Our <span className="text-gold-400">Favourites</span>
          </h2>
          <div className="gold-divider mt-4" />
          <p className="section-subheading mt-4">
            Handpicked signature dishes that keep our guests coming back for more.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {signatureDishes.map((dish) => (
            <div
              key={dish.id}
              className="glass rounded-2xl overflow-hidden card-hover group"
            >
              {/* Image */}
              <div className="relative aspect-square img-zoom">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                {/* Veg/NonVeg badge */}
                <div className="absolute top-3 left-3">
                  <span className={dish.isVeg ? "veg-indicator" : "nonveg-indicator"} />
                </div>
                {dish.isSignature && (
                  <div className="absolute top-3 right-3 bg-gold-500 text-charcoal-950 text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                    SIGNATURE
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg font-semibold text-cream group-hover:text-gold-400 transition-colors">
                    {dish.name}
                  </h3>
                  <span className="text-gold-400 font-bold text-lg whitespace-nowrap">
                    ₹{dish.price}
                  </span>
                </div>
                <p className="text-charcoal-400 text-sm mt-2 leading-relaxed line-clamp-2">
                  {dish.description}
                </p>
                <Link
                  href="#order"
                  className="inline-flex items-center gap-1 text-sm text-gold-400 font-medium mt-4 hover:text-gold-300 transition-colors group/btn"
                >
                  Order Now
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

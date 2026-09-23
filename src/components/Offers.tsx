"use client";

import { Tag } from "lucide-react";
import { offers } from "../data/siteData";

export default function Offers() {
  const enabledOffers = offers.filter((o) => o.enabled);

  if (enabledOffers.length === 0) return null;

  return (
    <section className="py-24 sm:py-32 bg-charcoal-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center reveal mb-16">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Limited Time
          </span>
          <h2 className="section-heading mt-3">
            Today&apos;s <span className="text-gold-400">Special</span>
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        {/* Offer Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {enabledOffers.map((offer) => (
            <div
              key={offer.id}
              className="glass rounded-2xl p-6 card-hover group relative overflow-hidden"
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gold-500/5 rounded-bl-[60px]" />

              {offer.badge && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gold-500 bg-gold-500/10 px-2.5 py-1 rounded-full tracking-wider uppercase mb-4">
                  <Tag size={10} />
                  {offer.badge}
                </span>
              )}
              <h3 className="font-heading text-lg font-semibold text-cream group-hover:text-gold-400 transition-colors">
                {offer.title}
              </h3>
              <p className="text-charcoal-400 text-sm mt-2 leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

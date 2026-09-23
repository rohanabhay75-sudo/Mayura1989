"use client";

import { Flame, Building2, BookOpen, Users, UtensilsCrossed, Clock } from "lucide-react";
import { whyVisitCards } from "../data/siteData";

const iconMap: Record<string, React.ReactNode> = {
  flame: <Flame size={28} />,
  building: <Building2 size={28} />,
  "book-open": <BookOpen size={28} />,
  users: <Users size={28} />,
  "utensils-crossed": <UtensilsCrossed size={28} />,
  clock: <Clock size={28} />,
};

export default function WhyVisit() {
  return (
    <section className="py-24 sm:py-32 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center reveal mb-16">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            The MAYURA Experience
          </span>
          <h2 className="section-heading mt-3">
            Why Visit <span className="text-gold-400">MAYURA 1989</span>?
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {whyVisitCards.map((card) => (
            <div
              key={card.title}
              className="glass rounded-2xl p-8 text-center card-hover group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-all duration-300">
                {iconMap[card.icon]}
              </div>
              <h3 className="font-heading text-xl font-semibold text-cream mt-5">
                {card.title}
              </h3>
              <p className="text-charcoal-400 text-sm mt-2 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { siteInfo, aboutFeatures } from "../data/siteData";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <div className="reveal-left">
            <div className="relative rounded-2xl overflow-hidden img-zoom shadow-2xl shadow-black/50">
              <Image
                src="/images/about-restaurant.jpg"
                alt="MAYURA 1989 restaurant interior with bar and warm lighting"
                width={700}
                height={500}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              {/* Gold border accent */}
              <div className="absolute inset-0 rounded-2xl border border-gold-500/20 pointer-events-none" />
            </div>
          </div>

          {/* Right — Content */}
          <div className="reveal-right">
            <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
              Est. 1989 · Rajajinagar
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mt-4 leading-tight">
              About <span className="text-gold-400">MAYURA 1989</span>
            </h2>
            <div className="gold-divider !mx-0 mt-4 mb-6" />
            <p className="text-charcoal-200 text-base sm:text-lg leading-relaxed">
              {siteInfo.aboutText}
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {aboutFeatures.map((feature) => (
                <span
                  key={feature}
                  className="glass-light rounded-full px-4 py-2 text-sm text-gold-300 font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-charcoal-800">
              <div>
                <p className="font-heading text-3xl font-bold text-gold-400">{siteInfo.rating}</p>
                <p className="text-sm text-charcoal-400 mt-1">Google Rating</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-gold-400">35+</p>
                <p className="text-sm text-charcoal-400 mt-1">Years Legacy</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-gold-400">100+</p>
                <p className="text-sm text-charcoal-400 mt-1">Menu Items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

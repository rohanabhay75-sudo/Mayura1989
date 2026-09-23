"use client";

import { Star } from "lucide-react";
import { siteInfo, reviews } from "../data/siteData";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-charcoal-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center reveal mb-16">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="section-heading mt-3">
            What Our <span className="text-gold-400">Guests</span> Say
          </h2>
          <div className="gold-divider mt-4" />

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="glass rounded-2xl px-8 py-6 text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={22}
                    className={
                      i < Math.floor(siteInfo.rating)
                        ? "text-gold-400 fill-gold-400"
                        : "text-charcoal-600"
                    }
                  />
                ))}
              </div>
              <p className="font-heading text-4xl font-bold text-cream">
                {siteInfo.rating}<span className="text-charcoal-500 text-2xl"> / 5</span>
              </p>
              <p className="text-charcoal-400 text-sm mt-1">
                {siteInfo.reviewCount} Google Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="glass rounded-2xl p-6 card-hover flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < review.rating
                        ? "text-gold-400 fill-gold-400"
                        : "text-charcoal-600"
                    }
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-charcoal-200 text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-charcoal-800">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <span className="text-gold-400 font-bold text-sm">
                    {review.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-cream text-sm font-semibold">{review.name}</p>
                  <p className="text-charcoal-500 text-xs">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12 reveal">
          <a
            href="https://www.google.com/maps/place/MAYURA+1989"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View All Reviews
          </a>
        </div>
      </div>
    </section>
  );
}

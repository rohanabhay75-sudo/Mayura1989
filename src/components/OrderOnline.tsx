"use client";

import { ShoppingBag, Phone } from "lucide-react";
import { siteInfo } from "../data/siteData";

export default function OrderOnline() {
  return (
    <section id="order" className="py-24 sm:py-32 bg-charcoal-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass rounded-3xl p-12 sm:p-16 reveal">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Delivery & Takeaway
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mt-4 leading-tight">
            Craving <span className="text-gold-400">MAYURA 1989</span>?
          </h2>
          <div className="gold-divider mt-6" />
          <p className="text-charcoal-200 text-base sm:text-lg leading-relaxed mt-6 max-w-xl mx-auto">
            Enjoy your favourite dishes at home with takeaway and delivery options.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            {/* Configurable: connect to food delivery service */}
            <a href="#" className="btn-gold flex items-center gap-2">
              <ShoppingBag size={18} />
              Order Online
            </a>
            <a
              href={siteInfo.phoneHref}
              className="btn-outline flex items-center gap-2"
            >
              <Phone size={18} />
              Call to Order
            </a>
          </div>

          <p className="text-charcoal-500 text-xs mt-6">
            Available for Dine-in • Takeaway • No-contact Delivery
          </p>
        </div>
      </div>
    </section>
  );
}

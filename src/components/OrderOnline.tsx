"use client";

import { ShoppingBag, Phone, ExternalLink, Star, Clock, ShieldCheck } from "lucide-react";
import { siteInfo } from "../data/siteData";
import { ZomatoIcon, SwiggyIcon } from "./OrderModal";

export default function OrderOnline() {
  return (
    <section id="order" className="py-24 sm:py-32 bg-charcoal-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="glass rounded-3xl p-8 sm:p-14 lg:p-16 border border-charcoal-700/70 shadow-2xl reveal">
          <span className="inline-flex items-center gap-1.5 text-gold-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 px-3.5 py-1 rounded-full glass-light border border-gold-500/20">
            <ShoppingBag size={14} className="text-gold-400" />
            Online Delivery & Takeaway
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mt-4 leading-tight">
            Order From <span className="text-gold-400">MAYURA 1989</span>
          </h2>
          <div className="gold-divider mx-auto mt-6" />

          <p className="text-charcoal-200 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
            Enjoy authentic Andhra delicacies, signature biryanis, and chef starters delivered hot and fresh to your doorstep across Bengaluru.
          </p>

          {/* Delivery Partners Two-Column Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-3xl mx-auto text-left">
            {/* ZOMATO CARD */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#E23744]/20 via-charcoal-900 to-charcoal-900/90 border border-[#E23744]/40 hover:border-[#E23744] transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#E23744] flex items-center justify-center text-white shadow-lg shadow-[#E23744]/30">
                      <ZomatoIcon className="w-7 h-7 fill-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-cream group-hover:text-white transition-colors">
                        Zomato
                      </h3>
                      <span className="text-xs text-charcoal-400 flex items-center gap-1">
                        <Star size={12} className="text-gold-400 fill-gold-400" /> 4.0 ★ rating
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E23744]/20 text-[#ff616f] border border-[#E23744]/40">
                    Live Menu
                  </span>
                </div>
                <p className="text-charcoal-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Browse our complete food menu on Zomato with real-time GPS tracking and instant delivery to your location.
                </p>
              </div>

              <a
                href={siteInfo.delivery.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#E23744] hover:bg-[#c92532] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#E23744]/25 transition-all group/btn"
              >
                <span>Order on Zomato</span>
                <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* SWIGGY CARD */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FC8019]/20 via-charcoal-900 to-charcoal-900/90 border border-[#FC8019]/40 hover:border-[#FC8019] transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#FC8019] flex items-center justify-center text-white shadow-lg shadow-[#FC8019]/30">
                      <SwiggyIcon className="w-7 h-7 fill-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-cream group-hover:text-white transition-colors">
                        Swiggy
                      </h3>
                      <span className="text-xs text-charcoal-400 flex items-center gap-1">
                        <Clock size={12} className="text-gold-400" /> Fast Delivery
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FC8019]/20 text-[#ffa352] border border-[#FC8019]/40">
                    Fast Delivery
                  </span>
                </div>
                <p className="text-charcoal-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Order directly via Swiggy app or web for doorstep delivery, partner discounts, and contactless delivery.
                </p>
              </div>

              <a
                href={siteInfo.delivery.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#FC8019] hover:bg-[#e46a06] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#FC8019]/25 transition-all group/btn"
              >
                <span>Order on Swiggy</span>
                <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Direct Takeaway / Call Action */}
          <div className="mt-10 pt-8 border-t border-charcoal-800/80 flex flex-wrap items-center justify-center gap-4">
            <span className="text-xs sm:text-sm text-charcoal-400">
              Prefer direct takeaway or advance pickup?
            </span>
            <a
              href={siteInfo.phoneHref}
              className="btn-outline flex items-center gap-2 text-xs sm:text-sm !py-2.5 !px-5"
            >
              <Phone size={16} className="text-gold-400" />
              Call Restaurant ({siteInfo.phone})
            </a>
          </div>

          {/* Safety & Hours Note */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-charcoal-400 mt-6">
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} className="text-gold-400" /> Open until 11:30 PM
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-gold-400" /> Hygiene & Contactless Delivery Verified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

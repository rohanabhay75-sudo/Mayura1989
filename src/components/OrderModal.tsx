"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ExternalLink, Phone, ShieldCheck, Sparkles, Copy, Check, ArrowRight } from "lucide-react";
import { DishType, siteInfo } from "../data/siteData";

// Custom SVG Icons for Zomato & Swiggy
export function ZomatoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.89 14.73l-1.92-2.85h-1.89v2.85h-1.91V7.27h3.81c2.14 0 3.75 1.51 3.75 3.63 0 1.45-.79 2.62-1.99 3.23l2.25 3.33h-2.1v-.73zm-3.81-4.63h1.83c1.07 0 1.83-.73 1.83-1.83s-.76-1.83-1.83-1.83h-1.83v3.66z" />
    </svg>
  );
}

export function SwiggyIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a9.98 9.98 0 0 0-7.85 16.15l.08.1 4.7 5.75H15l4.76-5.83.08-.1A9.98 9.98 0 0 0 12 2zm2.84 8.78c-.73.49-1.63.85-2.84 1.15V9.45c1.13-.19 1.87-.61 2.22-.92.29-.26.39-.55.33-.79-.11-.47-.85-.92-2.55-.92-1.42 0-2.31.33-2.6.58-.29.25-.42.54-.4.88.02.32.18.63.49.91.56.51 1.48.81 2.51.98v2.54c-1.39-.24-2.45-.66-3.16-1.25-.79-.66-1.2-1.54-1.23-2.61-.04-1.12.39-2.07 1.29-2.82.91-.76 2.18-1.15 3.79-1.15 1.76 0 3.08.41 3.96 1.22.88.82 1.3 1.87 1.25 3.12-.03.74-.24 1.41-.66 2.02-.42.61-1.02 1.12-1.78 1.52z" />
    </svg>
  );
}

interface OrderModalProps {
  dish: DishType | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ dish, isOpen, onClose }: OrderModalProps) {
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !dish) return null;

  // Direct links targeting this specific item in Mayura 1989's menu
  const zomatoItemUrl = dish.zomatoUrl || siteInfo.getZomatoDishUrl(dish.name);
  const swiggyItemUrl = dish.swiggyUrl || siteInfo.getSwiggyDishUrl(dish.name);

  const copyDishName = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(dish.name);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-charcoal-950/85 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-charcoal-900 border border-charcoal-700/80 rounded-3xl overflow-hidden shadow-2xl z-10 animate-scale-up max-h-[92vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-charcoal-950/80 text-charcoal-300 hover:text-cream hover:bg-charcoal-800 transition-all flex items-center justify-center border border-charcoal-700/60 shadow-lg"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto scrollbar-hide flex-1">
          {/* Dish Hero Preview */}
          <div className="relative aspect-[16/9] w-full bg-charcoal-950 shrink-0">
            <Image
              src={dish.image}
              alt={dish.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 512px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
              <span
                className={dish.isVeg ? "veg-indicator" : "nonveg-indicator"}
                title={dish.isVeg ? "Vegetarian" : "Non-Vegetarian"}
              />
              {dish.isSignature && (
                <span className="bg-gold-500 text-charcoal-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow flex items-center gap-1">
                  <Sparkles size={10} />
                  Signature
                </span>
              )}
            </div>

            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between z-10">
              <span className="text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-charcoal-950/80 text-gold-300 border border-gold-500/20 backdrop-blur-sm">
                {dish.category}
              </span>
              <span className="text-gold-400 font-extrabold text-2xl drop-shadow">
                ₹{dish.price}
              </span>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-5">
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-gold-400 text-[11px] font-semibold uppercase tracking-widest">
                  Direct Item Delivery Link
                </span>
                {/* Copy Name Pill */}
                <button
                  onClick={copyDishName}
                  className="inline-flex items-center gap-1 text-[11px] text-charcoal-400 hover:text-gold-300 transition-colors bg-charcoal-800/80 hover:bg-charcoal-800 px-2.5 py-1 rounded-lg border border-charcoal-700/60"
                  title="Copy dish name"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-green-400" />
                      <span className="text-green-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy Name</span>
                    </>
                  )}
                </button>
              </div>

              <h3
                id="order-modal-title"
                className="font-heading text-xl sm:text-2xl font-bold text-cream leading-tight"
              >
                {dish.name}
              </h3>
              <p className="text-charcoal-300 text-xs sm:text-sm mt-2 leading-relaxed">
                {dish.description}
              </p>
            </div>

            {/* Direct Store Indicator */}
            <div className="bg-charcoal-950/70 rounded-xl p-3 border border-charcoal-800 text-xs text-charcoal-300 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-gold-400 shrink-0" />
                <span>
                  Official Store: <strong className="text-cream">MAYURA 1989 Bar & Kitchen</strong> (Rajajinagar)
                </span>
              </div>
              <span className="text-[10px] text-green-400 font-bold uppercase tracking-wider shrink-0 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                Direct
              </span>
            </div>

            {/* Direct Delivery Platform Buttons */}
            <div className="space-y-3">
              {/* DIRECT ZOMATO ITEM BUTTON */}
              <a
                href={zomatoItemUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#E23744] to-[#c72733] text-white hover:brightness-110 active:scale-[0.99] transition-all shadow-lg shadow-[#E23744]/20 border border-[#ff5e6c]/30"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center font-bold text-lg backdrop-blur-sm shrink-0">
                    <ZomatoIcon className="w-6 h-6 fill-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-heading font-bold text-base tracking-wide flex items-center gap-1.5">
                      Order {dish.name} on Zomato
                    </div>
                    <div className="text-[11px] text-white/80 flex items-center gap-1">
                      <span>Direct link to Mayura 1989 menu pre-filtered</span>
                      <ArrowRight size={11} className="inline opacity-75" />
                    </div>
                  </div>
                </div>
                <ExternalLink size={18} className="text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>

              {/* DIRECT SWIGGY ITEM BUTTON */}
              <a
                href={swiggyItemUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#FC8019] to-[#e46a06] text-white hover:brightness-110 active:scale-[0.99] transition-all shadow-lg shadow-[#FC8019]/20 border border-[#ffa04d]/30"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center font-bold text-lg backdrop-blur-sm shrink-0">
                    <SwiggyIcon className="w-6 h-6 fill-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-heading font-bold text-base tracking-wide flex items-center gap-1.5">
                      Order {dish.name} on Swiggy
                    </div>
                    <div className="text-[11px] text-white/80 flex items-center gap-1">
                      <span>Direct link to Mayura 1989 menu pre-filtered</span>
                      <ArrowRight size={11} className="inline opacity-75" />
                    </div>
                  </div>
                </div>
                <ExternalLink size={18} className="text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>
            </div>

            {/* Direct Restaurant Links and Phone Option */}
            <div className="pt-3 border-t border-charcoal-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-400">
              <div className="flex items-center gap-3">
                <a
                  href={siteInfo.delivery.zomato}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream underline transition-colors"
                >
                  Full Zomato Menu
                </a>
                <span>•</span>
                <a
                  href={siteInfo.delivery.swiggy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream underline transition-colors"
                >
                  Full Swiggy Menu
                </a>
              </div>

              <a
                href={siteInfo.phoneHref}
                className="text-gold-400 hover:text-gold-300 font-semibold inline-flex items-center gap-1 transition-colors"
              >
                <Phone size={13} /> Call {siteInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

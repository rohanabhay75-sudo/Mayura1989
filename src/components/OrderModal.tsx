"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, Phone, ShieldCheck, Sparkles } from "lucide-react";
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

  const zomatoUrl = siteInfo.getZomatoDishUrl(dish.name);
  const swiggyUrl = siteInfo.getSwiggyDishUrl(dish.name);

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
      <div className="relative w-full max-w-lg bg-charcoal-900 border border-charcoal-700/80 rounded-3xl overflow-hidden shadow-2xl z-10 animate-scale-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-charcoal-950/80 text-charcoal-300 hover:text-cream hover:bg-charcoal-800 transition-all flex items-center justify-center border border-charcoal-700/60 shadow-lg"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Dish Hero Preview */}
        <div className="relative aspect-[16/9] w-full bg-charcoal-950">
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
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest block mb-1">
              Order Online From MAYURA 1989
            </span>
            <h3
              id="order-modal-title"
              className="font-heading text-xl sm:text-2xl font-bold text-cream leading-tight"
            >
              {dish.name}
            </h3>
            <p className="text-charcoal-300 text-sm mt-2 leading-relaxed">
              {dish.description}
            </p>
          </div>

          {/* Choose Platform Message */}
          <div className="bg-charcoal-950/60 rounded-xl p-3.5 border border-charcoal-800 text-xs text-charcoal-300 flex items-center gap-2.5">
            <ShieldCheck size={18} className="text-gold-400 shrink-0" />
            <span>
              Choose your preferred delivery partner. You will be redirected to complete your order with live tracking.
            </span>
          </div>

          {/* Delivery Partner Buttons */}
          <div className="space-y-3">
            {/* ZOMATO BUTTON */}
            <a
              href={zomatoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#E23744] to-[#c72733] text-white hover:brightness-110 active:scale-[0.99] transition-all shadow-lg shadow-[#E23744]/20 border border-[#ff5e6c]/30"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center font-bold text-lg backdrop-blur-sm">
                  <ZomatoIcon className="w-6 h-6 fill-white" />
                </div>
                <div className="text-left">
                  <div className="font-heading font-bold text-base tracking-wide flex items-center gap-1.5">
                    Order on Zomato
                    <span className="text-[10px] font-normal px-2 py-0.5 rounded-full bg-white/20 uppercase tracking-wider">
                      Live
                    </span>
                  </div>
                  <div className="text-xs text-white/80">
                    Order {dish.name} on Zomato • Live GPS Tracking
                  </div>
                </div>
              </div>
              <ExternalLink size={18} className="text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* SWIGGY BUTTON */}
            <a
              href={swiggyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#FC8019] to-[#e46a06] text-white hover:brightness-110 active:scale-[0.99] transition-all shadow-lg shadow-[#FC8019]/20 border border-[#ffa04d]/30"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center font-bold text-lg backdrop-blur-sm">
                  <SwiggyIcon className="w-6 h-6 fill-white" />
                </div>
                <div className="text-left">
                  <div className="font-heading font-bold text-base tracking-wide flex items-center gap-1.5">
                    Order on Swiggy
                    <span className="text-[10px] font-normal px-2 py-0.5 rounded-full bg-white/20 uppercase tracking-wider">
                      Fast
                    </span>
                  </div>
                  <div className="text-xs text-white/80">
                    Order {dish.name} on Swiggy • Doorstep Delivery
                  </div>
                </div>
              </div>
              <ExternalLink size={18} className="text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Direct Takeaway / Call Option */}
          <div className="pt-2 text-center border-t border-charcoal-800/80">
            <p className="text-xs text-charcoal-400">
              Prefer takeaway or direct order?{" "}
              <a
                href={siteInfo.phoneHref}
                className="text-gold-400 hover:text-gold-300 font-semibold inline-flex items-center gap-1 transition-colors"
              >
                <Phone size={12} /> Call {siteInfo.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

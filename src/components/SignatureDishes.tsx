"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { signatureDishes, siteInfo, DishType } from "../data/siteData";
import OrderModal, { ZomatoIcon, SwiggyIcon } from "./OrderModal";

export default function SignatureDishes() {
  const [selectedDish, setSelectedDish] = useState<DishType | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOrderDish = (dish: DishType) => {
    setSelectedDish(dish);
    setIsOrderModalOpen(true);
  };

  return (
    <section className="py-24 sm:py-32 bg-charcoal-900/50 relative">
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
            Handpicked signature dishes that keep our guests coming back for more. Order online via Zomato & Swiggy.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {signatureDishes.map((dish) => (
            <div
              key={dish.id}
              className="glass rounded-2xl overflow-hidden card-hover group flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-square img-zoom overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  {/* Veg/NonVeg badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className={dish.isVeg ? "veg-indicator" : "nonveg-indicator"} />
                  </div>
                  {dish.isSignature && (
                    <div className="absolute top-3 right-3 bg-gold-500 text-charcoal-950 text-xs font-bold px-3 py-1 rounded-full tracking-wide z-10">
                      SIGNATURE
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-charcoal-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 z-20">
                    <button
                      onClick={() => handleOrderDish(dish)}
                      suppressHydrationWarning
                      className="btn-gold !py-2.5 !px-5 text-xs font-bold flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform"
                    >
                      <ShoppingBag size={14} />
                      Order on Zomato / Swiggy
                    </button>
                  </div>
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
                </div>
              </div>

              {/* Bottom Card CTA */}
              <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-charcoal-800/60 mt-2">
                <button
                  onClick={() => handleOrderDish(dish)}
                  suppressHydrationWarning
                  className="btn-gold !py-1.5 !px-3.5 text-xs font-bold flex items-center gap-1.5 shadow"
                >
                  <ShoppingBag size={13} />
                  Order Item
                </button>

                {/* Direct 1-Click Platform Links */}
                <div className="flex items-center gap-1.5">
                  <a
                    href={dish.zomatoUrl || siteInfo.getZomatoDishUrl(dish.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Direct link to ${dish.name} on Zomato`}
                    className="w-8 h-8 rounded-lg bg-[#E23744]/20 border border-[#E23744]/40 hover:bg-[#E23744] text-[#ff616f] hover:text-white transition-all flex items-center justify-center shadow-sm"
                  >
                    <ZomatoIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={dish.swiggyUrl || siteInfo.getSwiggyDishUrl(dish.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Direct link to ${dish.name} on Swiggy`}
                    className="w-8 h-8 rounded-lg bg-[#FC8019]/20 border border-[#FC8019]/40 hover:bg-[#FC8019] text-[#ffa352] hover:text-white transition-all flex items-center justify-center shadow-sm"
                  >
                    <SwiggyIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Interactive Order Modal */}
      <OrderModal
        dish={selectedDish}
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </section>
  );
}

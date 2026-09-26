"use client";

import { MapPin, Phone, Clock, UtensilsCrossed, Navigation } from "lucide-react";
import { siteInfo } from "../data/siteData";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-charcoal-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center reveal mb-16">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Find Us
          </span>
          <h2 className="section-heading mt-3">
            Visit <span className="text-gold-400">MAYURA 1989</span>
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {/* Address */}
          <div className="glass rounded-2xl p-6 card-hover text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-400 mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-heading text-lg font-semibold text-cream">Address</h3>
            <p className="text-charcoal-400 text-sm mt-2 leading-relaxed">
              {siteInfo.address}
            </p>
          </div>

          {/* Phone */}
          <div className="glass rounded-2xl p-6 card-hover text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-400 mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-heading text-lg font-semibold text-cream">Phone</h3>
            <a
              href={siteInfo.phoneHref}
              className="text-gold-400 text-sm mt-2 inline-block hover:text-gold-300 transition-colors font-medium"
            >
              {siteInfo.phone}
            </a>
          </div>

          {/* Hours */}
          <div className="glass rounded-2xl p-6 card-hover text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-400 mb-4">
              <Clock size={24} />
            </div>
            <h3 className="font-heading text-lg font-semibold text-cream">Hours</h3>
            <p className="text-charcoal-400 text-sm mt-2">
              {siteInfo.openingHours}
            </p>
          </div>

          {/* Services */}
          <div className="glass rounded-2xl p-6 card-hover text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-400 mb-4">
              <UtensilsCrossed size={24} />
            </div>
            <h3 className="font-heading text-lg font-semibold text-cream">Services</h3>
            <p className="text-charcoal-400 text-sm mt-2">
              {siteInfo.services.join(" • ")}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 reveal">
          <a href={siteInfo.phoneHref} className="btn-gold flex items-center gap-2">
            <Phone size={16} />
            Call Now
          </a>
          <a
            href={siteInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2"
          >
            <Navigation size={16} />
            Get Directions
          </a>
          <a
            href={siteInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2 text-[#E1306C] border-[#E1306C]/40 hover:border-[#E1306C] hover:bg-[#E1306C]/10"
          >
            <InstagramIcon size={16} />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

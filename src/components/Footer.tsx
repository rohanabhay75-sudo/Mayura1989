"use client";

import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
import { siteInfo, navLinks } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold text-cream">
              MAYURA <span className="text-gold-400">1989</span>
            </h3>
            <p className="text-charcoal-400 text-sm mt-3 max-w-sm leading-relaxed">
              {siteInfo.tagline}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={siteInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-light flex items-center justify-center text-charcoal-400 hover:text-gold-400 hover:border-gold-500/30 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={siteInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-light flex items-center justify-center text-charcoal-400 hover:text-gold-400 hover:border-gold-500/30 transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={siteInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-light flex items-center justify-center text-charcoal-400 hover:text-gold-400 hover:border-gold-500/30 transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-semibold text-cream mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-charcoal-400 text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={siteInfo.delivery.zomato}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal-400 text-sm hover:text-[#ff616f] transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E23744]" />
                  Order on Zomato
                </a>
              </li>
              <li>
                <a
                  href={siteInfo.delivery.swiggy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal-400 text-sm hover:text-[#ffa352] transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FC8019]" />
                  Order on Swiggy
                </a>
              </li>
              <li>
                <Link
                  href="#reservation"
                  className="text-charcoal-400 text-sm hover:text-gold-400 transition-colors"
                >
                  Book a Table
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-semibold text-cream mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteInfo.phoneHref}
                  className="flex items-center gap-2 text-charcoal-400 text-sm hover:text-gold-400 transition-colors"
                >
                  <Phone size={14} />
                  {siteInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-charcoal-400 text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                {siteInfo.shortAddress}
              </li>
              <li>
                <a
                  href={siteInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-charcoal-400 text-sm hover:text-[#E1306C] transition-colors"
                >
                  <InstagramIcon size={14} />
                  @mayura_1989
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-charcoal-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-500 text-xs">
            © 2026 {siteInfo.fullName}. All Rights Reserved.
          </p>
          <p className="text-charcoal-600 text-xs">
            Andhra • Biryani • North Indian • Chinese • Bar & Kitchen
          </p>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="mobile-sticky-cta lg:hidden">
        <a href={siteInfo.phoneHref} className="btn-gold flex-1 text-center text-xs !py-3">
          <Phone size={14} className="inline mr-1" />
          Call
        </a>
        <Link href="#reservation" className="btn-outline flex-1 text-center text-xs !py-3">
          Reserve
        </Link>
      </div>
    </footer>
  );
}

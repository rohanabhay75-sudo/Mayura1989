"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { siteInfo, navLinks } from "../data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal-950/95 backdrop-blur-xl shadow-2xl shadow-black/40 py-3 border-b border-charcoal-800/50"
            : "bg-gradient-to-b from-charcoal-950/95 via-charcoal-950/70 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <span className="font-heading text-2xl font-bold text-gold-400 tracking-wide group-hover:text-gold-300 transition-colors">
              MAYURA <span className="text-cream">1989</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal-200 hover:text-gold-400 transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="#reservation" className="btn-gold text-xs !py-2.5 !px-5">
              Reserve Table
            </Link>
            <Link href="#order" className="btn-outline text-xs !py-2.5 !px-5">
              Order Online
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-cream p-2 hover:text-gold-400 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal-950/98 backdrop-blur-xl transition-all duration-500 lg:hidden flex flex-col ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-6 pt-20">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-heading font-semibold text-cream hover:text-gold-400 transition-colors tracking-wide"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-6 w-64">
            <Link
              href="#reservation"
              onClick={() => setMobileOpen(false)}
              className="btn-gold text-center text-sm"
            >
              Reserve Table
            </Link>
            <Link
              href="#order"
              onClick={() => setMobileOpen(false)}
              className="btn-outline text-center text-sm"
            >
              Order Online
            </Link>
            <a
              href={siteInfo.phoneHref}
              className="flex items-center justify-center gap-2 text-gold-400 font-medium mt-2"
            >
              <Phone size={16} /> {siteInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

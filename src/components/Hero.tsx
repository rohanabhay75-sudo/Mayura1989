"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import { siteInfo } from "../data/siteData";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-rooftop.jpg"
        alt="MAYURA 1989 rooftop dining with warm ambient lighting and city skyline"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/70 to-charcoal-950/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/60 via-transparent to-charcoal-950/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-24">
        {/* Location Badge */}
        <div className="animate-fade-in-up animate-delay-100">
          <span className="inline-flex items-center gap-2 text-sm text-gold-400 font-medium tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full glass-light border border-gold-500/20">
            <MapPin size={14} className="text-gold-400" />
            {siteInfo.shortAddress}
          </span>
        </div>

        {/* Logo Text */}
        <h1 className="animate-fade-in-up animate-delay-200 mt-2">
          <span className="block font-heading text-5xl sm:text-7xl md:text-8xl font-bold text-cream tracking-tight leading-none drop-shadow-lg">
            MAYURA <span className="text-gold-400">1989</span>
          </span>
          <span className="block font-heading text-xl sm:text-2xl md:text-3xl font-light text-cream/90 mt-3 tracking-widest uppercase">
            Bar & Kitchen
          </span>
        </h1>

        {/* Kannada */}
        <p className="animate-fade-in-up animate-delay-300 text-gold-300 font-medium text-base sm:text-xl mt-3 tracking-wide">
          {siteInfo.nameKannada}
        </p>

        {/* Divider */}
        <div className="gold-divider mx-auto animate-fade-in-up animate-delay-300 mt-6" />

        {/* Headline */}
        <p className="animate-fade-in-up animate-delay-400 font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-cream mt-6 leading-snug drop-shadow-md">
          {siteInfo.tagline}
        </p>

        {/* Supporting Text */}
        <p className="animate-fade-in-up animate-delay-500 text-charcoal-200 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          {siteInfo.description}
        </p>

        {/* Rating Badge */}
        <div className="animate-fade-in-up animate-delay-500 mt-6 flex justify-center">
          <span className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm border border-gold-500/20 shadow-lg">
            <Star size={16} className="text-gold-400 fill-gold-400" />
            <span className="text-gold-400 font-bold">{siteInfo.rating} / 5</span>
            <span className="text-charcoal-400">•</span>
            <span className="text-charcoal-200 font-medium">{siteInfo.reviewCount} Reviews on Google</span>
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up animate-delay-600 flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link href="#menu" className="btn-gold shadow-lg shadow-gold-500/20 text-base font-semibold px-8 py-3.5">
            Explore Our Menu
          </Link>
          <Link href="#reservation" className="btn-outline">
            Reserve a Table
          </Link>
          <a
            href={siteInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Get Directions
          </a>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-950 to-transparent pointer-events-none" />
    </section>
  );
}

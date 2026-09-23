"use client";

import Image from "next/image";
import Link from "next/link";
import { siteInfo } from "../data/siteData";

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-rooftop.jpg"
          alt="MAYURA 1989 rooftop dining"
          fill
          className="object-cover opacity-15"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/90 to-charcoal-950/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center reveal">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight">
          Your Table Is <span className="text-gold-400">Waiting</span>
        </h2>
        <div className="gold-divider mt-6" />
        <p className="text-charcoal-200 text-lg sm:text-xl mt-6 font-heading italic">
          Come for the flavours. Stay for the ambience.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <Link href="#reservation" className="btn-gold">
            Reserve a Table
          </Link>
          <Link href="#menu" className="btn-outline">
            View Menu
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
    </section>
  );
}

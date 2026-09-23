"use client";

import { Navigation } from "lucide-react";
import { siteInfo } from "../data/siteData";

export default function GoogleMap() {
  return (
    <section className="py-16 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-charcoal-800 reveal">
          <iframe
            title="MAYURA 1989 Bar &amp; Kitchen location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.737!2d77.5530!3d12.9905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d9c6f7e0001%3A0x1!2sRajajinagar%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="400"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="text-center mt-8 reveal">
          <a
            href={siteInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
          >
            <Navigation size={18} />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

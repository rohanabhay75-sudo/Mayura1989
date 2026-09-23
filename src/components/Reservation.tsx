"use client";

import { useState } from "react";
import { Phone, CheckCircle } from "lucide-react";
import { siteInfo } from "../data/siteData";

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    request: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, connect to a booking API
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="reservation" className="py-24 sm:py-32 bg-charcoal-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center reveal mb-12">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Reservations
          </span>
          <h2 className="section-heading mt-3">
            Reserve Your <span className="text-gold-400">Table</span>
          </h2>
          <div className="gold-divider mt-4" />
          <p className="section-subheading mt-4">
            Secure your spot for a memorable dining experience.
          </p>
        </div>

        {submitted ? (
          /* Success Message */
          <div className="glass rounded-2xl p-12 text-center reveal-scale">
            <CheckCircle size={56} className="text-green-400 mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold text-cream">
              Reservation Confirmed!
            </h3>
            <p className="text-charcoal-300 mt-3 max-w-md mx-auto">
              Thank you, {formData.name}. We&apos;ve received your reservation request for{" "}
              {formData.guests} guest{Number(formData.guests) > 1 ? "s" : ""} on{" "}
              {formData.date} at {formData.time}. We&apos;ll confirm shortly via phone or email.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-outline mt-6"
            >
              Make Another Reservation
            </button>
          </div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            suppressHydrationWarning
            className="glass rounded-2xl p-8 sm:p-10 reveal"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label htmlFor="res-name" className="block text-sm font-medium text-charcoal-300 mb-2">
                  Full Name *
                </label>
                <input
                  id="res-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  suppressHydrationWarning
                  className="w-full px-4 py-3 bg-charcoal-800/60 border border-charcoal-700 rounded-xl text-cream placeholder-charcoal-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition-all text-sm"
                  placeholder="Your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="res-phone" className="block text-sm font-medium text-charcoal-300 mb-2">
                  Phone Number *
                </label>
                <input
                  id="res-phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  suppressHydrationWarning
                  className="w-full px-4 py-3 bg-charcoal-800/60 border border-charcoal-700 rounded-xl text-cream placeholder-charcoal-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition-all text-sm"
                  placeholder="+91"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="res-email" className="block text-sm font-medium text-charcoal-300 mb-2">
                  Email
                </label>
                <input
                  id="res-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  suppressHydrationWarning
                  className="w-full px-4 py-3 bg-charcoal-800/60 border border-charcoal-700 rounded-xl text-cream placeholder-charcoal-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition-all text-sm"
                  placeholder="you@email.com"
                />
              </div>

              {/* Date */}
              <div>
                <label htmlFor="res-date" className="block text-sm font-medium text-charcoal-300 mb-2">
                  Date *
                </label>
                <input
                  id="res-date"
                  name="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  suppressHydrationWarning
                  className="w-full px-4 py-3 bg-charcoal-800/60 border border-charcoal-700 rounded-xl text-cream placeholder-charcoal-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition-all text-sm"
                />
              </div>

              {/* Time */}
              <div>
                <label htmlFor="res-time" className="block text-sm font-medium text-charcoal-300 mb-2">
                  Time *
                </label>
                <input
                  id="res-time"
                  name="time"
                  type="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  suppressHydrationWarning
                  className="w-full px-4 py-3 bg-charcoal-800/60 border border-charcoal-700 rounded-xl text-cream placeholder-charcoal-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition-all text-sm"
                />
              </div>

              {/* Guests */}
              <div>
                <label htmlFor="res-guests" className="block text-sm font-medium text-charcoal-300 mb-2">
                  Number of Guests *
                </label>
                <select
                  id="res-guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  suppressHydrationWarning
                  className="w-full px-4 py-3 bg-charcoal-800/60 border border-charcoal-700 rounded-xl text-cream focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition-all text-sm"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((n) => (
                    <option key={n} value={n}>
                      {n} Guest{n > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Special Request */}
            <div className="mt-5">
              <label htmlFor="res-request" className="block text-sm font-medium text-charcoal-300 mb-2">
                Special Request
              </label>
              <textarea
                id="res-request"
                name="request"
                rows={3}
                value={formData.request}
                onChange={handleChange}
                suppressHydrationWarning
                className="w-full px-4 py-3 bg-charcoal-800/60 border border-charcoal-700 rounded-xl text-cream placeholder-charcoal-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition-all text-sm resize-none"
                placeholder="Birthday celebration, dietary requirements, seating preference..."
              />
            </div>

            {/* Submit */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button type="submit" suppressHydrationWarning className="btn-gold flex-1 sm:flex-none text-center">
                Book Table
              </button>
              <a
                href={siteInfo.phoneHref}
                className="flex items-center gap-2 text-gold-400 font-medium text-sm hover:text-gold-300 transition-colors"
              >
                <Phone size={16} />
                Call: {siteInfo.phone}
              </a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

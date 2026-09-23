"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import SignatureDishes from "../components/SignatureDishes";
import MenuSection from "../components/Menu";
import AndhraSpe from "../components/AndhraSpe";
import BiryaniSection from "../components/BiryaniSection";
import RooftopAmbience from "../components/RooftopAmbience";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import WhyVisit from "../components/WhyVisit";
import Offers from "../components/Offers";
import Reservation from "../components/Reservation";
import OrderOnline from "../components/OrderOnline";
import Contact from "../components/Contact";
import GoogleMap from "../components/GoogleMap";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SignatureDishes />
        <AndhraSpe />
        <BiryaniSection />
        <MenuSection />
        <RooftopAmbience />
        <Offers />
        <Gallery />
        <Reviews />
        <WhyVisit />
        <Reservation />
        <OrderOnline />
        <Contact />
        <GoogleMap />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

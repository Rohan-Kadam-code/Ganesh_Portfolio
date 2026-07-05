import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Categories from "./components/Categories";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function MarqueeDivider() {
  return (
    <div className="overflow-hidden py-8 bg-brand-black text-cream border-y border-cream/5">
      <div className="flex w-max animate-marquee">
        <span className="font-heading text-2xl md:text-3xl font-semibold uppercase tracking-wider whitespace-nowrap px-12 opacity-20 select-none">
          Portrait ✦ Landscape ✦ Editorial ✦ Street ✦ Fine Art ✦
        </span>
        <span className="font-heading text-2xl md:text-3xl font-semibold uppercase tracking-wider whitespace-nowrap px-12 opacity-20 select-none">
          Portrait ✦ Landscape ✦ Editorial ✦ Street ✦ Fine Art ✦
        </span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="relative">
        <Hero />
        <MarqueeDivider />
        <Work />
        <Categories />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}

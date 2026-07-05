import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[72px] z-50 flex items-center px-[4vw] md:px-[6vw] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled
          ? "bg-cream/80 dark:bg-brand-black/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">
        <a href="#" className="font-heading text-lg font-bold tracking-tight text-brand-black dark:text-cream">
          Ganesh Korde
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#work"
            className="text-xs font-medium tracking-widest uppercase text-brand-black dark:text-cream hover:text-brand-accent transition-colors duration-300"
          >
            Works
          </a>
          <a
            href="#about"
            className="text-xs font-medium tracking-widest uppercase text-brand-black dark:text-cream hover:text-brand-accent transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-xs font-medium tracking-widest uppercase text-brand-black dark:text-cream hover:text-brand-accent transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="mailto:hello@ganeshkorde.com"
            className="px-6 py-2 bg-brand-black text-cream hover:bg-brand-accent hover:text-brand-black rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md"
          >
            Inquire
          </a>
        </div>
      </div>
    </nav>
  );
}

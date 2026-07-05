import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.08,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full h-[72px] z-50 flex items-center px-[6vw] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled || isOpen
            ? "bg-cream/80 dark:bg-brand-black/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">
          <a
            href="#"
            className="font-heading text-lg font-bold tracking-tight text-brand-black z-50"
            onClick={() => setIsOpen(false)}
          >
            Ganesh Korde
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#work"
              className="text-xs font-medium tracking-widest uppercase text-brand-black hover:text-brand-accent transition-colors duration-300"
            >
              Works
            </a>
            <a
              href="#about"
              className="text-xs font-medium tracking-widest uppercase text-brand-black hover:text-brand-accent transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-xs font-medium tracking-widest uppercase text-brand-black hover:text-brand-accent transition-colors duration-300"
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

          {/* Mobile Menu Button Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-black z-50 hover:text-brand-accent transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-cream/95 backdrop-blur-lg z-45 pt-28 px-8 flex flex-col justify-between pb-12 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {["Works", "About", "Contact"].map((text, idx) => (
                <motion.a
                  custom={idx}
                  variants={linkVariants}
                  key={text}
                  href={`#${text.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="font-heading text-4xl font-bold text-brand-black hover:text-brand-accent transition-colors w-fit"
                >
                  {text}
                </motion.a>
              ))}
            </div>

            <motion.div
              custom={3}
              variants={linkVariants}
              className="flex flex-col gap-6"
            >
              <a
                href="mailto:hello@ganeshkorde.com"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-brand-black text-cream hover:bg-brand-accent hover:text-brand-black rounded-full text-center text-xs font-medium tracking-widest uppercase transition-all duration-300 shadow-sm"
              >
                Inquire
              </a>
              <div className="flex gap-6 justify-center">
                <a href="#" className="text-xs font-medium uppercase text-gray-500 hover:text-brand-black">
                  Instagram
                </a>
                <a href="#" className="text-xs font-medium uppercase text-gray-500 hover:text-brand-black">
                  Behance
                </a>
                <a href="#" className="text-xs font-medium uppercase text-gray-500 hover:text-brand-black">
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

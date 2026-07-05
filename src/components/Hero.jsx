import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "../assets/images/hero.png";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 120]);

  const nameLetters = "Ganesh Korde".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-cream text-brand-black pt-[90px] pb-16 lg:py-0"
      id="hero"
    >
      <div className="w-full max-w-[1400px] mx-auto px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 order-last lg:order-none"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs font-semibold tracking-widest uppercase text-gray-500"
            >
              Photography Portfolio
            </motion.p>
            
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none overflow-hidden flex flex-wrap gap-x-4">
              {nameLetters.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden py-2">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: i * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>
            
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-gray-600 max-w-[45ch] leading-relaxed"
            >
              Capturing moments that live between light and shadow — portraits, landscapes, and stories told through the lens.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <a
                href="#work"
                className="px-8 py-3 bg-brand-black text-cream hover:bg-brand-accent hover:text-brand-black rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 text-center shadow-sm hover:shadow-md"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-brand-black text-brand-black hover:bg-brand-black hover:text-cream rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 text-center"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right Parallax Media */}
          <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[80vh] overflow-hidden rounded-lg shadow-lg">
            <motion.img
              src={heroImg}
              alt="Ganesh Korde portrait"
              style={{ y: yParallax }}
              className="w-full h-full object-cover scale-110"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none hidden lg:flex">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Scroll</span>
        <div className="w-[1px] h-10 bg-brand-black/20 overflow-hidden">
          <div className="w-full h-full bg-brand-black origin-top animate-scroll-pulse" />
        </div>
      </div>
    </section>
  );
}

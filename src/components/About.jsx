import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/images/hero.png";

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "85+", label: "Projects" },
  { value: "14", label: "Awards" },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
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
    <section className="py-24 bg-cream text-brand-black" id="about">
      <div className="w-full max-w-[1400px] mx-auto px-[4vw] md:px-[6vw]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Media (About portrait with zoom on scroll/entrance) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[60vh] lg:h-[80vh] overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={aboutImg}
              alt="Ganesh Korde at work"
              className="w-full h-full object-cover scale-105 transition-transform duration-[2000ms] hover:scale-100"
            />
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs font-semibold tracking-widest uppercase text-gray-500"
            >
              About
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="font-heading text-4xl md:text-5xl font-bold leading-tight"
            >
              The Eye Behind
              <br />
              the Lens
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-gray-600 leading-relaxed"
            >
              With over a decade of experience traversing continents and cultures, I've dedicated my craft to finding beauty in the unnoticed — the interplay of light on weathered hands, the silence of mountain dawns, the electric pulse of a city at midnight.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-gray-600 leading-relaxed"
            >
              My work has been featured in Vogue, National Geographic, and exhibited in galleries across London, Tokyo, and New York.
            </motion.p>
            
            {/* Stats Block */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-brand-black/10 mt-4"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-heading text-3xl md:text-4xl font-bold text-brand-black">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs tracking-widest uppercase text-gray-400 mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

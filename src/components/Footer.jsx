import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-24 bg-brand-black text-cream" id="contact">
      <div className="w-full max-w-[1400px] mx-auto px-[4vw] md:px-[6vw]">
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-8 mb-20"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-500">
            Let's Create
          </p>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            Have a project
            <br />
            in mind?
          </h2>
          <a
            href="mailto:hello@ganeshkorde.com"
            className="px-8 py-3.5 bg-cream text-brand-black hover:bg-brand-accent hover:text-brand-black rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md mt-4"
          >
            Send Inquiry
          </a>
        </motion.div>

        {/* Bottom Line */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-cream/10">
          <div className="flex gap-8">
            <a
              href="#"
              className="text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-cream transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-cream transition-colors duration-300"
            >
              Behance
            </a>
            <a
              href="#"
              className="text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-cream transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-[10px] text-gray-500">
            &copy; {new Date().getFullYear()} Ganesh Korde. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portrait01 from "../assets/images/portrait-01.png";
import landscape01 from "../assets/images/landscape-01.png";
import editorial01 from "../assets/images/editorial-01.png";
import street01 from "../assets/images/street-01.png";
import portrait02 from "../assets/images/portrait-02.png";
import landscape02 from "../assets/images/landscape-02.png";

const projects = [
  {
    id: 1,
    category: "portrait",
    title: "Golden Hour",
    img: portrait01,
    aspect: "aspect-[3/4]",
  },
  {
    id: 2,
    category: "landscape",
    title: "Summit Light",
    img: landscape01,
    aspect: "aspect-[4/3]",
  },
  {
    id: 3,
    category: "editorial",
    title: "Structured",
    img: editorial01,
    aspect: "aspect-[3/4]",
  },
  {
    id: 4,
    category: "street",
    title: "Neon Rain",
    img: street01,
    aspect: "aspect-[4/3]",
  },
  {
    id: 5,
    category: "portrait",
    title: "Weathered",
    img: portrait02,
    aspect: "aspect-[3/4]",
  },
  {
    id: 6,
    category: "landscape",
    title: "Still Waters",
    img: landscape02,
    aspect: "aspect-[16/9]",
  },
];

export default function Work() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-24 bg-brand-black text-cream" id="work">
      <div className="w-full max-w-[1400px] mx-auto px-[4vw] md:px-[6vw]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
              Selected Work
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Through the Lens
            </h2>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {["all", "portrait", "landscape", "editorial", "street"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all duration-300 ${
                  filter === cat
                    ? "bg-brand-accent border-brand-accent text-brand-black"
                    : "border-gray-600 text-gray-400 hover:border-cream hover:text-cream"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-like Grid */}
        <motion.div layout className="columns-1 md:columns-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                className="break-inside-avoid mb-8 group relative overflow-hidden rounded-lg cursor-none project-card"
              >
                <div className={`relative overflow-hidden w-full ${project.aspect}`}>
                  {/* Card Image */}
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  {/* Card Overlay */}
                  <div className="absolute inset-0 bg-brand-black/60 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-xs font-semibold tracking-widest text-brand-accent uppercase mb-1">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-2xl font-semibold text-cream">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import portraitImg from "../assets/images/portrait-01.png";
import landscapeImg from "../assets/images/landscape-01.png";
import editorialImg from "../assets/images/editorial-01.png";
import streetImg from "../assets/images/street-01.png";

const categories = [
  { id: 1, name: "Portrait", count: "24 Projects", img: portraitImg },
  { id: 2, name: "Landscape", count: "18 Projects", img: landscapeImg },
  { id: 3, name: "Editorial", count: "12 Projects", img: editorialImg },
  { id: 4, name: "Street", count: "31 Projects", img: streetImg },
];

export default function Categories() {
  const containerRef = useRef(null);

  // offset: ["start start", "end end"] means:
  //   progress = 0 when the top of the container hits the top of viewport
  //   progress = 1 when the bottom of the container hits the bottom of viewport
  // This is exactly our sticky pin zone.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to horizontal translateX.
  // 4 cards × ~70vw each. We need to move the track left by
  // (trackWidth - viewportWidth). Using percentage of track is safe cross-device.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section className="bg-brand-black text-cream" id="categories">
      {/* Outer wrapper: h-[300vh] gives the scroll space for the pin */}
      <div ref={containerRef} className="relative h-[300vh] w-full">

        {/* Sticky frame — always full-height viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">

          {/* Section Header */}
          <div className="w-full max-w-[1400px] mx-auto px-[4vw] md:px-[6vw] mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
              Explore
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Photography Genres
            </h2>
          </div>

          {/* Horizontal Sliding Track */}
          <div className="w-full overflow-visible">
            <motion.div
              style={{ x }}
              className="flex gap-6 md:gap-8 px-[4vw] md:px-[6vw] will-change-transform"
            >
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="flex-shrink-0 w-[75vw] md:w-[60vw] max-w-[650px] h-[52vh] md:h-[62vh] relative rounded-xl overflow-hidden group"
                >
                  {/* Background image */}
                  <img
                    src={cat.img}
                    alt={`${cat.name} photography`}
                    className="absolute inset-0 w-full h-full object-cover brightness-50 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  {/* Project count badge */}
                  <span className="absolute top-6 right-6 text-[10px] font-semibold tracking-widest uppercase text-gray-300/70 z-10">
                    {cat.count}
                  </span>
                  {/* Category label */}
                  <h3 className="absolute bottom-8 left-8 z-10 font-heading text-4xl md:text-5xl font-bold text-cream">
                    {cat.name}
                  </h3>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

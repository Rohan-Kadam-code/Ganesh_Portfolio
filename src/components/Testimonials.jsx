import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Ganesh has an extraordinary ability to capture raw emotion. Every photograph tells a story you didn't know existed until you saw it.",
    author: "Elena Marchetti",
    role: "Creative Director, Vogue Italia",
  },
  {
    id: 2,
    quote: "Working with Ganesh transformed our brand identity. The editorial series was featured in three international publications.",
    author: "Marcus Chen",
    role: "Founder, Kindsight Studio",
  },
  {
    id: 3,
    quote: "The landscape series was breathtaking. Ganesh captures the grandeur of nature with an intimacy I've never seen before.",
    author: "Sofia Bergström",
    role: "Editor, National Geographic Traveller",
  },
  {
    id: 4,
    quote: "Ganesh's street photography collection is raw, honest, and deeply human. It reminds you why photography matters.",
    author: "James Okafor",
    role: "Curator, Tate Modern",
  },
];

function TestimonialCard({ testimonial, index, total, scrollYProgress }) {
  const step = 1 / total;
  // Each card animates out during its own scroll segment
  const start = index * step;
  const end = Math.min((index + 1) * step, 0.99);

  // Swipe: x 0 → offscreen left, rotate → tilt, fade out
  const x = useTransform(scrollYProgress, [start, end], ["0px", "-120%"]);
  const rotate = useTransform(scrollYProgress, [start, end], ["0deg", "-18deg"]);
  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);

  // Stack depth: waiting cards sit slightly behind / below / rotated
  const isLast = index === total - 1;

  return (
    <motion.div
      style={{
        // Last card stays put (nothing beneath it)
        x: isLast ? "0px" : x,
        rotate: isLast ? "0deg" : rotate,
        opacity: isLast ? 1 : opacity,
        zIndex: total - index,
        // Initial stacking offsets
        y: index * 8,
        scale: 1 - index * 0.04,
      }}
      className="absolute top-0 left-0 w-full h-full bg-cream rounded-2xl p-8 md:p-12 flex flex-col justify-between shadow-xl border border-black/5 will-change-transform"
    >
      <blockquote className="font-heading text-xl md:text-2xl italic leading-relaxed text-brand-black">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex flex-col">
        <cite className="not-italic font-semibold text-xs md:text-sm tracking-widest uppercase text-brand-black">
          {testimonial.author}
        </cite>
        <span className="text-[10px] md:text-xs text-gray-500 mt-1">
          {testimonial.role}
        </span>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const containerRef = useRef(null);

  // offset matches the sticky pin zone exactly
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-cream" id="testimonials">
      {/* Outer tall div provides scroll distance for the pin */}
      <div ref={containerRef} className="relative h-[300vh] w-full">

        {/* Sticky viewport frame */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">

          {/* Header */}
          <div className="text-center mb-16 px-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
              Kind Words
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-black">
              What Clients Say
            </h2>
          </div>

          {/* Card Stack */}
          <div className="relative w-[90vw] max-w-[560px] h-[300px] md:h-[280px]">
            {testimonials.map((test, index) => (
              <TestimonialCard
                key={test.id}
                testimonial={test}
                index={index}
                total={testimonials.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Scroll hint */}
          <p className="absolute bottom-10 text-[10px] tracking-widest uppercase text-gray-400 select-none">
            Scroll to read more
          </p>

        </div>
      </div>
    </section>
  );
}

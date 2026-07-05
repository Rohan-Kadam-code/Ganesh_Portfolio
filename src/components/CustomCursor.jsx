import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isViewHovered, setIsViewHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch device
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      document.body.classList.add("touch-device");
      return;
    }

    document.body.classList.add("no-cursor");
    setIsVisible(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    // Dynamic hover bindings
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      setIsViewHovered(false);
    };

    const handleViewMouseEnter = () => {
      setIsHovered(true);
      setIsViewHovered(true);
    };

    const bindHovers = () => {
      const interactiveSelector = "a, button, [role='button'], .btn, .tag, .nav__link";
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });

      document.querySelectorAll(".project-card").forEach((el) => {
        el.addEventListener("mouseenter", handleViewMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    bindHovers();

    // Re-bind when DOM changes
    const observer = new MutationObserver(bindHovers);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
      document.body.classList.remove("no-cursor");
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Exact dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-accent rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      {/* Lagging ring */}
      <motion.div
        className="fixed top-0 left-0 border border-brand-accent rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          width: isHovered ? (isViewHovered ? 72 : 56) : 32,
          height: isHovered ? (isViewHovered ? 72 : 56) : 32,
          backgroundColor: isViewHovered ? "rgba(200, 168, 124, 0.1)" : "rgba(200, 168, 124, 0)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {isViewHovered && (
          <span className="text-[10px] uppercase tracking-wider text-brand-accent font-medium select-none">
            View
          </span>
        )}
      </motion.div>
    </>
  );
}

"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorTrail() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const springConfig2 = { damping: 35, stiffness: 500 };
  const springConfig3 = { damping: 45, stiffness: 300 };

  const x1 = useSpring(mouseX, springConfig);
  const y1 = useSpring(mouseY, springConfig);
  const x2 = useSpring(mouseX, springConfig2);
  const y2 = useSpring(mouseY, springConfig2);
  const x3 = useSpring(mouseX, springConfig3);
  const y3 = useSpring(mouseY, springConfig3);

  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) {
      setIsTouch(true);
      return;
    }

    function moveCursor(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }
    function handleHover(e: Event) {
      const target = e.target;
      const hovered =
        target instanceof Element ? target.closest("a, button, .hover-target") : null;
      setIsHovering(!!hovered);
    }

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        style={{ translateX: x1, translateY: y1 }}
        className={`fixed top-0 left-0 h-2 w-2 ${
          isHovering ? "bg-rose-200" : "bg-rose-400"
        } rounded-full pointer-events-none z-50 mix-blend-difference`}
      />
      <motion.div
        style={{ translateX: x2, translateY: y2 }}
        className={`fixed top-0 left-0 h-4 w-4 border ${
          isHovering ? "border-rose-300/50" : "border-rose-500/50"
        } rounded-full pointer-events-none z-40 -ml-1 -mt-1`}
      />
      <motion.div
        style={{ translateX: x3, translateY: y3 }}
        className={`fixed top-0 left-0 h-8 w-8 ${
          isHovering ? "bg-rose-400/10" : "bg-rose-700/10"
        } rounded-full pointer-events-none z-30 blur-sm -ml-3 -mt-3`}
      />
    </>
  );
}

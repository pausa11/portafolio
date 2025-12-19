'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function CursorEffect() {
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  // Use MotionValues for high performance updates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the cursor follower
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.closest('a') || target.closest('button') || target.closest('[role="button"]');
      setIsHoveringLink(!!isLink);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Glow Effect */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute rounded-full pointer-events-none mix-blend-screen"
      >
        <div className="w-[400px] h-[400px] bg-primary/20 blur-[100px] rounded-full" />
      </motion.div>

      {/* Cursor Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHoveringLink ? 1.5 : 1,
          opacity: isHoveringLink ? 0.5 : 1
        }}
        className="absolute w-4 h-4 bg-primary/80 rounded-full blur-[1px] border border-white/20"
      />
    </div>
  );
}

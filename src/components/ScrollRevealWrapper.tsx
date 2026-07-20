import { motion, useReducedMotion, useInView } from "framer-motion";
import { memo, useRef, useMemo } from "react";
import type { ReactNode } from "react";

/**
 * Animation direction for scroll reveal
 */
export type RevealDirection = "up" | "down" | "left" | "right";

/**
 * Props for the ScrollRevealWrapper component
 */
export interface ScrollRevealWrapperProps {
  /** Content to be animated */
  children: ReactNode;
  /** Animation direction. Default: "up" */
  direction?: RevealDirection;
  /** Animation duration in seconds. Default: 0.6 */
  duration?: number;
  /** Slide distance in pixels. Default: 50 */
  distance?: number;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles to apply */
  style?: React.CSSProperties;
  /** If true, element stays visible always (use for Hero). Default: false */
  once?: boolean;
  /** Animation delay in seconds. Default: 0 */
  delay?: number;
}

/**
 * Gets the hidden state offset based on direction
 */
const getOffset = (direction: RevealDirection, distance: number) => {
  switch (direction) {
    case "left":
      return { x: -distance, y: 0 };
    case "right":
      return { x: distance, y: 0 };
    case "down":
      return { x: 0, y: -distance };
    case "up":
    default:
      return { x: 0, y: distance };
  }
};

/**
 * A reusable wrapper component that adds scroll-triggered reveal animations.
 * 
 * Features:
 * - Bidirectional animations using Framer Motion's useInView
 * - Multiple direction options (up, down, left, right)
 * - `once` prop for elements that should stay visible (like Hero)
 * - Respects user's reduced motion preferences
 * - GPU-accelerated for smooth performance
 * 
 * @example
 * ```tsx
 * <ScrollRevealWrapper direction="up" once>
 *   <Hero />
 * </ScrollRevealWrapper>
 * 
 * <ScrollRevealWrapper direction="up">
 *   <About />
 * </ScrollRevealWrapper>
 * ```
 */
export const ScrollRevealWrapper = memo(function ScrollRevealWrapper({
  children,
  direction = "up",
  duration = 0.6,
  distance = 50,
  className = "",
  style = {},
  once = false,
  delay = 0,
}: ScrollRevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  // Use Framer Motion's useInView for reliable viewport detection
  // `once: false` enables bidirectional animations (element hides when leaving viewport)
  // `once: true` keeps element visible after first reveal
  // `amount: 0.2` triggers when 20% of element is visible
  // `margin: "-50px"` triggers animation 50px before element enters viewport
  const isInView = useInView(ref, { 
    once: once, 
    amount: 0.15,
    margin: "-30px 0px -30px 0px"
  });

  // Respect reduced motion preferences
  const effectiveDuration = prefersReducedMotion ? 0 : duration;
  const effectiveDistance = prefersReducedMotion ? 0 : distance;
  
  const offset = useMemo(
    () => getOffset(direction, effectiveDistance),
    [direction, effectiveDistance]
  );

  // Define animation states
  const hiddenState = useMemo(
    () => ({ opacity: 0, ...offset }),
    [offset]
  );
  
  const visibleState = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      ref={ref}
      initial={hiddenState}
      animate={isInView ? visibleState : hiddenState}
      transition={{
        duration: effectiveDuration,
        ease: "easeOut",
        delay: delay,
      }}
      className={className}
      style={{ willChange: "opacity, transform", ...style }}
    >
      {children}
    </motion.div>
  );
});

/**
 * Props for ScrollRevealItem component
 */
export interface ScrollRevealItemProps {
  /** Content to animate */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}

/**
 * Child component for use within ScrollRevealWrapper.
 */
export const ScrollRevealItem = memo(function ScrollRevealItem({
  children,
  className = "",
  style = {},
}: ScrollRevealItemProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
});

export default ScrollRevealWrapper;

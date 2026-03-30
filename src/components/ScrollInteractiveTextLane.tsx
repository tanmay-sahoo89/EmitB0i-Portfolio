import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Props for the DualLaneDivider component
 */
export interface DualLaneDividerProps {
  /** Section name to display in front lane (e.g., "ABOUT", "PROJECTS") */
  sectionName: string;
  /** Additional CSS classes */
  className?: string;
  /** Base animation speed in seconds (default: 40) */
  baseSpeed?: number;
}

// Global scroll velocity tracker
let scrollVelocity = 0;
let scrollDirection: "up" | "down" | "idle" = "idle";
let lastScrollY = 0;
let lastScrollTime = Date.now();
let smoothVelocity = 0;
let idleTimeout: ReturnType<typeof setTimeout> | null = null;
let initialized = false;

function initGlobalScrollTracker() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  lastScrollY = window.scrollY;

  const onScroll = () => {
    const now = Date.now();
    const currentY = window.scrollY;
    const dt = now - lastScrollTime;

    if (dt > 0) {
      const rawVel = (currentY - lastScrollY) / dt;
      smoothVelocity = smoothVelocity * 0.7 + rawVel * 0.3;
      scrollVelocity = Math.abs(smoothVelocity);

      if (smoothVelocity > 0.05) {
        scrollDirection = "down";
      } else if (smoothVelocity < -0.05) {
        scrollDirection = "up";
      }

      if (idleTimeout) clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        scrollDirection = "idle";
        smoothVelocity = 0;
        scrollVelocity = 0;
      }, 150);
    }

    lastScrollY = currentY;
    lastScrollTime = now;
  };

  window.addEventListener("scroll", onScroll, { passive: true });
}

/**
 * Single marquee lane component
 */
function MarqueeLane({
  text,
  baseSpeed,
  textColorClass,
  icon,
  reverseDefault,
}: {
  text: string;
  baseSpeed: number;
  textColorClass: string;
  icon: string;
  reverseDefault: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);

  useEffect(() => {
    initGlobalScrollTracker();

    const el = containerRef.current;
    if (!el) return;

    let rafId: number;
    let prevTime = performance.now();

    const tick = (time: number) => {
      const delta = time - prevTime;
      prevTime = time;

      // Calculate speed multiplier based on scroll velocity (1x to 3x)
      const speedMultiplier = 1 + Math.min(scrollVelocity * 0.8, 2);

      // Determine direction: 
      // - Default: moves LEFT (negative direction = -1)
      // - If reverseDefault=true, default moves RIGHT (+1)
      // - When scrolling UP, flip the direction
      let dir = reverseDefault ? 1 : -1;
      if (scrollDirection === "up") {
        dir = -dir; // Reverse when scrolling up
      }

      // Calculate movement: pixels per frame
      // baseSpeed = seconds to traverse 50% of width
      // So per ms: 50 / (baseSpeed * 1000)
      const baseMovement = (50 / (baseSpeed * 1000)) * delta;
      const movement = baseMovement * speedMultiplier * dir;

      positionRef.current += movement;

      // Wrap around for seamless loop
      if (positionRef.current <= -50) {
        positionRef.current += 50;
      } else if (positionRef.current >= 0) {
        positionRef.current -= 50;
      }

      el.style.transform = `translateX(${positionRef.current}%)`;

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [baseSpeed, reverseDefault]);

  // Repeat text many times for seamless loop
  const items = Array(12).fill(text);

  return (
    <div
      ref={containerRef}
      className="flex whitespace-nowrap"
      style={{ willChange: "transform" }}
    >
      {items.map((t, i) => (
        <span
          key={i}
          className={`text-lg md:text-xl lg:text-2xl font-bold ${textColorClass} px-4 md:px-6 flex-shrink-0 flex items-center gap-3 uppercase tracking-wider`}
        >
          <span className="opacity-60">{icon}</span>
          {t}
        </span>
      ))}
      {items.map((t, i) => (
        <span
          key={`d-${i}`}
          className={`text-lg md:text-xl lg:text-2xl font-bold ${textColorClass} px-4 md:px-6 flex-shrink-0 flex items-center gap-3 uppercase tracking-wider`}
        >
          <span className="opacity-60">{icon}</span>
          {t}
        </span>
      ))}
    </div>
  );
}

/**
 * Dual Lane Divider - HackNITR style section divider
 */
export function DualLaneDivider({
  sectionName,
  className = "",
  baseSpeed = 40,
}: DualLaneDividerProps) {
  const prefersReducedMotion = useReducedMotion();
  const backLaneText = "EmitB0i Portfolio • A Creative Developer • A Creative Editor";

  useEffect(() => {
    initGlobalScrollTracker();
  }, []);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className={`relative w-full ${className}`} style={{ height: "140px", overflow: "visible" }}>
      {/* Back Lane - White, skewed */}
      <div
        className="absolute w-[120%] left-[-10%] h-12 md:h-14 bg-white flex items-center overflow-hidden"
        style={{
          transform: "skewY(-3deg)",
          top: "20px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.25)",
          zIndex: 1,
        }}
      >
        <MarqueeLane
          text={backLaneText}
          baseSpeed={baseSpeed * 1.5}
          textColorClass="text-gray-800"
          icon="◆"
          reverseDefault={true}
        />
      </div>

      {/* Front Lane - Purple */}
      <div
        className="absolute w-[110%] left-[-5%] h-12 md:h-14 bg-primary flex items-center overflow-hidden"
        style={{
          top: "70px",
          boxShadow: "0 8px 30px rgba(139, 92, 246, 0.4), 0 4px 15px rgba(0, 0, 0, 0.3)",
          zIndex: 2,
        }}
      >
        <MarqueeLane
          text={sectionName}
          baseSpeed={baseSpeed}
          textColorClass="text-white"
          icon="✦"
          reverseDefault={false}
        />
      </div>
    </div>
  );
}

// Legacy exports
export const ScrollInteractiveTextLane = DualLaneDivider;
export type ScrollInteractiveTextLaneProps = DualLaneDividerProps;
export default DualLaneDivider;

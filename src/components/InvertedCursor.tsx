import { useEffect, useRef, useState } from "react";

/**
 * InvertedCursor - A glowing circular cursor that inverts colors underneath
 *
 * How it works:
 * - Uses CSS backdrop-filter: invert(1) to invert colors behind the cursor
 * - Smooth easing with requestAnimationFrame for 60fps
 * - Shrinks and disappears when hovering over interactive elements
 * - Hides on mobile/touch devices for better UX
 */
export default function InvertedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  // Mouse position state (actual position)
  const mousePos = useRef({ x: 0, y: 0 });
  // Cursor position (smoothed/eased position)
  const cursorPos = useRef({ x: 0, y: 0 });

  // Configuration - smaller size
  const CURSOR_SIZE = 40;
  const EASE_FACTOR = 0.15;

  useEffect(() => {
    // Check if device supports hover (not touch-only)
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (!hasHover) {
      setIsEnabled(false);
      return;
    }

    let animationFrameId: number;

    // Check if element is interactive (button, link, input, etc.)
    const isInteractiveElement = (element: Element | null): boolean => {
      if (!element) return false;
      const tagName = element.tagName.toLowerCase();
      const interactiveTags = ["button", "a", "input", "textarea", "select"];
      if (interactiveTags.includes(tagName)) return true;
      if (element.getAttribute("role") === "button") return true;
      if (element.closest("button, a, [role='button']")) return true;
      return false;
    };

    // Update mouse position on move
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      
      // Check if hovering over interactive element
      const target = document.elementFromPoint(e.clientX, e.clientY);
      setIsHoveringInteractive(isInteractiveElement(target));
    };

    // Hide cursor when leaving window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Animation loop for smooth cursor movement
    const animate = () => {
      // Ease towards target position
      cursorPos.current.x +=
        (mousePos.current.x - cursorPos.current.x) * EASE_FACTOR;
      cursorPos.current.y +=
        (mousePos.current.y - cursorPos.current.y) * EASE_FACTOR;

      // Apply position using transform (GPU accelerated)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x - CURSOR_SIZE / 2}px, ${cursorPos.current.y - CURSOR_SIZE / 2}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation loop
    animationFrameId = requestAnimationFrame(animate);

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Don't render on touch devices or if disabled
  if (!isEnabled) return null;

  return (
    <>
      {/* Hide default cursor globally when our cursor is active, but show on interactive elements */}
      <style>{`
        body {
          cursor: ${isHoveringInteractive ? 'auto' : 'none'} !important;
        }
        a, button, [role="button"], input, textarea, select {
          cursor: pointer !important;
        }
      `}</style>

      {/* Inversion circle - uses backdrop-filter: invert(1) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
          willChange: "transform",
        }}
      >
        {/* Inner circle with inversion effect using backdrop-filter */}
        <div
          ref={innerRef}
          className="w-full h-full rounded-full"
          style={{
            backdropFilter: "invert(1)",
            WebkitBackdropFilter: "invert(1)",
            boxShadow: "0 0 15px rgba(167, 139, 250, 0.5)",
            transform: isHoveringInteractive ? "scale(0)" : "scale(1)",
            opacity: isHoveringInteractive ? 0 : 1,
            transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
          }}
        />
      </div>
    </>
  );
}

import { useEffect, useRef } from "react";

/* ── Custom cursor — zero React re-renders, all direct DOM writes ── */

export default function InvertedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch-only devices
    if (!window.matchMedia("(hover: hover)").matches) return;

    const cursor = cursorRef.current;
    const inner = innerRef.current;
    if (!cursor || !inner) return;

    const CURSOR_SIZE = 40;
    const EASE = 0.15;
    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let visible = false;
    let hovering = false;
    let animId: number;

    const interactiveTags = new Set(["button", "a", "input", "textarea", "select"]);

    const isInteractive = (el: Element | null): boolean => {
      if (!el) return false;
      if (interactiveTags.has(el.tagName.toLowerCase())) return true;
      if (el.getAttribute("role") === "button") return true;
      if (el.closest("button, a, [role='button']")) return true;
      return false;
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!visible) {
        visible = true;
        cursor.style.opacity = "1";
      }

      // Throttle hit-testing to avoid expensive elementFromPoint every move
      const target = e.target as Element;
      const nowHovering = isInteractive(target);
      if (nowHovering !== hovering) {
        hovering = nowHovering;
        inner.style.transform = hovering ? "scale(0)" : "scale(1)";
        inner.style.opacity = hovering ? "0" : "1";
        document.body.style.cursor = hovering ? "auto" : "none";
      }
    };

    const onLeave = () => {
      visible = false;
      cursor.style.opacity = "0";
    };

    const onEnter = () => {
      visible = true;
      cursor.style.opacity = "1";
    };

    const animate = () => {
      pos.x += (mouse.x - pos.x) * EASE;
      pos.y += (mouse.y - pos.y) * EASE;
      cursor.style.transform = `translate3d(${pos.x - CURSOR_SIZE / 2}px, ${pos.y - CURSOR_SIZE / 2}px, 0)`;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // Set initial cursor hide
    document.body.style.cursor = "none";

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.body.style.cursor = "auto";
    };
  }, []);

  // Check on mount — don't even render on touch devices
  if (typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches) {
    return null;
  }

  return (
    <>
      <style>{`
        a, button, [role="button"], input, textarea, select {
          cursor: pointer !important;
        }
      `}</style>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 40,
          height: 40,
          opacity: 0,
          willChange: "transform",
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          ref={innerRef}
          className="w-full h-full rounded-full"
          style={{
            backdropFilter: "invert(1)",
            WebkitBackdropFilter: "invert(1)",
            boxShadow: "0 0 15px rgba(167, 139, 250, 0.5)",
            transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
          }}
        />
      </div>
    </>
  );
}

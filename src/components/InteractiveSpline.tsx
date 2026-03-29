import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, Suspense } from "react";

interface Rotation {
  x: number;
  y: number;
}

export default function InteractiveSpline() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Direct DOM transform — no setState, no re-renders
  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;

    const target: Rotation = { x: 0, y: 0 };
    const current: Rotation = { x: 0, y: 0 };
    let animId: number;

    const animate = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;

      // Only update DOM if there's meaningful change
      if (Math.abs(target.x - current.x) > 0.01 || Math.abs(target.y - current.y) > 0.01) {
        wrapper.style.transform = `rotateX(${current.x}deg) rotateY(${current.y}deg)`;
      }

      animId = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      target.x = (y - 0.5) * 15;
      target.y = (x - 0.5) * 25;
    };

    const onLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    animId = requestAnimationFrame(animate);
    container.addEventListener("mousemove", onMove, { passive: true });
    container.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.2,
        ease: "easeOut" as const,
        delay: 0.5,
      }}
      className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-outline-variant bg-surface-container"
      style={{ perspective: "1200px" }}
    >
      <div
        ref={wrapperRef}
        style={{
          transformStyle: "preserve-3d",
          width: "100%",
          height: "100%",
          willChange: "transform",
        }}
      >
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center bg-surface-container">
              <div className="spinner" />
            </div>
          }
        >
          <Spline
            scene="https://prod.spline.design/x20ydXFFldt0u5Wa/scene.splinecode"
            onLoad={() => setIsLoaded(true)}
            style={{ width: "100%", height: "100%" }}
          />
        </Suspense>
      </div>

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-container pointer-events-none">
          <div className="flex flex-col items-center gap-4">
            <div className="spinner" />
            <span className="text-on-surface-variant text-sm">
              Loading 3D Model...
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

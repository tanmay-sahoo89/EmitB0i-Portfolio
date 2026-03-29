import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, Suspense } from "react";

interface Rotation {
  x: number;
  y: number;
}

export default function InteractiveSpline() {
  const [rotation, setRotation] = useState<Rotation>({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRotationRef = useRef<Rotation>({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(undefined);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setRotation((prev) => ({
        x: lerp(prev.x, targetRotationRef.current.x, 0.08),
        y: lerp(prev.y, targetRotationRef.current.y, 0.08),
      }));
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      targetRotationRef.current = {
        x: (y - 0.5) * 15,
        y: (x - 0.5) * 25,
      };
    };

    const handleMouseLeave = () => {
      targetRotationRef.current = { x: 0, y: 0 };
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove, {
        passive: true,
      });
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5,
      }}
      className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-outline-variant bg-surface-container"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{
          type: "tween",
          duration: 0.1,
          ease: "linear",
        }}
        style={{
          transformStyle: "preserve-3d",
          width: "100%",
          height: "100%",
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
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Suspense>
      </motion.div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center bg-surface-container pointer-events-none"
        style={{ display: isLoaded ? "none" : "flex" }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="spinner" />
          <span className="text-on-surface-variant text-sm">
            Loading 3D Model...
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

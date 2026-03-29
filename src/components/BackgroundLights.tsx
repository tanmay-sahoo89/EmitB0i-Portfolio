import { motion } from "framer-motion";

export default function BackgroundLights() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary purple glow - top right */}
      <motion.div
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px]"
      />

      {/* Secondary green glow - bottom left */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-tertiary/20 rounded-full blur-[150px]"
      />

      {/* Accent purple glow - center left */}
      <motion.div
        animate={{
          opacity: [0.08, 0.15, 0.08],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 -left-40 w-[400px] h-[400px] bg-[#818cf8]/20 rounded-full blur-[120px]"
      />

      {/* Small accent - mid right */}
      <motion.div
        animate={{
          opacity: [0.1, 0.18, 0.1],
          scale: [1, 1.2, 1],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute top-1/2 -right-20 w-[350px] h-[350px] bg-primary/25 rounded-full blur-[100px]"
      />

      {/* Bottom center glow */}
      <motion.div
        animate={{
          opacity: [0.05, 0.12, 0.05],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-t from-primary/20 to-tertiary/10 rounded-full blur-[120px]"
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(167, 139, 250, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 139, 250, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Radial gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(12, 12, 15, 0.4) 70%, rgba(12, 12, 15, 0.8) 100%)`,
        }}
      />
    </div>
  );
}

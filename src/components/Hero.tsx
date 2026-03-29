import { motion } from "framer-motion";
import InteractiveSpline from "./InteractiveSpline";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const headingLine1 = "TANMAY CHIRANJIB";
  const headingLine2 = "SAHOO";
  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        delay: i * 0.03,
      },
    }),
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-surface pt-20 lg:pt-24 pb-12 lg:pb-0 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 lg:space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 w-fit"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-tertiary rounded-full"
              />
              <span className="text-xs font-semibold text-tertiary tracking-widest uppercase">
                Available for Collaboration
              </span>
            </motion.div>

            <div>
              <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-on-surface tracking-tighter leading-[1.1] whitespace-nowrap">
                {headingLine1.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className={char === " " ? "inline" : "inline-block"}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-on-surface tracking-tighter leading-[1.1]">
                {headingLine2.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index + headingLine1.length}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className={char === " " ? "inline" : "inline-block"}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              <motion.span
                whileHover={{ scale: 1.05, borderColor: "#a78bfa" }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high border border-outline-variant rounded-lg text-on-surface text-sm font-medium cursor-default"
              >
                <span>🤖</span> AI/ML ENGINEER
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05, borderColor: "#34d399" }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high border border-outline-variant rounded-lg text-on-surface text-sm font-medium cursor-default"
              >
                <span>🎬</span> VIDEO EDITOR
              </motion.span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-on-surface-variant max-w-lg leading-relaxed"
            >
              Building intelligent systems and crafting compelling visual
              experiences through cutting-edge AI, machine learning, and
              creative production.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(167, 139, 250, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 lg:px-8 py-3 bg-primary text-on-primary font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Explore My Work
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(18, 18, 21, 1)",
                  borderColor: "#a78bfa",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 lg:px-8 py-3 border border-outline-variant text-on-surface font-semibold rounded-lg transition-colors"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="pt-8 hidden lg:block"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-start gap-2"
              >
                <span className="text-xs text-on-surface-variant">
                  Scroll to explore
                </span>
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="order-first lg:order-last">
            <InteractiveSpline />
          </div>
        </div>
      </div>
    </section>
  );
}

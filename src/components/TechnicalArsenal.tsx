import { motion } from "framer-motion";

const arsenal = [
  {
    title: "AI/ML Engineering",
    icon: "🤖",
    description:
      "Building intelligent systems with deep learning and machine learning",
    tools: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Hugging Face"],
    highlight: "ML Pipeline Focus",
  },
  {
    title: "Full Stack Development",
    icon: "⚙️",
    description: "Building scalable web applications with modern technologies",
    tools: ["React 19", "FastAPI", "Firebase", "Docker", "TypeScript"],
    highlight: "End-to-End",
  },
  {
    title: "Creative Direction",
    icon: "🎨",
    description: "Crafting visual experiences with modern production tools",
    tools: [
      "After Effects",
      "Adobe Premiere Pro",
      "Topaz Video AI",
      "HandBrake",
      "Media Encoder",
    ],
    highlight: "Video Editing",
  },
];

export default function TechnicalArsenal() {
  return (
    <section className="py-20 lg:py-32 bg-surface-dim relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold text-tertiary tracking-widest uppercase mb-4 block">
            Core Competencies
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-on-surface tracking-tighter">
            Technical Arsenal
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {arsenal.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-container border border-outline-variant rounded-xl p-6 relative overflow-hidden group hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(167,139,250,0.1)] transition-all duration-300"
            >
              <div className="absolute top-4 right-4 w-3 h-3 bg-tertiary rounded-full animate-pulse" />

              <div className="text-4xl mb-4">{item.icon}</div>

              <span className="text-xs text-primary font-medium tracking-wider uppercase">
                {item.highlight}
              </span>

              <h3 className="text-xl font-bold text-on-surface mt-2 mb-3">
                {item.title}
              </h3>

              <p className="text-on-surface-variant text-sm mb-5 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-surface-container-high border border-outline-variant text-on-surface-variant rounded-md text-xs font-medium hover:scale-105 transition-transform duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary to-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const projects = [
  {
    title: "Ship Risk AI",
    subtitle: "ML-Powered Risk Prediction",
    description:
      "Full-stack shipment risk prediction system using machine learning. Features React 19 + TypeScript dashboard with real-time weather integration, FastAPI backend, and Firebase authentication. Predicts delivery delays and cargo risks with 87% accuracy.",
    tags: ["React 19", "FastAPI", "TensorFlow", "Firebase", "Weather API"],
    link: "https://ship-risk-ai.web.app/",
    github: "#",
    image: "/ship-risk-preview.png",
    stats: [
      { label: "Accuracy", value: "87%" },
      { label: "API Calls/Day", value: "10K+" },
      { label: "Live Scoring", value: "500+" },
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-surface relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-4 block">
              Selected Works
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-on-surface tracking-tighter">
              Featured Innovation
            </h2>
          </div>
          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            className="text-on-surface-variant hover:text-primary text-sm font-medium flex items-center gap-2 transition-colors"
          >
            View All Projects
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>

        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-surface-container border border-outline-variant rounded-2xl overflow-hidden aspect-video relative group"
            >
              <img
                src="/Screenshot (877).png"
                alt="Ship Risk AI Dashboard"
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-surface-dim/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-primary text-on-primary font-semibold rounded-lg text-sm"
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href="/case-study"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 border border-outline-variant text-on-surface font-semibold rounded-lg text-sm"
                >
                  Case Study
                </motion.a>
              </motion.div>
            </motion.div>

            <div className="flex flex-col justify-center space-y-6">
              <div>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xs font-semibold text-tertiary tracking-widest uppercase"
                >
                  {project.subtitle}
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl lg:text-4xl font-bold text-on-surface mt-2 tracking-tighter"
                >
                  {project.title}
                </motion.h3>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-on-surface-variant leading-relaxed"
              >
                {project.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-2"
              >
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-primary/10 border border-primary/30 text-primary rounded-lg text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex gap-6 pt-4"
              >
                {project.stats.map((stat, i) => (
                  <div key={i}>
                    <span className="text-2xl font-bold text-primary">
                      {stat.value}
                    </span>
                    <p className="text-on-surface-variant text-xs mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="flex gap-4 pt-2"
              >
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(167, 139, 250, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-primary text-on-primary font-semibold rounded-lg text-sm flex items-center gap-2"
                >
                  View Live
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </motion.a>
                <motion.a
                  href="/case-study"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 border border-outline-variant text-on-surface font-semibold rounded-lg text-sm"
                >
                  Case Study
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

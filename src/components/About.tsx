import { motion } from "framer-motion";

const skills = [
  {
    category: "AI/ML Engineering",
    items: [
      "TensorFlow",
      "Scikit-learn",
      "PyTorch",
      "Hugging Face",
      "OpenCV",
      "Model Training",
    ],
    color: "primary",
  },
  {
    category: "Backend & Cloud",
    items: ["FastAPI", "Firebase", "Docker", "SQL", "Nginx"],
    color: "tertiary",
  },
  {
    category: "Web Development",
    items: ["React 19", "TypeScript", "Tailwind CSS", "Vite"],
    color: "primary",
  },
  {
    category: "Creative Production",
    items: [
      "After Effects",
      "Adobe Premiere Pro",
      "Topaz Video AI",
      "HandBrake",
      "Media Encoder",
    ],
    color: "tertiary",
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-surface relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-4 block">
            The Architect
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-on-surface mb-4 tracking-tighter">
            Aspiring AI/ML Engineer &
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-6 tracking-tighter">
            Creative Producer.
          </h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-primary to-tertiary origin-left"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Pursuing B.Tech in Computer Science (AI & ML) at Trident Academy
              of Technology, Bhubaneswar. Passionate about building end-to-end
              ML pipelines, full-stack web applications, and professional video
              productions.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              As Core Developer & Project Head of Team NeurAlgo, I've led
              development across multiple national-level hackathons. Passionate
              about pushing the boundaries of artificial intelligence and
              turning ideas into impactful solutions.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div>
                <span className="text-xs text-on-surface-variant uppercase tracking-wider">
                  Education
                </span>
                <p className="text-on-surface font-medium mt-1">
                  B.Tech CSE (AI & ML)
                </p>
                <p className="text-on-surface-variant text-sm">
                  CGPA: 7.538/10.0
                </p>
              </div>
              <div>
                <span className="text-xs text-on-surface-variant uppercase tracking-wider">
                  Location
                </span>
                <p className="text-on-surface font-medium mt-1">
                  Bhubaneswar, Odisha, India
                </p>
                <p className="text-on-surface-variant text-sm">
                  Open to Remote
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container border border-outline-variant rounded-lg p-4">
                <span className="text-3xl font-bold text-primary">3+</span>
                <p className="text-on-surface-variant text-sm mt-1">
                  Internships
                </p>
              </div>
              <div className="bg-surface-container border border-outline-variant rounded-lg p-4">
                <span className="text-3xl font-bold text-tertiary">3+</span>
                <p className="text-on-surface-variant text-sm mt-1">
                  Hackathons
                </p>
              </div>
              <div className="bg-surface-container border border-outline-variant rounded-lg p-4">
                <span className="text-3xl font-bold text-primary">1</span>
                <p className="text-on-surface-variant text-sm mt-1">Projects</p>
              </div>
              <div className="bg-surface-container border border-outline-variant rounded-lg p-4">
                <span className="text-3xl font-bold text-tertiary">2027</span>
                <p className="text-on-surface-variant text-sm mt-1">
                  Expected Grad
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-surface-container border border-outline-variant rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <h4
                className={`text-lg font-bold mb-4 ${skillGroup.color === "primary" ? "text-primary" : "text-tertiary"}`}
              >
                {skillGroup.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${
                      skillGroup.color === "primary"
                        ? "bg-primary/10 border-primary/30 text-primary"
                        : "bg-tertiary/10 border-tertiary/30 text-tertiary"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

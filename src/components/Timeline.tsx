import { motion } from "framer-motion";

const experiences = [
  {
    title: "Artificial Intelligence Intern",
    company: "Plasmid Innovation Ltd.",
    date: "SEP 2025 – NOV 2025",
    description:
      "Completed 2-month intensive training in AI/Generative AI applications with GenAI development using. National Indian Institute of Regenerative for sustainable agriculture in AI ecosystem.",
    link: "LIN: plasmidresearch",
  },
  {
    title: "Artificial Intelligence Intern",
    company: "Codec Technologies",
    date: "JUN 2025 – JUL 2025",
    description:
      "Hands-on AI training including AI image classification in AI/ML with related competencies in the sector.",
  },
  {
    title: "Web Development Intern",
    company: "Glowlogix Solutions",
    date: "DEC 2024 – FEB 2025",
    description:
      "Completed full-stack web development training, project in HTML/CSS, JavaScript & Spring. Gain practical experience.",
    link: "Link: 500+ 000-0913",
  },
];

const hackathons = [
  {
    name: "AIOT HACKATHON 2026",
    org: "“Idea for Impact” Innovation Mela, organized by thingQbator (Nasscom, Cisco)",
    date: "Team NeurAlgo",
  },
  {
    name: "HACKIN'25 SMART INDIA HACKATHON",
    org: "Smart India Hackathon 2025, Trident Academy of Technology, Bhubaneswar",
    date: "Team NeurAlgo",
  },
  {
    name: "INNOVATE X 5.0",
    org: "National Level Hackathon (30 Hours), GIET Baniatangi",
    date: "Team NeurAlgo",
  },
];

const certifications = [
  {
    org: "Glowlogics Solutions",
    details: "Grade A+, MSME",
    certId: "WD25-GL01-C013",
  },
  {
    org: "Rinex",
    details: "Grade A+, Google for Education Partner",
    certId: "WD24-RNC0-9070",
  },
];

export default function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 lg:py-32 bg-surface-dim relative overflow-hidden"
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
            Journey
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-on-surface tracking-tighter">
            Career & <span className="text-primary">Timeline</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              {/* Timeline line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-outline-variant origin-top"
              />

              <div className="space-y-8">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="relative pl-8"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="absolute left-0 top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-surface-dim"
                    />

                    <div className="bg-surface-container border border-outline-variant rounded-xl p-5 hover:border-primary/50 transition-colors">
                      <span className="text-xs text-primary font-medium">
                        {exp.date}
                      </span>
                      <h3 className="text-lg font-bold text-on-surface mt-1">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-tertiary font-medium">
                        {exp.company}
                      </p>
                      <p className="text-on-surface-variant text-sm mt-3 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Hackathons & Certifications */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
                <span className="text-2xl">🏆</span> Hackathons & Honors
              </h3>
              <div className="space-y-4">
                {hackathons.map((hack, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="bg-surface-container border border-outline-variant rounded-lg p-4 hover:border-tertiary/50 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-bold text-on-surface">
                          {hack.name}
                        </h4>
                        <p className="text-xs text-on-surface-variant mt-1">
                          {hack.org}
                        </p>
                      </div>
                      <span className="text-xs text-tertiary font-medium whitespace-nowrap">
                        {hack.date}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-surface-container border border-outline-variant rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-on-surface mb-6">
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-on-surface text-sm">
                        {cert.org}: {cert.details}
                      </span>
                    </div>
                    <span className="text-xs text-primary font-mono whitespace-nowrap">
                      {cert.certId}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

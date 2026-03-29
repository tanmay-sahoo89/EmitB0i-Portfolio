import { motion } from "framer-motion";

const achievements = [
  {
    icon: "⭐",
    title: "Shining Star Award",
    org: "Trident Academy of Technology",
    description:
      "Recognized for outstanding achievements in the technology domain.",
    color: "primary",
  },
  {
    icon: "🏆",
    title: "Hackathon Participant",
    org: "Multiple Events",
    description:
      "Active participant in multiple hackathons and innovation events.",
    color: "tertiary",
  },
  {
    icon: "📚",
    title: "Continuous Learning",
    org: "Self-Development",
    description:
      "Commitment to ongoing AI/ML advancement and skill development.",
    color: "primary",
  },
  {
    icon: "👥",
    title: "Team Leadership",
    org: "Team NeurAlgo",
    description:
      "Core Developer & Project Head leading hackathon teams to success.",
    color: "tertiary",
  },
];

export default function Achievements() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold text-tertiary tracking-widest uppercase mb-4 block">
            Recognition
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-on-surface tracking-tighter">
            ACHIEVEMENTS & <span className="text-primary">HONORS</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow:
                  achievement.color === "primary"
                    ? "0 20px 40px rgba(167, 139, 250, 0.15)"
                    : "0 20px 40px rgba(52, 211, 153, 0.15)",
              }}
              className="bg-surface-container border border-outline-variant rounded-xl p-6 text-center group"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-5xl mb-4"
              >
                {achievement.icon}
              </motion.div>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`h-0.5 mx-auto mb-4 ${
                  achievement.color === "primary" ? "bg-primary" : "bg-tertiary"
                }`}
              />

              <h3
                className={`text-lg font-bold mb-2 ${
                  achievement.color === "primary"
                    ? "text-primary"
                    : "text-tertiary"
                }`}
              >
                {achievement.title}
              </h3>

              <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-3">
                {achievement.org}
              </p>

              <p className="text-on-surface-variant text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

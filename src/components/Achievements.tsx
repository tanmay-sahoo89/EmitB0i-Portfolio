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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className={`bg-surface-container border border-outline-variant rounded-xl p-6 text-center group hover:-translate-y-2 transition-all duration-300 ${
                achievement.color === "primary"
                  ? "hover:shadow-[0_20px_40px_rgba(167,139,250,0.15)]"
                  : "hover:shadow-[0_20px_40px_rgba(52,211,153,0.15)]"
              }`}
            >
              <div className="text-5xl mb-4">{achievement.icon}</div>

              <div
                className={`h-0.5 w-12 mx-auto mb-4 ${
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
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-surface-dim relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block text-6xl mb-6"
          >
            🚀
          </motion.span>

          <h2 className="text-4xl lg:text-6xl font-bold text-on-surface tracking-tighter mb-6">
            Let's <span className="text-gradient">Get in Touch</span>?
          </h2>

          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            Currently open to internship opportunities in AI/ML or high-impact
            creative roles. Let's create something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href="mailto:sahootanmay2005@gmail.com"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(167, 139, 250, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-on-primary font-semibold rounded-lg text-lg flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get in Touch
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/tanmay-emitboi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                borderColor: "#a78bfa",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-outline-variant text-on-surface font-semibold rounded-lg text-lg flex items-center gap-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </motion.a>
          </div>

          <div className="flex flex-col items-center gap-2 text-on-surface-variant">
            <span className="text-sm">sahootanmay2005@gmail.com</span>
            <span className="text-sm">+91 7978690440</span>
          </div>
        </motion.div>
      </div>

      {/* Background decoration — pure CSS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none bg-light bg-light-1" />
    </section>
  );
}

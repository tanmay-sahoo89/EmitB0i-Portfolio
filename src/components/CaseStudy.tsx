import { motion } from "framer-motion";

const caseStudyData = {
  title: "Ship Risk AI",
  subtitle: "ML-Driven Shipment Risk Prediction",
  tagline: "Building an End-to-End AI System for Logistics Risk Management",
  tags: ["Full-Stack Development", "Machine Learning", "Real-Time Dashboard"],
  liveDemo: "https://ship-risk-ai.web.app",
  stats: [
    { value: "87%", label: "Model Accuracy" },
    { value: "5000+", label: "Shipments Analyzed" },
    { value: "10K+", label: "API Calls/Day" },
    { value: "7 Days", label: "To Build & Deploy" },
  ],
  sections: [
    {
      title: "Executive Summary",
      content:
        "Ship Risk AI is a comprehensive machine learning platform that predicts shipment delays and generates actionable intervention recommendations for logistics managers. The system combines a Python ML pipeline with a React TypeScript dashboard to provide real-time risk assessment and intelligent decision support.",
    },
    {
      title: "The Problem",
      content:
        "Global supply chains are increasingly complex, with shipments exposed to countless risk factors: weather disruptions, port congestion, carrier unreliability, customs delays, and unexpected events.",
      bullets: [
        "Predictive visibility into which shipments will be delayed before problems occur",
        "Risk scoring that accounts for multiple interacting factors",
        "Actionable recommendations for intervention (reroute, carrier switch, priority handling)",
        "Real-time dashboards for alert monitoring and live tracking",
        "AI-powered insights for explaining why a delay is predicted",
      ],
      footer:
        "Traditional rule-based systems fail because shipment risk is a product of dozens of interacting factors. This project demonstrates how machine learning can solve this with accuracy, speed, and explainability.",
    },
    {
      title: "The Solution",
      content: "Ship Risk AI combines three layers:",
      layers: [
        {
          name: "ML Pipeline (Python)",
          description:
            "Generates synthetic shipment data, trains a Gradient Boosting classifier (87% accuracy), scores live shipments, and generates risk-based alerts and intervention recommendations.",
        },
        {
          name: "REST API (FastAPI)",
          description:
            "Exposes 20+ endpoints for shipment management, risk scoring, alert generation, real-time weather/aircraft tracking, route calculation, and AI-powered insights via Google Gemini.",
        },
        {
          name: "React Dashboard (TypeScript + Tailwind)",
          description:
            "Real-time Firestore listeners provide live shipment data, risk metrics, and alerts. Interactive map with live tracking, AI advisor chatbot, and multi-format export (CSV, PDF).",
        },
      ],
    },
  ],
  technicalDetails: {
    mlPipeline: [
      {
        name: "Data Generation",
        description:
          "Generates 5000+ synthetic shipment records with 23+ features including carrier, origin/destination, weather, disruptions, port congestion, and customs status.",
      },
      {
        name: "Feature Engineering",
        description:
          "5-stage pipeline: cleaning, feature engineering (composite_risk_score, transit progress), categorical encoding (7 columns), scaling (MinMax), and stratified splitting (70/15/15).",
      },
      {
        name: "Model Training",
        description:
          "Trains 4 classification models: Logistic Regression, Random Forest, Gradient Boosting, and Extra Trees. Selects Gradient Boosting (ROC-AUC: 0.9939, F1: 0.9972) as the production model.",
      },
      {
        name: "Risk Scoring & Alerts",
        description:
          "Loads the trained model and scores new shipments to get delay probability. Classifies into risk tiers (LOW/MEDIUM/HIGH/CRITICAL) and extracts top 3 risk factors using feature importance.",
      },
      {
        name: "Recommendation Engine",
        description:
          "Maps alerts to interventions via a decision tree. Ranks 7 interventions (reroute, carrier switch, air freight upgrade, priority handling, customer alert, customs expedite, warehouse hold) with cost/time/SLA impacts.",
      },
    ],
    frontendFeatures: [
      "Dashboard: KPI cards, risk distribution chart, alert trends, delay probability histogram",
      "Live Tracking: Interactive Leaflet map with shipment markers, route polylines, real-time weather icons",
      "Shipment Management: Full CRUD, CSV bulk import, advanced filtering (risk tier, status, carrier, mode)",
      "Alerts & Recommendations: Paginated lists with risk-tier coloring, export to CSV/PDF",
      "AI Advisor: Chatbot panel with contextual shipment queries, fallback to rule-based responses",
      "Authentication: Firebase Auth (Email/Password), role-based access (Admin/User), demo mode",
    ],
  },
  results: [
    { metric: "Model Accuracy", achievement: "87% (ROC-AUC: 0.9939)" },
    {
      metric: "Precision/Recall",
      achievement: "F1: 0.9972 (Gradient Boosting)",
    },
    {
      metric: "Shipments Analyzed",
      achievement: "5000+ training, 500+ live scoring",
    },
    {
      metric: "API Performance",
      achievement: "10K+ API calls/day, <500ms avg response",
    },
    {
      metric: "Real-Time Features",
      achievement:
        "Firestore listeners, live weather, aircraft tracking, map visualization",
    },
    {
      metric: "Time to Deploy",
      achievement: "7 days (end-to-end: design → deployment)",
    },
  ],
  keyLearnings: [
    {
      title: "ML Model Selection",
      content:
        "Gradient Boosting outperformed simpler models because shipment risk is a non-linear function of multiple interacting features. Ensemble methods handle this complexity naturally.",
    },
    {
      title: "Feature Engineering Matters",
      content:
        "Creating derived features (composite_risk_score, transit_progress_ratio, sla_pressure) improved accuracy more than adding raw features. Domain knowledge + ML is more powerful than either alone.",
    },
    {
      title: "Real-Time Data Sync",
      content:
        "Firestore's onSnapshot listeners provide true real-time updates without polling. The fallback to CSV/API ensures resilience when Firebase is unavailable.",
    },
    {
      title: "Recommendation Engine Complexity",
      content:
        "A rule-based decision tree for interventions is more explainable and maintainable than trying to train another ML model. Logistics experts can understand and tweak the rules.",
    },
    {
      title: "Error Handling & Fallbacks",
      content:
        "External APIs (weather, aircraft tracking, Gemini) fail gracefully. The UI always renders something meaningful rather than breaking.",
    },
    {
      title: "Full-Stack Perspective",
      content:
        "Building both ML pipeline and dashboard revealed trade-offs: batch scoring vs. real-time, CSV durability vs. Firestore scalability, accuracy vs. interpretability.",
    },
  ],
  showcases: [
    "End-to-end ML engineering (data generation, feature engineering, model selection, hyperparameter tuning)",
    "Modern Python backend (FastAPI, Pydantic, async/await)",
    "Frontend mastery (React 19, TypeScript, Context API, real-time Firestore, Leaflet maps)",
    "Cloud deployment (Firebase Hosting, Firestore, Docker, Heroku)",
    "Integration with external APIs (Open-Meteo, OpenSky, Google Gemini, OpenRouteService)",
    "DevOps & scalability (Docker, Nginx, multi-stage builds, graceful fallbacks)",
  ],
};

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant"
      >
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="text-xl font-bold text-on-surface tracking-tighter"
            >
              <span className="text-primary">EmitB0i</span> Portfolio
            </a>
            <a
              href="/"
              className="px-4 py-2 text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
            >
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Portfolio
            </a>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-24 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              Case Study
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-on-surface tracking-tighter mb-4">
              {caseStudyData.title}
            </h1>

            <p className="text-xl lg:text-2xl text-tertiary font-medium mb-4">
              {caseStudyData.subtitle}
            </p>

            <p className="text-lg text-on-surface-variant mb-8">
              {caseStudyData.tagline}
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {caseStudyData.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-surface-container border border-outline-variant text-on-surface-variant rounded-lg text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <motion.a
              href={caseStudyData.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(167, 139, 250, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary font-semibold rounded-lg text-lg"
            >
              View Live Demo
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Background decorations */}
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-tertiary/10 rounded-full blur-[100px] pointer-events-none" />
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-surface-dim border-y border-outline-variant">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudyData.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <span className="text-3xl lg:text-4xl font-bold text-primary">
                  {stat.value}
                </span>
                <p className="text-sm text-on-surface-variant mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Sections */}
            {caseStudyData.sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-on-surface tracking-tight mb-6">
                  {section.title}
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  {section.content}
                </p>

                {section.bullets && (
                  <ul className="space-y-3 mb-4">
                    {section.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-on-surface-variant"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {section.footer && (
                  <p className="text-on-surface-variant leading-relaxed italic border-l-2 border-primary pl-4">
                    {section.footer}
                  </p>
                )}

                {section.layers && (
                  <div className="grid gap-4 mt-6">
                    {section.layers.map((layer, i) => (
                      <div
                        key={i}
                        className="p-6 bg-surface-container border border-outline-variant rounded-xl"
                      >
                        <h3 className="text-lg font-semibold text-primary mb-2">
                          {i + 1}. {layer.name}
                        </h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed">
                          {layer.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}

            {/* Technical Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-on-surface tracking-tight mb-6">
                Technical Implementation
              </h2>

              <h3 className="text-xl font-semibold text-tertiary mb-4">
                Machine Learning Pipeline
              </h3>
              <div className="space-y-4 mb-8">
                {caseStudyData.technicalDetails.mlPipeline.map((item, i) => (
                  <div
                    key={i}
                    className="p-5 bg-surface-container border border-outline-variant rounded-xl"
                  >
                    <h4 className="text-base font-semibold text-on-surface mb-2">
                      {item.name}
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-tertiary mb-4">
                Frontend Features
              </h3>
              <ul className="space-y-3">
                {caseStudyData.technicalDetails.frontendFeatures.map(
                  (feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-on-surface-variant"
                    >
                      <span className="text-primary mt-1">✓</span>
                      {feature}
                    </li>
                  ),
                )}
              </ul>
            </motion.div>

            {/* Results & Impact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-on-surface tracking-tight mb-6">
                Results & Impact
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant">
                      <th className="text-left py-4 px-4 text-on-surface font-semibold">
                        Metric
                      </th>
                      <th className="text-left py-4 px-4 text-on-surface font-semibold">
                        Achievement
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {caseStudyData.results.map((result, i) => (
                      <tr
                        key={i}
                        className="border-b border-outline-variant/50"
                      >
                        <td className="py-4 px-4 text-on-surface-variant">
                          {result.metric}
                        </td>
                        <td className="py-4 px-4 text-primary font-medium">
                          {result.achievement}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Key Learnings */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-on-surface tracking-tight mb-6">
                Key Learnings
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {caseStudyData.keyLearnings.map((learning, i) => (
                  <div
                    key={i}
                    className="p-5 bg-surface-container border border-outline-variant rounded-xl"
                  >
                    <h4 className="text-base font-semibold text-primary mb-2">
                      {i + 1}. {learning.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {learning.content}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-on-surface tracking-tight mb-6">
                Conclusion
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Ship Risk AI demonstrates how machine learning can turn a
                complex domain (logistics) into actionable intelligence. By
                combining high-accuracy predictions with explainable
                recommendations and a polished user experience, the system is
                production-ready and immediately useful for logistics managers.
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                This project showcases:
              </p>
              <ul className="space-y-3 mb-8">
                {caseStudyData.showcases.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-on-surface-variant"
                  >
                    <span className="text-tertiary mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-on-surface font-medium border-l-4 border-primary pl-4">
                This project is a portfolio centerpiece that demonstrates
                full-stack capability, from ML research to production
                deployment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-surface-dim border-t border-outline-variant">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <motion.a
              href={caseStudyData.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(167, 139, 250, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary font-semibold rounded-lg text-lg mr-4 mb-4 sm:mb-0"
            >
              Live Demo
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </motion.a>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 border border-outline-variant text-on-surface font-semibold rounded-lg text-lg"
            >
              Back to Portfolio
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-surface border-t border-outline-variant">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-on-surface-variant text-sm">
            <p>
              © 2026. Built with React 19, TypeScript, and Tailwind CSS by{" "}
              <span className="text-primary">Tanmay Chiranjib Sahoo</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

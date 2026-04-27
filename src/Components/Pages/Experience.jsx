import { motion } from "framer-motion";
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { SiReact, SiPhp, SiMongodb } from "react-icons/si";

const experiences = [
  {
    company: "UK International (UKIBS India Pvt. Ltd.)",
    role: "Full Stack Web Developer",
    period: "Sep 2024 — Present",
    location: "Noida, India",
    type: "Full-time",
    color: "from-indigo-500 to-purple-600",
    borderColor: "border-indigo-500",
    dotColor: "bg-indigo-500",
    techUsed: [
      { icon: <SiReact className="text-blue-400" size={14} />, name: "React" },
      { icon: <SiPhp className="text-indigo-400" size={14} />, name: "PHP" },
      { icon: <SiMongodb className="text-green-400" size={14} />, name: "MongoDB" },
    ],
    highlights: [
      {
        metric: "15+",
        label: "Domains Orchestrated",
        desc: "Architected and managed a portfolio of 15+ production domains including the company's primary React Lead-Gen Engine optimized for high-volume Google Ads traffic.",
      },
      {
        metric: "35%",
        label: "Lead Capture Increase",
        desc: "Integrated automated enquiry modules and sub-domain routing with seamless Edumarshal CRM synchronization, dramatically improving conversion rates.",
      },
      {
        metric: "10k+",
        label: "Monthly Active Users",
        desc: "Deployed high-availability solutions for 10,000+ monthly users, achieving 90+ Lighthouse performance scores through optimized caching and server-side logic.",
      },
    ],
    bullets: [
      "Built the company's primary Lead Engine in React handling 10,000+ monthly high-intent leads from Google Ads, scoring 90+ on Lighthouse performance audits",
      "Engineered an EdTech E-commerce Marketplace in PHP with Razorpay Payment Gateway, automated receipt generation via PHPMailer, and Interakt WhatsApp API integration",
      "Architected a scalable MERN SAAS (MyHireShield) with RBAC supporting 500+ active users, deployed on Ubuntu VPS via Nginx Reverse Proxy and PM2",
      "Implemented sub-domain routing for 5 branch locations (Noida, Patna, Lajpat Nagar, R.K. Puram, Rajouri Garden) with Firebase-powered GMB review collection",
      "Built secure internal portals: feedback management system (ukibs.in/improvement-feedback) and admin-gated resource hub (ukibs.in/courses-pdf) with JWT auth",
      "Achieved zero reported security breaches post-launch via JWT HTTP-only cookies, MongoDB sanitization, and rate-limiting across 15+ RESTful API endpoints",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-20 bg-gray-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99,102,241,0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(139,92,246,0.3) 0%, transparent 50%)`,
          }}
        />
        {/* Floating code symbols */}
        {["</>", "{ }", "=>", "[ ]", "npm", "git"].map((sym, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-700 font-mono text-sm select-none"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          >
            {sym}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
              <FaBriefcase size={18} />
            </div>
            <span className="text-sm font-medium text-indigo-400 uppercase tracking-widest">Career</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Work{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Experience
            </span>
          </h2>
          <div className="h-1 w-20 rounded-full" style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border ${exp.borderColor}/30 bg-gray-900/80 overflow-hidden`}
              style={{ backdropFilter: "blur(12px)" }}
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${exp.color}`} />

              <div className="p-8">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color}`}>
                        <FaBuilding size={14} className="text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{exp.company}</h3>
                    </div>
                    <p
                      className="text-lg font-semibold ml-11"
                      style={{
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {exp.role}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 md:items-end md:flex-col">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <FaCalendarAlt size={12} className="text-indigo-400" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <FaMapMarkerAlt size={12} className="text-indigo-400" />
                      {exp.location}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30 w-fit">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Impact metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {exp.highlights.map((h, i) => (
                    <motion.div
                      key={i}
                      className="rounded-xl p-4 bg-gray-800/60 border border-gray-700/50"
                      whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.5)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div
                        className="text-3xl font-black mb-1"
                        style={{
                          background: "linear-gradient(135deg, #6366f1, #a855f7)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {h.metric}
                      </div>
                      <div className="text-sm font-semibold text-white mb-1">{h.label}</div>
                      <div className="text-xs text-gray-500 leading-relaxed">{h.desc}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Bullet points */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      viewport={{ once: true }}
                    >
                      <span
                        className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
                      />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tech used */}
                <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-gray-800">
                  <span className="text-xs text-gray-600 uppercase tracking-widest mr-2">Stack:</span>
                  {exp.techUsed.map((t, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {t.icon} {t.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

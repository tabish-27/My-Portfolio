import { motion } from "framer-motion";
import { FaTrophy, FaGlobe, FaUsers, FaShieldAlt, FaRunning, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const achievements = [
  {
    icon: <SiLeetcode size={28} className="text-orange-400" />,
    metric: "300+",
    title: "LeetCode Problems",
    desc: "Solved 300+ problems across arrays, trees, graphs, DP, and more. Completed a 5-month intensive DSA course from CodeHelp.",
    link: "https://leetcode.com/u/Tabish_javed/",
    linkText: "View Profile",
    certLink: "https://drive.google.com/file/d/1vjU4U6zhj7CZ5vSxIv8owCjFL-AgdKpU/view?usp=sharing",
    certText: "View Certificate",
    color: "from-orange-500/20 to-yellow-500/10",
    border: "border-orange-500/30",
    iconBg: "bg-orange-500/10",
  },
  {
    icon: <FaGlobe size={28} className="text-indigo-400" />,
    metric: "15+",
    title: "Production Domains",
    desc: "Architected and manage 15+ live production domains at UKIBS, including branch sub-domains across 5 cities in India.",
    color: "from-indigo-500/20 to-purple-500/10",
    border: "border-indigo-500/30",
    iconBg: "bg-indigo-500/10",
  },
  {
    icon: <FaUsers size={28} className="text-green-400" />,
    metric: "10k+",
    title: "Monthly Active Users",
    desc: "Deployed high-availability production systems serving over 10,000 monthly users with 90+ Lighthouse performance scores.",
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/30",
    iconBg: "bg-green-500/10",
  },
  {
    icon: <FaShieldAlt size={28} className="text-blue-400" />,
    metric: "Zero",
    title: "Security Breaches",
    desc: "Engineered secure auth with JWT HTTP-only cookies, MongoDB sanitization, and rate-limiting — zero breaches post-launch on MyHireShield.",
    link: "https://myhireshield.com/",
    linkText: "View Platform",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: <FaRunning size={28} className="text-red-400" />,
    metric: "State 🥋",
    title: "Kabaddi Champion (U-19)",
    desc: "State-level Kabaddi Champion representing Allahabad Zone in the 2020 U-19 championships — discipline that translates to engineering excellence.",
    color: "from-red-500/20 to-pink-500/10",
    border: "border-red-500/30",
    iconBg: "bg-red-500/10",
  },
  {
    icon: <FaCode size={28} className="text-purple-400" />,
    metric: "100+",
    title: "Monthly Transactions",
    desc: "EdTech e-commerce marketplace processing 100+ monthly payment transactions via Razorpay with automated receipts and WhatsApp notifications.",
    color: "from-purple-500/20 to-violet-500/10",
    border: "border-purple-500/30",
    iconBg: "bg-purple-500/10",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(99,102,241,0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(139,92,246,0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-indigo-500" />
            <span className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Impact</span>
            <div className="h-px w-8 bg-indigo-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="text-2xl">🏆</span>{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Achievements
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Numbers that reflect real impact — on users, on businesses, and on myself.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl p-6 border ${item.border} overflow-hidden group`}
              style={{ background: `linear-gradient(135deg, ${item.color.replace("from-", "").replace(" to-", ", ")})` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              {/* Subtle top border glow */}
              <div
                className="absolute top-0 left-0 h-0.5 w-full opacity-60"
                style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.8), transparent)" }}
              />

              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl ${item.iconBg} mb-4`}>
                {item.icon}
              </div>

              {/* Metric */}
              <div
                className="text-4xl font-black mb-1"
                style={{
                  background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.8))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {item.metric}
              </div>

              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{item.desc}</p>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    → {item.linkText}
                  </a>
                )}
                {item.certLink && (
                  <a
                    href={item.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
                  >
                    📄 {item.certText}
                  </a>
                )}
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.05), rgba(139,92,246,0.05))" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

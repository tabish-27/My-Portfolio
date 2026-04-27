import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPhp, FaAws } from "react-icons/fa";
import { SiMongodb, SiLeetcode, SiJavascript, SiTypescript, SiRedis } from "react-icons/si";
import { FiGlobe } from "react-icons/fi";

const About = () => {
  const techBadges = [
    { icon: <SiJavascript className="text-yellow-400 text-xl" />, text: "JavaScript" },
    { icon: <FaReact className="text-blue-400 text-xl" />, text: "React" },
    { icon: <FaNodeJs className="text-green-400 text-xl" />, text: "Node.js" },
    { icon: <SiMongodb className="text-green-500 text-xl" />, text: "MongoDB" },
    { icon: <FaPhp className="text-indigo-400 text-xl" />, text: "PHP" },
    { icon: <FaAws className="text-orange-400 text-xl" />, text: "AWS" },
    { icon: <SiTypescript className="text-blue-500 text-xl" />, text: "TypeScript" },
    { icon: <SiRedis className="text-red-400 text-xl" />, text: "Redis" },
    { icon: <SiLeetcode className="text-orange-400 text-xl" />, text: "LeetCode" },
  ];

  const stats = [
    { value: "15+", label: "Production Domains" },
    { value: "10k+", label: "Monthly Users" },
    { value: "300+", label: "LeetCode Solved" },
    { value: "0", label: "Security Breaches" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gray-900 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-indigo-600/10 blur-xl"
          animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-20 w-32 h-32 rounded-full bg-purple-600/10 blur-xl"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side — heading + badges */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-8 bg-indigo-500" />
              <span className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Who I Am</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              About{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Me
              </span>
            </h2>
            <div
              className="h-1 w-16 rounded-full mb-8"
              style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }}
            />

            {/* Tech badges */}
            <div className="flex flex-wrap gap-3">
              {techBadges.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 px-3.5 py-2 bg-gray-800 rounded-xl shadow border border-gray-700 hover:border-indigo-500/50 transition-colors duration-200 cursor-default"
                >
                  {item.icon}
                  <span className="text-sm font-medium text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <div
                    className="text-2xl font-black mb-1"
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #a855f7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side — paragraphs */}
          <motion.div
            className="lg:w-3/5 space-y-6 text-gray-400"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed">
              <span className="text-2xl font-bold text-white">Hey there! 👋</span>{" "}
              I'm <span className="text-indigo-400 font-semibold">Tabish Javed</span> — a full-stack developer
              who doesn't just write code, but ships systems people actually use every day.
            </p>

            <p className="text-base leading-relaxed">
              As a{" "}
              <span className="font-semibold text-indigo-400">Full Stack Web Developer at UK International (UKIBS India Pvt. Ltd.)</span>,
              I architect production-grade solutions that serve{" "}
              <span className="text-white font-semibold">10,000+ monthly users</span> — from React lead-gen
              engines optimized for Google Ads, to MERN SAAS platforms and PHP e-commerce marketplaces with
              payment gateway integrations.
            </p>

            {/* Production work highlight card */}
            <motion.div
              className="relative rounded-2xl p-6 border border-indigo-500/20 overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.05))" }}
              whileHover={{ y: -3 }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/20 mt-0.5">
                  <FiGlobe className="text-indigo-400" size={16} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">What I've shipped in production</h4>
                  <ul className="space-y-1.5 text-sm">
                    {[
                      "15+ live domains including branch sub-domains for 5 city locations",
                      "MyHireShield — MERN SAAS with RBAC, 500+ users, deployed on Ubuntu VPS + Nginx",
                      "EdTech e-commerce with Razorpay, WhatsApp API, 100+ monthly transactions",
                      "Firebase-powered GMB review portals for each branch location",
                      "Secure admin portals with JWT auth for internal resources and feedback management",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <span className="text-indigo-400 mt-1 flex-shrink-0">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <p className="text-base leading-relaxed">
              Beyond work, I sharpen my problem-solving skills — I've solved{" "}
              <span className="text-white font-semibold">300+ problems on LeetCode</span> and completed
              an intensive 5-month DSA course from CodeHelp. I'm a{" "}
              <span className="text-white font-semibold">State-level Kabaddi Champion (U-19)</span>, which
              taught me the discipline and teamwork I apply to engineering every day.
            </p>

            <p className="text-base leading-relaxed">
              My core stack spans{" "}
              <span className="text-white font-medium">React, Node.js, Express, MongoDB, PHP</span>,
              with production experience on{" "}
              <span className="text-white font-medium">AWS (S3/EC2), VPS hosting (Ubuntu + Nginx + PM2)</span>,
              and CI/CD via GitHub Actions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
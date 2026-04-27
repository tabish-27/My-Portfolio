import { motion } from "framer-motion";
import { FaGraduationCap, FaBook, FaExternalLinkAlt } from "react-icons/fa";

const Education = () => {
  const degrees = [
    {
      institution: "Dr. Ram Manohar Lohia Avadh University, Faizabad, U.P.",
      degree: "Bachelor of Technology — Computer Science & Engineering",
      period: "Nov 2021 – May 2025",
      icon: <FaGraduationCap size={18} />,
      color: "from-indigo-500 to-purple-600",
      borderColor: "border-indigo-500",
      courses: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management",
        "Object Oriented Programming",
        "Computer Networking",
        "Software Engineering",
      ],
    },
    {
      institution: "Dev Prayag School Phaphamau, Prayagraj, U.P.",
      degree: "Class XII — ICSE Board",
      period: "Apr 2019 – Mar 2020",
      icon: <FaGraduationCap size={18} />,
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500",
      courses: [],
    },
  ];

  const certifications = [
    {
      title: "DSA Course — CodeHelp (5 Months Intensive)",
      description: "Completed an intensive 5-month Data Structures & Algorithms course. Solved 300+ problems on LeetCode.",
      link: "https://drive.google.com/file/d/1vjU4U6zhj7CZ5vSxIv8owCjFL-AgdKpU/view?usp=sharing",
      badge: "300+ Problems",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-20 bg-gray-900 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-indigo-600/10 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
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
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-indigo-500" />
            <span className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Education
            </span>
          </h2>
          <div
            className="h-1 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left — Degrees */}
          <div className="space-y-6">
            {degrees.map((edu, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl p-6 bg-gray-900/80 border ${edu.borderColor}/30 relative overflow-hidden`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${edu.color}`} />

                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-r ${edu.color} text-white flex-shrink-0`}>
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">{edu.institution}</h3>
                    <p
                      className="text-sm font-semibold mt-1"
                      style={{
                        background: `linear-gradient(135deg, #6366f1, #8b5cf6)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {edu.degree}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{edu.period}</p>
                  </div>
                </div>

                {/* Courses */}
                {edu.courses.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FaBook size={12} className="text-indigo-400" />
                      <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">Key Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, ci) => (
                        <motion.span
                          key={ci}
                          className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-lg border border-gray-700"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ y: -2, borderColor: "rgba(99,102,241,0.5)", color: "#a5b4fc" }}
                          transition={{ delay: ci * 0.06 }}
                          viewport={{ once: true }}
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right — Certifications & Achievements panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <span className="text-indigo-400">🏅</span> Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, ci) => (
                <motion.div
                  key={ci}
                  className="rounded-2xl p-5 bg-gray-900/80 border border-gray-800 hover:border-indigo-500/40 transition-all duration-200 relative overflow-hidden"
                  whileHover={{ y: -4 }}
                >
                  <div
                    className="absolute top-0 left-0 h-1 w-full"
                    style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }}
                  />
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{cert.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed mb-3">{cert.description}</p>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <FaExternalLinkAlt size={10} /> View Certificate
                      </a>
                    </div>
                    <span
                      className="px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff" }}
                    >
                      {cert.badge}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fun fact / quote panel */}
            <motion.div
              className="mt-6 rounded-2xl p-5 border border-indigo-500/20 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.05))" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div
                className="absolute top-0 left-0 h-0.5 w-full"
                style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }}
              />
              <p className="text-sm text-gray-400 leading-relaxed italic">
                "From B.Tech Computer Science to building live products for 10,000+ users — every concept
                learned in university became a foundation for real-world engineering."
              </p>
              <p className="text-xs text-indigo-400 mt-3 font-medium">— Tabish Javed</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;

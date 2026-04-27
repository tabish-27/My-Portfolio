import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaTools, FaLaptopCode, FaCloud } from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming",
    icon: <FaCode className="text-xl" />,
    skills: ["C++", "JavaScript (ES6+)", "TypeScript", "PHP", "SQL"],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Frontend",
    icon: <FaLaptopCode className="text-xl" />,
    skills: ["React.js (Vite)", "Redux Toolkit", "Tailwind CSS", "Material-UI", "HTML5", "CSS3", "Next.js"],
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Backend",
    icon: <FaServer className="text-xl" />,
    skills: ["Node.js (MERN)", "Express.js", "PHP (MVC)", "RESTful APIs", "Socket.io", "JWT", "Razorpay SDK", "PHPMailer", "Rate Limiting", "Postman"],
    color: "from-green-500 to-green-600",
  },
  {
    title: "Databases",
    icon: <FaDatabase className="text-xl" />,
    skills: ["MongoDB (Mongoose)", "MySQL", "PostgreSQL", "Redis", "Firebase"],
    color: "from-yellow-500 to-yellow-600",
  },
  {
    title: "DevOps & Cloud",
    icon: <FaCloud className="text-xl" />,
    skills: ["VPS Hosting (Ubuntu)", "AWS (S3/EC2)", "Nginx", "PM2", "CI/CD (GitHub Actions)", "Git & GitHub"],
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Tools & Platforms",
    icon: <FaTools className="text-xl" />,
    skills: ["VS Code", "Vercel", "Netlify", "Figma", "Postman", "Firebase Console", "Edumarshal CRM"],
    color: "from-indigo-500 to-indigo-600",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-700 opacity-20 font-mono select-none"
            style={{
              fontSize: `${Math.random() * 40 + 16}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 40],
              x: [0, (Math.random() - 0.5) * 40],
              rotate: [0, (Math.random() - 0.5) * 30],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {["</>", "{ }", "/* */", "=>", "() =>", "[]", "{}", "npm", "git", "API", "VPS", "SSH", "JWT", "SQL"][i % 14]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-indigo-500" />
            <span className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Technical{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Skills
            </span>
          </h2>
          <div
            className="h-1 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }}
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-6 bg-gray-900 border border-gray-800 hover:border-indigo-500/40 transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.04))`,
                }}
              />

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-gray-800 rounded-lg text-xs font-medium text-gray-300 border border-gray-700 cursor-default"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "rgba(99, 102, 241, 0.15)",
                      borderColor: "rgba(99, 102, 241, 0.5)",
                      color: "#a5b4fc",
                    }}
                    transition={{ delay: skillIndex * 0.025 + 0.1, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
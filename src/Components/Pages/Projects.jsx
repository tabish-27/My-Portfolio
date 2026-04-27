import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaBriefcase, FaCode } from "react-icons/fa";
import projects from "../Data/data.js";

const FILTERS = [
  { key: "all", label: "All Projects", icon: <FaCode size={14} /> },
  { key: "professional", label: "Professional", icon: <FaBriefcase size={14} /> },
  { key: "personal", label: "Personal", icon: <FaCode size={14} /> },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects.allProject
      : projects.allProject.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-20 bg-gray-900 overflow-hidden"
    >
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,100 Q250,50 500,150 T1000,100"
            stroke="url(#grad1)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10 5"
            animate={{ strokeDashoffset: [0, 100] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-indigo-500/20"
            style={{
              width: `${40 + i * 15}px`,
              height: `${40 + i * 15}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, (i % 2 === 0 ? -1 : 1) * 30],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-indigo-500" />
            <span className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Portfolio</span>
            <div className="h-px w-8 bg-indigo-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            My{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Production systems and personal projects — from SAAS platforms to AI tools.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex justify-center gap-3 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                activeFilter === filter.key
                  ? "text-white border-indigo-500"
                  : "text-gray-400 border-gray-700 hover:border-indigo-500/50 hover:text-gray-300"
              }`}
              style={
                activeFilter === filter.key
                  ? { background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }
                  : {}
              }
            >
              {filter.icon}
              {filter.label}
              {filter.key !== "all" && (
                <span className="text-xs opacity-70">
                  ({projects.allProject.filter((p) => p.category === filter.key).length})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Project Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                {/* Card */}
                <div className="h-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 group-hover:border-indigo-500/40 transition-all duration-300 shadow-xl">
                  {/* Image */}
                  <div className="h-48 overflow-hidden relative bg-gray-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.style.background =
                          "linear-gradient(135deg, #1e1b4b, #312e81)";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

                    {/* Category + Status badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {project.category === "professional" && (
                        <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-600/90 text-white">
                          <FaBriefcase size={10} />
                          Professional
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-green-500/90 text-white">
                        LIVE
                      </span>
                    </div>

                    {/* Type label */}
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-900/80 text-gray-300 border border-gray-700">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Period */}
                    {project.period && (
                      <p className="text-xs text-indigo-400 font-medium mb-1">{project.period}</p>
                    )}

                    <h3 className="text-base font-bold text-white mb-2 leading-tight">
                      {project.title.split("|")[0].trim()}
                      {project.title.includes("|") && (
                        <span
                          style={{
                            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          {" "}| {project.title.split("|")[1].trim()}
                        </span>
                      )}
                    </h3>

                    <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.teckstack.slice(0, 5).map((tech, ti) => (
                        <span
                          key={ti}
                          className="px-2 py-0.5 text-xs font-medium bg-gray-800 text-gray-400 rounded-md border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.teckstack.length > 5 && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-gray-800 text-indigo-400 rounded-md border border-gray-700">
                          +{project.teckstack.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4 border-t border-gray-800">
                      {project.category === "personal" && (
                        <a
                          href={project.sourcecode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          <FiGithub size={14} /> Source Code
                        </a>
                      )}
                      {project.livelink && (
                        <a
                          href={project.livelink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-200 ml-auto"
                        >
                          <FiExternalLink size={14} /> Live Site
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
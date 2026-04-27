import { useEffect, useRef, useState } from "react";
import profilePic from "../../assets/profile pic.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaPhp, FaAws, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiNginx } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const techStack = [
  { icon: <FaReact className="text-blue-400" size={26} />, name: "React" },
  { icon: <FaNodeJs className="text-green-400" size={26} />, name: "Node.js" },
  { icon: <FaJs className="text-yellow-400" size={26} />, name: "JavaScript" },
  { icon: <SiMongodb className="text-green-500" size={26} />, name: "MongoDB" },
  { icon: <SiExpress className="text-gray-300" size={26} />, name: "Express" },
  { icon: <SiTailwindcss className="text-cyan-400" size={26} />, name: "Tailwind" },
  { icon: <FaPhp className="text-indigo-400" size={26} />, name: "PHP" },
  { icon: <FaAws className="text-orange-400" size={26} />, name: "AWS" },
  { icon: <SiTypescript className="text-blue-500" size={26} />, name: "TypeScript" },
  { icon: <SiNginx className="text-green-600" size={26} />, name: "Nginx" },
];

const Home = () => {
  const imageRef = useRef(null);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  useEffect(() => {
    const animateImage = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${Math.sin(Date.now() / 900) * 8}px)`;
        requestAnimationFrame(animateImage);
      }
    };
    const animationId = requestAnimationFrame(animateImage);

    const techInterval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % techStack.length);
    }, 1800);

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(techInterval);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950"
    >
      {/* Animated dark background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glowing orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-3xl" />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 px-6 sm:px-12 lg:px-24 z-10">
        {/* Left — Text content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-indigo-500/40 bg-indigo-500/10 text-indigo-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Currently @ UK International (UKIBS India Pvt. Ltd.)
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight leading-none">
            Tabish{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Javed
            </span>
          </h1>

          {/* Animated role + tech icon */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
              Full Stack Web Developer
            </h2>
            <AnimatePresence mode="wait">
              <motion.span
                key={techStack[currentTechIndex].name}
                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 15 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 shadow-lg"
                title={techStack[currentTechIndex].name}
              >
                {techStack[currentTechIndex].icon}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Building production-grade web applications serving{" "}
            <span className="text-indigo-400 font-semibold">10,000+ monthly users</span>. Architect of{" "}
            <span className="text-indigo-400 font-semibold">15+ domains</span>, MERN SAAS platforms, and
            EdTech marketplaces — with a focus on performance, security, and scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <motion.a
              href="https://drive.google.com/file/d/1dOC2qHA43Kg7rvd9Liw0EvjZpFuNCCv4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-xl font-semibold text-white shadow-lg flex items-center gap-2 text-sm"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Resume
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-xl font-semibold text-gray-300 border border-gray-600 hover:border-indigo-500 hover:text-white transition-colors duration-200 flex items-center gap-2 text-sm"
            >
              <FiExternalLink size={16} />
              View Projects
            </motion.a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <span className="text-xs text-gray-600 uppercase tracking-widest">Connect</span>
            <div className="h-px w-6 bg-gray-700" />
            <div className="flex gap-3">
              {[
                { href: "https://github.com/tabish-27", icon: <FaGithub size={18} />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/tabish-javed/", icon: <FaLinkedin size={18} />, label: "LinkedIn" },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-700 transition-colors duration-200"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — Profile Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Outer glow ring */}
            <motion.div
              className="absolute -inset-4 rounded-full"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(139,92,246,0.4))" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            {/* Pulsing ring */}
            <motion.div
              className="absolute -inset-2 rounded-full border-2 border-indigo-500/50"
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Profile image */}
            <div
              ref={imageRef}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl"
            >
              <img
                src={profilePic}
                alt="Tabish Javed — Full Stack Web Developer"
                className="w-full h-full object-cover scale-110"
                style={{ objectPosition: "center top" }}
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-900/20" />
            </div>

            {/* Floating stat badges */}
            <motion.div
              className="absolute -bottom-4 -left-8 px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 shadow-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ y: -3 }}
            >
              <div className="text-lg font-bold text-indigo-400">15+</div>
              <div className="text-xs text-gray-400">Domains</div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-8 px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 shadow-xl text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ y: -3 }}
            >
              <div className="text-lg font-bold text-green-400">10k+</div>
              <div className="text-xs text-gray-400">Monthly Users</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

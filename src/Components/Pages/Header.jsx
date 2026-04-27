import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import profilePic from "../../assets/profile pic.jpg";

const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "achievements", title: "Achievements" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Track active section
      const sections = navLinks.map((l) => document.getElementById(l.id));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full z-50 overflow-hidden">
        {/* Blur backdrop when scrolled */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isScrolled
              ? "backdrop-blur-xl bg-gray-950/80 shadow-lg shadow-black/20 border-b border-gray-800/50"
              : "bg-transparent"
          }`}
        />

        <div className="relative max-w-screen-xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          {/* Logo — TJ monogram */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 select-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-indigo-500/60 shadow-lg shadow-indigo-500/20 flex-shrink-0">
              <img
                src={profilePic}
                alt="Tabish Javed"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex items-center rounded-2xl px-2 py-1.5 gap-1 transition-all duration-300 ${
              isScrolled
                ? "bg-gray-800/60 border border-gray-700/50"
                : "border border-transparent"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.2))", border: "1px solid rgba(99,102,241,0.3)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link.title}</span>
              </a>
            ))}
          </nav>

          {/* CTA — Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="mailto:tabishjaved2030@gmail.com"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="px-5 py-2 rounded-xl text-sm font-semibold text-white border border-indigo-500/50 hover:border-indigo-400 transition-colors duration-200"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.15))" }}
            >
              Contact Me
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX size={22} className="transition-transform duration-300" />
            ) : (
              <BiMenuAltRight size={26} className="transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-16 right-4 left-4 mx-auto rounded-2xl shadow-2xl p-4 border border-gray-700"
              style={{ background: "rgba(15, 15, 30, 0.97)", backdropFilter: "blur(20px)" }}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`py-3 px-4 text-sm font-medium rounded-xl transition-all duration-200 ${
                      activeSection === link.id
                        ? "text-white bg-indigo-500/20 border border-indigo-500/30"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                ))}
                <div className="mt-2 pt-2 border-t border-gray-800">
                  <a
                    href="mailto:tabishjaved2030@gmail.com"
                    className="block py-3 px-4 text-sm font-semibold text-white rounded-xl text-center"
                    style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Me
                  </a>
                </div>
              </nav>
            </motion.div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
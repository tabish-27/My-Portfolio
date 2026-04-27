import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

// Track real page visits using localStorage
const getVisitCount = () => {
  const count = parseInt(localStorage.getItem("portfolio_visit_count") || "0", 10);
  const newCount = count + 1;
  localStorage.setItem("portfolio_visit_count", String(newCount));
  return newCount;
};

const Footer = () => {
  const year = new Date().getFullYear();
  const [visitCount] = useState(() => getVisitCount());

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-gray-950 text-gray-300 pt-10 pb-6 relative flex flex-col items-center border-t border-gray-800">
      {/* Social Links */}
      <div className="flex flex-col items-center gap-4 mb-6">
        <p className="text-sm text-gray-500 uppercase tracking-widest">Connect with me</p>
        <div className="flex gap-3">
          {[
            { href: "https://www.linkedin.com/in/tabish-javed/", icon: <FaLinkedin size={18} />, label: "LinkedIn", color: "hover:bg-blue-600/30 hover:border-blue-500/50" },
            { href: "https://github.com/tabish-27", icon: <FaGithub size={18} />, label: "GitHub", color: "hover:bg-gray-600/30 hover:border-gray-500/50" },
            { href: "mailto:tabishjaved2030@gmail.com", icon: <FaEnvelope size={18} />, label: "Email", color: "hover:bg-red-600/30 hover:border-red-500/50" },
            { href: "https://leetcode.com/u/Tabish_javed/", icon: <SiLeetcode size={18} />, label: "LeetCode", color: "hover:bg-orange-600/30 hover:border-orange-500/50" },
            { href: "https://x.com/TabishJaved27", icon: <FaXTwitter size={18} />, label: "X / Twitter", color: "hover:bg-gray-600/30 hover:border-gray-500/50" },
          ].map(({ href, icon, label, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              title={label}
              className={`p-2.5 bg-gray-800 border border-gray-700 rounded-xl transition-all duration-200 ${color}`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <hr className="border-gray-800 w-4/5 mb-6" />

      {/* Visit counter */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs text-gray-600">👁️ You are visitor</span>
        <span
          className="px-3 py-0.5 rounded-full text-xs font-bold"
          style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff" }}
        >
          #{visitCount.toLocaleString()}
        </span>
        <span className="text-xs text-gray-600">to this portfolio</span>
      </div>

      {/* Footer Text */}
      <p className="text-xs text-gray-600 text-center">
        © {year} Tabish Javed · Crafted with 💜 · All rights reserved.
      </p>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-xl shadow-lg transition-all duration-200 hover:scale-110"
        style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={18} className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;

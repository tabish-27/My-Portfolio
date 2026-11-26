import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiCode,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiX,
} from 'react-icons/fi'
import { FaBriefcase, FaCode, FaGlobe, FaUsers, FaShieldAlt } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import projects from '../Data/data.js'
import RiveVisual from './RiveVisual.jsx'

gsap.registerPlugin(ScrollTrigger)

const OrbitalScene = lazy(() => import('./OrbitalScene.jsx'))

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const skills = [
  'React',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
  'PHP',
  'AWS',
  'Nginx',
  'Redis',
  'PostgreSQL',
  'Tailwind CSS',
  'GitHub Actions',
]

const impact = [
  { icon: <FiCode />, value: '15+', label: 'production domains' },
  { icon: <FaUsers />, value: '10k+', label: 'monthly users reached' },
  { icon: <SiLeetcode />, value: '300+', label: 'problems solved' },
  { icon: <FaShieldAlt />, value: '0', label: 'reported breaches' },
]

const filterOptions = [
  { key: 'all', label: 'Selected work', icon: <FaCode /> },
  { key: 'professional', label: 'Professional', icon: <FaBriefcase /> },
  { key: 'personal', label: 'Personal', icon: <FiCode /> },
]

const experienceHighlights = [
  'Built a React lead-generation engine handling 10,000+ monthly high-intent visits, with a 90+ Lighthouse performance score.',
  'Shipped a PHP EdTech marketplace with Razorpay payments, automated receipts, and WhatsApp notifications.',
  'Architected MyHireShield, a MERN SaaS platform with role-based access, supporting 500+ active users.',
  'Delivered production systems across 15+ domains, including five location-specific branch experiences.',
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    if (!('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) setActiveSection(visibleEntry.target.id)
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <Motion.a
        className="brand-mark"
        href="#home"
        aria-label="Tabish Javed, back to top"
        whileHover={{ y: -2 }}
        onClick={closeMenu}
      >
        <span className="brand-monogram">TJ</span>
        <span className="brand-copy">
          Tabish Javed
          <small>Full-stack developer</small>
        </span>
      </Motion.a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a
            key={link.id}
            className={`nav-link${activeSection === link.id ? ' is-active' : ''}`}
            href={`#${link.id}`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <Motion.a
        className="header-cta"
        href="mailto:tabishjaved2030@gmail.com"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        Let&apos;s talk <FiArrowUpRight />
      </Motion.a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <FiX size={19} /> : <FiMenu size={19} />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <Motion.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                className={`nav-link${activeSection === link.id ? ' is-active' : ''}`}
                href={`#${link.id}`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </Motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function SectionHeading({ eyebrow, title, description, children }) {
  return (
    <div className="section-heading" data-reveal>
      <div>
        <span className="section-kicker"><span className="eyebrow-dot" />{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
      {children}
    </div>
  )
}

function Hero() {
  return (
    <section className="hero page-section" id="home">
      <div className="hero-copy">
        <Motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <span className="eyebrow-dot" />
          Available for select opportunities
        </Motion.div>

        <Motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Tabish
          <span className="hero-name-accent">Javed.</span>
        </Motion.h1>

        <Motion.p
          className="hero-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.42 }}
        >
          I build digital products that feel as good as they work.
        </Motion.p>
        <Motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.52 }}
        >
          Full-stack developer turning complex ideas into useful, high-performance experiences.
          From first sketch to production, I care about every detail in between.
        </Motion.p>

        <Motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.62 }}
        >
          <Motion.a
            className="button-primary"
            href="#projects"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore my work <FiArrowUpRight />
          </Motion.a>
          <Motion.a
            className="button-secondary"
            href="https://drive.google.com/file/d/1dOC2qHA43Kg7rvd9Liw0EvjZpFuNCCv4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            View resume <FiExternalLink />
          </Motion.a>
        </Motion.div>

        <div className="hero-socials">
          <span>Find me on</span>
          <span className="hero-social-divider" />
          <a href="https://www.linkedin.com/in/tabish-javed/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/tabish-27" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://leetcode.com/u/Tabish_javed/" target="_blank" rel="noreferrer">LeetCode</a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Interactive 3D artwork">
        <div className="scene-coordinate">01 / 03 &nbsp; — &nbsp; IN ORBIT</div>
        <div className="scene-frame">
          <Suspense fallback={<div className="rive-fallback">Preparing the 3D scene…</div>}>
            <OrbitalScene />
          </Suspense>
        </div>
        <div className="scene-badge">
          <span className="scene-badge-mark"><FiCode size={17} /></span>
          <span><strong>Design-minded engineer</strong><small>Based in Noida, India</small></span>
        </div>
        <div className="scene-label"><span>R3F</span> / made to move</div>
      </div>

      <div className="hero-bottomline">
        <span>Independent thinker · Collaborative builder</span>
        <a href="#about">Scroll to explore <FiArrowDown size={13} /></a>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="page-section" id="about">
      <SectionHeading
        eyebrow="A little about me"
        title={<>Thoughtful code.<br />Real-world impact.</>}
        description="I like the space where engineering, product thinking, and good design meet."
      />

      <div className="about-grid">
        <article className="surface-card about-copy" data-reveal>
          <h3>Hey, I&apos;m Tabish — a <span>builder at heart.</span></h3>
          <p>
            I&apos;m a Full Stack Web Developer at UK International, where I build and maintain
            production web products used by real people. I enjoy owning the whole journey:
            understanding the problem, shaping the experience, and making the system reliable
            after launch.
          </p>
          <p>
            My work spans MERN SaaS platforms, React lead-generation products, and PHP
            e-commerce. I care about performance, accessible interfaces, secure defaults,
            and the tiny details that make a product feel considered.
          </p>
          <div className="skills-list" aria-label="Core technologies" style={{ marginTop: 24 }}>
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}><span />{skill}</span>
            ))}
          </div>
        </article>

        <div className="about-facts">
          {[
            { value: '2+', label: 'years shipping production software' },
            { value: '15+', label: 'live domains delivered' },
            { value: '10k+', label: 'monthly users reached' },
            { value: '90+', label: 'Lighthouse performance score' },
          ].map((fact) => (
            <Motion.article
              className="surface-card fact-card"
              key={fact.label}
              data-reveal
              whileHover={{ y: -4, borderColor: 'rgba(216, 252, 99, 0.35)' }}
            >
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </Motion.article>
          ))}
          <article className="surface-card rive-card" data-reveal>
            <div className="rive-copy">
              <small>Motion / Rive</small>
              <h3>Small details, big feeling.</h3>
              <p>Interactive motion can make a digital product feel a little more human.</p>
            </div>
            <RiveVisual />
          </article>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="page-section" id="experience">
      <SectionHeading
        eyebrow="The journey so far"
        title={<>Built in the<br />real world.</>}
        description="A snapshot of the systems and experiences I have shipped with my team."
      />

      <article className="surface-card experience-card" data-reveal>
        <div className="experience-meta">
          <small>Sep 2024 — Present</small>
          <strong>UK International</strong>
          <span>UKIBS India Pvt. Ltd.</span>
          <span className="experience-location"><FiMapPin /> Noida, India</span>
        </div>
        <div className="experience-details">
          <h3>Full Stack Web Developer</h3>
          <span className="experience-location">Full-time · Product engineering</span>
          <ul>
            {experienceHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        </div>
      </article>
    </section>
  )
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const filteredProjects = activeFilter === 'all'
    ? projects.allProject
    : projects.allProject.filter((project) => project.category === activeFilter)

  return (
    <section className="page-section" id="projects">
      <SectionHeading
        eyebrow="Selected work"
        title={<>A few things<br />I&apos;ve put into the world.</>}
        description="A mix of production platforms and side projects. Each one started with a real problem to solve."
      >
        <div className="project-controls" role="group" aria-label="Filter projects">
          {filterOptions.map((option) => (
            <Motion.button
              className={`filter-button${activeFilter === option.key ? ' is-active' : ''}`}
              key={option.key}
              type="button"
              aria-pressed={activeFilter === option.key}
              onClick={() => setActiveFilter(option.key)}
              whileTap={{ scale: 0.96 }}
            >
              {option.icon}
              {option.label}
            </Motion.button>
          ))}
        </div>
      </SectionHeading>

      <AnimatePresence mode="wait">
        <Motion.div
          className="project-grid"
          key={activeFilter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
        >
          {filteredProjects.map((project, index) => (
            <Motion.article
              className="surface-card project-card"
              key={project.title}
              data-reveal
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.055 }}
              whileHover={{ y: -5 }}
            >
              <div className="project-image-wrap">
                <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
                <span className="project-type">{project.type}</span>
                <span className="project-status">Live</span>
              </div>
              <div className="project-info">
                <div className="project-info-top">
                  <div>
                    <h3>{project.title.split('|')[0].trim()}</h3>
                    {project.period && <span className="project-period">{project.period}</span>}
                  </div>
                  <FiArrowUpRight className="project-arrow" size={18} />
                </div>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.teckstack.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}
                  {project.teckstack.length > 5 && <span>+{project.teckstack.length - 5}</span>}
                </div>
                <div className="project-links">
                  {project.category === 'personal' ? (
                    <a href={project.sourcecode} target="_blank" rel="noreferrer"><FiGithub /> Source code</a>
                  ) : (
                    <span className="project-period">{project.category} project</span>
                  )}
                  {project.livelink && (
                    <a href={project.livelink} target="_blank" rel="noreferrer">Visit live <FiExternalLink /></a>
                  )}
                </div>
              </div>
            </Motion.article>
          ))}
        </Motion.div>
      </AnimatePresence>
    </section>
  )
}

function Impact() {
  return (
    <section className="page-section" aria-labelledby="impact-title">
      <SectionHeading
        eyebrow="A few numbers"
        title={<span id="impact-title">Work that moves the needle.</span>}
        description="Outcomes matter more than lines of code. Here are a few signals from the work."
      />
      <div className="impact-grid">
        {impact.map((item) => (
          <Motion.article
            className="surface-card impact-card"
            key={item.label}
            data-reveal
            whileHover={{ y: -4 }}
          >
            {item.icon}
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </Motion.article>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="page-section" id="education">
      <SectionHeading
        eyebrow="Foundations"
        title="Learning never ships alone."
        description="A strong engineering foundation, with curiosity that keeps going beyond the syllabus."
      />
      <div className="education-grid">
        <div data-reveal>
          <article className="surface-card education-card">
            <h3>B.Tech, Computer Science &amp; Engineering</h3>
            <p>Dr. Ram Manohar Lohia Avadh University, Faizabad, Uttar Pradesh</p>
            <small>November 2021 — May 2025</small>
          </article>
          <article className="surface-card education-card">
            <h3>Class XII · ICSE</h3>
            <p>Dev Prayag School, Phaphamau, Prayagraj</p>
            <small>April 2019 — March 2020</small>
          </article>
        </div>
        <article className="surface-card cert-card" data-reveal>
          <div>
            <span className="section-kicker"><FaGlobe /> Keep learning</span>
            <h3 style={{ marginTop: 14 }}>Data Structures &amp; Algorithms</h3>
            <p>Completed an intensive five-month CodeHelp course and solved 300+ problems on LeetCode.</p>
          </div>
          <a
            className="button-secondary"
            href="https://drive.google.com/file/d/1vjU4U6zhj7CZ5vSxIv8owCjFL-AgdKpU/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View certificate <FiExternalLink />
          </a>
        </article>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="page-section contact-section" id="contact">
      <div className="contact-panel" data-reveal>
        <span className="section-kicker"><span className="eyebrow-dot" />Have a good one in mind?</span>
        <h2>Let&apos;s make<br />something matter.</h2>
        <p>
          Have a product to build, a problem to untangle, or a team looking for a thoughtful
          engineer? I&apos;d love to hear what you&apos;re working on.
        </p>
        <Motion.a
          className="button-primary"
          href="mailto:tabishjaved2030@gmail.com"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
        >
          <FiMail /> Start a conversation <FiArrowUpRight />
        </Motion.a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Tabish Javed · Built with intention.</span>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/tabish-javed/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/tabish-27" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:tabishjaved2030@gmail.com">Email</a>
      </div>
    </footer>
  )
}

function Portfolio() {
  const root = useRef(null)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useLayoutEffect(() => {
    const rootElement = root.current
    if (!rootElement || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const context = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              once: true,
            },
          },
        )
      })
    }, rootElement)

    return () => context.revert()
  }, [])

  useEffect(() => {
    const updateBackToTop = () => setShowBackToTop(window.scrollY > 700)
    updateBackToTop()
    window.addEventListener('scroll', updateBackToTop, { passive: true })
    return () => window.removeEventListener('scroll', updateBackToTop)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="portfolio-shell" ref={root}>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Impact />
        <Education />
        <Contact />
      </main>
      <Footer />
      <AnimatePresence>
        {showBackToTop && (
          <Motion.button
            className="back-to-top"
            type="button"
            aria-label="Back to top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            whileHover={{ y: -3 }}
          >
            <FiArrowRight style={{ transform: 'rotate(-90deg)' }} />
          </Motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Portfolio

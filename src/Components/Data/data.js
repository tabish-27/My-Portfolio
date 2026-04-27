const projects = {
  allProject: [
    // ─── PROFESSIONAL PROJECTS ───────────────────────────────────────────
    {
      image: "https://myhireshield.com/og-image.png",
      title: "MyHireShield | MERN SAAS Platform",
      description:
        "Architected a scalable MERN SAAS hiring platform with RBAC supporting 500+ active users. Deployed on Ubuntu VPS via Nginx Reverse Proxy & PM2. Engineered secure auth using JWT HTTP-only cookies, MongoDB sanitization, and rate-limiting across 15+ RESTful API portals — achieving zero reported security breaches post-launch.",
      sourcecode: "https://github.com/tabish-27",
      livelink: "https://myhireshield.com/",
      teckstack: ["MERN Stack", "JWT", "RBAC", "Nginx", "PM2", "Ubuntu VPS", "Rate Limiting", "MongoDB"],
      status: "LIVE",
      category: "professional",
      period: "Jan 2026 – Present",
      type: "SAAS Platform",
    },
    {
      image: "https://uk-international.in/assets/og.png",
      title: "UK International Course Shop | EdTech Marketplace",
      description:
        "Engineered an EdTech E-commerce Marketplace in PHP with automated checkout flows, reducing manual onboarding by 90% and processing 100+ monthly transactions. Integrated Razorpay Payment Gateway (EMI & Full Payment), automated receipt generation via PHPMailer, and Interakt WhatsApp API — cutting support queries by 60%.",
      sourcecode: "https://github.com/tabish-27",
      livelink: "https://uk-international.in/",
      teckstack: ["PHP", "Razorpay", "PHPMailer", "WhatsApp API", "MySQL", "MVC"],
      status: "LIVE",
      category: "professional",
      period: "Nov 2025 – Jan 2026",
      type: "E-commerce",
    },
    {
      image: "https://www.ukinternationalbeautyschool.com/og.png",
      title: "UK International Lead Engine | React + Google Ads",
      description:
        "Built the company's Primary Lead Engine in React handling 10,000+ monthly high-intent leads from Google Ads. Achieved 90+ Lighthouse performance score. Implemented custom JS-based enquiry chatbots and optimized SEO structures, boosting organic reach by 40% with 100% device responsiveness.",
      sourcecode: "https://github.com/tabish-27",
      livelink: "https://www.ukinternationalbeautyschool.com/",
      teckstack: ["React", "Tailwind CSS", "Google Ads", "SEO", "Lighthouse", "Custom Chatbot"],
      status: "LIVE",
      category: "professional",
      period: "Sep 2025 – Nov 2025",
      type: "Lead Engine",
    },
    // ─── PERSONAL PROJECTS ───────────────────────────────────────────────
    {
      image: "/codecompete-screenshot.png",
      title: "CodeCompete | Competitive Coding Platform",
      description:
        "Interactive coding competition platform allowing users to participate in topic-specific contests, create private groups, and track rankings locally and globally. Ensures fairness with randomly assigned questions and flexible contest timing. Features real-time updates via Socket.io.",
      sourcecode: "https://github.com/tabish-27/CodeCompete.git",
      livelink: "https://code-compete-v.vercel.app/",
      teckstack: ["React", "Tailwind CSS", "Material-UI", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      status: "LIVE",
      category: "personal",
      period: "2024",
      type: "Web App",
    },
    {
      image: "/food-zaika-screenshot.png",
      title: "Food Zaika | Food Delivery App",
      description:
        "Modern, responsive food delivery web application. Features real-time search, dark/light theme toggle, cart management with Redux, location-based restaurant discovery, infinite scroll, and PWA support. Mobile-first design with seamless ordering experience.",
      sourcecode: "https://github.com/tabish-27/Food-Zaika.git",
      livelink: "https://food-zaika.vercel.app/",
      teckstack: ["React", "Tailwind CSS", "Redux Toolkit", "PWA"],
      status: "LIVE",
      category: "personal",
      period: "2024",
      type: "Web App",
    },
    {
      image: "/piclingo-screenshot.png",
      title: "PicLingo | AI Image Caption Engine",
      description:
        "AI-powered image caption recommendation system using CLIP for image and text understanding. Extracts feature vectors, computes cosine similarity, and ranks the most relevant captions. Ideal for content recommendation, image search, and automated tagging.",
      sourcecode: "https://github.com/tabish-27/PicLingo.git",
      livelink: "https://pic-lingo.vercel.app/",
      teckstack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "CLIP AI", "ML"],
      status: "LIVE",
      category: "personal",
      period: "2024",
      type: "AI/ML",
    },
  ],
};

export default projects;
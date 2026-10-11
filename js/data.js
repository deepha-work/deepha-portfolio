// Portfolio Data for Deepha A - Web Development Freelancer & UI/UX Designer
const portfolioData = {
  profile: {
    name: "Deepha A",
    firstName: "Deepha",
    lastName: "Arunachalam",
    title: "Web Development Freelancer & UI/UX Designer",
    tagline: "Bridging human-centric design with high-performance React & Next.js web applications.",
    bio: "Computer Science Engineer and full-cycle Web Developer & UI/UX Designer. I help startups, founders, and forward-thinking agencies transform complex ideas into intuitive, pixel-perfect, and blazing-fast web experiences.",
    location: "Tenkasi, Tamil Nadu, India",
    email: "deephaarunachalam@gmail.com",
    phone: "+91 6369387192",
    linkedin: "https://linkedin.com/in/deepha-a-57689725a",
    status: "Available for Freelance & Contract Work",
    experienceYears: "2+ Years",
    projectsDelivered: "15+",
    clientSatisfaction: "100%",
    avatar: "assets/deepha-profile.jpg"
  },

  skills: {
    frontend: [
      { name: "HTML5 / Semantic Web", level: 95, icon: "code" },
      { name: "CSS3 / Modern Web Styling", level: 95, icon: "palette" },
      { name: "React.js & Hooks Architecture", level: 90, icon: "atom" },
      { name: "Next.js (App Router, SSR, SSG)", level: 88, icon: "layers" },
      { name: "JavaScript (ES6+) & TypeScript", level: 88, icon: "terminal" },
      { name: "Responsive & Mobile-First Design", level: 96, icon: "smartphone" },
      { name: "Performance & SEO Optimization", level: 92, icon: "gauge" },
      { name: "API Integration & Async State", level: 86, icon: "server" }
    ],
    design: [
      { name: "Figma (Auto Layout & Components)", level: 96, icon: "figma" },
      { name: "UI/UX & User Flow Architecture", level: 92, icon: "workflow" },
      { name: "Wireframing & Interactive Prototyping", level: 94, icon: "layout" },
      { name: "Design Systems & Token Standardization", level: 90, icon: "grid" },
      { name: "User Research & Usability Testing", level: 85, icon: "search" },
      { name: "Accessibility (WCAG) & Micro-Interactions", level: 90, icon: "sparkles" }
    ],
    tools: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code / Antigravity", level: 95 },
      { name: "Vite / Webpack", level: 88 },
      { name: "Postman / REST APIs", level: 85 },
      { name: "Vercel / Netlify Deployment", level: 92 },
      { name: "Chrome DevTools & Lighthouse", level: 94 }
    ]
  },

  services: [
    {
      id: "web-dev",
      number: "01",
      title: "Custom Website Development",
      category: "Websites & Landing Pages",
      icon: "code",
      desc: "Professional websites that help your business build trust and attract customers.",
      deliverables: [
        "Business Websites",
        "Mobile-Friendly Design",
        "SEO & Fast Loading"
      ]
    },
    {
      id: "dashboards",
      number: "02",
      title: "Admin Dashboards & Portals",
      category: "Management Dashboards",
      icon: "layout-dashboard",
      desc: "Simple tools to manage your business data, users, and daily operations.",
      deliverables: [
        "Data & Reports",
        "User Management",
        "Orders & Workflows"
      ]
    },
    {
      id: "redesign-speed",
      number: "03",
      title: "Website Redesign & Speed Boost",
      category: "Modernization & Speed",
      icon: "zap",
      desc: "Upgrade your existing website with a modern design and better performance.",
      deliverables: [
        "Modern Website Design",
        "Faster Page Loading",
        "Better Mobile Experience"
      ]
    },
    {
      id: "uiux-design",
      number: "04",
      title: "UI/UX Designing",
      category: "Design",
      icon: "figma",
      desc: "Plan and preview your website or app before development begins.",
      deliverables: [
        "User-Friendly Layouts",
        "Responsive Design",
        "Developer-Ready Designs"
      ]
    }
  ],

  projects: [
    {
      id: "peppernclove",
      title: "Pepper & Clove Enclave",
      category: "website",
      categoryLabel: "Eco-Resort & Hospitality",
      tagline: "Ultra-luxurious rainforest sanctuary and spice plantation resort website",
      image: "assets/peppernclove.jpg",
      featured: true,
      technologies: ["HTML", "CSS", "JavaScript"],
      overview: "An immersive, editorial web platform designed and engineered for Pepper & Clove Enclave, an eco-luxury rainforest sanctuary nestled beside Palaruvi Waterfalls and Thenmala in Kerala. The site features interactive booking flows, villa showcases, farm-to-table culinary stories, and direct WhatsApp concierge integration.",
      challenge: "Presenting the organic, tranquil atmosphere of a secluded Western Ghats spice plantation while providing modern high-conversion reservation funnels, intuitive mobile navigation, and lightning-fast asset loading.",
      solution: "Engineered an eco-luxe visual design system paired with an interactive reservation date bar, comprehensive villa detail modals, travel guide galleries, guest review showcases, and 1-tap WhatsApp booking channels.",
      metrics: [
        { label: "Core Web Vitals", value: "98/100" },
        { label: "Mobile Usability", value: "100%" },
        { label: "Direct Booking Leads", value: "+65%" }
      ],
      features: [
        "Interactive Date-Range Reservation Bar with villa and guest selection",
        "Bespoke Accommodations Showcase with deep-dive amenity specifications",
        "Direct WhatsApp Concierge Integration for real-time guest booking",
        "Mobile-first responsive drawer navigation with smooth touch ergonomics",
        "Rich visual storytelling covering Palaruvi waterfalls and Thenmala eco-tours"
      ],
      liveUrl: "https://peppernclove.vercel.app/"
    }
  ],

  experience: [
    {
      company: "Maesterominds",
      role: "UI/UX & Frontend Developer",
      location: "Chennai, India (Remote)",
      period: "Sep 2025 – Present",
      type: "Remote Work",
      badge: "Current Position",
      description: "Architecting end-to-end UI/UX and frontend solutions for real-world digital applications including Batter, MentorConnect, Vevetrack, and EduNova.",
      achievements: [
        "Optimized user flows and dashboard layouts, reducing navigation complexity and improving task clarity across multiple platforms.",
        "Engineered scalable design systems and reusable components in Figma and React, accelerating design consistency across 4+ production products.",
        "Collaborated closely with cross-functional engineering teams to implement pixel-perfect, accessible user interfaces."
      ]
    },
    {
      company: "Arshan",
      role: "UI/UX Designer & Web Consultant",
      location: "Berlin, Germany (Remote)",
      period: "Aug 2025 – Sep 2025",
      type: "International Contract",
      badge: "Completed",
      description: "Spearheaded UI/UX design for admin and client dashboards within a high-impact, fast-paced international product initiative.",
      achievements: [
        "Structured end-to-end workflows for project tracking, seat booking, and feedback management, improving usability in service-based platforms.",
        "Delivered production-ready UI screens, responsive design specs, and interactive prototypes under tight deadlines."
      ]
    },
    {
      company: "Shristi Innovatives Technopark",
      role: "UI/UX Design Intern",
      location: "Trivandrum, India",
      period: "Jun 2024 – Jul 2024",
      type: "On-site Internship",
      badge: "Completed",
      description: "Executed wireframes and interactive prototypes using Figma for commercial client projects.",
      achievements: [
        "Supported sprint-based design tasks, usability improvements, and iterative client feedback cycles.",
        "Constructed user journey maps and interactive Figma prototypes for client presentation decks."
      ]
    }
  ],

  education: [
    {
      degree: "B.E. - Computer Science & Engineering",
      institution: "Francis Xavier Engineering College",
      location: "Vannarpettai, Tirunelveli",
      period: "2022 – 2026 (Graduated)",
      score: "CGPA: 8.58 / 10",
      description: "Focused on Software Architecture, Web Technologies, Data Structures & Algorithms, and Human-Computer Interaction."
    },
    {
      degree: "Higher Secondary Education (HSC)",
      institution: "Government Girls Higher Secondary School",
      location: "Kadayanallur, Tenkasi",
      period: "2021 – 2022",
      score: "Score: 86%",
      description: "Academic excellence in Mathematics, Physics, Chemistry, and Computer Science."
    }
  ],

  certifications: [
    {
      title: "Digital Skills: User Experience",
      issuer: "FutureLearn (Accenture)",
      year: "2024"
    },
    {
      title: "Human-Computer Interaction (HCI)",
      issuer: "NPTEL / IIT",
      year: "2024"
    }
  ],

  testimonials: [
    {
      name: "Marcus Vance",
      role: "Product Lead",
      avatarText: "MV",
      rating: 5,
      quote: "Deepha is an outstanding professional. She translated our complex seat booking and dashboard workflows into an astonishingly clean, intuitive interface. Her grasp of both Figma design systems and frontend feasibility is unmatched."
    },
    {
      name: "Karthik Subramanian",
      role: "Engineering Manager",
      avatarText: "KS",
      rating: 5,
      quote: "Deepha delivered UI/UX solutions across 4 distinct SaaS products with surgical precision. She writes clean, accessible React code that plugs seamlessly into our stack. 10/10 recommend for any serious web development project!"
    },
    {
      name: "Elena Rostova",
      role: "Founder & CEO",
      avatarText: "ER",
      rating: 5,
      quote: "Working with Deepha felt effortless. She took a messy multi-vendor concept and turned it into an elegant, high-converting luxury web platform. Our users love the interactive budget tracker and smooth responsiveness."
    }
  ],

  faqs: [
    {
      q: "What types of websites and web applications can you build?",
      a: "I build everything from sleek single landing pages and multi-page business websites to dynamic web applications and custom admin management dashboards. Every site is built to look great on all phones and laptops, load fast, and be easy for your visitors to use."
    },
    {
      q: "Can you design the look and feel as well as code the website?",
      a: "Yes! That is my core superpower. You won't need to hire a separate designer and programmer. I first design clean, custom visual mockups in Figma for your review and approval, and then code the complete website into fast, production-ready pages."
    },
    {
      q: "How does the pricing work for my project?",
      a: "Pricing is transparent and straightforward with zero hidden charges: Single Landing Pages are ₹4,000 flat, Multi-Page static websites are ₹2,000 per page, Admin Dashboards are ₹5,000 per page, and Custom Web Apps with databases/logins are ₹6,000 per page. You can also use the interactive calculator above to get an instant estimate."
    },
    {
      q: "What is your typical project delivery timeline?",
      a: "A single landing page or simple business site is typically ready in 3–5 business days. Multi-page websites take around 5–8 days, and custom web apps or dashboards take 1–3 weeks depending on the number of features."
    },
    {
      q: "How do we collaborate and communicate during the project?",
      a: "We stay in close communication via WhatsApp, Google Meet, or Email—whichever you prefer. I provide live interactive preview links throughout the project so you can see real-time progress and share feedback at every stage."
    },
    {
      q: "Do you provide support and revisions after the website goes live?",
      a: "Absolutely! Every project includes 14 to 30 days of free post-launch support, bug fixing, and minor tweaks to ensure your new website runs smoothly."
    }
  ],

  pricingPackages: [
    {
      id: "landing-page",
      name: "Single Landing Page",
      price: "₹4,000",
      pricePeriod: "flat rate",
      desc: "A professional one-page website for your business, product, or service.",
      features: [
        "Custom Sections & Design",
        "Works on All Devices",
        "Contact Forms & Google Maps",
        "SEO Setup & Fast Loading",
        "3-4 Day Delivery"
      ],
      popular: false,
      ctaText: "Order Landing Page"
    },
    {
      id: "static-website",
      name: "Multi-Page Website",
      price: "₹2,000",
      pricePeriod: "page",
      desc: "A complete business website with separate pages for your services and information.",
      features: [
        "Custom Pages & Design",
        "Mobile-Friendly Layout",
        "Contact Forms & Google Maps",
        "SEO Setup & Fast Loading",
        "5–7 Day Delivery"
      ],
      popular: true,
      ctaText: "Start Multi-Page Project"
    },
    {
      id: "fullstack-dashboard",
      name: "Web Apps & Admin Dashboards",
      pricePrefix: "From",
      price: "₹5,000",
      pricePeriod: "page",
      desc: "Custom business tools to manage data, users, and everyday tasks.",
      features: [
        "Admin Panels & User Management",
        "Charts, Reports & Data Export",
        "Database & Service Integrations",
        "Custom Features & Workflows",
        "30-Day Support"
      ],
      popular: false,
      ctaText: "Discuss Web App Scope"
    }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}

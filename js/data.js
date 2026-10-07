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
      desc: "Fast, modern, and mobile-friendly websites built from scratch to make your business look credible, load instantly, and turn visitors into paying clients.",
      deliverables: ["High-Converting Landing Pages", "Multi-Page Business Websites", "100% Mobile, Tablet & Desktop Responsive", "Google SEO & Lightning-Fast Speed"]
    },
    {
      id: "dashboards",
      number: "02",
      title: "Admin Dashboards & Portals",
      category: "Management Dashboards",
      icon: "layout-dashboard",
      desc: "Intuitive business dashboards and management panels that make tracking your data, users, analytics, and daily workflows effortless.",
      deliverables: ["Interactive Charts & Data Tables", "User Accounts & Role Permissions", "Search, Filter & Data Export Tools", "Order, Booking & Workflow Management"]
    },
    {
      id: "redesign-speed",
      number: "03",
      title: "Website Redesign & Speed Boost",
      category: "Modernization & Speed",
      icon: "zap",
      desc: "Transform your outdated or slow website into a fresh, high-speed, modern web experience that improves your search ranking and credibility.",
      deliverables: ["Modern Visual Redesign", "Instant Page Load Times", "Seamless Mobile User Experience", "Higher Inquiries & Conversion Rates"]
    },
    {
      id: "uiux-design",
      number: "04",
      title: "UI/UX & Clickable Prototypes",
      category: "Design & Prototyping",
      icon: "figma",
      desc: "Clean, user-friendly visual designs and clickable prototypes in Figma that let you see and test every screen of your project before coding starts.",
      deliverables: ["Clear Page Layouts & User Flows", "Interactive Clickable Prototype", "Ready-to-Build Visual Mockups", "Intuitive, Easy-to-Use Interfaces"]
    }
  ],

  projects: [
    {
      id: "wedease",
      title: "WedEase - Luxury Wedding Planner Platform",
      category: "uiux",
      categoryLabel: "UI/UX & Frontend",
      tagline: "All-in-one wedding planning & vendor marketplace ecosystem",
      image: "assets/wedease.jpg",
      featured: true,
      technologies: ["Figma", "React.js", "CSS3", "Design Systems", "User Flows"],
      overview: "WedEase was born out of the fragmented and overwhelming experience couples face when planning weddings. The goal was to unify venue discovery, catering bookings, outfit curation, beauty services, and e-invitations into a single seamless, stress-free web platform.",
      challenge: "Coordinating multiple event vendors usually requires dozens of separate apps and spreadsheets, leading to booking conflicts, budget overruns, and high cognitive load.",
      solution: "Engineered an intuitive multi-service workflow with dynamic budget tracking, visual milestone timeline, vendor comparisons, and direct interactive booking journeys.",
      metrics: [
        { label: "User Task Completion", value: "+45%" },
        { label: "Booking Clarity", value: "98%" },
        { label: "Design System Elements", value: "60+ Components" }
      ],
      features: [
        "Interactive Venue & Vendor Directory with real-time pricing and filter sliders",
        "Dynamic 65% Budget Tracker with real-time category expenditure visualizer",
        "Interactive Timeline Schedule with checklist notifications and tasting alerts",
        "Seamless Multi-Vendor Cart & E-invitation dispatch module"
      ],
      liveUrl: "https://wedease-demo.vercel.app",
      figmaUrl: "https://figma.com/@deepha/wedease"
    },
    {
      id: "spendsense",
      title: "SpendSense - AI Financial Management App",
      category: "react",
      categoryLabel: "React & Next.js",
      tagline: "Intelligent personal finance tracker with automated AI spending insights",
      image: "assets/spendsense.jpg",
      featured: true,
      technologies: ["React.js", "Next.js", "Figma", "Chart.js", "CSS3 Animations"],
      overview: "A sleek, modern personal finance and wealth management application designed to simplify daily budgeting, track multi-currency expenses, and provide proactive AI financial advice.",
      challenge: "Most finance apps are cluttered with confusing financial jargon and cumbersome manual transaction entry, causing high drop-off rates.",
      solution: "Designed and built a clean, minimalist black-and-white interface with electric violet analytics, QR-based receipt logging, voice-guided expense inputs, and an AI assistant interface that suggests actionable savings.",
      metrics: [
        { label: "Expense Logging Speed", value: "3x Faster" },
        { label: "User Retention Rate", value: "82%" },
        { label: "Lighthouse Score", value: "99/100" }
      ],
      features: [
        "Live Monthly Spending Breakdown with dynamic interactive donut chart",
        "AI Financial Insights Engine generating personalized weekly budget tips",
        "Income vs Expenses dual-axis trend line graph with date filters",
        "Virtual & Physical Credit Card management with real-time limit trackers"
      ],
      liveUrl: "https://spendsense-app.vercel.app",
      figmaUrl: "https://figma.com/@deepha/spendsense"
    },
    {
      id: "batter",
      title: "Batter - Enterprise SaaS Analytics & Admin Portal",
      category: "dashboard",
      categoryLabel: "Dashboards & Web Apps",
      tagline: "High-impact admin dashboard for project telemetry and team workflows",
      image: "assets/batter.jpg",
      featured: true,
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts"],
      overview: "Built for Maesterominds enterprise clients to oversee project lifecycles, team productivity, real-time revenue MRR, and seat allocation within an ultra-sleek dark interface.",
      challenge: "Enterprise managers were struggling with cluttered dashboards that loaded slowly and lacked intuitive role-based user management.",
      solution: "Spearheaded the UI/UX overhaul and implemented a modular Next.js frontend with reusable data table components, live telemetry graph, and automated project status tracking.",
      metrics: [
        { label: "Navigation Complexity", value: "-60%" },
        { label: "Page Load Time", value: "< 0.8s" },
        { label: "Daily Active Teams", value: "40+" }
      ],
      features: [
        "Workflow Performance Trendline with interactive 30-day tooltip scrutiny",
        "Comprehensive KPI cards (MRR $38,450, Active Users, Total Projects)",
        "Granular User Management Table with instant role assignment & status badges",
        "Configurable Dark/Light mode theme with persistent state"
      ],
      liveUrl: "https://batter-portal.vercel.app",
      figmaUrl: "https://figma.com/@deepha/batter"
    },
    {
      id: "edunova",
      title: "EduNova - Next-Gen E-Learning & Mentorship Hub",
      category: "react",
      categoryLabel: "React & Next.js",
      tagline: "Interactive coding classroom with live video mentor pairing",
      image: "assets/edunova.jpg",
      featured: false,
      technologies: ["React", "Next.js", "WebRTC", "Figma", "CSS Modules"],
      overview: "An interactive learning portal uniting video lessons, in-browser code sandbox execution, and real-time mentor scheduling for aspiring software developers.",
      challenge: "Students had to switch back and forth between video tutorials, IDEs, and scheduling apps, disrupting the learning flow.",
      solution: "Created an all-in-one immersive workspace combining live video playback with integrated code editor and instant mentor chat.",
      metrics: [
        { label: "Lesson Completion", value: "+38%" },
        { label: "Student Engagement", value: "4.9/5" },
        { label: "Responsive Layouts", value: "100%" }
      ],
      features: [
        "Synchronized Video Player with live automated subtitles and chapter markers",
        "Integrated Code Playground supporting React & Next.js API route testing",
        "Real-Time Mentor Availability sidebar with 1-click booking",
        "Interactive Progress Bar with milestone unlocks"
      ],
      liveUrl: "https://edunova-learn.vercel.app",
      figmaUrl: "https://figma.com/@deepha/edunova"
    },
    {
      id: "vevetrack",
      title: "Vevetrack - IoT Fleet Logistics & Telemetry Map",
      category: "dashboard",
      categoryLabel: "Dashboards & Web Apps",
      tagline: "Geospatial fleet tracking dashboard with live telemetry monitoring",
      image: "assets/vevetrack.jpg",
      featured: false,
      technologies: ["React.js", "Mapbox GL", "WebSockets", "Figma", "CSS3"],
      overview: "A mission-critical fleet monitoring interface providing real-time GPS locations, route status, vehicle engine telemetry, and geofence alerts for logistics coordinators.",
      challenge: "High-density map updates caused UI lag and operator fatigue during long monitoring shifts.",
      solution: "Engineered high-performance canvas-based map rendering with an ultra-clean high-contrast dark theme, crisp violet vehicle markers, and contextual alert trays.",
      metrics: [
        { label: "Map Frame Rate", value: "60 FPS" },
        { label: "Dispatch Response Time", value: "-35%" },
        { label: "Tracked Units", value: "500+" }
      ],
      features: [
        "Real-Time Interactive City Map with custom vehicle pins and live vector routes",
        "Live Telemetry HUD: Real-time Speed (58 mph), Engine RPM, Fuel %, Temperature",
        "Driver Status Card with emergency alert broadcast system",
        "Multi-layer controls (Traffic toggles, Geofence boundaries, Weather feeds)"
      ],
      liveUrl: "https://vevetrack-fleet.vercel.app",
      figmaUrl: "https://figma.com/@deepha/vevetrack"
    },
    {
      id: "novastudio",
      title: "NovaStudio - High-End Digital Experience Studio",
      category: "react",
      categoryLabel: "React & Next.js",
      tagline: "Futuristic editorial agency website with fluid micro-interactions",
      image: "assets/novastudio.jpg",
      featured: false,
      technologies: ["Next.js", "HTML5", "Vanilla CSS", "GSAP Animations", "Vercel"],
      overview: "A flagship agency website built to showcase boundary-pushing web design, smooth kinetic typography, custom video showreels, and ultra-fast Next.js rendering.",
      challenge: "Achieving complex kinetic visual effects and video showreel playback without sacrificing 95+ Core Web Vitals or mobile responsiveness.",
      solution: "Utilized lightweight CSS keyframes, GPU-accelerated transforms, modular Next.js components, and optimized media compression.",
      metrics: [
        { label: "Performance Score", value: "100/100" },
        { label: "Bounce Rate", value: "< 18%" },
        { label: "Global CDN Latency", value: "12ms" }
      ],
      features: [
        "Kinetic Hero Typography with dynamic electric violet glow gradients",
        "Custom Video Showreel Player with sleek minimalist controls",
        "Interactive Project Card Grid with magnetic hover cursor",
        "Integrated In-page Booking and quote generator"
      ],
      liveUrl: "https://novastudio-agency.vercel.app",
      figmaUrl: "https://figma.com/@deepha/novastudio"
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
      a: "Pricing is transparent and straightforward with zero hidden charges: Single Landing Pages are ₹3,500 flat, Multi-Page static websites are ₹2,000 per page, Admin Dashboards are ₹3,000 per page, and Custom Web Apps with databases/logins are ₹4,000 per page. You can also use the interactive calculator above to get an instant estimate."
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
      tagline: "Complete multi-section 1-page website (Resorts, Products, Events & Brands)",
      price: "₹3,500",
      pricePeriod: "flat rate",
      features: [
        "Full-Length Single Page with Multiple Custom Sections",
        "Includes Hero, About/Why Us, Gallery, Reviews & Booking/Contact",
        "100% Mobile, Tablet & Desktop Responsive",
        "Custom Visual Mockup in Figma Included",
        "Fast Page Loading & Google Search (SEO) Setup",
        "3–4 Days Fast Delivery • 2 Revision Rounds"
      ],
      popular: false,
      ctaText: "Order Landing Page"
    },
    {
      id: "static-website",
      name: "Multi-Page Website (Static)",
      tagline: "Clean, fast multi-page website for companies, agencies & professionals",
      price: "₹2,000",
      pricePeriod: "page",
      features: [
        "₹2,000 Per Page (Pay only for pages you need)",
        "Pixel-Perfect Design Converted to Clean Code",
        "Works Flawlessly on All Phones & Laptops",
        "Inquiry Forms & Google Maps Integration",
        "Speed & Search Engine (SEO) Optimization",
        "5–7 Days Delivery • Free Support & Handover"
      ],
      popular: true,
      ctaText: "Start Multi-Page Project"
    },
    {
      id: "fullstack-dashboard",
      name: "Web App & Admin Dashboard",
      tagline: "Dynamic web applications with databases, user logins & management panels",
      price: "₹3,000 – ₹4,000",
      pricePeriod: "page",
      features: [
        "Admin Dashboards at ₹3,000 / page",
        "Full-Stack Web Apps with Database at ₹4,000 / page",
        "User Accounts, Secure Logins & Permissions",
        "Interactive Charts, Data Tables & Export Tools",
        "Custom API & External Service Integration",
        "Priority 30-Day Support & Free Minor Revisions"
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

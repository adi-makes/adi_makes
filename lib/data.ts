import React from 'react';
import {
  Code2,
  Cpu,
  Globe,
  Layout,
  Github,
  BookOpen,
  Terminal,
  Layers,
  Zap,
  MessageSquare,
  Database,
  Server,
  Smartphone,
  Cloud,
  Figma,
  Box,
  Printer
} from "lucide-react";
// @ts-ignore
import hsLogo from '../assets/housmartLogo.svg';
// @ts-ignore
import ccLogo from '../assets/cclogo.png';

const FlutterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  React.createElement('svg', { viewBox: '0 0 24 24', fill: 'currentColor', ...props },
    React.createElement('path', { d: 'M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zM14.314 11.429L8.571 17.171 12.271 20.871 18.014 15.129 21.7 11.429h-7.386z' })
  )
);

const DartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  React.createElement('svg', { viewBox: '0 0 24 24', fill: 'currentColor', ...props },
    React.createElement('path', { d: 'M4.105 3.003L.14 12.784a.8.8 0 00.177.892l8.834 8.834a.8.8 0 00.892.177l9.781-3.965a.8.8 0 00.388-.388l3.965-9.781a.8.8 0 00-.177-.892l-8.834-8.834a.8.8 0 00-.892-.177L4.493 2.615a.8.8 0 00-.388.388z' })
  )
);

export const personalInfo = {
  name: "Adith R. Lal",
  title: "Software Engineer · Full-Stack Developer · AI Builder",
  tagline: "I build production-ready web applications and AI-powered systems, while expanding into cross-platform mobile development with Flutter.",
  about: "I build practical software products across web and mobile, with experience spanning full-stack development, APIs, data-driven applications, AI-powered systems, and modern user interfaces. As a Computer Science & Engineering student at CUSAT, my work through internships, hackathons, and independent projects includes shipping production web applications, integrating APIs and ML services, designing data-driven workflows, building responsive interfaces, and actively expanding into mobile application development.",
  location: "Kochi, India",
  timezone: "IST (UTC+5:30)",
  email: "adithr747@gmail.com",
  github: "adi-makes",
  linkedin: "adith-r-lal",
  stats: [
    { label: "Software Internships", value: "3+" },
    { label: "Hackathons", value: "10+" },
    { label: "CGPA", value: "9.74" },
    { label: "Projects Built", value: "15+" },
  ],
};

export const experiences = [
  {
    company: "Lascade",
    role: "Full-Stack Developer Intern",
    duration: "Apr 2026 – Jul 2026",
    type: "Kochi, Kerala, India",
    achievements: [
      "Contributed to InstaDummyTicketLive, an onward-ticketing platform for visa applications covering multi-step passenger workflows, flight selection, reservation review, and payment.",
      "Built responsive interfaces and reusable UI components using Next.js, React, TypeScript, and Tailwind CSS.",
      "Integrated Sanity CMS and Sanity Studio with custom content schemas for structured management of blogs, FAQs, visa guides, and location-based pages.",
      "Implemented technical application infrastructure including metadata, canonical/alternate URLs, sitemap, robots.txt, URL normalization, semantic structure, and Schema.org structured data.",
      "Achieved 96–100 Lighthouse performance and 100 SEO scores across tested production pages.",
      "Contributed to InterFirst by refining responsive layouts, component presentation, and visual consistency within an existing application."
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel", "SEO & Schema.org"],
  },
  {
    company: "PMAccelerator (HOUSMART)",
    role: "Software Developer Intern – AI Products",
    duration: "Jan 2026 – Apr 2026",
    type: "Remote",
    achievements: [
      "Built production modules for HOUSMART, an AI-powered real estate intelligence platform using Next.js.",
      "Developed interactive dashboards that surfaced AI/ML-driven market analysis and valuations to users.",
      "Integrated 5+ REST APIs connecting user-facing application modules with ML services and backend systems.",
      "Collaborated within a 10+ member Agile team of product managers, backend engineers, and data scientists to ship MVP features on schedule."
    ],
    tech: ["Next.js", "TypeScript", "REST APIs", "AI/ML Services", "Tailwind CSS"],
  },
  {
    company: "Deloitte Australia",
    role: "Cyber Security Job Simulation",
    duration: "Virtual Experience",
    type: "Forage",
    achievements: [
      "Analyzed web activity logs to detect threats and anomalies during a simulated cybersecurity breach scenario.",
      "Investigated suspicious user activity and applied cyber defense strategies to maintain data integrity under pressure.",
      "Gained practical exposure to incident response and digital forensics in enterprise environments."
    ],
    tech: ["Cybersecurity", "Log Analysis", "Threat Detection", "Digital Forensics"],
  },
  {
    company: "1stopAI",
    role: "Frontend Developer Intern",
    duration: "Jul – Sep 2025",
    type: "Remote",
    achievements: [
      "Developed responsive UI components for AI-driven platforms.",
      "Integrated REST APIs and managed client-side application state.",
      "Improved codebase maintainability through modular component design."
    ],
    tech: ["React", "JavaScript", "REST APIs", "CSS"],
  },
  {
    company: "CUSAT FabLab",
    role: "CAD & Electronics",
    duration: "Summer 2025",
    type: "On-site",
    achievements: [
      "Explored digital fabrication and rapid prototyping for physical computing.",
      "Designed 3D models and built functional electronic circuits.",
      "Collaborated on multidisciplinary engineering prototypes."
    ],
    tech: ["CAD", "Electronics", "Prototyping"],
  },
  {
    company: "MATLAB ML Internship",
    role: "ML Intern",
    duration: "Summer 2025",
    type: "Remote",
    achievements: [
      "Implemented machine learning algorithms using MATLAB for predictive modeling.",
      "Analyzed structured datasets and performed feature engineering.",
      "Gained hands-on experience in data preprocessing and model evaluation."
    ],
    tech: ["MATLAB", "Machine Learning", "Data Analysis"],
  },
];

export const projects = [
  {
    title: "CodeGuild",
    tagline: "Full-Stack AI Coding & Learning Platform",
    description: "A full-stack AI coding platform spanning three learning domains and multiple LLM backends. Features 4+ LLM backends, automated code review, debugging assistance, personalized learning paths, 1v1 live code battles, leaderboards, and progress tracking.",
    techStack: ["Next.js", "Python", "Gemini API", "DeepSeek R1", "Qwen2.5", "Ollama", "Node.js", "Socket.io"],
    status: "Active",
    githubUrl: "https://github.com/adi-makes/codeguild",
    openLinkUrl: "",
    caseStudyUrl: "",
    category: ["Full-stack", "AI"],
    featured: true,
    emoji: "⚔️",
  },
  {
    title: "InstaDummyTicketLive",
    tagline: "Production Onward-Ticketing Web Application",
    description: "An onward-ticketing platform for visa applications and onward travel. Features a structured multi-step workflow from journey and passenger details through flight selection, reservation review, and payment, powered by structured Sanity CMS schemas and technical SEO infrastructure.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel"],
    status: "Production · Lascade",
    githubUrl: "",
    openLinkUrl: "",
    caseStudyUrl: "",
    category: ["Full-stack", "Web"],
    featured: true,
    emoji: "✈️",
    metrics: "96–100 Lighthouse Performance · 100 SEO",
  },
  {
    title: "HouSmart",
    tagline: "Real Estate Intelligence Platform",
    description: "An AI-powered real estate platform that provides deep market insights and property valuations. Integrated 5+ REST APIs connecting production user dashboards with machine learning services in an Agile team environment.",
    techStack: ["Next.js", "TypeScript", "REST APIs", "AI/ML", "Firebase", "Tailwind"],
    status: "Live Beta",
    githubUrl: "",
    openLinkUrl: "https://www.housmart.ai/",
    caseStudyUrl: "",
    category: ["AI", "Full-stack"],
    featured: false,
    emoji: "",
    icon: hsLogo,
  },
  {
    title: "AI Hackathon Work & Agents",
    tagline: "Conversational Agents & Intelligent Assistants",
    description: "Built and deployed 10+ AI applications across hackathons, including conversational agents, intelligent assistants, data-analysis tools, and automation workflows with multi-turn context and retrieval pipelines.",
    techStack: ["Gemini API", "Python", "FastAPI", "Ollama", "n8n", "AI Agents"],
    status: "2nd Place TechSprint",
    githubUrl: "https://github.com/adi-makes",
    openLinkUrl: "",
    caseStudyUrl: "",
    category: ["AI"],
    featured: false,
    emoji: "🚀",
  },
  {
    title: "FOUNDRY (Website)",
    tagline: "3-week hybrid product-building event",
    description: "Official web platform for FOUNDRY, a 3-week hybrid product-building event designed for launch-ready product validation, mentorship, and investor exposure.",
    techStack: ["TypeScript", "Tailwind CSS", "Radix UI", "Next.js"],
    status: "Live",
    githubUrl: "",
    openLinkUrl: "https://foundry.acescusat.tech/",
    caseStudyUrl: "",
    category: ["Web"],
    featured: false,
    emoji: "",
    icon: ccLogo,
  },
];

export const techStack = [
  {
    category: "LANGUAGES",
    skills: [
      { name: "Python", icon: Code2 },
      { name: "JavaScript", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "Dart", icon: DartIcon },
      { name: "Java", icon: Code2 },
      { name: "C", icon: Code2 },
      { name: "C++", icon: Code2 },
      { name: "Shell Scripting", icon: Terminal },
      { name: "Assembly Language", icon: Cpu },
    ],
  },
  {
    category: "APPLICATION DEVELOPMENT",
    skills: [
      { name: "Next.js", icon: Globe },
      { name: "React", icon: Layout },
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "FastAPI", icon: Terminal },
      { name: "Flutter", icon: FlutterIcon },
    ],
  },
  {
    category: "APIs & DATA",
    skills: [
      { name: "REST APIs", icon: Globe },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "Supabase", icon: Zap },
      { name: "Firebase", icon: Zap },
      { name: "Sanity CMS", icon: Layers },
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "Machine Learning", icon: Cpu },
      { name: "Deep Learning", icon: Cpu },
      { name: "TensorFlow", icon: Cpu },
      { name: "Gemini API", icon: Cpu },
      { name: "Google ADK", icon: Cpu },
      { name: "LLMs", icon: MessageSquare },
      { name: "RAG", icon: MessageSquare },
      { name: "AI Agents", icon: MessageSquare },
      { name: "Ollama", icon: Cpu },
      { name: "n8n", icon: Zap },
    ],
  },
  {
    category: "TOOLS & INFRASTRUCTURE",
    skills: [
      { name: "Git", icon: Github },
      { name: "GitHub", icon: Github },
      { name: "Docker", icon: Layers },
      { name: "Linux", icon: Terminal },
      { name: "Vercel", icon: Globe },
      { name: "Render", icon: Cloud },
      { name: "Railway", icon: Server },
      { name: "CI/CD", icon: Zap },
      { name: "npm", icon: Terminal },
    ],
  },
  {
    category: "DESIGN & CAD",
    skills: [
      { name: "Figma", icon: Figma },
      { name: "AutoCAD", icon: Box },
      { name: "STL & 3D Printing", icon: Printer },
    ],
  },
];

export const currentlyExploring = [
  {
    title: "Deep Learning Research",
    description: "Spatiotemporal modeling & neural networks",
    icon: Cpu,
  },
  {
    title: "Mobile Development",
    description: "Flutter · Dart · Cross-platform apps",
    icon: Smartphone,
  },
  {
    title: "Agentic AI",
    description: "AI agents · Tool use · Multi-step workflows",
    icon: MessageSquare,
  },
];

export const academics = {
  institution: "CUSAT",
  degree: "B.Tech Computer Science & Engineering (Honours in Machine Learning)",
  period: "2024 – 2028",
  cgpa: "9.74",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Object-Oriented Programming",
    "Probability & Statistics",
    "Linear Algebra",
    "Discrete Mathematics",
    "Machine Learning"
  ],
};

export const certifications = [
  {
    name: "CS50P: Introduction to Programming with Python (Harvard / edX)",
    badge: "🎓",
    links: [
      { name: "CS50P_Certificate_Harvard_edX", url: "https://drive.google.com/file/d/1OPl_SxhaizMd-dmJlVH7Ri4U2wRgNlcn/view?usp=sharing" }
    ]
  },
  {
    name: "Internship & Technical Certificates",
    badge: "📜",
    links: [
      { name: "AI_FrontEnd_Engineer_Internship_PMA", url: "https://drive.google.com/file/d/1qe6fOZrmudA6E7y0HwpK9qt-BYa25fId/view?usp=sharing" },
      { name: "CyberSecurity_Virtual_Internship_Deloitte", url: "https://drive.google.com/file/d/13KG1m61NYpIapsgGwIhVaCm9wB_FMZT_/view?usp=sharing" },
      { name: "FrontEnd_Internship_1StopAI", url: "https://drive.google.com/file/d/13jzxqEGY6QfFhlBqI-5t3_YU4uO6FWjZ/view?usp=sharing" },
      { name: "MatLab_Internship_Certificate", url: "https://drive.google.com/file/d/1qPXbKmylu6ruQyVN7TqVYORXzRVa5zhU/view?usp=sharing" },
      { name: "Software_Intern_Horizon", url: "https://drive.google.com/file/d/1Hg2zPu7DYiNfi9oO0SHfkGsfeI2asFpF/view?usp=sharing" },
      { name: "ML_Internship_SkillifiedMentor", url: "https://drive.google.com/file/d/1EVLdWeulkFvnz_0UgMLa-exC-9k55Uq8/view?usp=sharing" },
      { name: "ML_Internship_Vidyashala", url: "https://drive.google.com/file/d/1ftEe4X0AFeGSK_2KxsnyqxzlEeyJMmGN/view?usp=sharing" }
    ]
  },
  {
    name: "Letter of Recommendation",
    badge: "✍️",
    links: [
      { name: "LoR_Dr_Nancy_Li_PMA", url: "https://drive.google.com/file/d/1eeMfrK2S70Y3CLB0V_O3nDYgTvcJ20pD/view?usp=sharing" }
    ]
  },
];

export const achievements = [
  {
    icon: "⚡",
    title: "Tech Lead — ACES CUSAT",
    context: "Leading technical events, hackathons, and web platforms for ACES CUSAT",
  },
  {
    icon: "📈",
    title: "9.74 CGPA",
    context: "Top academic performance in B.Tech CSE (Honours in ML)",
  },
  {
    icon: "🥈",
    title: "2nd Place — GDG on Campus Hackathon",
    context: "TechSprint, CUSAT",
  },
  {
    icon: "🏆",
    title: "10+ Hackathons Participated",
    context: "Shipped AI & web software under time pressure",
  },
  {
    icon: "🚀",
    title: "10+ Software Projects Built",
    context: "Production web apps, AI tools, and full-stack platforms",
  },
];

export const dsaJourney = {
  title: "DSA Journey",
  tagline: "Actively building — consistency over count",
  stats: {
    easy: 18,
    medium: 6,
    hard: 1,
  },
  username: "Adi_310506",
  goal: "Target: 100 problems by end of year",
};


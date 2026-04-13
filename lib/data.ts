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
  MessageSquare
} from "lucide-react";
// @ts-ignore
import hsLogo from '../assets/housmartLogo.svg';
// @ts-ignore
import ccLogo from '../assets/cclogo.png';

export const personalInfo = {
  name: "Adith R. Lal",
  title: "Frontend Engineer · AI Builder · Product Thinker",
  tagline: "Building AI-powered products at the intersection of design and intelligence.",
  about: "I'm a Computer Science student at CUSAT building at the intersection of frontend engineering and AI. I design interfaces that think — from real estate intelligence platforms to gamified coding guilds. Currently deep in AI/ML engineering and LLM integration.",
  location: "Kochi, India",
  timezone: "IST (UTC+5:30)",
  email: "adithr747@gmail.com",
  github: "adi-makes",
  linkedin: "adith-r-lal",
  stats: [
    { label: "Internships", value: "1+" },
    { label: "Hackathons", value: "10+" },
    { label: "CGPA", value: "9.69" },
    { label: "Shipped Projects", value: "2+" },
  ],
};

export const experiences = [
  {
    company: "PMAccelerator",
    role: "Frontend Developer Intern",
    duration: "Jan 2026 – Present",
    type: "Remote",
    achievements: [
      "Leading frontend development for core product features using Next.js.",
      "Optimizing application performance and user experience.",
      "Collaborating with cross-functional teams to ship high-quality code."
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    company: "Deloitte Australia",
    role: "Cyber Security Job Simulation",
    duration: "Virtual Experience",
    type: "Forage",
    achievements: [
      "Analyzed web activity logs to detect threats and anomalies during a simulated cybersecurity breach scenario",
      "Investigated suspicious user activity and applied cyber defense strategies to maintain data integrity under pressure",
      "Gained practical exposure to how security analysts respond to real-world incidents within enterprise environments"
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
      "Integrated REST APIs and managed state efficiently.",
      "Improved codebase maintainability through modular design."
    ],
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    company: "CUSAT FabLab",
    role: "CAD & Electronics",
    duration: "Summer 2025",
    type: "On-site",
    achievements: [
      "Explored digital fabrication and rapid prototyping.",
      "Designed 3D models and worked with electronic circuits.",
      "Collaborated on multidisciplinary engineering projects."
    ],
    tech: ["CAD", "Electronics", "Prototyping"],
  },
  {
    company: "MATLAB ML Internship",
    role: "ML Intern",
    duration: "Summer 2025",
    type: "Remote",
    achievements: [
      "Implemented machine learning algorithms using MATLAB.",
      "Analyzed datasets and performed feature engineering.",
      "Gained hands-on experience in predictive modeling."
    ],
    tech: ["MATLAB", "Machine Learning", "Data Analysis"],
  },
];

export const projects = [
  {
    title: "HouSmart",
    tagline: "Real Estate Intelligence Platform",
    description: "A flagship real estate platform that uses AI to provide deep market insights and property valuations. Built for real users and a real team.",
    techStack: ["Next.js", "AI/ML", "Firebase", "Tailwind"],
    status: "Live Beta",
    githubUrl: "",
    openLinkUrl: "https://www.housmart.ai/",
    caseStudyUrl: "",
    category: ["AI", "Full-stack"],
    featured: true,
    emoji: "",
    icon: hsLogo,
  },
  {
    title: "CodeGuild",
    tagline: "Gamified Coding Platform",
    description: "A platform that gamifies the coding experience, allowing developers to join guilds, complete challenges, and level up their skills.",
    techStack: ["React", "Node.js", "Socket.io", "Framer Motion"],
    status: "",
    githubUrl: "https://github.com/adi-makes/codeguild",
    openLinkUrl: "",
    caseStudyUrl: "",
    category: ["Frontend", "Full-stack"],
    featured: false,
    emoji: "⚔️",
  },
  {
    title: "FOUNDRY (Website)",
    tagline: "3-week hybrid product-building event",
    description: "FOUNDRY is a 3-week hybrid product-building event (Product Hunt–style hackathon) designed to help participants move beyond quick prototypes and build real, launch-ready products with validation, mentorship, and investor exposure.",
    techStack: ["TypeScript", "Tailwind", "Radix UI"],
    status: "Live",
    githubUrl: "",
    openLinkUrl: "https://foundry.acescusat.tech/",
    caseStudyUrl: "",
    category: ["Frontend"],
    featured: false,
    emoji: "",
    icon: ccLogo,
  },
  {
    title: "AI Hackathon Work",
    tagline: "Rapid AI Prototypes",
    description: "A collection of various AI products and prototypes shipped under time pressure during 10+ hackathons.",
    techStack: ["Gemini API", "Python", "FastAPI", "Ollama"],
    status: "",
    githubUrl: "https://github.com/adi-makes",
    openLinkUrl: "",
    caseStudyUrl: "",
    category: ["AI"],
    featured: false,
    emoji: "🚀",
  },
];

export const techStack = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", icon: Globe },
      { name: "React", icon: Layout },
      { name: "Tailwind", icon: Zap },
      { name: "Framer Motion", icon: Layers },
      { name: "TypeScript", icon: Terminal },
    ],
  },
  {
    category: "AI & LLM",
    skills: [
      { name: "Gemini API", icon: Cpu },
      { name: "DeepSeek", icon: Cpu },
      { name: "Ollama", icon: Cpu },
      { name: "n8n", icon: Zap },
      { name: "Prompt Engineering", icon: MessageSquare },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: Code2 },
      { name: "Python", icon: Code2 },
      { name: "Java", icon: Code2 },
      { name: "C", icon: Code2 },
      { name: "C++", icon: Code2 },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "FastAPI", icon: Terminal },
      { name: "Express", icon: Terminal },
      { name: "REST", icon: Globe },
      { name: "Firebase", icon: Zap },
      { name: "Supabase", icon: Zap },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: Github },
      { name: "Docker", icon: Layers },
      { name: "Linux", icon: Terminal },
      { name: "VS Code", icon: Code2 },
    ],
  },
  {
    category: "Learning",
    isLearning: true,
    skills: [
      { name: "ML fundamentals", icon: BookOpen },
      { name: "MLOps", icon: Cpu },
      { name: "Model fine-tuning", icon: Cpu },
    ],
  },
];

export const academics = {
  institution: "CUSAT",
  degree: "B.Tech Computer Science & Engineering",
  period: "2024 – 2028",
  cgpa: "9.69",
  coursework: ["Data Structures", "Algorithms", "Operating Systems", "Database Management", "Machine Learning"],
};

export const certifications = [
  { 
    name: "Course Certifications", 
    badge: "🎓", 
    links: [
      { name: "CS50P_Certificate_Hardvard_edX", url: "https://drive.google.com/file/d/1OPl_SxhaizMd-dmJlVH7Ri4U2wRgNlcn/view?usp=sharing" }
    ] 
  },
  { 
    name: "Internship completion certificates", 
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
    name: "Letters of recommendation", 
    badge: "✍️", 
    links: [
      { name: "LoR_Dr_Nancy_Li_PMA", url: "https://drive.google.com/file/d/1eeMfrK2S70Y3CLB0V_O3nDYgTvcJ20pD/view?usp=sharing" }
    ] 
  },
];

export const achievements = [
  {
    icon: "🥉",
    title: "3rd Place — GDG on Campus Hackathon",
    context: "TechSprint, CUSAT",
  },
  {
    icon: "🏆",
    title: "10+ Hackathons participated",
    context: "Shipped AI products under time pressure",
  },
  {
    icon: "📈",
    title: "9.69 CGPA",
    context: "Top academic performance",
  },
  {
    icon: "🚀",
    title: "Contributed to production MVP",
    context: "HouSmart (real users, real team)",
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

export const personalInfo = {
  name: 'Thinesh Rama',
  title: 'Junior Full-Stack Developer',
  tagline: 'Building Practical Systems with Modern Technologies',
  email: 'thineshrama1205@gmail.com',
  github: 'https://github.com/nesh1205',
  linkedin: 'https://linkedin.com/in/yourusername',
  resumePath: 'Resume.pdf',
  location: 'Malaysia',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const aboutContent = {
  headline: 'Full-Stack Developer with a Practical Mindset',
  paragraphs: [
    'I build end-to-end web applications — from responsive frontends to REST APIs and database integration. I focus on delivering systems that work reliably in real-world environments.',
    'As a fast learner with leadership experience, I collaborate effectively across teams while using modern tools — including AI-assisted development — to ship quality software faster.',
    'My goal is to grow as a well-rounded developer who can own features from concept to deployment, with clean code and thoughtful architecture.',
  ],
  stats: [
    { label: 'Projects Built', value: 2, suffix: '+' },
    { label: 'Technologies', value: 12, suffix: '+' },
    { label: 'Internship Experience', value: 1, suffix: '' },
    { label: 'Passion for Code', value: 100, suffix: '%' },
  ],
};

export const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  Backend: ['Python', 'Flask', 'REST API'],
  Database: ['MySQL', 'SQLite', ],
  Tools: ['GitHub', 'VS Code', 'Postman', 'XAMPP', 'AI Coding Tools'],
  Professional: [
    'Fast Learner',
    'Leadership',
    'Problem Solving',
    'Adaptability',
  ],
};

export const projects = [
  {
    id: 'face-recognition-canteen',
    title: 'Face Recognition Canteen System',
    category: 'Full Stack + Computer Vision',
    description:
      'A canteen attendance system that identifies employees using face recognition, records daily meal claims, prevents duplicate claims, and provides an HR dashboard.',
    tech: [
      'Python',
      'Flask',
      'JSON',
      'OpenCV',
      'DeepFace',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    features: [
      'Face Recognition',
      'Duplicate Meal Prevention',
      'HR Dashboard',
      'Attendance Records',
      'Search & Filter',
    ],
    image: '/projects/canteen-system.png',
    github: 'https://github.com/nesh1205/canteen-face-recognition-system.git',
    live: null,
  },
  {
    id: 'thinesh-dev-portfolio',
    title: 'THINESH.DEV Portfolio',
    category: 'React + 3D UI',
    description:
      'A premium interactive portfolio built with React, Tailwind CSS, Framer Motion, and Three.js.',
    tech: ['React', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
    features: [
      '3D Hero Scene',
      'Responsive Design',
      'Glassmorphism UI',
      'Smooth Animations',
    ],
    image: '/projects/portfolio.png',
    github: 'https://github.com/nesh1205/thinesh-portfolio.git',
    live: null,
  },
  {
    id: 'ai-scam-detector',
    title: 'AI Scam Detector',
    category: 'AI + Full Stack Web Application',
    description:
      'An AI-powered scam detection platform developed as a Final Year Project (FYP) that analyzes suspicious text and URLs using Google Gemini AI with a built-in rule-based fallback engine and admin analytics dashboard.',
    tech: [
      'Python Flask',
      'HTML',
      'CSS',
      'JavaScript',
      'Google Gemini AI',
      'Firebase Firestore'
    ],
    features: [
      'Text Scam Detection',
      'URL Scam Analysis',
      'AI-Powered Threat Analysis',
      'Rule-Based Fallback Engine',
      'Scam Probability Scoring',
      'Admin Analytics Dashboard',
      'Scan History Storage',
      'Responsive Modern UI'
    ],
    image: '/projects/ai-scam-detector.png',
    github: 'https://github.com/nesh1205/ai-scam-detector',
    live: null,
  },
];

export const experience = [
  {
    id: 'software-engineering-intern',
    role: 'Software Engineering Intern',
    company: 'HEVEABOARD',
    period: 'MAY 2026 - JULY 2026',
    responsibilities: [
      'Web Development',
      'API Testing',
      'Documentation',
      'System Troubleshooting',
      'Code Review',
    ],
  },
];

export const contactContent = {
  headline: "Let's Build Something Together",
  subtext:
    'Open to full-time junior developer roles, and collaborative projects. Reach out — I respond promptly.',
};

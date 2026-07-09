// ═══════════════════════════════════════════════════════════════
//  PORTFOLIO DATA
// ═══════════════════════════════════════════════════════════════

import type { Education, Experience, Project, Certification, Achievement } from '@/types'

// ─── PROFILE INFO ───────────────────────────────────────────
export const profile = {
  name: 'Dhairya Patel',
  tagline:
    'I build full-stack web systems, AI-powered tools, and research-grade ML pipelines — from hospital management platforms to NASA space challenge entries.',
  email: 'dhairyadppatel071519@gmail.com',
  github: 'github.com/dpp0503',
  linkedin: 'linkedin.com/in/dhairya-patel-702386209',
  leetcode: 'leetcode.com/u/dpp050305/',
  codeforces: 'codeforces.com/profile/Dppatel05',
  resume: 'https://drive.google.com/file/d/1j2mfAavlfdt_nOQIh1NLe-dEhQsKjuZC/view?usp=sharing',
}

// ─── EDUCATION ──────────────────────────────────────────────
export const education: Education[] = [
  {
    id: 'edu-1',
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Vishwakarma Government Engineering College",
    period: "2024 - 2027",
    location: "Ahmedabad",
    details: [
      "CGPA : 8.43/10",
    ]
  },
  {
    id: 'edu-2',
    degree: "Diploma in Computer Engineering",
    institution: "R.C. Technical Institute",
    period: "2021 - 2023",
    location: "Ahmedabad",
    details: [
      "CGPA : 9.33",
    ]
  },
  {
    id: 'edu-3',
    degree: "SSC",
    institution: "Terf",
    period: "2020",
    location: "Ahmedabad",
    details: [
      "Percentage : 81.33%",
    ]
  }
]

// ─── EXPERIENCE ─────────────────────────────────────────────
export const experiences: Experience[] = []

// ─── PROJECTS ───────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'proj-carenexus',
    title: 'CareNexus — Hospital Management System',
    description:
      'A comprehensive healthcare nexus centralizing patient history, digital prescriptions, role-based access, and automated billing through a clean REST API. Built around a layered MVC architecture with JWT-secured auth flows and Razorpay webhook-driven payments.',
    tech: ['Java 25', 'Spring Boot 4.0.2', 'PostgreSQL', 'Spring Security', 'JWT', 'React.js', 'Tailwind CSS', 'Redux Toolkit', 'Razorpay'],
    highlights: [
      'Complex relational modeling: Doctors → Departments → Appointments → Patients',
      'Razorpay webhook integration for secure payment sequences',
      'Real-time appointment updates via Redux Toolkit',
    ],
    github: 'https://github.com/Dpp0503/CareNexus',
  },
  {
    id: 'proj-streamsphere',
    title: 'StreamSphere — Premium OTT Streaming Platform',
    description:
      'A feature-rich MERN stack OTT platform with secure subscription management, isolated multi-profile data (watch history, watchlists), and an immersive dark-themed UI responsive from mobile to 4K.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Tailwind CSS', 'Redux Toolkit', 'Redux Persist', 'Docker', 'Cloudinary'],
    highlights: [
      'Fully containerized with Docker Compose for seamless deployment',
      'NoSQL modeling: Series → Seasons → Episodes with multi-profile isolation',
      'Skeleton loaders & micro-interactions for premium content-first UX',
    ],
    github: 'https://github.com/Dpp0503/OTT_FULL_STACK',
  },
  {
    id: 'proj-exofinder',
    title: 'ExoFinder — NASA Space App Challenge 2025',
    description:
      'An AI-powered exoplanet discovery system that analyzes raw light curves from Kepler, K2, and TESS missions via a novel CNN architecture — eliminating extensive pre-processing while computing planetary habitability.',
    tech: ['Python', 'TensorFlow/Keras', 'Scikit-learn', 'CNNs', 'Flask', 'Pandas', 'NumPy', 'Chart.js'],
    highlights: [
      'Novel CNN designed for direct light curve analysis across Kepler, K2, and TESS',
      'Habitability calculator factoring stellar temperature, orbital distance, and planetary size',
      'Hybrid ensemble models for classification and anomaly detection',
    ],
    github: 'https://github.com/Dpp0503/Exofinder',
  },
  {
    id: 'proj-intellihack',
    title: 'Protecting Digital Frontiers — IntelliHack 2025',
    description:
      'An AI-powered cloud security system that evaluates geo-location, device fingerprinting, and data transfer patterns to detect and block unauthorized account takeovers in real-time.',
    tech: ['Python', 'Scikit-learn', 'Flask', 'Chart.js'],
    highlights: [
      '99.7% experimental accuracy detecting anomalous cloud login attempts',
      'Multi-signal analysis: geo-location, device fingerprinting & data transfers',
    ],
    github: 'https://github.com/Dpp0503/Protecting-Digital-Frontiers',
  },
  {
    id: 'proj-agriculture',
    title: 'Agriculture — Kharif Rice Yield Prediction',
    description:
      'A deep learning pipeline that uses Variational Autoencoders to generate synthetic weather-yield data, then trains Transformer, CNN, and LSTM models to forecast Kharif rice yields with high accuracy.',
    tech: ['Python', 'PyTorch', 'VAEs', 'Transformers', 'CNNs', 'LSTMs'],
    highlights: [
      'VAE-based data augmentation to overcome limited historical sample sizes',
      'Benchmarked Transformer models achieving high R² scores on yield prediction',
    ],
    github: 'https://github.com/Dpp0503/Agriculture',
  },
  {
    id: 'proj-clearpass',
    title: 'ClearPass-GTU — AI Exam Prep Agent',
    description:
      'An automated AI agent pipeline that scrapes, deduplicates, and groups past GTU exam questions using semantic embeddings, then generates syllabus-grounded study guides via automated Gemini sessions.',
    tech: ['Python', 'Sentence-Transformers', 'Playwright', 'Google Gemini', 'pdfplumber'],
    highlights: [
      'Semantic deduplication using all-mpnet-base-v2 for question normalization',
      'Playwright automates Gemini sessions for comprehensive answer generation',
    ],
    github: 'https://github.com/Dpp0503/ClearPass-GTU',
  },
  {
    id: 'proj-greenhydrogen',
    title: 'Green Hydrogen Infra Mapping & Optimization',
    description:
      'A geospatial digital twin and dashboard that recommends optimal green hydrogen facility locations by balancing renewable energy sources, storage, and industrial demand centers.',
    tech: ['Python', 'Flask', 'Leaflet.js', 'Shapely'],
    highlights: [
      'Smart location optimization algorithms based on renewable energy proximity',
      'Interactive geospatial dashboard for infrastructure planning',
    ],
    github: 'https://github.com/Dpp0503/Green-Hydrogen-Infra-Mapping-and-Optimization',
  },
  {
    id: 'proj-climatenote',
    title: 'Climate-Note-Task — Productivity Dashboard',
    description:
      'A unified, minimalist productivity dashboard combining Notes, Tasks, and Live Weather updates in a single clean interface — eliminating the need to juggle multiple apps.',
    tech: ['React', 'Vite', 'CSS', 'JSON Server', 'OpenWeatherMap API'],
    highlights: [
      'Seamless OpenWeatherMap API integration for real-time weather data',
      'Clean component architecture with focused frontend state management',
    ],
    github: 'https://github.com/Dpp0503/Climate-Note-Tasks',
  },
]

// ─── CERTIFICATIONS ─────────────────────────────────────────
export const certifications: Certification[] = []

// ─── ACHIEVEMENTS ───────────────────────────────────────────
export const achievements: Achievement[] = [
  {
    id: 'ach-intellihack',
    title: 'IntelliHack 2025',
    description:
      'Built an AI-powered cloud anomaly detection system achieving 99.7% accuracy in identifying unauthorized account takeovers via geo-location and device fingerprinting.',
    icon: 'trophy',
  },
  {
    id: 'ach-nasa',
    title: 'NASA Space App Challenge 2025',
    description:
      'Developed ExoFinder — an AI system using novel CNN architectures to discover and assess the habitability of exoplanets from raw Kepler, K2, and TESS light curve data.',
    icon: 'zap',
  },
]

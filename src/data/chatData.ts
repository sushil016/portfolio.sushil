// Chat data for automated responses about Sushil
export const personalData = {
  // Basic Info
  name: "Sushil Sahani",
  title: "Full Stack Developer & DevOps Engineer",
  location: "Mumbai, Maharashtra, India",
  experience: "Started coding in September 2023",
  
  // Education
  education: "3rd-year Engineering Student",
  
  // Work Experience
  currentWork: {
    position: "DevOps Engineer Intern at CREW (Remote - Sydney, Australia)",
    duration: "January 2025 - Present",
    description: "Working with senior DevOps professionals on production infrastructure across Azure and GCP"
  },
  
  previousWork: {
    position: "Full Stack Developer Intern at IIT Bombay",
    duration: "October 2024 - March 2025",
    location: "IIT Bombay, Powai, Mumbai",
    description: "Developed Procurement Management System for Aerospace Department"
  },
  
  // Agency
  agency: {
    name: "LumaDev.in",
    services: ["Web Development", "AI Automation", "Custom Solutions", "System Integration", "DevOps"],
    description: "Custom AI automation solutions for existing projects, transforming traditional workflows into intelligent systems"
  },
  
  // Skills
  techStack: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Redis"],
    devops: ["Docker", "Kubernetes", "Azure", "GCP", "GitHub Actions", "ArgoCD"],
    languages: ["JavaScript", "TypeScript", "Python"],
    tools: ["Git", "Postman", "VS Code"]
  },
  
  // Achievements
  achievements: [
    "Reduced deployment time by 70% through automated CI/CD pipelines",
    "Led zero-downtime database migration from GCP to Azure",
    "Built comprehensive procurement system for IIT Bombay",
    "Started successful web development agency LumaDev.in"
  ],
  
  // Personal
  personality: {
    motto: "Gym, curiosity, and client satisfaction are the best combo for solving any problem!",
    interests: ["Debugging life's glitches", "Exploring new technologies", "Building innovative solutions"],
    availability: "Currently accepting new projects at LumaDev.in"
  },
  
  // Contact
  contact: {
    email: "sushilsahani322@gmail.com",
    whatsapp: "9967612372",
    github: "https://github.com/sushil016",
    twitter: "https://x.com/Sushil_Sahani37",
    discord: "sushilz16",
    website: "https://lumadev.in"
  }
};

// Predefined Q&A pairs
export const qaData = [
  {
    keywords: ["who", "sushil", "about", "introduction"],
    response: `Hi! I'm ${personalData.name}, a passionate ${personalData.title}. I'm a ${personalData.education} who started coding in ${personalData.experience}. I run my own agency ${personalData.agency.name} where we specialize in ${personalData.agency.description}.`
  },
  {
    keywords: ["experience", "work", "job", "career"],
    response: `I'm currently working as a ${personalData.currentWork.position} since ${personalData.currentWork.duration}. Previously, I was a ${personalData.previousWork.position} from ${personalData.previousWork.duration}. ${personalData.currentWork.description}.`
  },
  {
    keywords: ["skills", "technology", "tech", "stack", "programming"],
    response: `I work with: Frontend - ${personalData.techStack.frontend.join(", ")}, Backend - ${personalData.techStack.backend.join(", ")}, DevOps - ${personalData.techStack.devops.join(", ")}, and Languages - ${personalData.techStack.languages.join(", ")}.`
  },
  {
    keywords: ["lumadev", "agency", "business", "services"],
    response: `${personalData.agency.name} is my web development agency. We offer ${personalData.agency.services.join(", ")}. ${personalData.agency.description}. ${personalData.personality.availability}!`
  },
  {
    keywords: ["achievements", "accomplishments", "success"],
    response: `Some of my key achievements: ${personalData.achievements.join(", ")}.`
  },
  {
    keywords: ["contact", "hire", "project", "collaboration"],
    response: `I'd love to work with you! You can reach me via Email: ${personalData.contact.email}, WhatsApp: ${personalData.contact.whatsapp}, or visit ${personalData.contact.website}. ${personalData.personality.availability}!`
  },
  {
    keywords: ["education", "study", "student"],
    response: `I'm a ${personalData.education}. Despite being relatively new to coding (${personalData.experience}), I've gained substantial experience through internships at prestigious institutions like IIT Bombay and international companies like CREW.`
  },
  {
    keywords: ["location", "where", "based"],
    response: `I'm based in ${personalData.location}. Currently working remotely with CREW in Sydney, Australia, and have experience working on-site at IIT Bombay, Mumbai.`
  },
  {
    keywords: ["personality", "personal", "philosophy"],
    response: `${personalData.personality.motto} I love ${personalData.personality.interests.join(", ")}. When I'm not coding, I'm probably debugging life's glitches! 😄`
  }
];

// Default responses
export const defaultResponses = [
  "That's an interesting question! Could you be more specific about what you'd like to know about me?",
  "I'd be happy to help! Try asking about my experience, skills, projects, or LumaDev agency.",
  "Feel free to ask about my work experience, technical skills, or how to get in touch for projects!",
  "You can ask me about my background, current work, agency services, or contact information."
];

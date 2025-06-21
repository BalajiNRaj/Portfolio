'use client';

// Project interface definition
export interface Project {
  title: string;
  description: string;
  period?: string;
  year?: number;
  featured?: boolean;
  details?: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  link?: string;
  github?: string;
  image?: string;
  imageAlt?: string;
  isPrivate?: boolean;
  emoji?: string; // Emoji illustration for the project
}

// Full project data
export const projectsData: Project[] = [
  {
    title: "AI Research & Agent Platform",
    description: "OpenAI • RAG • Vector Search • AI Agents • Analytics",
    period: "2022 - 2025",
    year: 2023,
    featured: true,
    emoji: "🤖",
    details: [
      "Developed an automated Answer Agent using RAG and OpenAI's Ada model for intelligent response generation",
      "Enhanced Recommendation Engine with SOLR's Dense Vector Search for context-aware responses",
      "Built Dynamic Report Agent for automated, customized reporting with integrated analytics",
      "Implemented Executive Summary Agent for condensed insights and RFP response automation",
      "Created enterprise-wide knowledge search with Slack integration and custom prompts",
      "Received special recognition from Microsoft for the system's effectiveness",
    ],
    technologies: [
      "OpenAI",
      "SOLR",
      "Vector Search",
      "RAG",
      "Machine Learning",
      "Natural Language Processing",
      "AI/ML",
      "REST APIs",
      "Analytics",
      "Automation",
      "React",
      "Spring Boot",
      "Webhooks",
      "Slack",
    ],
    link: "#",
    github: "https://github.com/BalajiNRaj/ai-platform",
    githubUrl: "https://github.com/BalajiNRaj/ai-platform",
    demoUrl: "#",
    image: "/projects/ai-agent.png",
    imageAlt: "AI Research & Agent Platform",
    isPrivate: true,
  },
  {
    title: "Profile Center (Trust Center)",
    description: "AI • LLMs • Enterprise Integration • Best Team Award",
    period: "2023 - 2025",
    year: 2023,
    featured: true,
    emoji: "🏆",
    details: [
      "Built AI-powered capabilities for automated security profile generation with minimal manual effort",
      "Implemented anonymous viewer tracking and analytics for deep engagement insights",
      "Integrated with Salesforce, Microsoft Dynamics, and Slack for seamless data sharing",
      "Developed dynamic trust center summary feature with ChatGPT integration",
    ],
    technologies: [
      "Spring Boot",
      "REST APIs",
      "OAuth",
      "AI",
      "Vector Search",
      "SOLR",
      "OpenAI",
      "Slack",
      "Microsoft Dynamics",
      "Salesforce",
      "GrapeJS",
    ],
    link: "#",
    github: "https://github.com/BalajiNRaj/profile-center",
    githubUrl: "https://github.com/BalajiNRaj/profile-center",
    demoUrl: "#",
    image: "/projects/profile-center.png",
    imageAlt: "Profile Center (Trust Center)",
    isPrivate: true,
  },
  {
    title: "Platform Enhancement & Integration",
    description: "External APIs • Offline Support • Search Integration",
    period: "2022 - 2023",
    year: 2022,
    emoji: "🔌📱🔎",
    details: [
      "Integrated Google Drive and Bing Search APIs for expanded data access",
      "Implemented offline functionality for seamless low-connectivity usage",
      "Enhanced data retrieval capabilities with external source integration",
      "Optimized performance for large-scale data processing",
    ],
    technologies: [
      "Google Drive API",
      "Bing Search API",
      "Offline Storage",
      "React",
    ],
    link: "#",
    github: "https://github.com/BalajiNRaj/platform-enhancement",
    githubUrl: "https://github.com/BalajiNRaj/platform-enhancement",
    demoUrl: "#",
    image: "/projects/platform.png",
    imageAlt: "Platform Enhancement & Integration",
    isPrivate: true,
  },
  {
    title: "Import Automation",
    description: "ML • Automation • Customer Delight Award",
    period: "2020 - 2021",
    year: 2020,
    emoji: "⚙️🤖🏆",
    details: [
      "Developed ML-based automated file processing system for data imports",
      "Implemented SHA key generation for unique file identification and rule configuration",
      "Built SpringBoot application for handling complex automation processes",
      "Won Customer Delight Award for significant time-saving automation features",
    ],
    technologies: ["Spring Boot", "REST APIs", "SHA", "Machine Learning"],
    link: "#",
    github: "https://github.com/BalajiNRaj/import-automation",
    githubUrl: "https://github.com/BalajiNRaj/import-automation",
    demoUrl: "#",
    image: "/projects/import-automation.png",
    imageAlt: "Import Automation",
    isPrivate: true,
  },
  {
    title: "External API Platform",
    description: "API Security • Integration • Authentication",
    period: "2019 - 2020",
    year: 2019,
    emoji: "🔒🔑🌐",
    details: [
      "Developed robust and secure APIs for CRM customer access",
      "Implemented JWT-based authentication with client ID and secret system",
      "Created data migration APIs with Swagger documentation",
      "Built custom exception handling for detailed error reporting",
    ],
    technologies: ["Spring Boot", "REST APIs", "JWT", "Swagger", "Postman"],
    link: "#",
    github: "https://github.com/BalajiNRaj/external-api-platform",
    githubUrl: "https://github.com/BalajiNRaj/external-api-platform",
    demoUrl: "#",
    image: "/projects/api-platform.png",
    imageAlt: "External API Platform",
    isPrivate: true,
  },
  {
    title: "MS Office Add-in",
    description: "PowerPoint Integration • Content Management • VSTO",
    period: "2018 - 2019",
    year: 2018,
    emoji: "📊📑🔗",
    details: [
      "Integrated content library into Microsoft PowerPoint using VSTO Add-in",
      "Developed using C# for seamless Office integration",
      "Implemented content modification and proposal building features",
      "Created custom XML parts for saving required information",
    ],
    technologies: ["MS PPT", "VSTO", "XML", "C#"],
    link: "#",
    github: "https://github.com/BalajiNRaj/ms-office-addin",
    githubUrl: "https://github.com/BalajiNRaj/ms-office-addin",
    demoUrl: "#",
    image: "/projects/office-addin.png",
    imageAlt: "MS Office Add-in",
    isPrivate: true,
  },
  {
    title: "Electronic Signature",
    description: "Document Signing • Integration • PDF Processing",
    period: "2018",
    year: 2018,
    emoji: "✍️📄🔏",
    details: [
      "Integrated E-Sign functionality for proposal document signing",
      "Implemented document sharing and collaboration features",
      "Developed drag-and-drop interface for signature placement",
      "Created PDF download capability with embedded signatures",
    ],
    technologies: ["PDF", "Canvas"],
    link: "#",
    github: "https://github.com/BalajiNRaj/e-signature",
    githubUrl: "https://github.com/BalajiNRaj/e-signature",
    demoUrl: "#",
    image: "/projects/e-signature.png",
    imageAlt: "Electronic Signature",
    isPrivate: true,
  },
  {
    title: "Other Notable Contributions",
    description: "Migration • Performance • Support",
    period: "2018 - 2025",
    year: 2018,
    emoji: "🔄⚡🛠️",
    details: [
      "Led migration from AngularJS to React, improving application performance",
      "Enhanced SOLR Stemming process with Hunspell Filter Factory implementation",
      "Created Email velocity templates for customer communications",
      "Provided on-call support and resolved customer support tickets",
    ],
    technologies: ["React", "AngularJS", "SOLR", "Velocity"],
    link: "#",
    github: "https://github.com/BalajiNRaj/other-contributions",
    githubUrl: "https://github.com/BalajiNRaj/other-contributions",
    demoUrl: "#",
    image: "/projects/other.png",
    imageAlt: "Other Notable Contributions",
    isPrivate: true,
  },
];

// Get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projectsData.filter(project => project.featured === true);
};

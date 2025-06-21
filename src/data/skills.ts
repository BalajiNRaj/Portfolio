import React from 'react';
import {
  CircleIcon,
  CodeIcon,
  DesktopIcon,
  GearIcon,
  GitHubLogoIcon,
  GlobeIcon,
  MagicWandIcon,
  RocketIcon,
  ScissorsIcon,
  StackIcon,
  BarChartIcon,
  GlobeIcon as CloudIcon,
  CubeIcon as DatabaseIcon,
  ReaderIcon,
  LayersIcon
} from '@radix-ui/react-icons';
import { BadgeColor, SkillCategory, SkillItem, ExpertiseArea } from '../components/common/SkillsDisplay';

// AI & Machine Learning Skills
const aiMlSkills: SkillItem[] = [
  { name: 'OpenAI (ChatGPT, ADA)', icon: React.createElement(MagicWandIcon), color: 'green' },
  { name: 'LangChain', icon: React.createElement(MagicWandIcon), color: 'blue' },
  { name: 'RAG', icon: React.createElement(RocketIcon), color: 'purple' },
  { name: 'Vector Search', icon: React.createElement(MagicWandIcon), color: 'cyan' },
  { name: 'Dense Vector Search', icon: React.createElement(MagicWandIcon), color: 'crimson' },
  { name: 'SOLR', icon: React.createElement(GearIcon), color: 'orange' },
  { name: 'NLP', icon: React.createElement(LayersIcon), color: 'indigo' },
  { name: 'Machine Learning', icon: React.createElement(BarChartIcon), color: 'plum' },
  { name: 'Prompt Engineering', icon: React.createElement(CodeIcon), color: 'violet' },
  { name: 'Recommendation Engines', icon: React.createElement(RocketIcon), color: 'gold' },
  { name: 'Anonymous Viewer Analytics', icon: React.createElement(BarChartIcon), color: 'blue' },
  { name: 'Embedding Models (ADA)', icon: React.createElement(LayersIcon), color: 'teal' },
  { name: 'Automation with AI', icon: React.createElement(GearIcon), color: 'purple' }
];

// Backend Development Skills
const backendSkills: SkillItem[] = [
  { name: 'Java', icon: React.createElement(CodeIcon), color: 'orange' },
  { name: 'Python', icon: React.createElement(CodeIcon), color: 'blue' },
  { name: 'TypeScript', icon: React.createElement(CodeIcon), color: 'blue' },
  { name: 'C#', icon: React.createElement(CodeIcon), color: 'purple' },
  { name: 'Spring Boot', icon: React.createElement(GearIcon), color: 'green' },
  { name: 'Node.js', icon: React.createElement(GearIcon), color: 'green' },
  { name: 'REST APIs', icon: React.createElement(GlobeIcon), color: 'blue' },
  { name: 'Swagger', icon: React.createElement(CodeIcon), color: 'green' },
  { name: 'JWT', icon: React.createElement(GearIcon), color: 'orange' },
  { name: 'OAuth', icon: React.createElement(GearIcon), color: 'red' },
  { name: 'JPA', icon: React.createElement(DatabaseIcon), color: 'blue' },
  { name: 'JSP', icon: React.createElement(CodeIcon), color: 'indigo' },
  { name: 'Servlet', icon: React.createElement(CodeIcon), color: 'gray' },
  { name: 'Microservices', icon: React.createElement(StackIcon), color: 'blue' },
  { name: 'API Design & Security', icon: React.createElement(GearIcon), color: 'crimson' },
  { name: 'Custom Exception Handling', icon: React.createElement(GearIcon), color: 'orange' }
];

// Frontend Development Skills
const frontendSkills: SkillItem[] = [
  { name: 'React (Hooks)', icon: React.createElement(CodeIcon), color: 'blue' },
  { name: 'Next.js', icon: React.createElement(CodeIcon), color: 'gray' },
  { name: 'Angular', icon: React.createElement(CodeIcon), color: 'red' },
  { name: 'AngularJS', icon: React.createElement(CodeIcon), color: 'red' },
  { name: 'jQuery', icon: React.createElement(CodeIcon), color: 'blue' },
  { name: 'Material UI', icon: React.createElement(DesktopIcon), color: 'blue' },
  { name: 'Radix UI', icon: React.createElement(DesktopIcon), color: 'purple' },
  { name: 'GrapeJS', icon: React.createElement(DesktopIcon), color: 'green' },
  { name: 'Figma', icon: React.createElement(ScissorsIcon), color: 'plum' },
  { name: 'Adobe XD', icon: React.createElement(ScissorsIcon), color: 'purple' },
  { name: 'Responsive UI', icon: React.createElement(DesktopIcon), color: 'blue' },
  { name: 'VSTO Add-ins', icon: React.createElement(GearIcon), color: 'orange' }
];

// DevOps & Tools Skills
const devopsSkills: SkillItem[] = [
  { name: 'Git', icon: React.createElement(GitHubLogoIcon), color: 'orange' },
  { name: 'GitHub', icon: React.createElement(GitHubLogoIcon), color: 'gray' },
  { name: 'Bitbucket', icon: React.createElement(GitHubLogoIcon), color: 'blue' },
  { name: 'SourceTree', icon: React.createElement(GitHubLogoIcon), color: 'blue' },
  { name: 'Docker', icon: React.createElement(GearIcon), color: 'blue' },
  { name: 'Jenkins', icon: React.createElement(GearIcon), color: 'orange' },
  { name: 'Postman', icon: React.createElement(GearIcon), color: 'orange' },
  { name: 'JIRA', icon: React.createElement(GearIcon), color: 'blue' },
  { name: 'Confluence', icon: React.createElement(ReaderIcon), color: 'blue' },
  { name: 'Maven', icon: React.createElement(GearIcon), color: 'orange' },
  { name: 'Gradle', icon: React.createElement(GearIcon), color: 'green' },
  { name: 'Tomcat', icon: React.createElement(GearIcon), color: 'orange' },
  { name: 'Nginx', icon: React.createElement(GearIcon), color: 'green' },
  { name: 'IntelliJ IDEA', icon: React.createElement(CodeIcon), color: 'purple' },
  { name: 'VS Code', icon: React.createElement(CodeIcon), color: 'blue' },
  { name: 'Eclipse', icon: React.createElement(CodeIcon), color: 'blue' }
];

// Databases & Search Engines Skills
const databaseSkills: SkillItem[] = [
  { name: 'MongoDB', icon: React.createElement(DatabaseIcon), color: 'green' },
  { name: 'PostgreSQL', icon: React.createElement(DatabaseIcon), color: 'blue' },
  { name: 'Redis', icon: React.createElement(DatabaseIcon), color: 'red' },
  { name: 'SQL', icon: React.createElement(DatabaseIcon), color: 'blue' },
  { name: 'MySQL', icon: React.createElement(DatabaseIcon), color: 'blue' },
  { name: 'Mongo Compass', icon: React.createElement(GearIcon), color: 'green' },
  { name: 'Robo 3T', icon: React.createElement(GearIcon), color: 'green' },
  { name: 'MySQL Workbench', icon: React.createElement(GearIcon), color: 'blue' },
  { name: 'DBeaver', icon: React.createElement(GearIcon), color: 'blue' },
  { name: 'Apache SOLR', icon: React.createElement(GearIcon), color: 'orange' },
  { name: 'OpenSearch', icon: React.createElement(GearIcon), color: 'orange' }
];

// Cloud & Integrations Skills
const cloudSkills: SkillItem[] = [
  { name: 'Microsoft Azure', icon: React.createElement(CloudIcon), color: 'blue' },
  { name: 'Salesforce', icon: React.createElement(CloudIcon), color: 'blue' },
  { name: 'Microsoft Dynamics', icon: React.createElement(CloudIcon), color: 'blue' },
  { name: 'Slack Integrations', icon: React.createElement(GearIcon), color: 'purple' },
  { name: 'Webhooks', icon: React.createElement(GearIcon), color: 'gray' },
  { name: 'XML', icon: React.createElement(CodeIcon), color: 'orange' },
  { name: 'JWT Tokens', icon: React.createElement(GearIcon), color: 'crimson' }
];

// Skills data with featured (minimal) sets
export const skillsData: Array<SkillCategory & { featured?: SkillItem[], emoji?: string }> = [
  {
    title: "🧠 AI & Machine Learning",
    skills: aiMlSkills,
    featured: aiMlSkills.slice(0, 6),
    emoji: "🧠"
  },
  {
    title: "💻 Backend Development",
    skills: backendSkills,
    featured: backendSkills.slice(0, 6),
    emoji: "💻"
  },
  {
    title: "🌐 Frontend Development",
    skills: frontendSkills,
    featured: frontendSkills.slice(0, 6),
    emoji: "🌐"
  },
  {
    title: "🛠️ DevOps & Tools",
    skills: devopsSkills,
    featured: devopsSkills.slice(0, 6),
    emoji: "🛠️"
  },
  {
    title: "🗄️ Databases & Search Engines",
    skills: databaseSkills,
    featured: databaseSkills.slice(0, 5),
    emoji: "🗄️"
  },
  {
    title: "☁️ Cloud & Integrations",
    skills: cloudSkills,
    featured: cloudSkills.slice(0, 5),
    emoji: "☁️"
  }
];

// Expertise Areas
export const expertiseAreas: ExpertiseArea[] = [
  {
    name: "Full-Stack Development",
    icon: React.createElement(CodeIcon),
    description: "End-to-end application development using modern frameworks and technologies, with emphasis on performance and maintainability."
  },
  {
    name: "AI Integration",
    icon: React.createElement(MagicWandIcon),
    description: "Seamlessly integrating AI capabilities into existing applications using advanced techniques like RAG, vector search, and LLMs."
  },
  {
    name: "Enterprise Architecture",
    icon: React.createElement(StackIcon),
    description: "Designing scalable, secure, and maintainable systems using microservices architecture and best practices."
  }
];

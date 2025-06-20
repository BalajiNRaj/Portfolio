'use client';

import { useState, useEffect, useRef } from 'react';
import { Box, Container, Heading, Text, Card, Grid, Button, Flex, Link, Badge, Select, TextField } from "@radix-ui/themes";
import { GlobeIcon, MagnifyingGlassIcon, GitHubLogoIcon, ViewVerticalIcon, ViewGridIcon, CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";

// Project interface definition
interface Project {
  title: string;
  description: string;
  period: string;
  year: number;
  featured?: boolean;
  details: string[];
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

export default function ProjectsPage() {
  // Refs and scroll animations
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);
  
  // State for filtering and view options
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  
  // Mouse interaction for cards
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Full project data
  const projects = [
    {
      title: "AI-Powered Answer Agent",
      description: "OpenAI • RAG • Vector Search • Microsoft Recognition",
      period: "2023 - Present",
      year: 2023,
      featured: true,
      details: [
        "Developed an automated system using RAG and OpenAI's Ada model for intelligent response generation",
        "Integrated SOLR's Dense Vector Search for enhanced context-aware responses",
        "Built no-touch feature for automatic file processing and requirement extraction",
        "Received special recognition from Microsoft for the system's effectiveness"
      ],
      technologies: ["OpenAI", "SOLR", "Vector Search", "RAG", "Machine Learning", "Natural Language Processing"],
      link: "#",
      github: "https://github.com/BalajiNRaj/ai-powered-answer-agent",
      image: "/projects/ai-agent.png"
    },
    {
      title: "Agent Studio Platform",
      description: "AI Agents • Automation • Analytics",
      period: "2023 - Present",
      year: 2023,
      featured: true,
      details: [
        "Architected and developed multiple AI-driven agents for the Agent Studio platform",
        "Built Dynamic Report Agent for automated, customized reporting",
        "Implemented Executive Summary Agent for condensed insights",
        "Created Analysis Agent to support RFP response automation"
      ],
      technologies: ["AI/ML", "REST APIs", "Analytics", "Automation", "React"],
      link: "#",
      github: "https://github.com/BalajiNRaj/agent-studio",
      image: "/projects/agent-studio.png"
    },
    {
      title: "Profile Center (Trust Center)",
      description: "AI • LLMs • Enterprise Integration • Best Team Award",
      period: "2023 - Present",
      year: 2023,
      details: [
        "Built AI-powered capabilities for automated security profile generation with minimal manual effort",
        "Implemented anonymous viewer tracking and analytics for deep engagement insights",
        "Integrated with Salesforce, Microsoft Dynamics, and Slack for seamless data sharing",
        "Developed dynamic trust center summary feature with ChatGPT integration"
      ],
      technologies: ["Spring Boot", "REST APIs", "OAuth", "AI", "Vector Search", "SOLR", "OpenAI", "Slack", "Microsoft Dynamics", "Salesforce", "GrapeJS"],
      link: "#",
      github: "https://github.com/BalajiNRaj/profile-center",
      image: "/projects/profile-center.png"
    },
    {
      title: "Research & Development",
      description: "Vector Search • RAG • OpenAI • Recommendation Engine",
      period: "2022 - 2023",
      year: 2022,
      details: [
        "Enhanced product's Recommendation Engine with SOLR's Dense Vector Search",
        "Implemented Ada model for improved input text embeddings and search accuracy",
        "Developed Slack integration for enterprise-wide knowledge search",
        "Created custom prompts for generating contextual responses"
      ],
      technologies: ["Spring Boot", "REST APIs", "Postman", "SOLR", "OpenAI", "Slack", "Webhooks"],
      link: "#",
      github: "https://github.com/BalajiNRaj/r-and-d",
      image: "/projects/r-and-d.png"
    },
    {
      title: "Platform Enhancement & Integration",
      description: "External APIs • Offline Support • Search Integration",
      period: "2022 - 2023",
      year: 2022,
      details: [
        "Integrated Google Drive and Bing Search APIs for expanded data access",
        "Implemented offline functionality for seamless low-connectivity usage",
        "Enhanced data retrieval capabilities with external source integration",
        "Optimized performance for large-scale data processing"
      ],
      technologies: ["Google Drive API", "Bing Search API", "Offline Storage", "React"],
      link: "#",
      github: "https://github.com/BalajiNRaj/platform-enhancement",
      image: "/projects/platform.png"
    },
    {
      title: "Import Automation",
      description: "ML • Automation • Customer Delight Award",
      period: "2020 - 2021",
      year: 2020,
      details: [
        "Developed ML-based automated file processing system for data imports",
        "Implemented SHA key generation for unique file identification and rule configuration",
        "Built SpringBoot application for handling complex automation processes",
        "Won Customer Delight Award for significant time-saving automation features"
      ],
      technologies: ["Spring Boot", "REST APIs", "SHA", "Machine Learning"],
      link: "#",
      github: "https://github.com/BalajiNRaj/import-automation",
      image: "/projects/import-automation.png"
    },
    {
      title: "External API Platform",
      description: "API Security • Integration • Authentication",
      period: "2019 - 2020",
      year: 2019,
      details: [
        "Developed robust and secure APIs for CRM customer access",
        "Implemented JWT-based authentication with client ID and secret system",
        "Created data migration APIs with Swagger documentation",
        "Built custom exception handling for detailed error reporting"
      ],
      technologies: ["Spring Boot", "REST APIs", "JWT", "Swagger", "Postman"],
      link: "#",
      github: "https://github.com/BalajiNRaj/external-api-platform",
      image: "/projects/api-platform.png"
    },
    {
      title: "MS Office Add-in",
      description: "PowerPoint Integration • Content Management • VSTO",
      period: "2018 - 2019",
      year: 2018,
      details: [
        "Integrated content library into Microsoft PowerPoint using VSTO Add-in",
        "Developed using C# for seamless Office integration",
        "Implemented content modification and proposal building features",
        "Created custom XML parts for saving required information"
      ],
      technologies: ["MS PPT", "VSTO", "XML", "C#"],
      link: "#",
      github: "https://github.com/BalajiNRaj/ms-office-addin",
      image: "/projects/office-addin.png"
    },
    {
      title: "Electronic Signature",
      description: "Document Signing • Integration • PDF Processing",
      period: "2018",
      year: 2018,
      details: [
        "Integrated E-Sign functionality for proposal document signing",
        "Implemented document sharing and collaboration features",
        "Developed drag-and-drop interface for signature placement",
        "Created PDF download capability with embedded signatures"
      ],
      technologies: ["PDF", "Canvas"],
      link: "#",
      github: "https://github.com/BalajiNRaj/e-signature",
      image: "/projects/e-signature.png"
    },
    {
      title: "Other Notable Contributions",
      description: "Migration • Performance • Support",
      period: "2018 - Present",
      year: 2018,
      details: [
        "Led migration from AngularJS to React, improving application performance",
        "Enhanced SOLR Stemming process with Hunspell Filter Factory implementation",
        "Created Email velocity templates for customer communications",
        "Provided on-call support and resolved customer support tickets"
      ],
      technologies: ["React", "AngularJS", "SOLR", "Velocity"],
      link: "#",
      github: "https://github.com/BalajiNRaj/other-contributions",
      image: "/projects/other.png"
    }
  ];
  
  // Extract unique years and technologies for filters
  const uniqueYears = Array.from(new Set(projects.map(project => project.year))).sort((a, b) => b - a);
  const uniqueTechnologies = Array.from(new Set(projects.flatMap(project => project.technologies))).sort();
  
  // Apply filters and sort
  const filteredProjects = projects
    .filter(project => {
      // Search term
      const searchMatch = searchTerm === '' || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // Year filter
      const yearMatch = selectedYear === 'all' || project.year.toString() === selectedYear;
      
      // Technology filter
      const techMatch = selectedTech === 'all' || project.technologies.includes(selectedTech);
      
      return searchMatch && yearMatch && techMatch;
    })
    .sort((a, b) => {
      if (sortOrder === 'newest') {
        return b.year - a.year;
      } else {
        return a.year - b.year;
      }
    });
  
  // Featured projects
  const featuredProjects = projects.filter(project => project.featured);
  
  // Function to handle mouse move for card effects
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };
  
  // Group projects by year for timeline view
  const projectsByYear = filteredProjects.reduce((acc, project) => {
    const year = project.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {} as Record<number, Project[]>);
  
  // Sort years in descending order
  const years = Object.keys(projectsByYear).map(Number).sort((a, b) => b - a);
  
  // Handle opening modal with project details
  const openProjectModal = (project: Project) => {
    setModalProject(project);
    setShowModal(true);
  };
  
  return (
    <Box className="projects-page">
      {/* Hero Section with Parallax */}
      <motion.div 
        ref={heroRef}
        className="hero-section"
        style={{ opacity, scale, y }}
      >
        <Box className="hero-background">
          <Box className="grid-pattern" />
          <Box className="circle1" />
          <Box className="circle2" />
          <Box className="circle3" />
        </Box>
        
        <Container size="4" className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading size="9" className="gradient-heading">
              My Projects
            </Heading>
            <Text size="5" as="p" className="hero-text">
              Explore my work in AI, automation, and enterprise solutions
            </Text>
          </motion.div>
        </Container>
      </motion.div>
      
      {/* Featured Projects Section */}
      <Box id="featured" className="featured-section">
        <Container size="4" py="9">
          <Heading size="8" mb="4" className="section-heading">Featured Projects</Heading>
          
          <Box className="featured-project">
            {featuredProjects.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="featured-card"
              >
                <Box className="featured-content">
                  <Badge size="2" variant="solid" className="featured-badge">
                    FEATURED
                  </Badge>
                  <Heading size="6" mb="2">{featuredProjects[0].title}</Heading>
                  <Text size="3" as="p" mb="4" color="gray">
                    {featuredProjects[0].description}
                  </Text>
                  
                  <Flex gap="2" wrap="wrap" mb="4">
                    {featuredProjects[0].technologies.slice(0, 6).map((tech, idx) => (
                      <Badge key={idx} size="2" variant="soft" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                    {featuredProjects[0].technologies.length > 6 && (
                      <Badge size="2" variant="soft">+{featuredProjects[0].technologies.length - 6} more</Badge>
                    )}
                  </Flex>
                  
                  <Box className="achievements-list">
                    {featuredProjects[0].details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="achievement-item"
                      >
                        <Box className="achievement-bullet" />
                        <Text size="2">{detail}</Text>
                      </motion.div>
                    ))}
                  </Box>
                  
                  <Flex gap="3" mt="5">
                    <Button variant="solid" size="2" asChild>
                      <Link href={featuredProjects[0].link}>
                        <GlobeIcon width="16" height="16" />
                        View Project
                      </Link>
                    </Button>
                    <Button variant="outline" size="2" asChild>
                      <Link href={featuredProjects[0].github}>
                        <GitHubLogoIcon width="16" height="16" />
                        GitHub
                      </Link>
                    </Button>
                    <Button variant="ghost" size="2" onClick={() => openProjectModal(featuredProjects[0])}>
                      View Details
                    </Button>
                  </Flex>
                </Box>
                
                <Box className="featured-image-container">
                  <Box className="featured-image-placeholder" />
                </Box>
              </motion.div>
            )}
          </Box>
        </Container>
      </Box>
      
      {/* Project Filter Controls */}
      <Box id="all-projects" className="filter-section">
        <Container size="4" py="6">
          <Flex direction={{ initial: 'column', sm: 'row' }} justify="between" align="center" gap="4" mb="6">
            <Heading size="6">All Projects</Heading>
          </Flex>
          
          {/* Grid View */}
          {viewMode === 'grid' && (
            <AnimatePresence mode="wait">
              <motion.div
                key="grid-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Grid columns={{ initial: "1", sm: "2", lg: "3" }} gap="6">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <Card 
                        size="2" 
                        className="project-card"
                        onMouseMove={handleMouseMove}
                      >
                        <motion.div
                          className="card-shine"
                          style={{
                            background: useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(var(--blue-6-rgb), 0.15) 0%, rgba(var(--blue-6-rgb), 0) 80%)`
                          }}
                        />
                        
                        <Flex direction="column" gap="4">
                          <Box>
                            <Flex justify="between" align="start" mb="2">
                              <Heading size="4" className="project-title">{project.title}</Heading>
                              {project.period && (
                                <Badge size="1" variant="soft" className="period-badge">
                                  {project.period}
                                </Badge>
                              )}
                            </Flex>
                            <Text size="2" color="gray" as="p" mb="3">
                              {project.description}
                            </Text>
                          </Box>
                          
                          <Box>
                            <Text size="2" weight="bold" mb="2">Key Achievements:</Text>
                            <Flex direction="column" gap="2">
                              {project.details.slice(0, 2).map((detail, idx) => (
                                <Flex key={idx} gap="2" align="center">
                                  <Box className="bullet-point" />
                                  <Text as="p" color="gray" size="2">{detail}</Text>
                                </Flex>
                              ))}
                              {project.details.length > 2 && (
                                <Button variant="ghost" size="1" onClick={() => openProjectModal(project)}>
                                  +{project.details.length - 2} more achievements
                                </Button>
                              )}
                            </Flex>
                          </Box>
                          
                          <Box>
                            <Text size="2" weight="bold" mb="2">Technologies:</Text>
                            <Flex gap="2" wrap="wrap">
                              {project.technologies.slice(0, 5).map((tech, idx) => (
                                <Badge key={idx} size="1" variant="soft" className="tech-badge">
                                  {tech}
                                </Badge>
                              ))}
                              {project.technologies.length > 5 && (
                                <Badge size="1" variant="soft">+{project.technologies.length - 5}</Badge>
                              )}
                            </Flex>
                          </Box>
                          
                          <Flex gap="2" mt="2">
                            <Button variant="soft" size="1" asChild>
                              <Link href={project.link}>
                                <GlobeIcon width="14" height="14" />
                                View Project
                              </Link>
                            </Button>
                            <Button variant="outline" size="1" asChild>
                              <Link href={project.github}>
                                <GitHubLogoIcon width="14" height="14" />
                                GitHub
                              </Link>
                            </Button>
                            <Button variant="ghost" size="1" onClick={() => openProjectModal(project)}>
                              Details
                            </Button>
                          </Flex>
                        </Flex>
                      </Card>
                    </motion.div>
                  ))}
                </Grid>
              </motion.div>
            </AnimatePresence>
          )}
          
          {/* Timeline View */}
          {viewMode === 'timeline' && (
            <AnimatePresence mode="wait">
              <motion.div
                key="timeline-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="timeline-container"
              >
                {years.map((year, yearIndex) => (
                  <Box key={year} className="timeline-year">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                      className="year-label"
                    >
                      <Heading size="5">{year}</Heading>
                    </motion.div>
                    
                    <Box className="timeline-items">
                      {projectsByYear[year].map((project, projectIndex) => (
                        <motion.div
                          key={projectIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: projectIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="timeline-item"
                        >
                          <Card size="2" className="timeline-card">
                            <Flex direction="column" gap="3">
                              <Heading size="3">{project.title}</Heading>
                              <Text size="2" color="gray">{project.description}</Text>
                              
                              <Flex gap="2" wrap="wrap">
                                {project.technologies.slice(0, 3).map((tech, idx) => (
                                  <Badge key={idx} size="1" variant="soft" className="tech-badge">
                                    {tech}
                                  </Badge>
                                ))}
                                {project.technologies.length > 3 && (
                                  <Badge size="1" variant="soft">+{project.technologies.length - 3}</Badge>
                                )}
                              </Flex>
                              
                              <Flex gap="2">
                                <Button variant="soft" size="1" onClick={() => openProjectModal(project)}>
                                  View Details
                                </Button>
                              </Flex>
                            </Flex>
                          </Card>
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
          
          {filteredProjects.length === 0 && (
            <Box className="no-results">
              <Text size="3" color="gray">No projects match your filters</Text>
              <Button variant="soft" size="2" onClick={() => {
                setSearchTerm('');
                setSelectedYear('all');
                setSelectedTech('all');
              }}>
                Clear Filters
              </Button>
            </Box>
          )}
        </Container>
      </Box>
      
      {/* Project Detail Modal */}
      <AnimatePresence>
        {showModal && modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <Button variant="ghost" size="1" className="modal-close" onClick={() => setShowModal(false)}>
                <Cross2Icon />
              </Button>
              
              <Box className="modal-header">
                <Heading size="6">{modalProject.title}</Heading>
                <Badge size="2" variant="soft">{modalProject.period}</Badge>
              </Box>
              
              <Text size="3" as="p" mb="4">
                {modalProject.description}
              </Text>
              
              <Box className="modal-section">
                <Heading size="3" mb="3">Technologies</Heading>
                <Flex gap="2" wrap="wrap">
                  {modalProject.technologies.map((tech: string, idx: number) => (
                    <Badge key={idx} size="2" variant="soft" className="tech-badge">
                      {tech}
                    </Badge>
                  ))}
                </Flex>
              </Box>
              
              <Box className="modal-section">
                <Heading size="3" mb="3">Key Achievements</Heading>
                <Grid columns={{ initial: "1", sm: "2" }} gap="3">
                  {modalProject.details.map((detail: string, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="achievement-card"
                    >
                      <Box className="achievement-icon">
                        <CheckIcon width="16" height="16" />
                      </Box>
                      <Text size="2">{detail}</Text>
                    </motion.div>
                  ))}
                </Grid>
              </Box>
              
              <Flex gap="3" mt="6" justify="end">
                <Button variant="outline" asChild>
                  <Link href={modalProject.github}>
                    <GitHubLogoIcon width="16" height="16" />
                    View on GitHub
                  </Link>
                </Button>
                <Button variant="solid" asChild>
                  <Link href={modalProject.link}>
                    <GlobeIcon width="16" height="16" />
                    Visit Project
                  </Link>
                </Button>
              </Flex>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Custom styles for dark mode */}
      <style jsx global>{`
        .projects-page {
          background-color: var(--slate-1);
          min-height: 100vh;
        }
        
        [data-theme="dark"] .projects-page {
          background-color: var(--slate-2);
        }
        
        .project-card {
          background: var(--slate-2);
          border: 1px solid var(--slate-4);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        [data-theme="dark"] .project-card {
          background: var(--slate-3);
          border-color: var(--slate-6);
        }
        
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-color: var(--blue-6);
        }
        
        .card-shine {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }
        
        .tech-badge {
          transition: all 0.2s ease;
        }
        
        .tech-badge:hover {
          transform: translateY(-2px);
        }
        
        .bullet-point {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-9);
          flex-shrink: 0;
          margin-top: 6px;
        }
        
        .hero-section {
          position: relative;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 0;
          background: linear-gradient(to bottom right, var(--slate-1), var(--slate-2));
          overflow: hidden;
        }
        
        [data-theme="dark"] .hero-section {
          background: linear-gradient(to bottom right, var(--slate-2), var(--slate-3));
        }
        
        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }
        
        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(var(--slate-5) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.2;
        }
        
        .circle1, .circle2, .circle3 {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
        }
        
        .circle1 {
          width: 300px;
          height: 300px;
          background: var(--blue-9);
          top: -100px;
          right: -50px;
        }
        
        .circle2 {
          width: 200px;
          height: 200px;
          background: var(--blue-6);
          bottom: -50px;
          left: 10%;
        }
        
        .circle3 {
          width: 150px;
          height: 150px;
          background: var(--cyan-9);
          top: 30%;
          left: 20%;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }
        
        .gradient-heading {
          background: linear-gradient(135deg, var(--blue-9), var(--cyan-9));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }
        
        .hero-text {
          max-width: 600px;
          margin: 0 auto;
          color: var(--slate-11);
        }
        
        [data-theme="dark"] .hero-text {
          color: var(--slate-9);
        }
        
        .featured-section {
          background: linear-gradient(to bottom, var(--slate-1), var(--slate-2));
          position: relative;
          padding: 2rem 0;
        }
        
        [data-theme="dark"] .featured-section {
          background: linear-gradient(to bottom, var(--slate-2), var(--slate-3));
        }
        
        .featured-card {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          background: linear-gradient(135deg, var(--slate-2), var(--slate-3));
          border-radius: var(--radius-4);
          padding: 2rem;
          border: 1px solid var(--slate-4);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          position: relative;
          overflow: hidden;
        }
        
        [data-theme="dark"] .featured-card {
          background: linear-gradient(135deg, var(--slate-3), var(--slate-4));
          border-color: var(--slate-6);
        }
        
        @media (min-width: 768px) {
          .featured-card {
            grid-template-columns: 1.5fr 1fr;
          }
        }
        
        .featured-badge {
          display: inline-block;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--blue-9), var(--cyan-9));
        }
        
        .featured-content {
          position: relative;
          z-index: 2;
        }
        
        .featured-image-container {
          position: relative;
          min-height: 250px;
        }
        
        .featured-image-placeholder {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--slate-4), var(--slate-5));
          border-radius: var(--radius-3);
        }
        
        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        
        .achievement-item {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }
        
        .achievement-bullet {
          width: 8px;
          height: 8px;
          background: var(--blue-9);
          border-radius: 50%;
          margin-top: 6px;
        }
        
        .filter-section {
          background: var(--slate-1);
          position: relative;
          border-top: 1px solid var(--slate-4);
        }
        
        [data-theme="dark"] .filter-section {
          background: var(--slate-2);
          border-color: var(--slate-5);
        }
        
        .search-box {
          position: relative;
          width: 100%;
          max-width: 400px;
        }
        
        .search-icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--slate-9);
          z-index: 2;
        }
        
        .search-input {
          width: 100%;
          padding-left: 36px;
        }
        
        .clear-button {
          position: absolute;
          right: 5px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
        }
        
        .timeline-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 1rem 0;
        }
        
        .timeline-year {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 1.5rem;
        }
        
        @media (max-width: 768px) {
          .timeline-year {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
        }
        
        .year-label {
          position: sticky;
          top: 100px;
          height: fit-content;
          padding: 0.5rem 0;
        }
        
        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
        }
        
        .timeline-items::before {
          content: '';
          position: absolute;
          left: -13px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--slate-5);
        }
        
        @media (max-width: 768px) {
          .timeline-items::before {
            display: none;
          }
        }
        
        .timeline-item {
          position: relative;
        }
        
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -19px;
          top: 15px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--blue-9);
          z-index: 1;
        }
        
        @media (max-width: 768px) {
          .timeline-item::before {
            display: none;
          }
        }
        
        .timeline-card {
          margin-left: 1rem;
          border: 1px solid var(--slate-4);
          transition: all 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .timeline-card {
            margin-left: 0;
          }
        }
        
        .timeline-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          border-color: var(--blue-6);
        }
        
        .no-results {
          text-align: center;
          padding: 3rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          padding: 1rem;
        }
        
        .modal-content {
          background: var(--slate-1);
          border-radius: var(--radius-4);
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 2rem;
          position: relative;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }
        
        [data-theme="dark"] .modal-content {
          background: var(--slate-2);
        }
        
        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          z-index: 2;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding-right: 2rem;
        }
        
        .modal-section {
          margin-top: 2rem;
        }
        
        .achievement-card {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          background: var(--slate-2);
          padding: 1rem;
          border-radius: var(--radius-3);
          border: 1px solid var(--slate-4);
        }
        
        [data-theme="dark"] .achievement-card {
          background: var(--slate-3);
          border-color: var(--slate-5);
        }
        
        .achievement-icon {
          background: var(--blue-5);
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }
        
        [data-theme="dark"] .achievement-icon {
          background: var(--blue-9);
        }
        
        /* Responsive design adjustments */
        @media (max-width: 768px) {
          .hero-section {
            min-height: 50vh;
            padding: 3rem 0;
          }
          
          .modal-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </Box>
  );
}

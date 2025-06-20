'use client';

import { Box, Container, Flex, Heading, Text, Grid, Button, Link, Card, Badge } from "@radix-ui/themes";
import { ArrowRightIcon, GitHubLogoIcon, ExternalLinkIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionCard = motion(Card);

interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

export default function ProjectsSection() {
  // Project data
  const projects: Project[] = [
    {
      title: "AI-Powered Answer Agent",
      description: "Automated system using RAG and OpenAI's Ada model for intelligent response generation with Microsoft recognition.",
      image: "/window.svg",
      imageAlt: "AI-Powered Answer Agent",
      technologies: ["OpenAI", "SOLR", "RAG", "ML"],
      githubUrl: "https://github.com/BalajiNRaj/project1",
      demoUrl: "https://project1-demo.com"
    },
    {
      title: "Profile Center (Trust Center)",
      description: "AI-powered security profiles with anonymous viewer tracking, Salesforce/Slack integration, and ChatGPT features.",
      image: "/file.svg",
      imageAlt: "Profile Center (Trust Center)",
      technologies: ["OpenAI", "Spring Boot", "Slack", "Salesforce"],
      githubUrl: "https://github.com/BalajiNRaj/project2",
      demoUrl: "https://project2-demo.com"
    },
    {
      title: "Agent Studio Platform",
      description: "Multiple AI-driven agents including Dynamic Report Agent, Executive Summary Agent, and Analysis Agent.",
      image: "/globe.svg",
      imageAlt: "Agent Studio Platform",
      technologies: ["AI/ML", "Analytics", "Automation", "React"],
      githubUrl: "https://github.com/BalajiNRaj/project3",
      demoUrl: "https://project3-demo.com"
    }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const container = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <Box 
      id="projects" 
      className="projects-section"
      style={{ 
        position: 'relative',
        paddingTop: '120px',
        paddingBottom: '120px',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background element */}
      <Box style={{
        position: 'absolute',
        width: '40%',
        height: '50%',
        right: 0,
        top: 0,
        background: 'var(--slate-3)',
        opacity: 0.3,
        filter: 'blur(120px)',
        zIndex: 0,
        borderRadius: '50% 0 0 50%',
      }} />
      
      <Container size="3" style={{ position: 'relative', zIndex: 1 }}>
        <MotionFlex 
          direction="column"
          align="center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginBottom: '80px' }}
        >
          <MotionHeading 
            size="1"
            color="blue"
            variants={fadeIn}
            style={{ 
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Featured Projects
          </MotionHeading>
          
          <MotionHeading 
            size={{ initial: "6", sm: "7" }}
            variants={fadeIn}
            className="gradient-text"
            style={{ 
              marginBottom: '24px',
              textAlign: 'center',
            }}
          >
            AI & Enterprise Solutions
          </MotionHeading>
          
          <MotionText
            size="3"
            variants={fadeIn}
            style={{ 
              maxWidth: '650px',
              textAlign: 'center',
              lineHeight: 1.6,
              color: 'var(--slate-11)'
            }}
          >
            Leveraging Java, React, and cutting-edge AI technologies including LLMs and RAG architecture
            to build intelligent enterprise solutions that solve real-world problems.
          </MotionText>
        </MotionFlex>
        
        {/* Projects Grid */}
        <MotionBox
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginBottom: '60px' }}
        >
          <Grid columns={{ initial: "1", md: "3" }} gapX="6" gapY="6">
            {projects.map((project, index) => (
              <MotionCard
                key={project.title}
                variants={fadeIn}
                variant="ghost"
                className="project-card"
                style={{
                  border: '1px solid var(--slate-4)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
                  borderColor: 'var(--blue-6)',
                }}
                transition={{ duration: 0.3 }}
              >
                <Box 
                  style={{ 
                    position: 'relative', 
                    height: '240px', 
                    overflow: 'hidden',
                    background: index === 0 ? 'var(--blue-3)' : index === 1 ? 'var(--violet-3)' : 'var(--green-3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={120}
                    height={120}
                    style={{ 
                      opacity: 0.8,
                      filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.1))',
                      transition: 'all 0.5s ease',
                    }}
                    className="project-image"
                    priority={index < 2}
                  />
                </Box>
                
                <Box p="5">
                  <Heading size="4" style={{ marginBottom: '12px' }}>
                    {project.title}
                  </Heading>
                  
                  <Text as="p" size="2" style={{ marginBottom: '24px', lineHeight: 1.6, color: 'var(--slate-11)' }}>
                    {project.description}
                  </Text>
                  
                  <Flex gap="2" wrap="wrap" style={{ marginBottom: '24px' }}>
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" radius="full">
                        {tech}
                      </Badge>
                    ))}
                  </Flex>
                  
                  <Flex gap="3">
                    <Link 
                      href={project.demoUrl} 
                      target="_blank"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--blue-9)',
                        fontSize: '14px',
                        fontWeight: 500,
                      }}
                      className="project-link"
                    >
                      View Project
                      <ExternalLinkIcon width="14" height="14" />
                    </Link>
                    
                    <Link 
                      href={project.githubUrl} 
                      target="_blank"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--slate-11)',
                        fontSize: '14px',
                        fontWeight: 500,
                      }}
                      className="project-link"
                    >
                      Source Code
                      <GitHubLogoIcon width="14" height="14" />
                    </Link>
                  </Flex>
                </Box>
              </MotionCard>
            ))}
          </Grid>
        </MotionBox>
        
        <MotionFlex 
          justify="center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Button 
            size="3" 
            variant="outline"
            style={{ 
              borderColor: 'var(--slate-6)',
              color: 'var(--slate-12)',
              fontWeight: 500,
              paddingLeft: '24px',
              paddingRight: '24px',
            }}
            className="view-all-button"
            asChild
          >
            <Link href="/projects">
              <Flex align="center" gap="2">
                View All Projects
                <ArrowRightIcon />
              </Flex>
            </Link>
          </Button>
        </MotionFlex>
      </Container>
      
      {/* Custom styles */}
      <style jsx global>{`
        .projects-section {
          background: var(--slate-1);
        }
        
        [data-theme="dark"] .projects-section {
          background: var(--slate-2);
        }
        
        .project-card {
          background: var(--slate-2);
        }
        
        [data-theme="dark"] .project-card {
          background: var(--slate-3);
          border-color: var(--slate-6);
        }
        
        .project-image {
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .project-card:hover .project-image {
          transform: scale(1.15) translateY(-10px);
          opacity: 1 !important;
          filter: drop-shadow(0 12px 30px rgba(0, 0, 0, 0.2)) !important;
        }
        
        .project-link {
          transition: all 0.3s ease;
        }
        
        .project-link:hover {
          color: var(--blue-10);
          transform: translateX(3px);
        }
        
        .view-all-button {
          transition: all 0.3s ease !important;
        }
        
        .view-all-button:hover {
          transform: translateY(-3px) !important;
          border-color: var(--blue-6) !important;
          color: var(--blue-9) !important;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06) !important;
        }
      `}</style>
    </Box>
  );
}

'use client';

import { Box, Container, Heading, Text, Card, Grid, Badge, Flex, Separator, ScrollArea, AspectRatio, Link, IconButton, Section, Tabs } from "@radix-ui/themes";
import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon, GlobeIcon, GearIcon, RocketIcon, PersonIcon,
         BackpackIcon, MagicWandIcon, LightningBoltIcon, CodeIcon, DownloadIcon, FileIcon, ChevronRightIcon,
         ChatBubbleIcon, CalendarIcon, StarFilledIcon, HeartFilledIcon, CheckIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import Image from 'next/image';
import styles from "@/app/animations.module.css";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useRef, useEffect, useMemo } from 'react';

export default function AboutPage() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("profile");
  const [isInView, setIsInView] = useState({
    hero: false,
    journey: false,
    skills: false,
    experience: false,
    education: false,
  });

  // Create refs outside of useMemo
  const heroRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  
  // Store refs in a object for easier access
  const sectionRefs = useMemo(() => ({
    hero: heroRef,
    journey: journeyRef,
    skills: skillsRef,
    experience: experienceRef,
    education: educationRef,
  }), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setIsInView(prev => ({
              ...prev,
              [id]: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs]);

  const workExperience = [
    {
      company: "Thomson Reuters",
      position: "Technical Lead",
      period: "2022 - Present",
      description: "Leading the development of AI-powered search solutions, integrating LLMs and RAG architecture for the Trust Center platform. Mentoring junior developers and architecting scalable solutions.",
      achievements: [
        "Game Changer Award for AI Innovation (2024)",
        "Best Team Award - Trust Center (2023)",
        "Improved search accuracy by 45% using RAG architecture"
      ],
      skills: ["Java", "Spring Boot", "React", "LLMs", "MongoDB", "Solr"]
    },
    {
      company: "IBM",
      position: "Senior Software Engineer",
      period: "2019 - 2022",
      description: "Developed enterprise applications for financial clients using Java and React. Implemented microservices architecture and REST APIs for scalable solutions.",
      achievements: [
        "Customer Delight Award (2021)",
        "Reduced application response time by 35%",
        "Mentored 5 junior developers"
      ],
      skills: ["Java", "React", "Node.js", "PostgreSQL", "Docker"]
    },
    {
      company: "Tata Consultancy Services",
      position: "Software Engineer",
      period: "2018 - 2019",
      description: "Developed backend services for a retail client using Java and Spring Boot. Created RESTful APIs and implemented database optimizations.",
      achievements: [
        "Best Newcomer Award (2018)",
        "Implemented CI/CD pipeline reducing deployment time by 40%"
      ],
      skills: ["Java", "Spring Boot", "SQL", "Jenkins"]
    }
  ];

  return (
    <main>
      {/* Hero Section with Glass Card */}        <Box 
          id="hero" 
          ref={sectionRefs.hero} 
          py={{ initial: "7", sm: "8", md: "9" }} 
          className={`${styles.fadeIn} ${isInView.hero ? styles.visible : ''}`}
          style={{
            background: 'var(--gradient-background)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background elements */}
          <Box 
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle at 20% 110%, var(--blue-4) 0%, transparent 40%), 
                         radial-gradient(circle at 80% 20%, var(--accent-4) 0%, transparent 50%)`,
              opacity: theme === 'dark' ? 0.15 : 0.3,
              zIndex: 0,
            }}
          />          {/* Dot pattern overlay */}
          <Box 
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `radial-gradient(circle at 20px 20px, ${theme === 'dark' ? 'rgba(255, 255, 255, 0.07)' : 'var(--slate-6)'} 2px, transparent 0)`,
              backgroundSize: '40px 40px',
              opacity: theme === 'dark' ? 0.15 : 0.1,
              zIndex: 0,
            }}
          />
        
        <Container size="3" style={{ position: 'relative', zIndex: 1 }}>
          <Grid columns={{ initial: "1", md: "2" }} gap="8" align="center">
            {/* Profile image */}
            <Box                className={`profile-image-card ${styles.fadeInScale} ${isInView.hero ? styles.visible : ''}`}>
              <Card 
                style={{
                  maxWidth: '480px',
                  margin: '0 auto',
                  overflow: 'hidden',
                  borderRadius: '16px',
                  boxShadow: theme === 'dark' 
                    ? '0 20px 50px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(var(--blue-6-rgb), 0.05)'
                    : 'var(--shadow-5)',
                  background: 'var(--glass-background)',
                  backdropFilter: 'blur(10px)',
                  border: theme === 'dark' 
                    ? '1px solid rgba(var(--blue-6-rgb), 0.1)'
                    : '1px solid var(--glass-border)',
                  transform: theme === 'dark' ? 'perspective(1000px) rotateY(-2deg)' : 'none',
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                }}
                className="profile-image-card"
              >
                <AspectRatio ratio={1/1}>
                  <Box style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image 
                      src="/my-photo.png" 
                      alt="Balaji Nagarajan" 
                      fill 
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                  </Box>
                </AspectRatio>
              </Card>
            </Box>

            {/* Profile text */}
            <Flex 
              direction="column" 
              gap={{ initial: "4", sm: "5" }}
              className={`${styles.fadeInRight} ${isInView.hero ? styles.visible : ''}`}
            >
              <Box>
                <Badge size="2" color="purple" mb="3">ABOUT ME</Badge>
                <Heading 
                  size={{ initial: "8", sm: "9" }} 
                  mb="3"
                  className="gradient-text"
                >
                  Hi! I'm Balaji Nagarajan
                </Heading>
                <Text 
                  size={{ initial: "3", sm: "4" }}
                  style={{ color: 'var(--slate-11)', maxWidth: '800px', lineHeight: '1.6' }}
                >
                  A passionate Technical Lead with expertise in AI/ML and Full-Stack Development, with over 6 years 
                  of experience in building enterprise solutions.
                </Text>
              </Box>

              <Grid columns={{ initial: "1", sm: "2" }} gap="4" mt="2">
                <Card 
                  style={{ 
                    background: 'var(--glass-background)', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--glass-border)',
                  }}
                  className={`${styles.fadeInUp} ${styles.delay1} ${isInView.hero ? styles.visible : ''}`}
                >
                  <Flex align="center" gap="3" p="3">
                    <Box 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        background: 'var(--blue-5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <BackpackIcon width="20" height="20" color="var(--blue-11)" />
                    </Box>
                    <Box>
                      <Text size="2" weight="medium" color="gray">Experience</Text>
                      <Text size="4" weight="bold">6+ Years</Text>
                    </Box>
                  </Flex>
                </Card>

                <Card 
                  style={{ 
                    background: 'var(--glass-background)', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--glass-border)',
                  }}
                  className={`${styles.fadeInUp} ${styles.delay2} ${isInView.hero ? styles.visible : ''}`}
                >
                  <Flex align="center" gap="3" p="3">
                    <Box 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        background: 'var(--purple-5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <MagicWandIcon width="20" height="20" color="var(--purple-11)" />
                    </Box>
                    <Box>
                      <Text size="2" weight="medium" color="gray">Projects</Text>
                      <Text size="4" weight="bold">15+ Projects</Text>
                    </Box>
                  </Flex>
                </Card>
              </Grid>

              <Grid columns={{ initial: "2", sm: "4" }} gap="4" mt="2" className={styles.staggered}>
                <Link href="mailto:balaji.nagarajan@gmail.com" className={`${styles.staggeredAnimation} ${styles.delay1} ${isInView.hero ? styles.visible : ''}`}>
                  <Flex align="center" gap="2">
                    <EnvelopeClosedIcon />
                    <Text size="2">balaji.nagarajan@gmail.com</Text>
                  </Flex>
                </Link>
                <Flex align="center" gap="2" className={`${styles.staggeredAnimation} ${styles.delay2} ${isInView.hero ? styles.visible : ''}`}>
                  <GlobeIcon />
                  <Text size="2">Coimbatore, Tamil Nadu</Text>
                </Flex>
                <Link href="https://www.linkedin.com/in/balaji-nagarajan-607416103/" target="_blank" className={`${styles.staggeredAnimation} ${styles.delay3} ${isInView.hero ? styles.visible : ''}`}>
                  <Flex align="center" gap="2">
                    <LinkedInLogoIcon />
                    <Text size="2">in/balaji-nagarajan</Text>
                  </Flex>
                </Link>
                <Link href="https://github.com/BalajiNRaj" target="_blank" className={`${styles.staggeredAnimation} ${styles.delay4} ${isInView.hero ? styles.visible : ''}`}>
                  <Flex align="center" gap="2">
                    <GitHubLogoIcon />
                    <Text size="2">balaji-nagarajan</Text>
                  </Flex>
                </Link>
              </Grid>

              <Box mt="3">
                <Link href="/Balaji Nagarajan.pdf" target="_blank">
                  <Button 
                    size="3" 
                    className={`download-cv-btn ${styles.fadeInUp} ${styles.delay5} ${isInView.hero ? styles.visible : ''}`}
                  >
                    <DownloadIcon /> Download CV
                  </Button>
                </Link>
              </Box>
            </Flex>
          </Grid>
        </Container>
      </Box>

      {/* My Journey Section */}
      <Box 
        id="journey" 
        ref={sectionRefs.journey}
        py={{ initial: "7", sm: "8", md: "9" }}
        style={{ background: 'var(--background-subtle)' }}
      >
        <Container size="3">
          <Flex direction="column" gap="6" align="center">
            <Flex direction="column" align="center" className={`${styles.fadeInUp} ${isInView.journey ? styles.visible : ''}`}>
              <Badge size="2" color="blue" mb="2">MY JOURNEY</Badge>
              <Heading 
                size={{ initial: "6", sm: "7", md: "8" }}
                align="center" 
                mb="3"
                className="gradient-text"
              >
                Professional Growth
              </Heading>
              <Text 
                size="3"
                align="center"
                style={{ 
                  color: 'var(--slate-11)', 
                  maxWidth: '750px', 
                  lineHeight: '1.6' 
                }}
              >
                My professional journey has been focused on building innovative solutions at the intersection of AI and enterprise software development, consistently delivering value through technical excellence and team leadership.
              </Text>
            </Flex>

            <Tabs.Root defaultValue="profile">
              <Tabs.List 
                style={{ 
                  background: 'var(--glass-background)', 
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '12px',
                  padding: '4px',
                  boxShadow: theme === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none',
                }}
                className={`${styles.fadeInUp} ${styles.delay1} ${isInView.journey ? styles.visible : ''}`}
              >
                <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
                <Tabs.Trigger value="expertise">Expertise</Tabs.Trigger>
                <Tabs.Trigger value="approach">My Approach</Tabs.Trigger>
              </Tabs.List>
              
              <Box pt="6">
                <Tabs.Content value="profile" className={`${styles.fadeIn} ${isInView.journey ? styles.visible : ''}`}>
                  <Card 
                    style={{ 
                      background: 'var(--glass-background)', 
                      backdropFilter: 'blur(10px)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '16px',
                      boxShadow: theme === 'dark' ? '0 4px 30px rgba(0, 0, 0, 0.15)' : 'var(--shadow-5)',
                    }}
                  >
                    <ScrollArea 
                      type="hover" 
                      scrollbars="vertical" 
                      style={{ height: 'auto', maxHeight: '400px' }}
                    >
                      <Box p="5">
                        <Heading size="4" mb="3">About Me</Heading>
                        <Text as="p" size="3" mb="4" style={{ color: 'var(--slate-11)', lineHeight: '1.7' }}>
                          I'm a Technical Lead specialized in AI/ML integration and Full-Stack development with over 6 years of hands-on experience. My passion lies in creating innovative, user-focused solutions that solve complex business problems through technology.
                        </Text>
                        <Text as="p" size="3" mb="4" style={{ color: 'var(--slate-11)', lineHeight: '1.7' }}>
                          Throughout my career at Thomson Reuters, IBM, and TCS, I've consistently delivered high-impact projects, from AI-powered search platforms to enterprise-grade financial applications. I excel in architecting scalable systems, optimizing performance, and leading development teams through complex technical challenges.
                        </Text>
                        <Text as="p" size="3" style={{ color: 'var(--slate-11)', lineHeight: '1.7' }}>
                          My technical toolkit includes deep expertise in Java, Spring Boot, React, and Node.js, complemented by specialized knowledge in AI technologies like LLMs, RAG architecture, and vector search. I'm committed to continuous learning and staying at the forefront of emerging technologies to deliver cutting-edge solutions.
                        </Text>
                      </Box>
                    </ScrollArea>
                  </Card>
                </Tabs.Content>
                
                <Tabs.Content value="expertise" className={`${styles.fadeIn} ${isInView.journey ? styles.visible : ''}`}>
                  <Card 
                    style={{ 
                      background: 'var(--glass-background)', 
                      backdropFilter: 'blur(10px)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '16px',
                      boxShadow: theme === 'dark' ? '0 4px 30px rgba(0, 0, 0, 0.15)' : 'var(--shadow-5)',
                    }}
                  >
                    <ScrollArea 
                      type="hover" 
                      scrollbars="vertical" 
                      style={{ height: 'auto', maxHeight: '400px' }}
                    >
                      <Box p="5">
                        <Grid columns={{ initial: "1", sm: "2" }} gap="5">
                          <Box>
                            <Flex gap="3" align="center" mb="3">
                              <Box 
                                style={{
                                  width: '40px',
                                  height: '40px',
                                  borderRadius: '8px',
                                  background: 'var(--blue-4)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <CodeIcon width="20" height="20" color="var(--blue-11)" />
                              </Box>
                              <Heading size="3">Full Stack Development</Heading>
                            </Flex>
                            <Text size="2" style={{ color: 'var(--slate-11)', lineHeight: '1.7' }}>
                              Architecting and developing scalable enterprise applications with modern cloud-native technologies and microservices. Expertise in Java, Spring Boot, React, and Node.js for building robust, high-performance systems.
                            </Text>
                          </Box>
                          
                          <Box>
                            <Flex gap="3" align="center" mb="3">
                              <Box 
                                style={{
                                  width: '40px',
                                  height: '40px',
                                  borderRadius: '8px',
                                  background: 'var(--purple-4)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <RocketIcon width="20" height="20" color="var(--purple-11)" />
                              </Box>
                              <Heading size="3">AI Integration</Heading>
                            </Flex>
                            <Text size="2" style={{ color: 'var(--slate-11)', lineHeight: '1.7' }}>
                              Building advanced AI solutions using LLMs, RAG architecture, and custom ML models for enterprise automation and intelligence. Creating context-aware search and recommendation systems.
                            </Text>
                          </Box>
                          
                          <Box>
                            <Flex gap="3" align="center" mb="3">
                              <Box 
                                style={{
                                  width: '40px',
                                  height: '40px',
                                  borderRadius: '8px',
                                  background: 'var(--green-4)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <PersonIcon width="20" height="20" color="var(--green-11)" />
                              </Box>
                              <Heading size="3">Technical Leadership</Heading>
                            </Flex>
                            <Text size="2" style={{ color: 'var(--slate-11)', lineHeight: '1.7' }}>
                              Mentoring teams, driving architectural decisions, and implementing best practices for scalable enterprise solutions. Translating business requirements into technical specifications.
                            </Text>
                          </Box>
                          
                          <Box>
                            <Flex gap="3" align="center" mb="3">
                              <Box 
                                style={{                                width: '40px',
                                height: '40px',
                                borderRadius: '8px',
                                background: 'var(--orange-4)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <LightningBoltIcon width="20" height="20" color="var(--orange-11)" />
                              </Box>
                              <Heading size="3">Performance Optimization</Heading>
                            </Flex>
                            <Text size="2" style={{ color: 'var(--slate-11)', lineHeight: '1.7' }}>
                              Identifying and resolving performance bottlenecks in enterprise applications, optimizing database queries, and implementing caching strategies for improved response times.
                            </Text>
                          </Box>
                        </Grid>
                      </Box>
                    </ScrollArea>
                  </Card>
                </Tabs.Content>
                
                <Tabs.Content value="approach" className={`${styles.fadeIn} ${isInView.journey ? styles.visible : ''}`}>
                  <Card 
                    style={{ 
                      background: 'var(--glass-background)', 
                      backdropFilter: 'blur(10px)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '16px',
                      boxShadow: theme === 'dark' ? '0 4px 30px rgba(0, 0, 0, 0.15)' : 'var(--shadow-5)',
                    }}
                  >
                    <ScrollArea 
                      type="hover" 
                      scrollbars="vertical" 
                      style={{ height: 'auto', maxHeight: '400px' }}
                    >
                      <Box p="5">
                        <Heading size="4" mb="3">My Development Philosophy</Heading>
                        
                        <Flex direction="column" gap="4">
                          <Flex gap="3" align="start">
                            <Box 
                              style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                background: 'var(--blue-4)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                marginTop: '2px',
                              }}
                            >
                              <CheckIcon width="16" height="16" color="var(--blue-11)" />
                            </Box>
                            <Box>
                              <Text size="3" weight="bold" mb="1">User-Centered Design</Text>
                              <Text size="2" style={{ color: 'var(--slate-11)', lineHeight: '1.7' }}>
                                I believe in putting users first, ensuring that every feature and interaction is intuitive, accessible, and addresses real user needs.
                              </Text>
                            </Box>
                          </Flex>
                          
                          <Flex gap="3" align="start">
                            <Box 
                              style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                background: 'var(--purple-4)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                marginTop: '2px',
                              }}
                            >
                              <CheckIcon width="16" height="16" color="var(--purple-11)" />
                            </Box>
                            <Box>
                              <Text size="3" weight="bold" mb="1">Clean, Maintainable Code</Text>
                              <Text size="2" style={{ color: 'var(--slate-11)', lineHeight: '1.7' }}>
                                I prioritize writing clean, well-documented, and testable code that can be easily maintained and extended by the team.
                              </Text>
                            </Box>
                          </Flex>
                          
                          <Flex gap="3" align="start">
                            <Box 
                              style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                background: 'var(--green-4)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                marginTop: '2px',
                              }}
                            >
                              <CheckIcon width="16" height="16" color="var(--green-11)" />
                            </Box>
                            <Box>
                              <Text size="3" weight="bold" mb="1">Continuous Learning</Text>
                              <Text size="2" style={{ color: 'var(--slate-11)', lineHeight: '1.7' }}>
                                I'm committed to staying current with emerging technologies and best practices, adapting and integrating new approaches when they provide value.
                              </Text>
                            </Box>
                          </Flex>
                          
                          <Flex gap="3" align="start">
                            <Box 
                              style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                background: 'var(--orange-4)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                marginTop: '2px',
                              }}
                            >
                              <CheckIcon width="16" height="16" color="var(--orange-11)" />
                            </Box>
                            <Box>
                              <Text size="3" weight="bold" mb="1">Collaborative Problem-Solving</Text>
                              <Text size="2" style={{ color: 'var(--slate-11)', lineHeight: '1.7' }}>
                                I thrive in collaborative environments, believing that diverse perspectives lead to more robust and innovative solutions.
                              </Text>
                            </Box>
                          </Flex>
                        </Flex>
                      </Box>
                    </ScrollArea>
                  </Card>
                </Tabs.Content>
              </Box>
            </Tabs.Root>
          </Flex>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box 
        id="skills" 
        ref={sectionRefs.skills}
        py={{ initial: "7", sm: "8", md: "9" }}
      >
        <Container size="3">
          <Flex direction="column" align="center" gap="6">
            <Flex direction="column" align="center" className={`${styles.fadeInUp} ${isInView.skills ? styles.visible : ''}`}>
              <Badge size="2" color="green" mb="2">MY SKILLS</Badge>
              <Heading 
                size={{ initial: "6", sm: "7", md: "8" }}
                align="center" 
                mb="3"
                className="gradient-text"
              >
                Technical Expertise
              </Heading>
              <Text 
                size="3"
                align="center"
                style={{ 
                  color: 'var(--slate-11)', 
                  maxWidth: '750px', 
                  lineHeight: '1.6' 
                }}
              >
                My technical skillset spans across full-stack development, AI integration, and enterprise architecture, enabling me to deliver comprehensive solutions for complex business challenges.
              </Text>
            </Flex>

            <Grid 
              columns={{ initial: "1", sm: "2" }} 
              gap={{ initial: "4", sm: "5" }}
            >                <Card 
                  style={{ 
                    background: 'var(--glass-background)', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '16px',
                    boxShadow: theme === 'dark' ? '0 4px 30px rgba(0, 0, 0, 0.15)' : 'var(--shadow-5)',
                  }}
                  className={`${styles.fadeInLeft} ${styles.delay1} ${isInView.skills ? styles.visible : ''}`}
                >
                <Flex direction="column" gap="4" p="5">
                  <Heading size="4">Languages & Backend</Heading>
                  <Separator size="4" />
                  <Flex wrap="wrap" gap="2">
                    <SkillBadge icon={<CodeIcon />} name="Java" color="blue" />
                    <SkillBadge icon={<GearIcon />} name="Spring Boot" color="green" />
                    <SkillBadge icon={<CodeIcon />} name="Python" color="purple" />
                    <SkillBadge icon={<CodeIcon />} name="TypeScript" color="blue" />
                    <SkillBadge icon={<GearIcon />} name="Node.js" color="green" />
                    <SkillBadge icon={<GearIcon />} name="REST APIs" color="orange" />
                  </Flex>
                </Flex>
              </Card>                <Card 
                  style={{ 
                    background: 'var(--glass-background)', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '16px',
                    boxShadow: theme === 'dark' ? '0 4px 30px rgba(0, 0, 0, 0.15)' : 'var(--shadow-5)',
                  }}
                  className={`${styles.fadeInRight} ${styles.delay2} ${isInView.skills ? styles.visible : ''}`}
                >
                <Flex direction="column" gap="4" p="5">
                  <Heading size="4">Frontend & UI</Heading>
                  <Separator size="4" />
                  <Flex wrap="wrap" gap="2">
                    <SkillBadge icon={<CodeIcon />} name="React" color="blue" />
                    <SkillBadge icon={<CodeIcon />} name="Next.js" color="purple" />
                    <SkillBadge icon={<CodeIcon />} name="Angular" color="orange" />
                    <SkillBadge icon={<GearIcon />} name="TypeScript" color="blue" />
                    <SkillBadge icon={<GearIcon />} name="Material UI" color="green" />
                    <SkillBadge icon={<GearIcon />} name="Radix UI" color="purple" />
                  </Flex>
                </Flex>
              </Card>                <Card 
                  style={{ 
                    background: 'var(--glass-background)', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '16px',
                    boxShadow: theme === 'dark' ? '0 4px 30px rgba(0, 0, 0, 0.15)' : 'var(--shadow-5)',
                  }}
                  className={`${styles.fadeInLeft} ${styles.delay3} ${isInView.skills ? styles.visible : ''}`}
                >
                <Flex direction="column" gap="4" p="5">
                  <Heading size="4">AI & ML</Heading>
                  <Separator size="4" />
                  <Flex wrap="wrap" gap="2">
                    <SkillBadge icon={<MagicWandIcon />} name="OpenAI" color="green" />
                    <SkillBadge icon={<MagicWandIcon />} name="LangChain" color="orange" />
                    <SkillBadge icon={<RocketIcon />} name="RAG" color="blue" />
                    <SkillBadge icon={<MagicWandIcon />} name="Vector Search" color="purple" />
                    <SkillBadge icon={<GearIcon />} name="SOLR" color="orange" />
                    <SkillBadge icon={<MagicWandIcon />} name="NLP" color="blue" />
                  </Flex>
                </Flex>
              </Card>                <Card 
                  style={{ 
                    background: 'var(--glass-background)', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '16px',
                    boxShadow: theme === 'dark' ? '0 4px 30px rgba(0, 0, 0, 0.15)' : 'var(--shadow-5)',
                  }}
                  className={`${styles.fadeInRight} ${styles.delay4} ${isInView.skills ? styles.visible : ''}`}
                >
                <Flex direction="column" gap="4" p="5">
                  <Heading size="4">Tools & Platforms</Heading>
                  <Separator size="4" />
                  <Flex wrap="wrap" gap="2">
                    <SkillBadge icon={<GearIcon />} name="Git" color="orange" />
                    <SkillBadge icon={<GearIcon />} name="Docker" color="blue" />
                    <SkillBadge icon={<GearIcon />} name="Azure" color="blue" />
                    <SkillBadge icon={<GearIcon />} name="MongoDB" color="green" />
                    <SkillBadge icon={<GearIcon />} name="PostgreSQL" color="blue" />
                    <SkillBadge icon={<GearIcon />} name="Redis" color="red" />
                  </Flex>
                </Flex>
              </Card>
            </Grid>
          </Flex>
        </Container>
      </Box>

      {/* Education & Achievements */}
      <Box 
        id="education" 
        ref={sectionRefs.education}
        py={{ initial: "7", sm: "8", md: "9" }}
      >
        <Container size="3">
          <Grid 
            columns={{ initial: "1", sm: "2" }} 
            gap={{ initial: "5", sm: "6" }}
          >
            <Flex direction="column" gap="4" className={`${styles.fadeInLeft} ${isInView.education ? styles.visible : ''}`}>
              <Badge size="2" color="blue" mb="1">EDUCATION</Badge>
              <Heading 
                size={{ initial: "6", sm: "7" }}
                mb="3"
                className="gradient-text"
              >
                Academic Background
              </Heading
              >
              
              <Card 
                style={{ 
                  background: 'var(--glass-background)', 
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '16px',
                }}
              >
                <Flex direction="column" gap="4" p="5">
                  <Flex gap="3" align="start">
                    <Box 
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'var(--blue-4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <FileIcon width="24" height="24" color="var(--blue-11)" />
                    </Box>
                    <Box>
                      <Badge size="1" variant="soft" color="blue">2015-2019</Badge>
                      <Heading size="4" mt="1">B.Tech, Information Technology</Heading>
                      <Text size="3" color="gray">Sri Ramakrishna Engineering College</Text>
                      <Text size="3" color="gray">Coimbatore, Tamil Nadu</Text>
                      <Badge mt="2">CGPA: 8.06</Badge>
                    </Box>
                  </Flex>
                  
                  <Separator size="4" />
                  
                  <Flex gap="3" align="start">
                    <Box 
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'var(--purple-4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <MagicWandIcon width="24" height="24" color="var(--purple-11)" />
                    </Box>
                    <Box>
                      <Badge size="1" variant="soft" color="purple">Ongoing</Badge>
                      <Heading size="4" mt="1">Professional Certifications</Heading>
                      <Flex direction="column" gap="2" mt="2">
                        <Text size="3">• AWS Certified Solutions Architect</Text>
                        <Text size="3">• Microsoft Certified: Azure AI Engineer</Text>
                        <Text size="3">• Java SE 11 Developer Certification</Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Flex>
              </Card>
            </Flex>
            
            <Flex direction="column" gap="4" className={`${styles.fadeInRight} ${isInView.education ? styles.visible : ''}`}>
              <Badge size="2" color="purple" mb="1">ACHIEVEMENTS</Badge>
              <Heading 
                size={{ initial: "6", sm: "7" }}
                mb="3"
                className="gradient-text"
              >
                Recognition & Awards
              </Heading>
              
              <Card 
                style={{ 
                  background: 'var(--glass-background)', 
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '16px',
                }}
              >
                <Flex direction="column" gap="4" p="5">
                  <Flex gap="3" align="start">
                    <Box 
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'var(--blue-4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <StarFilledIcon width="24" height="24" color="var(--blue-11)" />
                    </Box>
                    <Box>
                      <Badge size="1" variant="soft" color="blue">2024</Badge>
                      <Heading size="4" mt="1">Game Changer Award</Heading>
                      <Text size="3" color="gray">Thomson Reuters</Text>
                      <Text size="3" mt="2">
                        Recognized for innovation in implementing AI technologies in the Trust Center platform, significantly improving search accuracy and user experience.
                      </Text>
                    </Box>
                  </Flex>
                  
                  <Separator size="4" />
                  
                  <Flex gap="3" align="start">
                    <Box 
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'var(--purple-4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <HeartFilledIcon width="24" height="24" color="var(--purple-11)" />
                    </Box>
                    <Box>
                      <Badge size="1" variant="soft" color="purple">2023</Badge>
                      <Heading size="4" mt="1">Best Team Award</Heading>
                      <Text size="3" color="gray">Trust Center Project</Text>
                      <Text size="3" mt="2">
                        Led the development team that received recognition for exceptional collaboration and delivery of critical features ahead of schedule.
                      </Text>
                    </Box>
                  </Flex>
                  
                  <Separator size="4" />
                  
                  <Flex gap="3" align="start">
                    <Box 
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'var(--orange-4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <PaperPlaneIcon width="24" height="24" color="var(--orange-11)" />
                    </Box>
                    <Box>
                      <Badge size="1" variant="soft" color="orange">2021</Badge>
                      <Heading size="4" mt="1">Customer Delight Award</Heading>
                      <Text size="3" color="gray">IBM</Text>
                      <Text size="3" mt="2">
                        Awarded for exceptional client satisfaction after delivering a complex financial application with improved performance metrics and user experience.
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </Card>
            </Flex>
          </Grid>
        </Container>
      </Box>

      {/* Custom button component */}
      <style jsx global>{`
        .gradient-text {
          background: linear-gradient(to right, var(--accent-9), var(--accent-12));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        [data-theme="dark"] .gradient-text {
          background: linear-gradient(to right, var(--blue-9), var(--purple-9));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 20px rgba(var(--blue-8-rgb), 0.3);
        }
        
        /* Glass styling variables */
        :root {
          --glass-background: color-mix(in srgb, var(--slate-1) 92%, transparent);
          --glass-border: color-mix(in srgb, var(--slate-6) 50%, transparent);
          --background-subtle: color-mix(in srgb, var(--slate-2) 95%, var(--blue-2));
          --gradient-background: linear-gradient(135deg, var(--slate-1), color-mix(in srgb, var(--slate-1) 90%, var(--blue-3)));
          --shadow-5: 0 20px 40px rgba(0, 0, 0, 0.05);
          --shadow-hover: 0 10px 30px rgba(0, 0, 0, 0.1);
          --card-text: var(--slate-12);
          --card-text-secondary: var(--slate-11);
          --skill-badge-opacity: 1;
        }
        
        [data-theme="dark"] {
          --glass-background: color-mix(in srgb, var(--slate-1) 85%, transparent);
          --glass-border: color-mix(in srgb, var(--slate-8) 25%, transparent);
          --background-subtle: color-mix(in srgb, var(--slate-1) 98%, var(--blue-5) 5%);
          --gradient-background: linear-gradient(135deg, 
              color-mix(in srgb, var(--slate-1) 95%, var(--blue-12) 5%), 
              color-mix(in srgb, var(--slate-1) 85%, var(--purple-11) 5%)
          );
          --shadow-5: 0 20px 40px rgba(0, 0, 0, 0.3);
          --shadow-hover: 0 10px 30px rgba(0, 0, 0, 0.35);
          --card-text: var(--slate-11);
          --card-text-secondary: var(--slate-9);
          --skill-badge-opacity: 0.85;
        }
        
        /* Custom button styling */
        .download-cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--blue-9);
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 500;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(var(--blue-6-rgb), 0.3);
        }
        
        .download-cv-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(var(--blue-6-rgb), 0.4);
        }
        
        [data-theme="dark"] .download-cv-btn {
          background: linear-gradient(135deg, var(--blue-9), var(--purple-9));
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(var(--blue-7-rgb), 0.1);
        }
        
        [data-theme="dark"] .download-cv-btn:hover {
          box-shadow: 0 6px 25px rgba(var(--blue-8-rgb), 0.25), 0 0 0 1px rgba(var(--blue-7-rgb), 0.2);
          transform: translateY(-2px);
        }
        
        /* Dark mode card enhancements */
        [data-theme="dark"] Badge {
          opacity: var(--skill-badge-opacity);
        }
        
        [data-theme="dark"] Text {
          color: var(--card-text-secondary);
        }
        
        /* Add subtle glow effect to cards in dark mode */
        [data-theme="dark"] Card {
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
          border-color: var(--glass-border);
        }
        
        [data-theme="dark"] Card:hover {
          box-shadow: 0 8px 35px rgba(var(--blue-6-rgb), 0.1);
          border-color: color-mix(in srgb, var(--blue-8) 10%, var(--glass-border));
        }
        
        /* Enhance text legibility in dark mode */
        [data-theme="dark"] Heading {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        [data-theme="dark"] Tabs.Trigger {
          background-color: color-mix(in srgb, var(--slate-1) 75%, transparent);
        }
        
        [data-theme="dark"] Tabs.Trigger[data-state="active"] {
          background-color: color-mix(in srgb, var(--blue-9) 15%, var(--slate-1));
          color: var(--slate-12);
        }
        
        /* Profile image card hover effect */
        .profile-image-card {
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }
        
        .profile-image-card:hover {
          transform: perspective(1000px) rotateY(0deg) translateY(-5px) !important;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(var(--blue-6-rgb), 0.1) !important;
        }
        
        [data-theme="dark"] .profile-image-card:hover {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(var(--blue-8-rgb), 0.2) !important;
        }
        
        /* Skill badge hover effect in dark mode */
        [data-theme="dark"] Badge {
          transition: all 0.3s ease;
        }
        
        [data-theme="dark"] Badge:hover {
          opacity: 1;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </main>
  );
}

// Skill badge component
function SkillBadge({ 
  icon, 
  name, 
  color = "blue" 
}: { 
  icon: React.ReactNode; 
  name: string; 
  color?: "ruby" | "blue" | "brown" | "crimson" | "cyan" | "gold" | "gray" | "green" | "indigo" | "lime" | "orange" | "pink" | "plum" | "purple" | "red" | "teal" | "tomato" | "violet" | "yellow" | undefined;
}) {
  return (
    <Badge size="2" color={color} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 10px' }}>
      {icon}
      {name}
    </Badge>
  );
}

// Custom button component
function Button({ 
  children, 
  size = "3", 
  className = "", 
  ...props 
}: { 
  children: React.ReactNode;
  size?: string; 
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <button className={`download-cv-btn ${className}`} {...props}>
      {children}
    </button>
  );
}

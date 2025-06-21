"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Grid,
  Card,
  Badge,
  Separator,
  Tabs,
  ScrollArea,
  Link,
} from "@radix-ui/themes";
import {
  CalendarIcon,
  StarFilledIcon,
  LightningBoltIcon,
  RocketIcon,
  BackpackIcon,
  CodeIcon,
  DownloadIcon,
  ExternalLinkIcon,
  MagicWandIcon,
  CheckIcon,
  GlobeIcon,
  FileIcon,
  PersonIcon,
  HeartFilledIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";
import styles from "@/app/animations.module.css";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { skillsData, expertiseAreas } from '@/data/skills';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  technologies: string[];
  achievements: string[];
}

interface SkillCategory {
  name: string;
  skills: string[];
}

export default function ExperiencePage() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("timeline");
  const [isInView, setIsInView] = useState({
    hero: false,
    timeline: false,
    skills: false,
    achievements: false,
    expertise: false,
    education: false,
    awards: false,
  });

  // Create refs outside of useMemo
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  
  // Store refs in a object for easier access
  const sectionRefs = useMemo(() => ({
    hero: heroRef,
    timeline: timelineRef,
    skills: skillsRef,
    achievements: achievementsRef,
    expertise: expertiseRef,
    education: educationRef,
    awards: awardsRef,
  }), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setIsInView((prev) => ({
              ...prev,
              [id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs]);

  const experiences: Experience[] = [
    {
      title: "Technical Lead",
      company: "Responsive (formerly RFPIO)",
      location: "Coimbatore, Tamil Nadu",
      period: "Mar 2023 - Jun 2025",
      highlights: [
        "Led AI-driven development, improving security profiles and automation",
        "Optimized development workflows, boosting efficiency by 30%",
        "Managed client communications, troubleshooting, and requirement analysis",
        "Implemented scalable architectures, reducing production issues by 40% through rigorous reviews and automated testing",
        "Published Profile Trust Center with Custom Domain, optimizing domain setup resulting in 80% faster loading of custom domain Trust Centers",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "MongoDB",
        "SOLR",
        "LLMs",
        "RAG",
        "TypeScript",
        "Node.js",
        "AWS",
        "Vector Search",
      ],
      achievements: [
        "Game Changer Award (2024)",
        "Improved Trust Center loading speed by 80%",
        "Reduced production issues by 40%",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Responsive",
      location: "Coimbatore, Tamil Nadu",
      period: "Mar 2022 - Feb 2023",
      highlights: [
        "Led feature architecture development, ensuring 25% improvement in performance",
        "Provided mentorship and guidance to junior developers and interns",
        "Managed critical support tickets and on-call client support",
        "Designed and implemented scalable solutions for enterprise clients",
      ],
      technologies: [
        "Java",
        "React",
        "Node.js",
        "MongoDB",
        "Redis",
        "NGinx",
        "TypeScript",
      ],
      achievements: [
        "Engineering Excellence Award (2022)",
        "Improved performance by 25%",
        "Mentored junior developers",
      ],
    },
    {
      title: "Software Engineer",
      company: "Responsive",
      location: "Coimbatore, Tamil Nadu",
      period: "Mar 2021 - Feb 2022",
      highlights: [
        "Designed and developed scalable front-end and back-end architectures",
        "Improved API response time by 20% through query optimization and caching",
        "Implemented new features and integrations based on client requirements",
        "Participated in code reviews and ensured code quality",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "MongoDB",
        "REST APIs",
        "TypeScript",
      ],
      achievements: [
        "Trailblazer Award (2023)",
        "Improved API response time by 20%",
        "Customer Delight Award (2021)",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "Responsive",
      location: "Coimbatore, Tamil Nadu",
      period: "Jul 2019 - Feb 2021",
      highlights: [
        "Migrated legacy systems to microservices architecture, reducing downtime by 35%",
        "Developed and tested software solutions, ensuring quality assurance and debugging",
        "Collaborated with cross-functional teams to implement new features",
        "Participated in agile development processes and sprint planning",
      ],
      technologies: ["Java", "React", "MongoDB", "Microservices", "REST APIs"],
      achievements: [
        "Reduced system downtime by 35%",
        "Successfully migrated legacy systems to microservices",
      ],
    },
  ];

  // Generate skill categories from our central skills data
  const skillCategories = skillsData.map(category => ({
    name: category.title.replace(/^[^a-zA-Z]+\s/, ''), // Remove emoji prefix
    skills: category.skills.map(skill => skill.name)
  }));

  const achievements = [
    {
      title: "Game Changer Award",
      company: "Responsive",
      year: "2024",
      description:
        "Recognized for engineering AI Agents to dynamically create customized Trust Centers based on user needs, enhancing security transparency.",
    },
    {
      title: "Trailblazer Award",
      company: "Responsive",
      year: "2023",
      description:
        "Awarded for enhancing the product recommendation engine with SOLR's Dense Vector Search, Ada Model, RAG, and OpenAI integration.",
    },
    {
      title: "Engineering Excellence Award",
      company: "Responsive",
      year: "2022",
      description:
        "Recognized for leading feature architecture development, ensuring 25% improvement in performance and scalability.",
    },
    {
      title: "Customer Delight Award",
      company: "Responsive",
      year: "2021",
      description:
        "Awarded for creating a machine learning-based file processing system, reducing manual efforts by 60% and improving document import accuracy and efficiency.",
    },
    {
      title: "MongoDB Developer Certification",
      company: "MongoDB",
      year: "2023",
      description:
        "Professional certification demonstrating expertise in MongoDB database design, implementation, and optimization.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Box
        id="hero"
        ref={sectionRefs.hero}
        py={{ initial: "7", sm: "8", md: "9" }}
        className={`${styles.fadeIn} ${isInView.hero ? styles.visible : ""}`}
        style={{
          background: "var(--gradient-background)",
          position: "relative",
          overflow: "hidden",
          paddingTop: "calc(var(--header-height) + 2rem)", /* Added padding to prevent content from hiding under AppBar */
        }}
      >
        {/* Background elements */}
        <Box
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 20% 110%, ${
              theme === "dark" ? "rgba(28, 100, 242, 0.3)" : "var(--blue-4)"
            } 0%, transparent 40%), 
                       radial-gradient(circle at 80% 20%, ${
                         theme === "dark"
                           ? "rgba(101, 31, 255, 0.2)"
                           : "var(--purple-4)"
                       } 0%, transparent 50%)`,
            opacity: theme === "dark" ? 0.15 : 0.3,
            zIndex: 0,
          }}
        />

        {/* Dot pattern overlay */}
        <Box
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle at 20px 20px, ${
              theme === "dark" ? "rgba(255, 255, 255, 0.07)" : "var(--slate-6)"
            } 2px, transparent 0)`,
            backgroundSize: "40px 40px",
            opacity: theme === "dark" ? 0.15 : 0.1,
            zIndex: 0,
          }}
        />

        {/* Large Experience text in background */}
        <Box
          style={{
            position: "absolute",
            right: "-5%",
            top: "50%",
            transform: "translateY(-50%) rotate(-90deg)",
            fontSize: "clamp(100px, 20vw, 200px)",
            fontWeight: 800,
            opacity: theme === "dark" ? 0.03 : 0.04,
            color: "var(--purple-12)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          EXPERIENCE
        </Box>

        <Container size="3" style={{ position: "relative", zIndex: 1 }}>
          <Flex
            direction="column"
            align="center"
            gap="4"
            className={`${styles.fadeInUp} ${
              isInView.hero ? styles.visible : ""
            }`}
          >
            <Badge size="2" color="blue" mb="2">
              PROFESSIONAL JOURNEY
            </Badge>
            <Heading
              size={{ initial: "7", sm: "8", md: "9" }}
              align="center"
              mb="3"
              className="gradient-text"
            >
              My Experience
            </Heading>
            <Text
              size="3"
              align="center"
              style={{
                color: "var(--card-text-secondary)",
                maxWidth: "750px",
                lineHeight: "1.6",
              }}
            >
              A chronicle of my professional journey, showcasing my growth and
              expertise in software development, AI integration, and technical
              leadership across industry-leading organizations.
            </Text>

            <Flex gap="3" mt="3">
              <Link href="/Balaji Nagarajan.pdf" target="_blank">
                <Button
                  className={`download-cv-btn ${styles.fadeInUp} ${
                    styles.delay2
                  } ${isInView.hero ? styles.visible : ""}`}
                >
                  <DownloadIcon /> Download Resume
                </Button>
              </Link>
              <Link href="#timeline">
                <Button
                  variant="outline"
                  className={`${styles.fadeInUp} ${styles.delay3} ${
                    isInView.hero ? styles.visible : ""
                  }`}
                >
                  View Timeline <ChevronDownIcon />
                </Button>
              </Link>
            </Flex>

            {/* Highlight Stats */}
            <Grid
              columns={{ initial: "1", sm: "3" }}
              gap="4"
              width="100%"
              mt="7"
            >
              <Card
                className={`stat-card ${styles.fadeInUp} ${styles.delay1} ${
                  isInView.hero ? styles.visible : ""
                }`}
                style={{
                  background:
                    theme === "dark"
                      ? "var(--slate-2)"
                      : "var(--glass-background)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid var(--glass-border)",
                  boxShadow:
                    theme === "dark"
                      ? "0 4px 30px rgba(0, 0, 0, 0.15)"
                      : "var(--shadow-5)",
                }}
              >
                <Flex align="center" gap="3" p="3">
                  <Box
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "10px",
                      background: "var(--blue-4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <BackpackIcon
                      width="22"
                      height="22"
                      color="var(--blue-11)"
                    />
                  </Box>
                  <Box>
                    <Text
                      size="2"
                      weight="medium"
                      style={{ color: "var(--card-text-secondary)" }}
                    >
                      Years Experience
                    </Text>
                    <Text size="6" weight="bold" className="stat-value">
                      6+
                    </Text>
                  </Box>
                </Flex>
              </Card>

              <Card
                className={`stat-card ${styles.fadeInUp} ${styles.delay2} ${
                  isInView.hero ? styles.visible : ""
                }`}
                style={{
                  background:
                    theme === "dark"
                      ? "var(--slate-2)"
                      : "var(--glass-background)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid var(--glass-border)",
                  boxShadow:
                    theme === "dark"
                      ? "0 4px 30px rgba(0, 0, 0, 0.15)"
                      : "var(--shadow-5)",
                }}
              >
                <Flex align="center" gap="3" p="3">
                  <Box
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "10px",
                      background: "var(--purple-4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <RocketIcon
                      width="22"
                      height="22"
                      color="var(--purple-11)"
                    />
                  </Box>
                  <Box>
                    <Text
                      size="2"
                      weight="medium"
                      style={{ color: "var(--card-text-secondary)" }}
                    >
                      Projects Completed
                    </Text>
                    <Text size="6" weight="bold" className="stat-value">
                      15+
                    </Text>
                  </Box>
                </Flex>
              </Card>

              <Card
                className={`stat-card ${styles.fadeInUp} ${styles.delay3} ${
                  isInView.hero ? styles.visible : ""
                }`}
                style={{
                  background:
                    theme === "dark"
                      ? "var(--slate-2)"
                      : "var(--glass-background)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid var(--glass-border)",
                  boxShadow:
                    theme === "dark"
                      ? "0 4px 30px rgba(0, 0, 0, 0.15)"
                      : "var(--shadow-5)",
                }}
              >
                <Flex align="center" gap="3" p="3">
                  <Box
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "10px",
                      background: "var(--green-4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <StarFilledIcon
                      width="22"
                      height="22"
                      color="var(--green-11)"
                    />
                  </Box>
                  <Box>
                    <Text
                      size="2"
                      weight="medium"
                      style={{ color: "var(--card-text-secondary)" }}
                    >
                      Awards & Recognition
                    </Text>
                    <Text size="6" weight="bold" className="stat-value">
                      4+
                    </Text>
                  </Box>
                </Flex>
              </Card>
            </Grid>
          </Flex>
        </Container>
      </Box>

      {/* Tabs Section */}

      <Container size="3" py={{ initial: "6", sm: "7", md: "8" }}>
        <Tabs.Root defaultValue="timeline" onValueChange={setActiveTab}>
          <Tabs.List
            style={{
              background: "var(--glass-background)",
              backdropFilter: "blur(10px)",
              border: "1px solid var(--glass-border)",
              borderRadius: "12px",
              padding: "4px",
              boxShadow:
                theme === "dark" ? "0 4px 20px rgba(0, 0, 0, 0.2)" : "none",
              marginBottom: "40px",
            }}
            className={`${styles.fadeInUp} ${
              isInView.hero ? styles.visible : ""
            }`}
          >
            <Tabs.Trigger value="timeline">Timeline</Tabs.Trigger>
            <Tabs.Trigger value="expertise">Expertise</Tabs.Trigger>
            <Tabs.Trigger value="skills">Skills & Expertise</Tabs.Trigger>
            <Tabs.Trigger value="achievements">Achievements</Tabs.Trigger>
          </Tabs.List>

          {/* Timeline Content */}
          <Tabs.Content value="timeline">
            <Box
              id="timeline"
              ref={sectionRefs.timeline}
              className={`${styles.fadeIn} ${
                isInView.timeline ? styles.visible : ""
              }`}
            >
              <Flex direction="column" gap="8">
                {experiences.map((exp, index) => (
                  <TimelineItem
                    key={index}
                    experience={exp}
                    index={index}
                    theme={theme || 'light'}
                    className={`${styles.fadeInUp} ${
                      styles[`delay${index + 1}`]
                    } ${isInView.timeline ? styles.visible : ""}`}
                  />
                ))}
              </Flex>
            </Box>
          </Tabs.Content>

          {/* Skills Content */}
          <Tabs.Content value="skills">
            <Box
              id="skills"
              ref={sectionRefs.skills}
              className={`${styles.fadeIn} ${
                isInView.skills ? styles.visible : ""
              }`}
            >
              <Grid columns={{ initial: "1", md: "2" }} gap="6">
                {skillCategories.map((category, index) => (
                  <Card
                    key={index}
                    style={{
                      background: "var(--glass-background)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid var(--glass-border)",
                      borderRadius: "16px",
                      boxShadow:
                        theme === "dark"
                          ? "0 4px 30px rgba(0, 0, 0, 0.15)"
                          : "var(--shadow-5)",
                    }}
                    className={`${styles.fadeInUp} ${
                      styles[`delay${(index % 3) + 1}`]
                    } ${isInView.skills ? styles.visible : ""}`}
                  >
                    <Flex direction="column" gap="4" p="5">
                      <Flex gap="3" align="center">
                        <Box
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "10px",
                            background:
                              index % 5 === 0
                                ? theme === "dark"
                                  ? "rgba(28, 100, 242, 0.2)"
                                  : "var(--blue-4)"
                                : index % 5 === 1
                                ? theme === "dark"
                                  ? "rgba(101, 31, 255, 0.2)"
                                  : "var(--purple-4)"
                                : index % 5 === 2
                                ? theme === "dark"
                                  ? "rgba(3, 127, 76, 0.2)"
                                  : "var(--green-4)"
                                : index % 5 === 3
                                ? theme === "dark"
                                  ? "rgba(28, 100, 242, 0.2)"
                                  : "var(--blue-4)"
                                : theme === "dark"
                                ? "rgba(3, 127, 76, 0.2)"
                                : "var(--green-4)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {index % 5 === 0 ? (
                            <CodeIcon
                              width="20"
                              height="20"
                              color="var(--blue-11)"
                            />
                          ) : index % 5 === 1 ? (
                            <RocketIcon
                              width="20"
                              height="20"
                              color="var(--purple-11)"
                            />
                          ) : index % 5 === 2 ? (
                            <MagicWandIcon
                              width="20"
                              height="20"
                              color="var(--green-11)"
                            />
                          ) : index % 5 === 3 ? (
                            <LightningBoltIcon
                              width="20"
                              height="20"
                              color="var(--blue-11)"
                            />
                          ) : (
                            <BackpackIcon
                              width="20"
                              height="20"
                              color="var(--green-11)"
                            />
                          )}
                        </Box>
                        <Heading size="3">{category.name}</Heading>
                      </Flex>

                      <Separator size="4" />

                      <Flex wrap="wrap" gap="2">
                        {category.skills.map((skill, i) => (
                          <Badge
                            key={i}
                            size="2"
                            variant="soft"
                            color={
                              index % 5 === 0
                                ? "blue"
                                : index % 5 === 1
                                ? "purple"
                                : index % 5 === 2
                                ? "green"
                                : index % 5 === 3
                                ? "blue"
                                : "green"
                            }
                            className="skill-badge"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </Flex>
                    </Flex>
                  </Card>
                ))}
              </Grid>
            </Box>
          </Tabs.Content>

          {/* Achievements Content */}
          <Tabs.Content value="achievements">
            <Box
              id="achievements"
              ref={sectionRefs.achievements}
              className={`${styles.fadeIn} ${
                isInView.achievements ? styles.visible : ""
              }`}
            >
              <Grid columns={{ initial: "1", md: "2" }} gap="6">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    style={{
                      background: "var(--glass-background)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid var(--glass-border)",
                      borderRadius: "16px",
                      boxShadow:
                        theme === "dark"
                          ? "0 4px 30px rgba(0, 0, 0, 0.15)"
                          : "var(--shadow-5)",
                    }}
                    className={`${styles.fadeInUp} ${
                      styles[`delay${(index % 3) + 1}`]
                    } ${isInView.achievements ? styles.visible : ""}`}
                  >
                    <Flex direction="column" gap="4" p="5">
                      <Flex gap="3" align="start">
                        <Box
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "12px",
                            background:
                              index % 4 === 0
                                ? "var(--blue-4)"
                                : index % 4 === 1
                                ? "var(--purple-4)"
                                : index % 4 === 2
                                ? "var(--green-4)"
                                : "var(--blue-4)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <StarFilledIcon
                            width="24"
                            height="24"
                            color={
                              index % 4 === 0
                                ? "var(--blue-11)"
                                : index % 4 === 1
                                ? "var(--purple-11)"
                                : index % 4 === 2
                                ? "var(--green-11)"
                                : "var(--blue-11)"
                            }
                          />
                        </Box>
                        <Box>
                          <Badge
                            size="1"
                            variant="soft"
                            color={
                              index % 4 === 0
                                ? "blue"
                                : index % 4 === 1
                                ? "purple"
                                : index % 4 === 2
                                ? "green"
                                : "blue"
                            }
                          >
                            {achievement.year}
                          </Badge>
                          <Heading size="4" mt="1">
                            {achievement.title}
                          </Heading>
                          <Text
                            size="2"
                            style={{ color: "var(--card-text-secondary)" }}
                          >
                            {achievement.company}
                          </Text>
                        </Box>
                      </Flex>

                      <Separator size="4" />

                      <Text
                        size="2"
                        style={{
                          color: "var(--card-text-secondary)",
                          lineHeight: "1.6",
                        }}
                      >
                        {achievement.description}
                      </Text>
                    </Flex>
                  </Card>
                ))}
              </Grid>
            </Box>
          </Tabs.Content>

          {/* Expertise Content */}
          <Tabs.Content value="expertise">
            <Box
              id="expertise"
              ref={sectionRefs.expertise}
              className={`${styles.fadeIn} ${isInView.expertise ? styles.visible : ''}`}
            >
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
                            style={{
                              width: '40px',
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
            </Box>
          </Tabs.Content>
        </Tabs.Root>

        {/* Academic Background and Recognition & Awards Section */}
        <Box py={{ initial: "7", sm: "8" }}>
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
                id="education"
                ref={sectionRefs.education}
              >
                Academic Background
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
                      <FileIcon width="24" height="24" color="var(--blue-11)" />
                    </Box>
                    <Box>
                      <Badge size="1" variant="soft" color="blue">2015-2019</Badge>
                      <Heading size="4" mt="1">B.Tech, Information Technology</Heading>
                      <Text size="3" >Sri Ramakrishna Engineering College</Text>
                      <Text size="3" >Coimbatore, Tamil Nadu</Text>
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
            
            <Flex direction="column" gap="4" className={`${styles.fadeInRight} ${isInView.awards ? styles.visible : ''}`}>
              <Badge size="2" color="purple" mb="1">ACHIEVEMENTS</Badge>
              <Heading 
                size={{ initial: "6", sm: "7" }}
                mb="3"
                className="gradient-text"
                id="awards"
                ref={sectionRefs.awards}
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
                      <Text size="3" >Thomson Reuters</Text>
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
                      <Text size="3" >Trust Center Project</Text>
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
                      <Text size="3" >IBM</Text>
                      <Text size="3" mt="2">
                        Awarded for exceptional client satisfaction after delivering a complex financial application with improved performance metrics and user experience.
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </Card>
            </Flex>
          </Grid>
        </Box>
      </Container>

      <style jsx global>{`
        body {
          background-color: ${theme === "dark" ? "var(--slate-1)" : "white"};
        }

        .gradient-text {
          background: linear-gradient(to right, var(--blue-9), var(--purple-9));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        [data-theme="dark"] .gradient-text {
          background: linear-gradient(to right, var(--blue-9), var(--purple-9));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        }

        /* Glass styling variables */
        :root {
          --glass-background: rgba(252, 252, 253, 0.92);
          --glass-border: rgba(217, 217, 227, 0.5);
          --background-subtle: rgba(249, 249, 251, 0.95);
          --gradient-background: linear-gradient(
            135deg,
            var(--slate-1),
            color-mix(in srgb, var(--slate-1) 90%, var(--blue-3))
          );
          --card-background: white;
          --timeline-connector: var(--slate-6);
          --shadow-5: 0 20px 40px rgba(0, 0, 0, 0.05);
          --shadow-hover: 0 10px 30px rgba(0, 0, 0, 0.1);
          --card-text: var(--slate-12);
          --card-text-secondary: var(--slate-11);
          --skill-badge-opacity: 1;
        }

        [data-theme="dark"] {
          --glass-background: var(
            --slate-2
          ); /* Using slate-2 directly for card backgrounds */
          --glass-border: rgba(58, 63, 66, 0.4);
          --background-subtle: var(--slate-2);
          --gradient-background: linear-gradient(
            135deg,
            var(--slate-1),
            color-mix(in srgb, var(--slate-1) 80%, var(--blue-9) 20%)
          );
          --card-background: var(--slate-2);
          --timeline-connector: var(--slate-7);
          --shadow-5: 0 20px 40px rgba(0, 0, 0, 0.3);
          --shadow-hover: 0 10px 30px rgba(0, 0, 0, 0.35);
          --card-text: var(--slate-11);
          --card-text-secondary: var(--slate-9);
          --skill-badge-opacity: 0.85;
        }

        /* Card dark mode styles */
        [data-theme="dark"] .rt-Card {
          background-color: var(--slate-2) !important;
        }

        /* Fixes for stat cards */
        [data-theme="dark"] .stat-card {
          background-color: var(--slate-2) !important;
        }

        /* Timeline connector line */
        .timeline-connector {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--timeline-connector);
          left: 22px;
          z-index: 0;
        }

        /* Timeline item hover effect */
        .timeline-item {
          transition: all 0.3s ease;
          position: relative;
        }

        .timeline-item:hover {
          transform: translateY(-5px);
        }

        /* Skill badge hover effect */
        .skill-badge {
          transition: all 0.3s ease;
        }

        .skill-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        /* Dark mode card enhancements */
        [data-theme="dark"] Badge {
          opacity: var(--skill-badge-opacity);
        }

        [data-theme="dark"] .skill-badge:hover {
          opacity: 1;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        /* Stat cards hover effect */
        .stat-card {
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-card:hover .stat-value {
          color: var(--blue-9);
        }

        [data-theme="dark"] .stat-card:hover .stat-value {
          color: var(--blue-9);
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
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .download-cv-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        [data-theme="dark"] .download-cv-btn {
          background: linear-gradient(135deg, var(--blue-9), var(--purple-9));
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(0, 0, 0, 0.1);
        }

        [data-theme="dark"] .download-cv-btn:hover {
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
        }

        /* Button outline style */
        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--card-text);
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 1px solid var(--glass-border);
          cursor: pointer;
        }

        .btn-outline:hover {
          background: var(--glass-background);
          transform: translateY(-2px);
          box-shadow: var(--shadow-hover);
        }

        /* Animation classes for visibility */
        .visible {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }
      `}</style>
    </main>
  );
}

// Timeline Item Component
function TimelineItem({
  experience,
  index,
  theme,
  className = "",
}: {
  experience: Experience;
  index: number;
  theme: string;
  className?: string;
}) {
  return (
    <Card
      className={`timeline-item ${className}`}
      style={{
        background:
          theme === "dark" ? "var(--slate-2)" : "var(--glass-background)",
        backdropFilter: "blur(10px)",
        border: "1px solid var(--glass-border)",
        borderRadius: "16px",
        boxShadow:
          theme === "dark"
            ? "0 4px 30px rgba(0, 0, 0, 0.15)"
            : "var(--shadow-5)",
        overflow: "visible",
      }}
    >
      <Box p="5">
        <Grid columns={{ initial: "1", sm: "4fr 1fr" }} gap="4">
          <Box>
            <Flex gap="3" align="center" mb="3">
              <Box
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "12px",
                  background:
                    index % 3 === 0
                      ? theme === "dark"
                        ? "rgba(28, 100, 242, 0.2)"
                        : "var(--blue-4)"
                      : index % 3 === 1
                      ? theme === "dark"
                        ? "rgba(101, 31, 255, 0.2)"
                        : "var(--purple-4)"
                      : theme === "dark"
                      ? "rgba(3, 127, 76, 0.2)"
                      : "var(--green-4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BackpackIcon
                  width="24"
                  height="24"
                  color={
                    index % 3 === 0
                      ? "var(--blue-11)"
                      : index % 3 === 1
                      ? "var(--purple-11)"
                      : "var(--green-11)"
                  }
                />
              </Box>
              <Box>
                <Heading size="4">{experience.title}</Heading>
                <Flex gap="2" wrap="wrap" align="center">
                  <Text
                    size="2"
                    style={{ color: "var(--card-text-secondary)" }}
                  >
                    {experience.company}
                  </Text>
                  <Text
                    size="1"
                    style={{ color: "var(--card-text-secondary)" }}
                  >
                    •
                  </Text>
                  <Text
                    size="2"
                    style={{ color: "var(--card-text-secondary)" }}
                  >
                    {experience.location}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>

          <Box>
            <Badge
              size="2"
              variant="soft"
              color={
                index % 3 === 0 ? "blue" : index % 3 === 1 ? "purple" : "green"
              }
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                width: "fit-content",
              }}
            >
              <CalendarIcon /> {experience.period}
            </Badge>
          </Box>
        </Grid>

        <Separator size="4" my="4" />

        <Grid columns={{ initial: "1", md: "3fr 1fr" }} gap="6">
          <Box>
            <Text size="2" weight="medium" mb="2">
              Responsibilities & Achievements
            </Text>
            <Flex direction="column" gap="3">
              {experience.highlights.map((highlight, i) => (
                <Flex key={i} gap="3" align="start">
                  <Box
                    style={{
                      minWidth: "20px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background:
                        index % 3 === 0
                          ? "var(--blue-4)"
                          : index % 3 === 1
                          ? "var(--purple-4)"
                          : "var(--green-4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "3px",
                    }}
                  >
                    <CheckIcon
                      width="12"
                      height="12"
                      color={
                        index % 3 === 0
                          ? "var(--blue-11)"
                          : index % 3 === 1
                          ? "var(--purple-11)"
                          : "var(--green-11)"
                      }
                    />
                  </Box>
                  <Text
                    size="2"
                    style={{ color: "var(--card-text-secondary)" }}
                  >
                    {highlight}
                  </Text>
                </Flex>
              ))}
            </Flex>

            {experience.achievements.length > 0 && (
              <Box mt="4">
                <Text size="2" weight="medium" mb="2">
                  Key Achievements
                </Text>
                <Flex direction="column" gap="2">
                  {experience.achievements.map((achievement, i) => (
                    <Flex key={i} gap="2" align="center">
                      <StarFilledIcon
                        color={
                          index % 3 === 0
                            ? "var(--blue-9)"
                            : index % 3 === 1
                            ? "var(--purple-9)"
                            : "var(--green-9)"
                        }
                      />
                      <Text
                        size="2"
                        style={{ color: "var(--card-text-secondary)" }}
                      >
                        {achievement}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </Box>
            )}
          </Box>

          <Box>
            <Text size="2" weight="medium" mb="2">
              Technologies
            </Text>
            <Flex direction="column" gap="2">
              <Flex wrap="wrap" gap="2">
                {experience.technologies.map((tech, i) => (
                  <Badge
                    key={i}
                    size="1"
                    variant="soft"
                    color={
                      index % 3 === 0
                        ? "blue"
                        : index % 3 === 1
                        ? "purple"
                        : "green"
                    }
                    className="skill-badge"
                  >
                    {tech}
                  </Badge>
                ))}
              </Flex>
            </Flex>
          </Box>
        </Grid>
      </Box>
    </Card>
  );
}

// Custom Button Component
function Button({
  children,
  variant = "solid",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <button
      className={`${
        variant === "solid" ? "download-cv-btn" : "btn-outline"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Icon Components
function ChevronDownIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

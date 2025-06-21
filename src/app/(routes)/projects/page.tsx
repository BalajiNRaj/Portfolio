"use client";

import { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Card,
  Grid,
  Button,
  Flex,
  Link,
  Badge,
  Select,
  TextField,
} from "@radix-ui/themes";
import {
  GlobeIcon,
  MagnifyingGlassIcon,
  GitHubLogoIcon,
  ViewVerticalIcon,
  ViewGridIcon,
  CheckIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import ProjectLinks from "../../../components/common/ProjectLinks";
import { Project, projectsData } from "@/data/projects";
import { useTheme } from "@/contexts/ThemeContext";

export default function ProjectsPage() {
  // Theme context
  const { theme } = useTheme();
  
  // Refs and scroll animations
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  // State for filtering and view options
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedTech, setSelectedTech] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  // Use the projects data from the shared file
  const projects = projectsData;

  // Extract unique years and technologies for filters
  const uniqueYears = Array.from(
    new Set(projects.map((project) => project.year).filter(Boolean))
  ).sort((a, b) => (b || 0) - (a || 0));
  const uniqueTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  ).sort();

  // Apply filters and sort
  const filteredProjects = projects
    .filter((project) => {
      // Search term
      const searchMatch =
        searchTerm === "" ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );

      // Year filter
      const yearMatch =
        selectedYear === "all" || project.year?.toString() === selectedYear;

      // Technology filter
      const techMatch =
        selectedTech === "all" || project.technologies.includes(selectedTech);

      return searchMatch && yearMatch && techMatch;
    })
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return ((b.year || 0) - (a.year || 0));
      } else {
        return ((a.year || 0) - (b.year || 0));
      }
    });

  // Group projects by year for timeline view
  const projectsByYear = filteredProjects.reduce((acc, project) => {
    if (project.year) {
      const year = project.year;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(project);
    }
    return acc;
  }, {} as Record<number, Project[]>);

  // Sort years in descending order
  const years = Object.keys(projectsByYear)
    .map(Number)
    .sort((a, b) => b - a);

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

      {/* Project Filter Controls */}
      <Box id="all-projects" className="filter-section">
        <Container size="4" py="6">
          <Flex
            direction={{ initial: "column", sm: "row" }}
            justify="between"
            align="center"
            gap="4"
            mb="6"
          >
            <Heading size="6">All Projects</Heading>
          </Flex>

          {/* Grid View */}
          {viewMode === "grid" && (
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
                      <Card size="2" className="project-card" style={{
                        background: "var(--glass-background)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid var(--glass-border)",
                        borderRadius: "16px",
                        boxShadow:
                          theme === "dark"
                            ? "0 4px 30px rgba(0, 0, 0, 0.15)"
                            : "var(--shadow-5)"
                      }}>
                        <Flex direction="column" gap="4">
                          <Box>
                            <Flex justify="between" align="start" mb="2">
                              <Heading size="4" className="project-title">
                                {project.title}
                              </Heading>
                              {project.period && (
                                <Badge
                                  size="1"
                                  variant="soft"
                                  className="period-badge"
                                >
                                  {project.period}
                                </Badge>
                              )}
                            </Flex>
                            <Text size="2" color="gray" as="p" mb="3">
                              {project.description}
                            </Text>
                          </Box>

                          <Box>
                            <Text size="2" weight="bold" mb="2">
                              Key Achievements:
                            </Text>
                            <Flex direction="column" gap="2">
                              {project.details
                                ?.slice(0, 2)
                                .map((detail, idx) => (
                                  <Flex key={idx} gap="2" align="center">
                                    <Box style={{
                                      width: '20px',
                                      height: '20px',
                                      borderRadius: '50%',
                                      background: idx % 3 === 0 
                                        ? 'var(--blue-4)' 
                                        : idx % 3 === 1 
                                        ? 'var(--purple-4)' 
                                        : 'var(--green-4)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      flexShrink: 0,
                                    }}>
                                      <CheckIcon width="12" height="12" color={
                                        idx % 3 === 0 
                                          ? 'var(--blue-11)' 
                                          : idx % 3 === 1 
                                          ? 'var(--purple-11)' 
                                          : 'var(--green-11)'
                                      } />
                                    </Box>
                                    <Text as="p" color="gray" size="2">
                                      {detail}
                                    </Text>
                                  </Flex>
                                ))}
                              {project.details && project.details.length > 2 && (
                                <Button
                                  variant="ghost"
                                  size="1"
                                  onClick={() => openProjectModal(project)}
                                >
                                  +{(project.details?.length || 0) - 2} more
                                  achievements
                                </Button>
                              )}
                            </Flex>
                          </Box>

                          <Box>
                            <Text size="2" weight="bold" mb="2">
                              Technologies:
                            </Text>
                            <Flex gap="2" wrap="wrap">
                              {project.technologies
                                .slice(0, 5)
                                .map((tech, idx) => (
                                  <Badge
                                    key={idx}
                                    size="1"
                                    variant="soft"
                                    color={
                                      idx % 3 === 0
                                        ? "blue"
                                        : idx % 3 === 1
                                        ? "purple"
                                        : "green"
                                    }
                                    className="tech-badge"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              {project.technologies.length > 5 && (
                                <Badge size="1" variant="soft">
                                  +{project.technologies.length - 5}
                                </Badge>
                              )}
                            </Flex>
                          </Box>

                          <Flex gap="2" mt="2">
                            <ProjectLinks
                              githubUrl={project.github || project.githubUrl}
                              demoUrl={project.link || project.demoUrl}
                              isPrivate={project.isPrivate}
                              size="1"
                              variant="soft"
                            />
                            <Button
                              variant="ghost"
                              size="1"
                              onClick={() => openProjectModal(project)}
                            >
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
          {viewMode === "timeline" && (
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
                          transition={{
                            duration: 0.4,
                            delay: projectIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="timeline-item"
                        >
                          <Card size="2" className="timeline-card" style={{
                            background: "var(--glass-background)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid var(--glass-border)",
                            borderRadius: "16px",
                            boxShadow:
                              theme === "dark"
                                ? "0 4px 30px rgba(0, 0, 0, 0.15)"
                                : "var(--shadow-5)"
                          }}>
                            <Flex direction="column" gap="3">
                              <Heading size="3">
                                {project.emoji && (
                                  <Text 
                                    as="span" 
                                    style={{ 
                                      marginRight: '8px',
                                      fontSize: '1.2em'
                                    }}
                                  >
                                    {project.emoji}
                                  </Text>
                                )}
                                {project.title}
                              </Heading>
                              <Text size="2" color="gray">
                                {project.description}
                              </Text>

                              <Flex gap="2" wrap="wrap">
                                {project.technologies
                                  .slice(0, 3)
                                  .map((tech, idx) => (
                                    <Badge
                                      key={idx}
                                      size="1"
                                      variant="soft"
                                      color={
                                        idx % 3 === 0
                                          ? "blue"
                                          : idx % 3 === 1
                                          ? "purple"
                                          : "green"
                                      }
                                      className="tech-badge"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                {project.technologies.length > 3 && (
                                  <Badge size="1" variant="soft">
                                    +{project.technologies.length - 3}
                                  </Badge>
                                )}
                              </Flex>

                              <Flex gap="2">
                                <Button
                                  variant="soft"
                                  size="1"
                                  onClick={() => openProjectModal(project)}
                                >
                                  View Details
                                </Button>
                                {project.isPrivate && (
                                  <Badge
                                    size="1"
                                    variant="outline"
                                    radius="full"
                                  >
                                    Private
                                  </Badge>
                                )}
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
              <Text size="3" color="gray">
                No projects match your filters
              </Text>
              <Button
                variant="soft"
                size="2"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedYear("all");
                  setSelectedTech("all");
                }}
              >
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
              <Button
                variant="ghost"
                size="1"
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <Cross2Icon />
              </Button>

              <Box className="modal-header">
                <Heading size="6">
                  {modalProject.emoji && (
                    <Text 
                      as="span" 
                      style={{ 
                        marginRight: '8px',
                        fontSize: '1.2em'
                      }}
                    >
                      {modalProject.emoji}
                    </Text>
                  )}
                  {modalProject.title}
                </Heading>
                <Badge size="2" variant="soft">
                  {modalProject.period}
                </Badge>
              </Box>

              <Text size="3" as="p" mb="4">
                {modalProject.description}
              </Text>

              <Box className="modal-section">
                <Heading size="3" mb="3">
                  Technologies
                </Heading>
                <Flex gap="2" wrap="wrap">
                  {modalProject.technologies.map(
                    (tech: string, idx: number) => (
                      <Badge
                        key={idx}
                        size="2"
                        variant="soft"
                        color={
                          idx % 3 === 0
                            ? "blue"
                            : idx % 3 === 1
                            ? "purple"
                            : "green"
                        }
                        className="tech-badge"
                      >
                        {tech}
                      </Badge>
                    )
                  )}
                </Flex>
              </Box>

              <Box className="modal-section">
                <Heading size="3" mb="3">
                  Key Achievements
                </Heading>
                <Grid columns={{ initial: "1", sm: "2" }} gap="3">
                  {modalProject?.details?.map((detail: string, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="achievement-card"
                    >
                      <Box className="achievement-icon" style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        background: idx % 3 === 0 
                          ? 'var(--blue-4)' 
                          : idx % 3 === 1 
                          ? 'var(--purple-4)' 
                          : 'var(--green-4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <CheckIcon width="16" height="16" color={
                          idx % 3 === 0 
                            ? 'var(--blue-11)' 
                            : idx % 3 === 1 
                            ? 'var(--purple-11)' 
                            : 'var(--green-11)'
                        } />
                      </Box>
                      <Text size="2">{detail}</Text>
                    </motion.div>
                  ))}
                </Grid>
              </Box>

              <Flex gap="3" mt="6" justify="end">
                <ProjectLinks
                  githubUrl={modalProject?.github || modalProject?.githubUrl}
                  demoUrl={modalProject?.link || modalProject?.demoUrl}
                  isPrivate={modalProject?.isPrivate}
                  size="2"
                  variant="solid"
                  showPrivateBadge={false}
                />
                {modalProject.isPrivate && (
                  <Badge size="2" variant="outline" radius="full">
                    Private Project
                  </Badge>
                )}
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
          background: var(--glass-background);
          border: 1px solid var(--glass-border);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        [data-theme="dark"] .project-card {
          background: var(--slate-2);
          border-color: var(--glass-border);
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
          border-color: var(--blue-6);
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
          background: linear-gradient(
            to bottom right,
            var(--slate-1),
            var(--slate-2)
          );
          overflow: hidden;
        }

        [data-theme="dark"] .hero-section {
          background: linear-gradient(
            to bottom right,
            var(--slate-2),
            var(--slate-3)
          );
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
          background-image: radial-gradient(
            var(--slate-5) 1px,
            transparent 1px
          );
          background-size: 30px 30px;
          opacity: 0.2;
        }

        .circle1,
        .circle2,
        .circle3 {
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
          background: linear-gradient(
            to bottom,
            var(--slate-1),
            var(--slate-2)
          );
          position: relative;
          padding: 2rem 0;
        }

        [data-theme="dark"] .featured-section {
          background: linear-gradient(
            to bottom,
            var(--slate-2),
            var(--slate-3)
          );
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
          content: "";
          position: absolute;
          left: -13px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--timeline-connector);
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
          content: "";
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
          border: 1px solid var(--glass-border);
          transition: all 0.3s ease;
          background: var(--glass-background);
          backdrop-filter: blur(10px);
        }

        @media (max-width: 768px) {
          .timeline-card {
            margin-left: 0;
          }
        }

        .timeline-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
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
          background: var(--glass-background);
          border-radius: var(--radius-4);
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 2rem;
          position: relative;
          box-shadow: var(--shadow-5);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
        }

        [data-theme="dark"] .modal-content {
          background: var(--slate-2);
          border-color: var(--glass-border);
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
        }

        /* Glass styling variables from Experience page */
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
          --glass-background: var(--slate-2);
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
      `}</style>
    </Box>
  );
}

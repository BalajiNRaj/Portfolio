'use client';

import { Box, Container, Flex, Heading, Text, Grid, Card, Badge } from "@radix-ui/themes";
import { StarFilledIcon, RocketIcon, CodeIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import React from 'react';

interface Expertise {
  name: string;
  level: number;
}

interface Skill {
  name: string;
  icon: React.ReactElement;
  description: string;
  expertise: Expertise[];
  tags: string[];
}

const MotionCard = motion(Card); // Motion component with inferred types

export default function SkillsSection() {
  const skills: Skill[] = [
    {
      name: "Development",
      icon: <CodeIcon width={24} height={24} />,
      description: "Modern web & application development",
      expertise: [
        { name: "Frontend Development", level: 95 },
        { name: "Backend Architecture", level: 92 },
        { name: "Cloud Solutions", level: 90 }
      ],
      tags: ["React", "Node.js", "TypeScript", "GraphQL"]
    },
    {
      name: "Architecture",
      icon: <RocketIcon width={24} height={24} />,
      description: "Enterprise system design",
      expertise: [
        { name: "System Design", level: 94 },
        { name: "Microservices", level: 90 },
        { name: "Cloud Native", level: 88 }
      ],
      tags: ["AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      name: "AI & Data",
      icon: <StarFilledIcon width={24} height={24} />,
      description: "Artificial intelligence integration",
      expertise: [
        { name: "ML Integration", level: 92 },
        { name: "RAG Architecture", level: 88 },
        { name: "Data Analytics", level: 86 }
      ],
      tags: ["OpenAI", "Python", "TensorFlow", "Vector DB"]
    }
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Box 
      py="9" 
      id="skills" 
      className="skills-section"
      style={{ 
        background: 'var(--color-background)', 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container size="4">
        <Box mb="8" className="text-center">
          <Text size="2" mb="2" color="blue">EXPERTISE</Text>
          <Heading size="8" mb="4" className="gradient-text">
            Professional Skillset
          </Heading>
          <Text size="4" color="gray">
            Specialized in modern web technologies and enterprise solutions
          </Text>
        </Box>

        <Grid columns={{ initial: "1", md: "3" }} gap="6">
          {skills.map((skill, index) => (
            <MotionCard
              key={skill.name}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-muted)',
                overflow: 'hidden'
              }}
            >
              <Box p="5">
                <Flex gap="4" mb="4" align="center">
                  <Box
                    style={{
                      background: 'var(--blue-5)',
                      padding: '12px',
                      borderRadius: '12px',
                      color: 'var(--blue-11)'
                    }}
                  >
                    {skill.icon}
                  </Box>
                  <Box>
                    <Heading size="3" mb="1">{skill.name}</Heading>
                    <Text size="2" color="gray">{skill.description}</Text>
                  </Box>
                </Flex>

                <Box mb="4">
                  {skill.expertise.map((exp) => (
                    <Box key={exp.name} mb="3">
                      <Flex justify="between" mb="2">
                        <Text size="2" color="gray">{exp.name}</Text>
                        <Text size="2" color="blue">{exp.level}%</Text>
                      </Flex>
                      <Box
                        style={{
                          height: '6px',
                          background: 'var(--slate-4)',
                          borderRadius: '999px',
                          overflow: 'hidden'
                        }}
                      >
                        <Box
                          style={{
                            width: `${exp.level}%`,
                            height: '100%',
                            background: 'var(--blue-9)',
                            transition: 'width 1s ease-in-out'
                          }}
                        />
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Flex gap="2" wrap="wrap">
                  {skill.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            </MotionCard>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

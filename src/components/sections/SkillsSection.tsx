'use client';

import { Box, Container, Flex, Heading, Text, Grid, Card, Badge } from "@radix-ui/themes";
import { StarFilledIcon, RocketIcon, CodeIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import React from 'react';

interface Skill {
  name: string;
  icon: React.ReactElement;
  description: string;
}

interface Technology {
  name: string;
  proficiency: number;
}

// Motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionCard = motion(Card);
const MotionFlex = motion(Flex);

export default function SkillsSection() {
  // Core skills
  const skills: Skill[] = [
    {
      name: "UI/UX Design",
      icon: <CodeIcon width={24} height={24} />,
      description: "Creating intuitive and visually appealing user interfaces with a focus on user experience."
    },
    {
      name: "Web Development",
      icon: <RocketIcon width={24} height={24} />,
      description: "Building responsive and performant web applications using modern frameworks and technologies."
    },
    {
      name: "AI Integration",
      icon: <StarFilledIcon width={24} height={24} />,
      description: "Implementing artificial intelligence solutions to enhance applications and solve complex problems."
    }
  ];

  // Technical skills with proficiency levels
  const technologies: Technology[] = [
    { name: "React", proficiency: 90 },
    { name: "TypeScript", proficiency: 90 },
    { name: "Node.js", proficiency: 85 },
    { name: "Python", proficiency: 80 },
    { name: "TensorFlow", proficiency: 75 }
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
      id="skills" 
      style={{ 
        background: 'var(--slate-1)',
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
        left: 0,
        bottom: 0,
        background: 'var(--blue-2)',
        opacity: 0.3,
        filter: 'blur(120px)',
        zIndex: 0,
        borderRadius: '0 50% 0 0',
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
            Skills & Expertise
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
            Masterful Talents and Honors
          </MotionHeading>
          
          <MotionText
            size="3"
            color="gray"
            variants={fadeIn}
            style={{ 
              maxWidth: '650px',
              textAlign: 'center',
              lineHeight: 1.6,
            }}
          >
            We craft digital, graphic and dimensional thinking, to create category leading
            brand experiences that have meaning.
          </MotionText>
        </MotionFlex>
        
        {/* Technical skills with progress bars */}
        <MotionBox
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginBottom: '80px' }}
        >
          <Grid columns={{ initial: "1", md: "2" }} gap="9">
            <Box>
              <MotionHeading 
                size="4"
                variants={fadeIn}
                style={{ marginBottom: '40px' }}
              >
                Technical Skills
              </MotionHeading>
              
              <MotionFlex
                direction="column"
                gap="7"
                variants={fadeIn}
              >
                {technologies.map((tech) => (
                  <Box key={tech.name}>
                    <Flex justify="between" mb="2">
                      <Text size="3" weight="medium">{tech.name}</Text>
                      <Text size="3" weight="medium" style={{ color: 'var(--blue-9)' }}>{tech.proficiency}%</Text>
                    </Flex>
                    <Box
                      style={{
                        height: '6px',
                        background: 'var(--slate-4)',
                        borderRadius: '3px',
                        overflow: 'hidden'
                      }}
                    >
                      <Box
                        style={{
                          width: `${tech.proficiency}%`,
                          height: '100%',
                          background: 'var(--blue-9)',
                          borderRadius: '3px',
                          transition: 'width 1s ease-in-out'
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </MotionFlex>
            </Box>
            
            <MotionBox
              variants={fadeIn}
              style={{
                background: 'var(--slate-2)',
                borderRadius: '16px',
                border: '1px solid var(--slate-4)',
                padding: '40px',
                height: 'fit-content',
              }}
              whileHover={{
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
                borderColor: 'var(--blue-6)',
                y: -5,
              }}
              transition={{ duration: 0.3 }}
            >
              <Text size="2" color="blue" style={{ marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Experience
              </Text>
              <Heading size="5" style={{ marginBottom: '24px' }}>Professional Background</Heading>
              
              <Flex direction="column" gap="5">
                <Box>
                  <Text size="3" weight="medium" style={{ color: 'var(--blue-9)' }}>6+ Years</Text>
                  <Text size="2" color="gray">Professional Experience</Text>
                </Box>
                
                <Box style={{ height: '1px', background: 'var(--slate-4)' }} />
                
                <Box>
                  <Text size="3" weight="medium" style={{ color: 'var(--blue-9)' }}>15+ Projects</Text>
                  <Text size="2" color="gray">Successfully Completed</Text>
                </Box>
                
                <Box style={{ height: '1px', background: 'var(--slate-4)' }} />
                
                <Box>
                  <Text size="3" weight="medium" style={{ color: 'var(--blue-9)' }}>10+ Solutions</Text>
                  <Text size="2" color="gray">AI/ML Implementations</Text>
                </Box>
              </Flex>
            </MotionBox>
          </Grid>
        </MotionBox>
        
        {/* Services/Skills */}
        <MotionBox
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <MotionHeading 
            size="4"
            variants={fadeIn}
            style={{ marginBottom: '40px' }}
          >
            Services I Offer
          </MotionHeading>
          
          <Grid columns={{ initial: "1", sm: "3" }} gap="5">
            {skills.map((skill) => (
              <MotionCard
                key={skill.name}
                variants={fadeIn}
                style={{
                  border: '1px solid var(--slate-4)',
                  background: 'var(--slate-1)',
                  padding: '32px',
                  borderRadius: '12px',
                }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
                  borderColor: 'var(--blue-6)',
                }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--blue-3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue-9)',
                    marginBottom: '24px',
                  }}
                >
                  {skill.icon}
                </Box>
                
                <Heading size="3" style={{ marginBottom: '12px' }}>
                  {skill.name}
                </Heading>
                
                <Text size="2" color="gray" style={{ lineHeight: 1.6 }}>
                  {skill.description}
                </Text>
              </MotionCard>
            ))}
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
}

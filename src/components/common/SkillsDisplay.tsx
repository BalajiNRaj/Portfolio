'use client';

import { Box, Container, Flex, Heading, Text, Grid, Card, Badge, Separator } from "@radix-ui/themes";
import { StarFilledIcon, RocketIcon, CodeIcon, GearIcon, MagicWandIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import React from 'react';

// Motion components using the new motion.create() API
const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);
const MotionCard = motion.create(Card);
const MotionFlex = motion.create(Flex);

// Define types for the component props
export type BadgeColor = "ruby" | "blue" | "brown" | "crimson" | "cyan" | "gold" | "gray" | "green" | 
                "indigo" | "lime" | "orange" | "pink" | "plum" | "purple" | "red" | 
                "teal" | "tomato" | "violet" | "yellow";

export interface SkillItem {
  name: string;
  icon: React.ReactNode;
  color: BadgeColor;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface ExpertiseArea {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export interface SkillsDisplayProps {
  title?: string;
  subtitle?: string;
  description?: string;
  renderSkillCategory?: (category: SkillCategory, skills: SkillItem[]) => React.ReactNode;
  skillCategories: SkillCategory[];
  expertiseAreas: ExpertiseArea[];
  showAnimations?: boolean;
  containerSize?: "1" | "2" | "3" | "4";
  className?: string;
  style?: React.CSSProperties;
}

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

export default function SkillsDisplay({
  title = "Skills & Expertise",
  subtitle = "Technical Excellence & Innovation",
  description = "My technical skillset spans across full-stack development, AI integration, and enterprise architecture, enabling me to deliver comprehensive solutions for complex business challenges.",
  renderSkillCategory,
  skillCategories,
  expertiseAreas,
  showAnimations = true,
  containerSize = "3",
  className = "",
  style = {}
}: SkillsDisplayProps) {
  
  // Render the regular components if animations are disabled
  const ContentWrapper = showAnimations ? MotionFlex : Flex;
  const HeadingWrapper = showAnimations ? MotionHeading : Heading;
  const TextWrapper = showAnimations ? MotionText : Text;
  const BoxWrapper = showAnimations ? MotionBox : Box;
  const CardWrapper = showAnimations ? MotionCard : Card;

  const motionProps = showAnimations ? {
    variants: container,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true }
  } : {};

  const fadeInProps = showAnimations ? {
    variants: fadeIn
  } : {};

  return (
    <Box 
      id="skills" 
      className={className}
      style={{ 
        background: 'var(--slate-1)',
        position: 'relative',
        paddingTop: '120px',
        paddingBottom: '120px',
        overflow: 'hidden',
        ...style
      }}
    >
      {/* Subtle background element */}
      <Box style={{
        position: 'absolute',
        width: '40%',
        height: '50%',
        left: 0,
        bottom: 0,
        background: 'var(--slate-3)',
        opacity: 0.3,
        filter: 'blur(120px)',
        zIndex: 0,
        borderRadius: '0 50% 0 0',
      }} />
      
      <Container size={containerSize} style={{ position: 'relative', zIndex: 1 }}>
        <ContentWrapper 
          direction="column"
          align="center"
          {...motionProps}
          style={{ marginBottom: '80px' }}
        >
          {title && (
            <HeadingWrapper 
              size="1"
              color="blue"
              {...fadeInProps}
              style={{ 
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              {title}
            </HeadingWrapper>
          )}
          
          {subtitle && (
            <HeadingWrapper 
              size={{ initial: "6", sm: "7" }}
              {...fadeInProps}
              className="gradient-text"
              style={{ 
                marginBottom: '24px',
                textAlign: 'center',
              }}
            >
              {subtitle}
            </HeadingWrapper>
          )}
          
          {description && (
            <TextWrapper
              size="3"
              style={{ 
                maxWidth: '650px',
                textAlign: 'center',
                lineHeight: 1.6,
                color: 'var(--slate-11)'
              }}
              {...fadeInProps}
            >
              {description}
            </TextWrapper>
          )}
        </ContentWrapper>
        
        {/* Technical skills with cards */}
        {skillCategories.length > 0 && (
          <BoxWrapper
            {...motionProps}
            style={{ marginBottom: '80px' }}
          >
            <Grid columns={{ initial: "1", sm: "2" }} gapX="6" gapY="6">
              {skillCategories.map((category, index) => (
                <CardWrapper 
                  key={index}
                  {...fadeInProps}
                  variant="surface"
                  style={{ 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '16px',
                    boxShadow: 'var(--shadow-5)',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
                  }}
                  {...(showAnimations ? {
                    whileHover: {
                      y: -5,
                      boxShadow: 'var(--shadow-hover)',
                    }
                  } : {})}
                >
                  {renderSkillCategory ? (
                    renderSkillCategory(category, category.skills)
                  ) : (
                    <Flex direction="column" gap="4" p="5">
                      <Heading size="4">{category.title}</Heading>
                      <Separator size="4" />
                      <Flex wrap="wrap" gap="2">
                        {category.skills.map((skill, idx) => (
                          <Badge 
                            key={idx} 
                            size="2" 
                            color={skill.color}
                            style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '4px', 
                              padding: '5px 8px',
                            }}
                          >
                            {skill.icon}
                            {skill.name}
                          </Badge>
                        ))}
                      </Flex>
                    </Flex>
                  )}
                </CardWrapper>
              ))}
            </Grid>
          </BoxWrapper>
        )}
        
        {/* Expertise Areas */}
        {expertiseAreas.length > 0 && (
          <BoxWrapper
            {...motionProps}
          >
            <HeadingWrapper 
              size="4"
              {...fadeInProps}
              style={{ marginBottom: '40px' }}
            >
              Specialized Expertise
            </HeadingWrapper>
            
            <Grid columns={{ initial: "1", sm: "3" }} gapX="6" gapY="6">
              {expertiseAreas.map((area, index) => (
                <CardWrapper
                  key={area.name}
                  {...fadeInProps}
                  variant="ghost"
                  style={{
                    border: '1px solid var(--slate-4)',
                    padding: '32px',
                    borderRadius: '12px',
                    background: 'var(--card-background)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.3s ease',
                  }}
                  {...(showAnimations ? {
                    whileHover: {
                      y: -5,
                      boxShadow: 'var(--shadow-hover)',
                      borderColor: 'var(--blue-6)',
                    },
                    transition: { duration: 0.3 }
                  } : {})}
                >
                  <Box
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'var(--blue-4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--blue-9)',
                      marginBottom: '24px',
                    }}
                  >
                    {area.icon}
                  </Box>
                  
                  <Heading size="3" style={{ marginBottom: '12px' }}>
                    {area.name}
                  </Heading>
                  
                  <Text size="2" style={{ lineHeight: 1.6, color: 'var(--slate-11)' }}>
                    {area.description}
                  </Text>
                </CardWrapper>
              ))}
            </Grid>
          </BoxWrapper>
        )}
      </Container>
    </Box>
  );
}

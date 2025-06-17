'use client';

import { Box, Container, Flex, Heading, Text, Grid, Button, Link, Card, Badge, Inset } from "@radix-ui/themes";
import { ArrowRightIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <Container style={{ padding: 'var(--space-9) 0' }}>
        <Flex direction="column" align="center" mb="6" className="section-header">
          <Text size="4" color="blue" mb="2">MY WORK</Text>
          <Heading size="8" className="gradient-text">Featured Projects</Heading>
          <Text as="p" color="gray" mt="3" size="3" style={{ maxWidth: '600px', textAlign: 'center' }}>
            Explore some of my recent projects where I've applied modern technologies to solve real-world problems.
          </Text>
        </Flex>

        <Grid columns={{ initial: "1", sm: "3" }} gap="6" className="projects-grid">
          {/* Project Card 1 */}
          <Card className="project-card">
            <Inset clip="padding-box" side="top" pb="current">
              <Box position="relative" style={{ height: '200px', overflow: 'hidden' }}>
                <Image
                  src="/phone.svg"
                  alt="AI-Powered Answer Agent"
                  fill
                  style={{ objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/600x400/5583EE/ffffff?text=AI+Answer+Agent';
                  }}
                />
                <Box className="project-links" style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  display: 'flex',
                  gap: '8px',
                  zIndex: 10
                }}>
                  <Link href="https://github.com/username/project1" target="_blank" style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <GitHubLogoIcon width="16" height="16" />
                  </Link>
                  <Link href="https://project1-demo.com" target="_blank" style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <ArrowRightIcon width="16" height="16" />
                  </Link>
                </Box>
              </Box>
            </Inset>
            <Box p="4">
              <Heading size="4">AI-Powered Answer Agent</Heading>
              <Text as="p" color="gray" mt="2" size="2" style={{ minHeight: '60px' }}>
                Automated system using RAG and OpenAI's Ada model for intelligent response generation with Microsoft recognition.
              </Text>
              <Box className="tech-stack" mt="4">
                <Text size="2" color="gray" mb="2">Technologies:</Text>
                <Flex gap="2" wrap="wrap">
                  <Badge variant="soft" radius="full">
                    <Flex align="center" gap="1">
                      <Box className="tech-icon">🤖</Box>
                      <Text>OpenAI</Text>
                    </Flex>
                  </Badge>
                  <Badge variant="soft" radius="full">
                    <Flex align="center" gap="1">
                      <Box className="tech-icon">🔍</Box>
                      <Text>SOLR</Text>
                    </Flex>
                  </Badge>
                  <Badge variant="soft" radius="full">
                    <Flex align="center" gap="1">
                      <Box className="tech-icon">📚</Box>
                      <Text>RAG</Text>
                    </Flex>
                  </Badge>
                  <Badge variant="soft" radius="full">
                    <Flex align="center" gap="1">
                      <Box className="tech-icon">🧠</Box>
                      <Text>ML</Text>
                    </Flex>
                  </Badge>
                </Flex>
              </Box>
            </Box>
          </Card>

          {/* Project Card 2 */}
          <Card className="project-card">
            <Inset clip="padding-box" side="top" pb="current">
              <Box position="relative" style={{ height: '200px', overflow: 'hidden' }}>
                <Image
                  src="/phone.svg"
                  alt="Profile Center (Trust Center)"
                  fill
                  style={{ objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/600x400/55EE83/ffffff?text=Trust+Center';
                  }}
                />
                <Box className="project-links" style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  display: 'flex',
                  gap: '8px',
                  zIndex: 10
                }}>
                  <Link href="https://github.com/username/project2" target="_blank" style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <GitHubLogoIcon width="16" height="16" />
                  </Link>
                  <Link href="https://project2-demo.com" target="_blank" style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <ArrowRightIcon width="16" height="16" />
                  </Link>
                </Box>
              </Box>
            </Inset>
            <Box p="4">
              <Heading size="4">Profile Center (Trust Center)</Heading>
              <Text as="p" color="gray" mt="2" size="2" style={{ minHeight: '60px' }}>
                AI-powered security profiles with anonymous viewer tracking, Salesforce/Slack integration, and ChatGPT features.
              </Text>
              <Box className="tech-stack" mt="4">
                <Text size="2" color="gray" mb="2">Technologies:</Text>
                <Flex gap="2" wrap="wrap">
                  <Badge variant="soft" radius="full">
                    <Flex align="center" gap="1">
                      <Box className="tech-icon">🤖</Box>
                      <Text>OpenAI</Text>
                    </Flex>
                  </Badge>
                  <Badge variant="soft" radius="full">
                    <Flex align="center" gap="1">
                      <Box className="tech-icon">🍃</Box>
                      <Text>Spring Boot</Text>
                    </Flex>
                  </Badge>
                  <Badge variant="soft" radius="full">
                    <Flex align="center" gap="1">
                      <Box className="tech-icon">💬</Box>
                      <Text>Slack</Text>
                    </Flex>
                  </Badge>
                  <Badge variant="soft" radius="full">
                    <Flex align="center" gap="1">
                      <Box className="tech-icon">☁️</Box>
                      <Text>Salesforce</Text>
                    </Flex>
                  </Badge>
                </Flex>
              </Box>
            </Box>
          </Card>

          {/* Project Card 3 */}
          <Card className="project-card">
            <Inset clip="padding-box" side="top" pb="current">
              <Box position="relative" style={{ height: '200px', overflow: 'hidden' }}>
                <Image
                  src="/phone.svg"
                  alt="Agent Studio Platform"
                  fill
                  style={{ objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/600x400/EE5583/ffffff?text=Agent+Studio';
                  }}
                />
                <Box className="project-links" style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  display: 'flex',
                  gap: '8px',
                  zIndex: 10
                }}>
                  <Link href="https://github.com/username/project3" target="_blank" style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <GitHubLogoIcon width="16" height="16" />
                  </Link>
                  <Link href="https://project3-demo.com" target="_blank" style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <ArrowRightIcon width="16" height="16" />
                  </Link>
                </Box>
              </Box>
            </Inset>
            <Box p="4">
              <Heading size="4">Agent Studio Platform</Heading>
              <Text as="p" color="gray" mt="2" size="2" style={{ minHeight: '60px' }}>
                Multiple AI-driven agents including Dynamic Report Agent, Executive Summary Agent, and Analysis Agent.
              </Text>
              <Box className="tech-stack" mt="4">
                <Text size="2" color="gray" mb="2">Technologies:</Text>
                <Flex gap="2" wrap="wrap">
                  <Badge variant="soft" radius="full">
                    <Flex align="center" gap="1">
                      <Box className="tech-icon">🤖</Box>
                      <Text>AI/ML</Text>
                    </Flex>
                  </Badge>
                  <Badge variant="soft" radius="full">
                    <Flex align="center" gap="1">
                      <Box className="tech-icon">📊</Box>
                      <Text>Analytics</Text>
                    </Flex>
                  </Badge>
                  <Badge variant="soft" radius="full">
                    <Flex align="center" gap="1">
                      <Box className="tech-icon">🔄</Box>
                      <Text>Automation</Text>
                    </Flex>
                  </Badge>
                  <Badge variant="soft" radius="full">
                    <Flex align="center" gap="1">
                      <Box className="tech-icon">⚛️</Box>
                      <Text>React</Text>
                    </Flex>
                  </Badge>
                </Flex>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Flex justify="center" mt="8">
          <Button size="4" variant="outline" asChild>
            <Link href="/projects" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0 24px',
              borderRadius: '40px',
              transition: 'all 0.3s ease'
            }}>
              View All Projects
              <ArrowRightIcon width="16" height="16" />
            </Link>
          </Button>
        </Flex>
      </Container>
    </section>
  );
}

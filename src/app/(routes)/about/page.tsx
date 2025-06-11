'use client';

import { Box, Container, Heading, Text, Card, Grid, Badge, Flex } from "@radix-ui/themes";
import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon, GlobeIcon, GearIcon, RocketIcon, PersonIcon } from "@radix-ui/react-icons";
import styles from "@/app/animations.module.css";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <Box py={{ initial: "6", sm: "8", md: "9" }} className={styles.fadeIn}>
        <Container>
          <Flex direction="column" gap={{ initial: "3", sm: "4" }}>
            <Box>
              <Badge size="2" color="purple" mb="4">ABOUT ME</Badge>
              <Heading 
                size={{ initial: "8", sm: "9" }} 
                mb="4"
                className="gradient-text"
              >
                Hi! I'm Balaji Nagarajan
              </Heading>
            </Box>
            <Text 
              size={{ initial: "3", sm: "4" }}
              color="gray" 
              style={{ maxWidth: '800px', lineHeight: '1.6' }}
            >
              I'm a passionate Technical Lead with expertise in AI/ML and Full-Stack Development, with over 6 years 
              of experience in building enterprise solutions. Skilled in architecting scalable applications, implementing 
              AI-driven features, and leading high-performance engineering teams. Currently focused on developing 
              innovative solutions using cutting-edge technologies like LLMs, RAG, and cloud-native architectures.
            </Text>

            <Grid columns={{ initial: "2", sm: "4" }} gap="4" mt="4" className={styles.staggered}>
              <Flex align="center" gap="2" className={`${styles.staggeredAnimation} ${styles.delay1}`}>
                <EnvelopeClosedIcon />
                <Text size="2">balaji.nagarajan@gmail.com</Text>
              </Flex>
              <Flex align="center" gap="2" className={`${styles.staggeredAnimation} ${styles.delay2}`}>
                <GlobeIcon />
                <Text size="2">Coimbatore, Tamil Nadu</Text>
              </Flex>
              <Flex align="center" gap="2" className={`${styles.staggeredAnimation} ${styles.delay3}`}>
                <LinkedInLogoIcon />
                <Text size="2">in/balaji-nagarajan</Text>
              </Flex>
              <Flex align="center" gap="2" className={`${styles.staggeredAnimation} ${styles.delay4}`}>
                <GitHubLogoIcon />
                <Text size="2">balaji-nagarajan</Text>
              </Flex>
            </Grid>
          </Flex>
        </Container>
      </Box>

      {/* Expertise Section */}
      <Box 
        py={{ initial: "6", sm: "8", md: "9" }} 
        style={{ background: 'var(--accent-a2)' }}
      >
        <Container>
          <Heading 
            size={{ initial: "6", sm: "7", md: "8" }} 
            align="center" 
            mb={{ initial: "4", sm: "6" }}
            className={styles.slideUp}
          >
            My Expertise
          </Heading>
          <Grid 
            columns={{ initial: "1", sm: "2", md: "3" }} 
            gap={{ initial: "4", sm: "6" }}
          >
            <Card className={`${styles.card} ${styles.slideInFromLeft} ${styles.delay1}`}>
              <Flex direction="column" gap="2" p={{ initial: "4", sm: "6" }}>
                <GearIcon width="24" height="24" color="var(--accent-9)" />
                <Heading size="3">Full Stack Development</Heading>
                <Text color="gray">
                  Architecting and developing scalable enterprise applications with modern cloud-native technologies and microservices.
                </Text>
              </Flex>
            </Card>

            <Card className={`${styles.card} ${styles.slideInFromLeft} ${styles.delay2}`}>
              <Flex direction="column" gap="2" p={{ initial: "4", sm: "6" }}>
                <RocketIcon width="24" height="24" color="var(--accent-9)" />
                <Heading size="3">AI Integration</Heading>
                <Text color="gray">
                  Building advanced AI solutions using LLMs, RAG, and custom ML models for enterprise automation and intelligence.
                </Text>
              </Flex>
            </Card>

            <Card className={`${styles.card} ${styles.slideInFromLeft} ${styles.delay3}`}>
              <Flex direction="column" gap="2" p={{ initial: "4", sm: "6" }}>
                <PersonIcon width="24" height="24" color="var(--accent-9)" />
                <Heading size="3">Technical Leadership</Heading>
                <Text color="gray">
                  Mentoring teams, driving architectural decisions, and implementing best practices for scalable enterprise solutions.
                </Text>
              </Flex>
            </Card>
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box py={{ initial: "6", sm: "8", md: "9" }}>
        <Container>
          <Heading 
            size={{ initial: "6", sm: "7" }} 
            align="center" 
            mb={{ initial: "4", sm: "6" }}
            className={styles.slideUp}
          >
            Technical Skills
          </Heading>
          <Grid 
            columns={{ initial: "1", sm: "2" }} 
            gap={{ initial: "3", sm: "4" }}
            className={styles.staggered}
          >
            <Card className={`${styles.staggeredAnimation} ${styles.delay1} ${styles.card}`}>
              <Flex direction="column" gap="3" p="6">
                <Heading size="3" mb="2">Languages & Backend</Heading>
                <Flex wrap="wrap" gap="2">
                  <Badge size="2">Java</Badge>
                  <Badge size="2">Spring Boot</Badge>
                  <Badge size="2">Python</Badge>
                  <Badge size="2">TypeScript</Badge>
                  <Badge size="2">Node.js</Badge>
                  <Badge size="2">REST APIs</Badge>
                </Flex>
              </Flex>
            </Card>
            
            <Card className={`${styles.staggeredAnimation} ${styles.delay2} ${styles.card}`}>
              <Flex direction="column" gap="3" p="6">
                <Heading size="3" mb="2">Frontend & UI</Heading>
                <Flex wrap="wrap" gap="2">
                  <Badge size="2">React</Badge>
                  <Badge size="2">Next.js</Badge>
                  <Badge size="2">Angular</Badge>
                  <Badge size="2">TypeScript</Badge>
                  <Badge size="2">Material UI</Badge>
                  <Badge size="2">Radix UI</Badge>
                </Flex>
              </Flex>
            </Card>

            <Card className={`${styles.staggeredAnimation} ${styles.delay3} ${styles.card}`}>
              <Flex direction="column" gap="3" p="6">
                <Heading size="3" mb="2">AI & ML</Heading>
                <Flex wrap="wrap" gap="2">
                  <Badge size="2">OpenAI</Badge>
                  <Badge size="2">LangChain</Badge>
                  <Badge size="2">RAG</Badge>
                  <Badge size="2">Vector Search</Badge>
                  <Badge size="2">SOLR</Badge>
                  <Badge size="2">Natural Language Processing</Badge>
                </Flex>
              </Flex>
            </Card>

            <Card className={`${styles.staggeredAnimation} ${styles.delay4} ${styles.card}`}>
              <Flex direction="column" gap="3" p="6">
                <Heading size="3" mb="2">Tools & Platforms</Heading>
                <Flex wrap="wrap" gap="2">
                  <Badge size="2">Git</Badge>
                  <Badge size="2">Docker</Badge>
                  <Badge size="2">Azure</Badge>
                  <Badge size="2">MongoDB</Badge>
                  <Badge size="2">PostgreSQL</Badge>
                  <Badge size="2">Redis</Badge>
                </Flex>
              </Flex>
            </Card>
          </Grid>
        </Container>
      </Box>

      {/* Achievements & Education */}
      <Box 
        py={{ initial: "6", sm: "8", md: "9" }} 
        style={{ background: 'var(--accent-a2)' }}
      >
        <Container>
          <Grid 
            columns={{ initial: "1", sm: "2" }} 
            gap={{ initial: "4", sm: "6" }}
          >
            <Card className={`${styles.slideInFromLeft} ${styles.delay1}`}>
              <Flex direction="column" gap="4" p="6">
                <Heading size="6">Recent Achievements</Heading>
                <Flex direction="column" gap="2">
                  <Badge size="2" color="blue">Game Changer Award for AI Innovation (2024)</Badge>
                  <Badge size="2" color="purple">Best Team Award - Trust Center (2023)</Badge>
                  <Badge size="2" color="orange">Customer Delight Award (2021)</Badge>
                </Flex>
              </Flex>
            </Card>

            <Card className={`${styles.slideInFromRight} ${styles.delay2}`}>
              <Flex direction="column" gap="4" p="6">
                <Heading size="6">Education</Heading>
                <Flex justify="between" align="center">
                  <Box>
                    <Text size="3" weight="bold">B.Tech, Information Technology</Text>
                    <Text size="2" color="gray">Sri Ramakrishna Engineering College</Text>
                    <Text size="2" color="gray">Coimbatore, Tamil Nadu</Text>
                  </Box>
                  <Badge>CGPA: 8.06</Badge>
                </Flex>
                <Flex gap="2" wrap="wrap">
                  <Badge size="1" variant="soft">2015-2019</Badge>
                </Flex>
              </Flex>
            </Card>
          </Grid>
        </Container>
      </Box>

      <style jsx global>{`
        .gradient-text {
          background: linear-gradient(to right, var(--accent-9), var(--accent-12));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </main>
  );
}

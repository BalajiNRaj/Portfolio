import { Box, Container, Heading, Text, Card, Grid, Badge, Flex } from "@radix-ui/themes";
import { RocketIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <Box py={{ initial: "6", sm: "8", md: "9" }}>
        <Container>
          <Flex direction="column" gap={{ initial: "3", sm: "4" }}>
            <Heading 
              size={{ initial: "6", sm: "7", md: "8" }} 
              align="center" 
              className="gradient-text animate-in"
            >
              Who I Am
            </Heading>            <Text 
              size={{ initial: "2", sm: "3", md: "4" }} 
              align="center" 
              color="gray" 
              className="animate-in"
              style={{ 
                maxWidth: '800px', 
                margin: '0 auto',
                paddingLeft: 'var(--content-padding-x)',
                paddingRight: 'var(--content-padding-x)'
              }}
            >
              I am Balaji Nagarajan, a Technical Lead based in Coimbatore, Tamil Nadu. Specializing in AI/ML and
              Full-Stack Development with 6+ years of experience building enterprise solutions. My expertise spans
              Java, Python, TypeScript, and cloud technologies, with a focus on AI-driven applications and
              cloud-native architectures.
            </Text>
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
            className="animate-in"
          >
            My Expertise
          </Heading>
          <Grid 
            columns={{ initial: "1", sm: "2", md: "3" }} 
            gap={{ initial: "4", sm: "6" }}
          >
            <Card className="animate-in">
              <Flex direction="column" gap="2" p={{ initial: "4", sm: "6" }}>
                <GearIcon width="24" height="24" color="var(--accent-9)" />
                <Heading size="3">Full Stack Development</Heading>                <Text color="gray">
                  Architecting and developing scalable enterprise applications with modern cloud-native technologies and microservices.
                </Text>
              </Flex>
            </Card>

            <Card className="animate-in">
              <Flex direction="column" gap="2" p={{ initial: "4", sm: "6" }}>
                <RocketIcon width="24" height="24" color="var(--accent-9)" />
                <Heading size="3">AI Integration</Heading>
                <Text color="gray">
                  Building advanced AI solutions using LLMs, RAG, and custom ML models for enterprise automation and intelligence.
                </Text>
              </Flex>
            </Card>

            <Card className="animate-in">
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
            size={{ initial: "6", sm: "7", md: "8" }} 
            align="center" 
            mb={{ initial: "4", sm: "6" }}
            className="animate-in"
          >
            Technical Skills
          </Heading>
          <Grid 
            columns={{ initial: "1", sm: "2" }} 
            gap={{ initial: "3", sm: "4" }}
          >
            <Card>
              <Flex direction="column" gap="3" p="6">
                <Heading size="3" mb="2">Backend & Languages</Heading>                <Flex wrap="wrap" gap="2">
                  <Badge size="2">Java</Badge>
                  <Badge size="2">Spring Boot</Badge>
                  <Badge size="2">Python</Badge>
                  <Badge size="2">C#/.NET</Badge>
                  <Badge size="2">TypeScript</Badge>
                  <Badge size="2">Go</Badge>
                </Flex>
              </Flex>
            </Card>
            
            <Card>
              <Flex direction="column" gap="3" p="6">
                <Heading size="3" mb="2">Frontend</Heading>                <Flex wrap="wrap" gap="2">
                  <Badge size="2">React</Badge>
                  <Badge size="2">Next.js</Badge>
                  <Badge size="2">Angular</Badge>
                  <Badge size="2">Radix UI</Badge>
                  <Badge size="2">Material UI</Badge>
                </Flex>
              </Flex>
            </Card>

            <Card>
              <Flex direction="column" gap="3" p="6">
                <Heading size="3" mb="2">AI & Cloud</Heading>                <Flex wrap="wrap" gap="2">
                  <Badge size="2">OpenAI</Badge>
                  <Badge size="2">Claude</Badge>
                  <Badge size="2">LangChain</Badge>
                  <Badge size="2">RAG</Badge>
                  <Badge size="2">TensorFlow</Badge>
                  <Badge size="2">Azure ML</Badge>
                </Flex>
              </Flex>
            </Card>

            <Card>
              <Flex direction="column" gap="3" p="6">
                <Heading size="3" mb="2">Databases & Tools</Heading>                <Flex wrap="wrap" gap="2">
                  <Badge size="2">AWS</Badge>
                  <Badge size="2">Azure</Badge>
                  <Badge size="2">Docker</Badge>
                  <Badge size="2">Kubernetes</Badge>
                  <Badge size="2">MongoDB</Badge>
                  <Badge size="2">PostgreSQL</Badge>
                  <Badge size="2">Redis</Badge>
                  <Badge size="2">Git</Badge>
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
            <Card>
              <Flex direction="column" gap="4" p="6">
                <Heading size="6">Achievements</Heading>                <Flex direction="column" gap="2">
                  <Badge size="2" color="green">Innovation Excellence Award (2025)</Badge>
                  <Badge size="2" color="blue">AI Implementation Hero (2024)</Badge>
                  <Badge size="2" color="purple">Technical Leadership Award (2023)</Badge>
                  <Badge size="2" color="orange">Best Team Lead (2022)</Badge>
                  <Badge size="2" color="pink">Best Performance Award (2021)</Badge>
                </Flex>
              </Flex>
            </Card>

            <Card>
              <Flex direction="column" gap="4" p="6">
                <Heading size="6">Education</Heading>
                <Flex justify="between" align="center">
                  <Box>
                    <Text size="3" weight="bold">B.Tech, Information Technology</Text>
                    <Text size="2" color="gray">Sri Ramakrishna Engineering College, Coimbatore</Text>
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
    </main>
  );
}

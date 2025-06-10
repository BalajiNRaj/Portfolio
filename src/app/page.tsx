import { Box, Container, Flex, Heading, Text, Grid, Button, Link, Card, Badge } from "@radix-ui/themes";
import { GitHubLogoIcon, LinkedInLogoIcon, FileTextIcon, GlobeIcon, ArrowRightIcon } from '@radix-ui/react-icons';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Box style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Grid columns={{ initial: "1" }} gap="4" align="center">
            <Box>
              <Text
                size="4"
                color="blue"
                className="animate-slide-up"
              >
                Hi there! 👋
              </Text>
              <Heading
                size="9"
                className="animate-slide-up"
                style={{
                  marginTop: '1rem',
                  animationDelay: '0.2s'
                }}
              >
                I'm Balaji Nagarajan
              </Heading>              
              <Text
                size="5"
                as="p"
                color="gray"
                className="animate-slide-up"
                style={{
                  marginTop: '2rem',
                  animationDelay: '0.4s',
                }}
              >
                Technical Lead specializing in AI/ML and Full-Stack Development with 6+ years
                of experience. Expert in building enterprise solutions using cutting-edge technologies.
                Passionate about creating innovative AI-powered applications that transform businesses.
              </Text>
              <Flex className="button-group" gap="4" mt="6" style={{ animationDelay: '0.6s' }}>
                <Button size="4" variant="solid" asChild>
                  <Link href="/projects">
                    View My Work <ArrowRightIcon />
                  </Link>
                </Button>
                <Button size="4" variant="soft" asChild>
                  <Link href="#contact">Let's Connect</Link>
                </Button>
              </Flex>
            </Box>
          </Grid>
        </Container>

        {/* Background Circles */}
        <Box
          className="gradient-circle"
          style={{
            position: 'absolute',
            width: '40vw',
            height: '40vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, var(--blue-4), transparent)',
            top: '-10%',
            right: '-10%',
            opacity: 0.4,
            zIndex: 0
          }}
        />
        <Box
          className="gradient-circle"
          style={{
            position: 'absolute',
            width: '30vw',
            height: '30vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, var(--purple-4), transparent)',
            bottom: '-5%',
            left: '-5%',
            opacity: 0.3,
            zIndex: 0
          }}
        />
      </Box>

      {/* Projects Section */}
      <Box py="9">
        <Container className="container">
          <Heading size="8" mb="6" align="center">Featured Projects</Heading>
          <Grid columns={{ initial: "1", sm: "2" }} gap="6">
            {/* Project Cards */}            <Card className="card animate-slide-up">
              <Flex direction="column" gap="3">
                <Box className="project-image" style={{
                  height: '200px',
                  background: 'var(--gray-3)',
                  borderRadius: 'var(--radius-3)',
                  overflow: 'hidden'
                }}>
                  {/* Project thumbnail would go here */}
                </Box>
                <Box>
                  <Heading size="4">Enterprise AI Assistant</Heading>
                  <Text as="p" color="gray" mt="2">
                    AI-powered enterprise solution for automated content generation, document analysis, and data extraction.
                  </Text>
                  <Flex gap="2" mt="4" wrap="wrap">
                    <Badge>OpenAI</Badge>
                    <Badge>LangChain</Badge>
                    <Badge>Spring Boot</Badge>
                    <Badge>React</Badge>
                  </Flex>
                </Box>
              </Flex>
            </Card>

            <Card className="card animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Flex direction="column" gap="3">
                <Box className="project-image" style={{
                  height: '200px',
                  background: 'var(--gray-3)',
                  borderRadius: 'var(--radius-3)',
                  overflow: 'hidden'
                }}>
                  {/* Project thumbnail would go here */}
                </Box>
                <Box>
                  <Heading size="4">AI Content Assistant</Heading>
                  <Text as="p" color="gray" mt="2">
                    Advanced content generation platform using LLMs and RAG for personalized, context-aware responses.
                  </Text>
                  <Flex gap="2" mt="4" wrap="wrap">
                    <Badge>LangChain</Badge>
                    <Badge>RAG</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>Vector DB</Badge>
                  </Flex>
                </Box>
              </Flex>
            </Card>
          </Grid>

          <Flex justify="center" mt="6">
            <Button variant="ghost" size="3" asChild>
              <Link href="/projects">
                View All Projects <ArrowRightIcon />
              </Link>
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box py="9" style={{ background: 'var(--gray-2)' }}>
        <Container>
          <Heading size="8" mb="6" align="center">Skills & Technologies</Heading>          <Grid columns={{ initial: "2", sm: "3", md: "4" }} gap="6">            
            <Card>
              <Flex direction="column" gap="2" align="center" p="4">
                <Box style={{ fontSize: '2rem' }}>⚙️</Box>
                <Heading size="3">Backend</Heading>
                <Text as="p" color="gray" align="center" size="2">
                  Spring Boot, REST APIs, OAuth, JWT, Swagger
                </Text>
              </Flex>
            </Card>
            <Card>
              <Flex direction="column" gap="2" align="center" p="4">
                <Box style={{ fontSize: '2rem' }}>🤖</Box>
                <Heading size="3">AI/ML</Heading>
                <Text as="p" color="gray" align="center" size="2">
                  OpenAI, Vector Search, SOLR, Machine Learning
                </Text>
              </Flex>
            </Card>
            <Card>
              <Flex direction="column" gap="2" align="center" p="4">
                <Box style={{ fontSize: '2rem' }}>🔌</Box>
                <Heading size="3">Integrations</Heading>
                <Text as="p" color="gray" align="center" size="2">
                  MS Office VSTO, Salesforce, Slack, Webhooks
                </Text>
              </Flex>
            </Card>
            <Card>
              <Flex direction="column" gap="2" align="center" p="4">
                <Box style={{ fontSize: '2rem' }}>🛠️</Box>
                <Heading size="3">Tools</Heading>
                <Text as="p" color="gray" align="center" size="2">
                  Postman, XML, SHA, GrapeJS
                </Text>
              </Flex>
            </Card>
          </Grid>
        </Container>
      </Box>      {/* Contact Section */}
      <Box py="9" id="contact">
        <Container size="3" className="container">
          <Card>
            <Flex direction="column" align="center" gap="4" p="6">
              <Heading size="6" align="center">Let{"'"}s Build Something Innovative</Heading>
              <Text align="center" color="gray">
                Always excited to collaborate on challenging projects and explore new opportunities.
              </Text>
              <Flex className="button-group" gap="4">
                <Button asChild>
                  <Link href="mailto:balajinraj007@gmail.com">
                    Get in Touch
                  </Link>
                </Button>
                <Button variant="soft" asChild>
                  <Link href="/Balaji Nagarajan.pdf" target="_blank">
                    Download Resume
                  </Link>
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Container>
      </Box>
    </main>
  );
}

import { Box, Container, Flex, Heading, Text, Grid, Button, Link, Card, Badge } from "@radix-ui/themes";
import { GitHubLogoIcon, LinkedInLogoIcon, FileTextIcon, GlobeIcon, ArrowRightIcon } from '@radix-ui/react-icons';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Box className="hero-section">
        <Container className="container">
          <Flex className="hero-content">
            <Box style={{ width: '100%' }}>
              <Text 
                size="3" 
                color="blue" 
                className="animate-slide-up"
                // align="center"
              >
                Hi there! 👋
              </Text>
              <Heading 
                size="9" 
                className="animate-slide-up"
                align="center"
                style={{ 
                  marginTop: '1rem',
                  animationDelay: '0.2s' 
                }}
              >
                I'm Balaji Nagarajan
              </Heading>
              <Text 
                size="5" 
                color="gray" 
                align="center"
                className="animate-slide-up"
                style={{ 
                  marginTop: '1rem',
                  maxWidth: '600px',
                  margin: '1rem auto',
                  animationDelay: '0.4s' 
                }}
              >
                Technical Lead crafting innovative solutions with AI and Full-Stack expertise. 
                Transforming ideas into impactful digital experiences.
              </Text>
              <Flex className="button-group" style={{ animationDelay: '0.6s' }}>
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

            {/* <Box className="profile-image-container">
              <img
                src="/profile.jpg"
                alt="Balaji Nagarajan"
                className="profile-image"
                style={{
                  boxShadow: '0 0 40px var(--blue-6)',
                }}
              />
            </Box> */}
          </Flex>
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
            {/* Project Cards */}
            <Card className="card animate-slide-up">
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
                  <Heading size="4">Profile Center</Heading>
                  <Text as="p" color="gray" mt="2">
                    AI-powered Trust Center solution with custom domain setup and enterprise integrations.
                  </Text>
                  <Flex gap="2" mt="4" wrap="wrap">
                    <Badge>AI</Badge>
                    <Badge>LLMs</Badge>
                    <Badge>Trust Center</Badge>
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

      {/* Contact Section */}
      <Box py="9" id="contact">
        <Container size="3" className="container">
          <Card>
            <Flex direction="column" align="center" gap="4" p="6">
              <Heading size="6" align="center">Let's Create Something Amazing</Heading>
              <Text align="center" color="gray">
                I'm always interested in hearing about new projects and opportunities.
              </Text>
              <Flex className="button-group">
                <Button asChild>
                  <Link href="mailto:balajinraj007@gmail.com">
                    Get in Touch
                  </Link>
                </Button>
                <Button variant="soft" asChild>
                  <Link href="/Balaji Nagarajan.pdf" target="_blank">
                    View Resume
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

'use client';

import { Box, Container, Flex, Heading, Text, Grid, Button, Link, Card, Badge, Dialog, TextField, TextArea } from "@radix-ui/themes";
import { ArrowRightIcon, GitHubLogoIcon, LinkedInLogoIcon, Cross2Icon } from '@radix-ui/react-icons';
import Image from 'next/image';

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
      {/* Footer Section */}
      <Box style={{ background: 'var(--gray-1)' }} id="contact">
        <Container>
          <Box py="9">
            <Grid columns={{ initial: "1", md: "2" }} gap="7" align="center">
              <Box>
                <Heading size="8" style={{ maxWidth: '35ch' }}>
                  Have a project in mind? Let's get to work.
                </Heading>
                <Box mt="8">
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Button size="4" className="say-hello-btn">
                        Say Hello
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.0035 7.4083L5.41176 16L4 14.5882L12.5917 5.99654H5.01905V4H16V14.981H14.0035V7.4083Z" fill="currentColor" />
                        </svg>
                      </Button>
                    </Dialog.Trigger>
                    <Dialog.Content style={{ maxWidth: '500px' }}>
                      <Dialog.Title>Got Ideas? We've got the skills. Let's team up.</Dialog.Title>
                      <Dialog.Description size="2" mb="4">
                        Tell us more about yourself and what you've got in mind.
                      </Dialog.Description>
                      <Flex direction="column" gap="4">
                        <Grid columns="2" gap="4">
                          <TextField.Root placeholder="Full name..." />
                          <TextField.Root type="email" placeholder="Your Email" />
                        </Grid>
                        <TextField.Root placeholder="Subject" />
                        <TextArea placeholder="Your message..." />
                        <Box>
                          <Button size="3">Send Message</Button>
                        </Box>
                      </Flex>
                      <Dialog.Close>
                        <Button variant="soft" color="gray" style={{ position: 'absolute', right: 16, top: 16 }}>
                          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="currentColor" /></svg>
                        </Button>
                      </Dialog.Close>
                    </Dialog.Content>
                  </Dialog.Root>
                </Box>
              </Box>
              <Box>
                <Image src="/contact-cartoon.png" alt="Contact Illustration" width={400} height={300} style={{ maxWidth: '100%', height: 'auto' }} />
              </Box>
            </Grid>
          </Box>

          <Grid columns={{ initial: "1", sm: "3" }} gap="6">
            <Flex align="center" gap="4">
              <Image src="/phone.svg" alt="Phone Icon" width={40} height={40} />
              <Flex direction={'column'} gap="1">
                <Text size="2" color="gray">Mon-Fri from 8am to 5pm.</Text>
                <Text size="3" mt="1">+91 8667707484</Text>
              </Flex>
            </Flex>

            <Flex align="center" gap="4">
              <Image src="/mail.svg" alt="Mail Icon" width={40} height={40} />
              <Flex direction={'column'} gap="1">
                <Text size="2" color="gray">I'm there to help you.</Text>
                <Text size="3" mt="1">balajinraj007@gmail.com</Text>
              </Flex>
            </Flex>

            <Flex align="center" gap="4">
              <Image src="/location.svg" alt="Location Icon" width={40} height={40} />
              <Flex direction={'column'} gap="1">
                <Text size="2" color="gray">Come say hello at our office HQ.</Text>
                <Text size="3" mt="1">2076 DN Avenue Tallahassee, FL 32301</Text>
              </Flex>
            </Flex>
          </Grid>

          <Box mt="8" pt="8" style={{ borderTop: '1px solid var(--gray-5)' }}>
            {/* <Flex justify="between" align="center" wrap="wrap" gap="4">
              <Text size="2" color="gray">© {new Date().getFullYear()} Balaji Nagarajan. All rights reserved.</Text>
              <Flex gap="4">
                <Link href="/privacy">
                  <Text size="2" style={{ color: 'var(--gray-11)' }}>Privacy Policy</Text>
                </Link>
                <Link href="/terms">
                  <Text size="2" style={{ color: 'var(--gray-11)' }}>Terms of Use</Text>
                </Link>
              </Flex>
            </Flex> */}
          </Box>
        </Container>
      </Box>

      <style jsx global>{`
        // ...existing styles...

        .say-hello-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </main>
  );
}

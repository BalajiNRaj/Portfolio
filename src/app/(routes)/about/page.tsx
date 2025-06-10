import { Box, Container, Heading, Text, Card, Grid, Badge, Flex } from "@radix-ui/themes";

export default function AboutPage() {
  return (
    <Container size="4" py="9">
      {/* About Section */}
      <Card size="4" mb="8">
        <Flex direction="column" gap="4">
          <Heading size="6">About Me</Heading>
          <Text as="p" size="4" color="gray">
            Results-driven Technical Lead with 5+ years of experience in full-stack development, specializing in Java, 
            TypeScript, React, Node.js, and cloud technologies. Passionate about AI-driven solutions, LLMs, and 
            cloud-native architectures, with a strong focus on scalability and performance optimization.
          </Text>
        </Flex>
      </Card>

      {/* Skills Section */}
      <Box mb="8">
        <Heading size="6" mb="4">Technical Skills</Heading>
        <Grid columns={{ initial: "1", sm: "2" }} gap="4">
          <Card size="2">
            <Heading size="3" mb="2">Backend & Languages</Heading>
            <Flex wrap="wrap" gap="2">
              <Badge size="2">Java</Badge>
              <Badge size="2">Spring Boot</Badge>
              <Badge size="2">Python</Badge>
              <Badge size="2">C#</Badge>
              <Badge size="2">TypeScript</Badge>
            </Flex>
          </Card>
          
          <Card size="2">
            <Heading size="3" mb="2">Frontend</Heading>
            <Flex wrap="wrap" gap="2">
              <Badge size="2">React</Badge>
              <Badge size="2">Next.js</Badge>
              <Badge size="2">AngularJS</Badge>
            </Flex>
          </Card>

          <Card size="2">
            <Heading size="3" mb="2">AI & Cloud</Heading>
            <Flex wrap="wrap" gap="2">
              <Badge size="2">OpenAI</Badge>
              <Badge size="2">Claude</Badge>
              <Badge size="2">RAG</Badge>
              <Badge size="2">LangChain</Badge>
            </Flex>
          </Card>

          <Card size="2">
            <Heading size="3" mb="2">Databases & Tools</Heading>
            <Flex wrap="wrap" gap="2">
              <Badge size="2">MongoDB</Badge>
              <Badge size="2">SQL</Badge>
              <Badge size="2">Redis</Badge>
              <Badge size="2">AWS</Badge>
            </Flex>
          </Card>
        </Grid>
      </Box>

      {/* Achievements Section */}
      <Card size="4" mb="8">
        <Flex direction="column" gap="4">
          <Heading size="6">Achievements</Heading>
          <Flex direction="column" gap="2">
            <Badge size="2" color="green">Game Changer Award (2024)</Badge>
            <Badge size="2" color="blue">Trailblazer Award (2023)</Badge>
            <Badge size="2" color="purple">Engineering Excellence Award (2022)</Badge>
            <Badge size="2" color="orange">Customer Delight Award (2021)</Badge>
          </Flex>
        </Flex>
      </Card>

      {/* Education Section */}
      <Card size="4">
        <Flex direction="column" gap="4">
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
    </Container>
  );
}

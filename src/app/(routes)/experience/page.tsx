import { Box, Container, Heading, Text, Card, Grid, Flex, Badge } from "@radix-ui/themes";

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Technical Lead",
      company: "Vlocity (A Salesforce Company)",
      period: "2020 - Present",
      highlights: [
        "Led the development of AI-driven Trust Center solutions using LLMs and Vector Search",
        "Implemented enterprise integrations with Docusign, Salesforce, and Microsoft Dynamics",
        "Mentored team of 5 developers and drove technical excellence in project delivery",
        "Received Game Changer Award for innovative AI solutions in 2024"
      ]
    },
    {
      title: "Software Engineer",
      company: "Vlocity India",
      period: "2019 - 2020",
      highlights: [
        "Engineered scalable backend services using Java and Spring Boot",
        "Developed responsive web applications with React and TypeScript",
        "Enhanced product import functionality with ML-based file processing",
        "Awarded Customer Delight Award for exceptional performance"
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "Vlocity",
      period: "2018 - 2019",
      highlights: [
        "Built RESTful APIs with JWT authentication",
        "Integrated Microsoft Office Add-ins using VSTO",
        "Improved API documentation with Swagger",
        "Contributed to core product feature development"
      ]
    }
  ];

  return (
    <Container size="4" py="9">
      <Heading size="8" mb="6">Professional Experience</Heading>
      <Grid gap="6">
        {experiences.map((exp, index) => (
          <Card key={index} size="3">
            <Flex direction="column" gap="4">
              <Box>
                <Flex justify="between" align="start">
                  <Box>
                    <Heading size="5" mb="1">{exp.title}</Heading>
                    <Text size="3" color="gray">{exp.company}</Text>
                  </Box>
                  <Badge size="2" variant="soft">{exp.period}</Badge>
                </Flex>
              </Box>
              <Box>
                <Heading size="3" mb="3">Key Achievements</Heading>
                <Flex direction="column" gap="2">
                  {exp.highlights.map((highlight, i) => (
                    <Flex key={i} gap="2" align="center">
                      <Box 
                        style={{ 
                          minWidth: '6px',
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-9)'
                        }} 
                      />
                      <Text as="p" size="2">
                        {highlight}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

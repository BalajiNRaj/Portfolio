import { Box, Container, Heading, Text, Card, Grid, Button, Flex, Link } from "@radix-ui/themes";
import { GlobeIcon } from "@radix-ui/react-icons";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Profile Center",
      description: "AI • LLMs • Trust Center Solution • Game Changer Award",
      details: "Engineered AI Agents to dynamically create customized Trust Centers, implemented custom domain setup with validation, and integrated with Docusign, Salesforce, Microsoft Dynamics, and Slack for seamless collaboration.",
      link: "#"
    },
    {
      title: "R&D - AI Search",
      description: "SOLR • Vector Search • OpenAI • RAG • Trailblazer Award",
      details: "Enhanced product recommendation engine with SOLR's Dense Vector Search, Ada Model, and RAG. Developed real-time Slack Slash commands for enterprise knowledge search and integrated Google Drive and Bing Search APIs.",
      link: "#"
    },
    {
      title: "Import Automation",
      description: "ML • File Processing • Customer Delight Award",
      details: "Created a machine learning-based file processing system, reducing manual efforts by 60% and improving document import accuracy and efficiency. Implemented product native E-Sign functionality.",
      link: "#"
    },
    {
      title: "Enterprise Integration",
      description: "API Development • MS Office Add-in • JWT • Swagger",
      details: "Designed secure and scalable APIs with JWT authentication. Integrated content library into Microsoft PowerPoint using VSTO and XML. Enhanced API documentation with Swagger.",
      link: "#"
    }
  ];

  return (
    <Container size="4" py="9">
      <Heading size="8" mb="6">Featured Projects</Heading>
      <Grid columns={{ initial: "1", sm: "2" }} gap="6">
        {projects.map((project, index) => (
          <Card key={index} size="2" className="project-card">
            <Flex direction="column" gap="3">
              <Box>
                <Heading size="4" mb="1">{project.title}</Heading>
                <Text size="2" color="gray" as="p" mb="2">
                  {project.description}
                </Text>
              </Box>
              <Text as="p" color="gray" size="2">
                {project.details}
              </Text>
              <Flex gap="2">
                <Button variant="soft" size="1" asChild>
                  <Link href={project.link}>
                    <GlobeIcon width="14" height="14" />
                    View Project
                  </Link>
                </Button>
              </Flex>
            </Flex>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

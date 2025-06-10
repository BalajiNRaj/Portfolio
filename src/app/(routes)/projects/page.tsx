import { Box, Container, Heading, Text, Card, Grid, Button, Flex, Link, Badge } from "@radix-ui/themes";
import { GlobeIcon } from "@radix-ui/react-icons";

export default function ProjectsPage() {
  const projects = [
    {
      title: "AI-Powered Answer Agent",
      description: "OpenAI • RAG • Vector Search • Microsoft Recognition",
      period: "2023 - Present",
      details: [
        "Developed an automated system using RAG and OpenAI's Ada model for intelligent response generation",
        "Integrated SOLR's Dense Vector Search for enhanced context-aware responses",
        "Built no-touch feature for automatic file processing and requirement extraction",
        "Received special recognition from Microsoft for the system's effectiveness"
      ],
      technologies: ["OpenAI", "SOLR", "Vector Search", "RAG", "Machine Learning", "Natural Language Processing"],
      link: "#"
    },
    {
      title: "Agent Studio Platform",
      description: "AI Agents • Automation • Analytics",
      period: "2023 - Present",
      details: [
        "Architected and developed multiple AI-driven agents for the Agent Studio platform",
        "Built Dynamic Report Agent for automated, customized reporting",
        "Implemented Executive Summary Agent for condensed insights",
        "Created Analysis Agent to support RFP response automation"
      ],
      technologies: ["AI/ML", "REST APIs", "Analytics", "Automation", "React"],
      link: "#"
    },
    {
      title: "Profile Center (Trust Center)",
      description: "AI • LLMs • Enterprise Integration • Best Team Award",
      period: "2023 - Present",
      details: [
        "Built AI-powered capabilities for automated security profile generation with minimal manual effort",
        "Implemented anonymous viewer tracking and analytics for deep engagement insights",
        "Integrated with Salesforce, Microsoft Dynamics, and Slack for seamless data sharing",
        "Developed dynamic trust center summary feature with ChatGPT integration"
      ],
      technologies: ["Spring Boot", "REST APIs", "OAuth", "AI", "Vector Search", "SOLR", "OpenAI", "Slack", "Microsoft Dynamics", "Salesforce", "GrapeJS"],
      link: "#"
    },
    {
      title: "Research & Development",
      description: "Vector Search • RAG • OpenAI • Recommendation Engine",
      period: "2022 - 2023",
      details: [
        "Enhanced product's Recommendation Engine with SOLR's Dense Vector Search",
        "Implemented Ada model for improved input text embeddings and search accuracy",
        "Developed Slack integration for enterprise-wide knowledge search",
        "Created custom prompts for generating contextual responses"
      ],
      technologies: ["Spring Boot", "REST APIs", "Postman", "SOLR", "OpenAI", "Slack", "Webhooks"],
      link: "#"
    },
    {
      title: "Platform Enhancement & Integration",
      description: "External APIs • Offline Support • Search Integration",
      period: "2022 - 2023",
      details: [
        "Integrated Google Drive and Bing Search APIs for expanded data access",
        "Implemented offline functionality for seamless low-connectivity usage",
        "Enhanced data retrieval capabilities with external source integration",
        "Optimized performance for large-scale data processing"
      ],
      technologies: ["Google Drive API", "Bing Search API", "Offline Storage", "React"],
      link: "#"
    },
    {
      title: "Import Automation",
      description: "ML • Automation • Customer Delight Award",
      period: "2020 - 2021",
      details: [
        "Developed ML-based automated file processing system for data imports",
        "Implemented SHA key generation for unique file identification and rule configuration",
        "Built SpringBoot application for handling complex automation processes",
        "Won Customer Delight Award for significant time-saving automation features"
      ],
      technologies: ["Spring Boot", "REST APIs", "SHA", "Machine Learning"],
      link: "#"
    },
    {
      title: "External API Platform",
      description: "API Security • Integration • Authentication",
      period: "2019 - 2020",
      details: [
        "Developed robust and secure APIs for CRM customer access",
        "Implemented JWT-based authentication with client ID and secret system",
        "Created data migration APIs with Swagger documentation",
        "Built custom exception handling for detailed error reporting"
      ],
      technologies: ["Spring Boot", "REST APIs", "JWT", "Swagger", "Postman"],
      link: "#"
    },
    {
      title: "MS Office Add-in",
      description: "PowerPoint Integration • Content Management • VSTO",
      period: "2018 - 2019",
      details: [
        "Integrated content library into Microsoft PowerPoint using VSTO Add-in",
        "Developed using C# for seamless Office integration",
        "Implemented content modification and proposal building features",
        "Created custom XML parts for saving required information"
      ],
      technologies: ["MS PPT", "VSTO", "XML", "C#"],
      link: "#"
    },
    {
      title: "Electronic Signature",
      description: "Document Signing • Integration • PDF Processing",
      period: "2018",
      details: [
        "Integrated E-Sign functionality for proposal document signing",
        "Implemented document sharing and collaboration features",
        "Developed drag-and-drop interface for signature placement",
        "Created PDF download capability with embedded signatures"
      ],
      technologies: ["PDF", "Canvas"],
      link: "#"
    },
    {
      title: "Other Notable Contributions",
      description: "Migration • Performance • Support",
      period: "2018 - Present",
      details: [
        "Led migration from AngularJS to React, improving application performance",
        "Enhanced SOLR Stemming process with Hunspell Filter Factory implementation",
        "Created Email velocity templates for customer communications",
        "Provided on-call support and resolved customer support tickets"
      ],
      technologies: ["React", "AngularJS", "SOLR", "Velocity"],
      link: "#"
    }
  ];

  return (
    <Container size="4" py="9">
      <Heading size="8" mb="2">Featured Projects</Heading>
      <Text size="3" color="gray" mb="6" style={{ maxWidth: '800px' }}>
        Enterprise solutions showcasing expertise in AI/ML, automation, and integration. Award-winning projects including Best Team Award and Customer Delight recognition.
      </Text>
      <Grid columns={{ initial: "1", lg: "2" }} gap="6">
        {projects.map((project, index) => (
          <Card key={index} size="2" className="project-card">
            <Flex direction="column" gap="4">
              <Box>
                <Flex justify="between" align="start" mb="2">
                  <Heading size="4" className="gradient-text">{project.title}</Heading>
                  {project.period && <Badge size="1" variant="soft">{project.period}</Badge>}
                </Flex>
                <Text size="2" color="gray" as="p" mb="3">
                  {project.description}
                </Text>
              </Box>
              <Box>
                <Text size="2" weight="bold" mb="2">Key Achievements:</Text>
                <Flex direction="column" gap="2">
                  {project.details.map((detail, idx) => (
                    <Flex key={idx} gap="2" align="center">
                      <Box style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: 'var(--accent-9)'
                      }} />
                      <Text as="p" color="gray" size="2">{detail}</Text>
                    </Flex>
                  ))}
                </Flex>
              </Box>
              <Box>
                <Text size="2" weight="bold" mb="2">Technologies:</Text>
                <Flex gap="2" wrap="wrap">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} size="1" variant="soft">
                      {tech}
                    </Badge>
                  ))}
                </Flex>
              </Box>
              <Flex gap="2" mt="2">
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

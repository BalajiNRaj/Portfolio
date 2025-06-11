'use client';

import { Box, Container, Heading, Text, Flex, Grid } from "@radix-ui/themes";

interface Experience {
  title: string;
  company: string;
  period: string;
  highlights: string[];
}

export default function ExperiencePage() {
  const experiences: Experience[] = [
    {
      title: "Technical Lead",
      company: "Responsive (formerly RFPIO), Coimbatore",
      period: "Mar 2023 - Present",
      highlights: [
        "Aligning product and engineering teams for high performance with a focus on long-term customer satisfaction and reputation",
        "Actively participating in sprint ceremonies, defining feature ownership, and taking extreme ownership of work quality and company success",
        "Managing team members through regular 1:1 meetings and actionable feedback, while fostering a collaborative and learning-focused environment",
        "Handling client communications for troubleshooting, clarifications, and new requirements",
        "Driving innovation with technologies like ChatGPT, committed to efficiency and high-quality outcomes",
        "Strong emphasis on effective communication, shared success, and continuous improvement"
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Responsive (formerly RFPIO), Coimbatore",
      period: "Mar 2022 - Feb 2023",
      highlights: [
        "Work with development teams and product managers to ideate solutions",
        "Mentoring the juniors and interns to work in a collaborative culture",
        "Resolving critical Support tickets and handling on-call support for clients",
        "Analyzing and Developing base architecture for new features",
        "Planning and assigning tasks to the team members",
        "Understanding the team's needs and resolving them. Work with data scientists and analysts to improve the application"
      ]
    },
    {
      title: "Software Engineer",
      company: "Responsive (formerly RFPIO), Coimbatore",
      period: "Mar 2021 - Feb 2022",
      highlights: [
        "Design client-side and server-side architecture",
        "Build the front-end of applications through appealing visuals and a mobile responsive design",
        "Develop and manage well-functioning features for applications",
        "Write effective APIs. Test the features to ensure responsiveness and efficiency",
        "Troubleshoot, debug, and upgrade features",
        "Write technical documentation"
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "Responsive (formerly RFPIO), Coimbatore",
      period: "Jul 2019 - Feb 2021",
      highlights: [
        "Write well-designed, testable code",
        "Develop software verification plans and quality assurance procedures",
        "Document and maintain software functionality",
        "Troubleshoot and debug the applications"
      ]
    }
  ];

  return (
    <Container size="4" py="9">
      <Box style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Experience Watermark */}
        <Box
          style={{
            position: 'fixed',
            right: '-10%',
            top: '20%',
            fontSize: '180px',
            fontWeight: 800,
            opacity: 0.03,
            transform: 'rotate(-90deg)',
            transformOrigin: 'center',
            color: 'var(--accent-12)',
            whiteSpace: 'nowrap',
            letterSpacing: '0.2em',
            pointerEvents: 'none',
            zIndex: 0
          }}
        >
          EXPERIENCE
        </Box>

        {/* Main Content */}
        <Box style={{ position: 'relative', zIndex: 1 }}>
          <Flex direction="column" align="center" mb="8">
            <Box 
              style={{
                background: 'var(--accent-9)',
                padding: '8px 16px',
                borderRadius: '20px',
                marginBottom: '16px'
              }}
            >
              <Text as="span" style={{ color: 'white' }}>LIFE TIME</Text>
            </Box>
            <Heading size="8" mb="2">Experience</Heading>
            <Text as="p" size="3" color="gray" align="center" style={{ maxWidth: '600px' }}>
              A journey through my professional growth and achievements in software development
            </Text>
          </Flex>

          <Grid gap="0">
            {experiences.map((exp, index) => (
              <Box key={index} position="relative">
                {/* Timeline vertical line */}
                <Box
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    background: 'var(--accent-6)',
                    transform: 'translateX(-50%)',
                    zIndex: 0
                  }}
                />
                <Flex 
                  gap="6" 
                  direction={index % 2 === 0 ? "row" : "row-reverse"}
                  style={{ paddingLeft: index % 2 === 0 ? '0' : '50px', paddingRight: index % 2 === 0 ? '50px' : '0' }}
                >
                  {/* Date section with emoji */}
                  <Box style={{ minWidth: '150px', position: 'relative', textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                    <Text as="p" size="2" style={{ fontWeight: 500 }}>
                      {exp.period}
                    </Text>
                    {/* <Text as="p" size="6">
                      {exp.emoji}
                    </Text> */}
                  </Box>

                  {/* Content section */}
                  <Box style={{ flex: 1, paddingBottom: '40px' }}>
                    <Box 
                      className="experience-card"
                      style={{ 
                        background: 'var(--color-background)',
                        padding: '24px',
                        borderRadius: '16px',
                        position: 'relative',
                        border: '1px solid var(--accent-3)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                      }}
                    >
                      <Heading size="5" mb="1">
                        {exp.title}
                      </Heading>
                      <Text as="p" size="2" color="gray" mb="4">
                        {exp.company}
                      </Text>
                      <Flex direction="column" gap="3">
                        {exp.highlights.map((highlight, i) => (
                          <Flex key={i} gap="3" align="start">
                            <Box 
                              style={{ 
                                minWidth: '4px',
                                width: '4px',
                                height: '4px',
                                marginTop: '8px',
                                borderRadius: '50%',
                                background: 'var(--accent-9)',
                              }} 
                            />
                            <Text as="p" size="2" color="gray">
                              {highlight}
                            </Text>
                          </Flex>
                        ))}
                      </Flex>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>

      <style jsx global>{`
        .experience-card {
          transition: all 0.3s ease;
        }
        .experience-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          border-color: var(--accent-6);
        }
      `}</style>
    </Container>
  );
}

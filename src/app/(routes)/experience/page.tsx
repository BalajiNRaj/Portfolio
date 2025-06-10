'use client';

import { Box, Container, Heading, Text, Flex, Grid } from "@radix-ui/themes";

export default function ExperiencePage() {
  const experiences = [
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
      <Heading size="8" mb="6">Work History</Heading>
      <Grid gap="0">
        {experiences.map((exp, index) => (
          <Box key={index} position="relative">
            {/* Timeline vertical line */}
            <Box
              style={{
                position: 'absolute',
                left: '150px',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'var(--gray-5)',
                transform: 'translateX(-50%)',
                zIndex: 0
              }}
            />
            <Flex gap="6">
              {/* Date section with dot */}
              <Box style={{ minWidth: '150px', position: 'relative' }}>
                <Text 
                  size="2" 
                  style={{ 
                    position: 'sticky', 
                    top: '20px',
                    color: 'var(--gray-11)',
                    fontWeight: 500
                  }}
                >
                  {exp.period}
                </Text>
                {/* Timeline dot */}
                <Box
                  style={{
                    position: 'absolute',
                    right: '-6px',
                    top: '8px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-9)',
                    border: '2px solid var(--color-background)',
                    boxShadow: '0 0 0 4px var(--color-background)',
                    zIndex: 1
                  }}
                />
              </Box>
              {/* Content section */}
              <Box style={{ flex: 1, paddingBottom: '40px' }}>
                <Box 
                  className="experience-card"
                  style={{ 
                    background: 'var(--color-background)',
                    padding: '24px',
                    borderRadius: '12px',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    border: '1px solid var(--gray-4)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  }}
                >
                  <Heading 
                    size="5" 
                    mb="1"
                    style={{
                      color: 'var(--accent-12)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {exp.title}
                  </Heading>
                  <Text 
                    size="3" 
                    style={{ 
                      color: 'var(--gray-11)',
                      marginBottom: '16px',
                      fontWeight: 500
                    }}
                  >
                    {exp.company}
                  </Text>
                  <Flex direction="column" gap="3">
                    {exp.highlights.map((highlight, i) => (
                      <Flex key={i} gap="3" align="start">
                        <Box 
                          style={{ 
                            minWidth: '6px',
                            width: '6px',
                            height: '6px',
                            marginTop: '8px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--accent-8)',
                            opacity: 0.8
                          }} 
                        />
                        <Text 
                          size="2" 
                          style={{
                            color: 'var(--gray-11)',
                            lineHeight: '1.5'
                          }}
                        >
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

      <style jsx global>{`
        .experience-card {
          cursor: default;
        }
        .experience-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border-color: var(--accent-6);
        }
      `}</style>
    </Container>
  );
}

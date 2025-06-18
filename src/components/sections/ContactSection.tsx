'use client';

import { Box, Container, Flex, Heading, Text, Card, Button, Link } from "@radix-ui/themes";

export default function ContactSection() {
  return (
    <section id="contact-section">
      <Box py="9" id="contact">
        <Container size="3" className="container">
          <Card style={{ 
            background: 'var(--slate-2)', 
            border: '1px solid var(--slate-4)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
          }}>
            <Flex direction="column" align="center" gap="4" p="6">
              <Heading size="6" align="center">Let{"'"}s Build Something Innovative</Heading>
              <Text align="center" style={{ color: 'var(--slate-11)' }}>
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
    </section>
  );
}

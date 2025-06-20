'use client';

import { Box, Container, Flex, Heading, Text, Card, Button, Link } from "@radix-ui/themes";

export default function ContactSection() {
  return (
    <section id="contact-section" className="contact-section">
      <Box py="9" id="contact">
        <Container size="3" className="container">
          <div className="custom-card">
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
          </div>
        </Container>
      </Box>

      {/* Custom styles to handle dark mode properly */}
      <style jsx global>{`
        .contact-section {
          background-color: var(--slate-1);
        }
        
        [data-theme="dark"] .contact-section {
          background-color: var(--slate-2);
        }
        
        .custom-card {
          border: 1px solid var(--slate-4);
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          padding: 1rem;
          background-color: var(--slate-2);
        }
        
        [data-theme="dark"] .custom-card {
          background-color: var(--slate-3);
          border-color: var(--slate-6);
        }
      `}</style>
    </section>
  );
}

'use client';

import { Box, Container, Grid, Flex, Heading, Text, Button, Link, Dialog, TextField, TextArea } from "@radix-ui/themes";
import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer id="footer-section">
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
                <Text size="2" color="gray">Let's Meet.</Text>
                <Text size="3" mt="1">Coimbatore, TN</Text>
              </Flex>
            </Flex>
          </Grid>

          <Box mt="8" pt="8" style={{ borderTop: '1px solid var(--gray-5)' }}>
            {/* Footer bottom content can be added here if needed */}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

'use client';

import { Box, Container, Flex, Heading, Text, Grid, Card } from "@radix-ui/themes";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials-section">
      <Box style={{ 
        position: 'relative',
        background: 'var(--gray-1)',
        padding: 'var(--space-9) 0',
        overflow: 'hidden'
      }}>
        {/* Top separator - gentle wave */}
        <Box style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '20px',
          background: 'linear-gradient(to bottom right, transparent 49%, var(--gray-1) 50%)',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }} />
        
        <Container>
          <Flex direction="column" align="center" mb="9" className="animate-fade-in">
            <Box className="inline-block mb-4">
              <Text className="bg-amber text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
                <Box as="span">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.39062 11.8906C7.39062 12.4688 7.17188 12.9453 6.73438 13.3203C6.29688 13.6953 5.76562 13.8828 5.14062 13.8828C4.51562 13.8828 3.98438 13.6953 3.54688 13.3203C3.10938 12.9453 2.89062 12.4688 2.89062 11.8906C2.89062 11.7656 2.9375 11.5938 3.03125 11.375L5.92188 4.76562C5.96875 4.67188 6.04688 4.59375 6.15625 4.53125C6.26562 4.46875 6.375 4.4375 6.48438 4.4375C6.59375 4.4375 6.70312 4.46875 6.8125 4.53125C6.92188 4.59375 7 4.67188 7.04688 4.76562L9.95312 11.375C10.0469 11.5938 10.0938 11.7656 10.0938 11.8906C10.0938 12.4688 9.875 12.9453 9.4375 13.3203C9 13.6953 8.46875 13.8828 7.84375 13.8828C7.21875 13.8828 6.6875 13.6953 6.25 13.3203C5.8125 12.9453 5.59375 12.4688 5.59375 11.8906H7.39062ZM15.3906 11.8906C15.3906 12.4688 15.1719 12.9453 14.7344 13.3203C14.2969 13.6953 13.7656 13.8828 13.1406 13.8828C12.5156 13.8828 11.9844 13.6953 11.5469 13.3203C11.1094 12.9453 10.8906 12.4688 10.8906 11.8906C10.8906 11.7656 10.9375 11.5938 11.0312 11.375L13.9219 4.76562C13.9688 4.67188 14.0469 4.59375 14.1562 4.53125C14.2656 4.46875 14.375 4.4375 14.4844 4.4375C14.5938 4.4375 14.7031 4.46875 14.8125 4.53125C14.9219 4.59375 15 4.67188 15.0469 4.76562L17.9531 11.375C18.0469 11.5938 18.0938 11.7656 18.0938 11.8906C18.0938 12.4688 17.875 12.9453 17.4375 13.3203C17 13.6953 16.4688 13.8828 15.8438 13.8828C15.2188 13.8828 14.6875 13.6953 14.25 13.3203C13.8125 12.9453 13.5938 12.4688 13.5938 11.8906H15.3906Z" fill="currentColor"/>
                  </svg>
                </Box>
                Client Testimonials
              </Text>
            </Box>
            <Heading size="7" align="center" mb="2">What Clients Say</Heading>
            <Text as="p"  align="center" size="3" style={{ maxWidth: '700px' }}>
              Feedback from clients who have experienced my expertise in developing innovative solutions
            </Text>
          </Flex>

          <Grid columns={{ initial: "1", md: "2" }} gap="8">
            {/* Testimonial Card 1 */}
            <Card style={{ 
              padding: '24px', 
              position: 'relative',
              background: 'linear-gradient(145deg, white, var(--gray-2))',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              borderRadius: '16px',
              overflow: 'hidden'
            }} className="animate-fade-in">
              <Box style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '80px',
                height: '80px',
                opacity: 0.1,
              }}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 33.3333C20 25.9695 25.9695 20 33.3333 20H36.6667V33.3333H23.3333V36.6667C23.3333 41.4467 27.22 45.3333 32 45.3333H33.3333C34.2538 45.3333 35 46.0795 35 47V58.3333C35 59.2538 34.2538 60 33.3333 60H32C14.3269 60 0 45.6731 0 28V26.6667C0 25.7462 0.746159 25 1.66667 25H13.3333C14.2538 25 15 25.7462 15 26.6667V32C15 32.9205 14.2538 33.6667 13.3333 33.6667H10C10 43.0333 16.9667 50 26.3333 50C26.3333 40.6333 19.3667 33.6667 10 33.6667" fill="var(--amber-9)"/>
                  <path d="M60 33.3333C60 25.9695 65.9695 20 73.3333 20H76.6667V33.3333H63.3333V36.6667C63.3333 41.4467 67.22 45.3333 72 45.3333H73.3333C74.2538 45.3333 75 46.0795 75 47V58.3333C75 59.2538 74.2538 60 73.3333 60H72C54.3269 60 40 45.6731 40 28V26.6667C40 25.7462 40.7462 25 41.6667 25H53.3333C54.2538 25 55 25.7462 55 26.6667V32C55 32.9205 54.2538 33.6667 53.3333 33.6667H50C50 43.0333 56.9667 50 66.3333 50C66.3333 40.6333 59.3667 33.6667 50 33.6667" fill="var(--amber-9)"/>
                </svg>
              </Box>
              <Box style={{ zIndex: 1, position: 'relative' }}>
                <Text as="p" size="4" style={{ fontStyle: 'italic', lineHeight: '1.7' }}>
                  "Working with Balaji was a game-changer for our AI initiative. His technical expertise and innovative approach helped us implement solutions that exceeded our expectations."
                </Text>
                <Flex mt="6" gap="3" align="center">
                  <Box style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '50%', 
                    overflow: 'hidden',
                    background: 'var(--purple-4)'
                  }}>
                    <Box style={{ 
                      width: '100%', 
                      height: '100%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '20px',
                      color: 'var(--purple-9)'
                    }}>JD</Box>
                  </Box>
                  <Box>
                    <Text weight="bold">John Doe</Text>
                    <Text size="2" >CTO, Tech Innovations</Text>
                  </Box>
                </Flex>
              </Box>
            </Card>

            {/* Testimonial Card 2 */}
            <Card style={{ 
              padding: '24px', 
              position: 'relative',
              background: 'linear-gradient(145deg, white, var(--gray-2))',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              borderRadius: '16px',
              overflow: 'hidden',
              animationDelay: '0.2s'
            }} className="animate-fade-in">
              <Box style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '80px',
                height: '80px',
                opacity: 0.1,
              }}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 33.3333C20 25.9695 25.9695 20 33.3333 20H36.6667V33.3333H23.3333V36.6667C23.3333 41.4467 27.22 45.3333 32 45.3333H33.3333C34.2538 45.3333 35 46.0795 35 47V58.3333C35 59.2538 34.2538 60 33.3333 60H32C14.3269 60 0 45.6731 0 28V26.6667C0 25.7462 0.746159 25 1.66667 25H13.3333C14.2538 25 15 25.7462 15 26.6667V32C15 32.9205 14.2538 33.6667 13.3333 33.6667H10C10 43.0333 16.9667 50 26.3333 50C26.3333 40.6333 19.3667 33.6667 10 33.6667" fill="var(--purple-9)"/>
                  <path d="M60 33.3333C60 25.9695 65.9695 20 73.3333 20H76.6667V33.3333H63.3333V36.6667C63.3333 41.4467 67.22 45.3333 72 45.3333H73.3333C74.2538 45.3333 75 46.0795 75 47V58.3333C75 59.2538 74.2538 60 73.3333 60H72C54.3269 60 40 45.6731 40 28V26.6667C40 25.7462 40.7462 25 41.6667 25H53.3333C54.2538 25 55 25.7462 55 26.6667V32C55 32.9205 54.2538 33.6667 53.3333 33.6667H50C50 43.0333 56.9667 50 66.3333 50C66.3333 40.6333 59.3667 33.6667 50 33.6667" fill="var(--purple-9)"/>
                </svg>
              </Box>
              <Box style={{ zIndex: 1, position: 'relative' }}>
                <Text as="p" size="4" style={{ fontStyle: 'italic', lineHeight: '1.7' }}>
                  "Balaji delivered a complex ML model that transformed our business analytics. His attention to detail and ability to translate technical concepts made the entire process seamless."
                </Text>
                <Flex mt="6" gap="3" align="center">
                  <Box style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '50%', 
                    overflow: 'hidden',
                    background: 'var(--amber-4)'
                  }}>
                    <Box style={{ 
                      width: '100%', 
                      height: '100%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '20px',
                      color: 'var(--amber-9)'
                    }}>SJ</Box>
                  </Box>
                  <Box>
                    <Text weight="bold">Sarah Johnson</Text>
                    <Text size="2" >Product Manager, DataFlow Inc.</Text>
                  </Box>
                </Flex>
              </Box>
            </Card>
          </Grid>
        </Container>
        
        {/* Bottom separator - gentle wave */}
        <Box style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '20px',
          background: 'linear-gradient(to top right, var(--gray-1) 49%, transparent 50%)',
          transform: 'translateY(50%)',
          zIndex: 1,
        }} />
      </Box>
    </section>
  );
}

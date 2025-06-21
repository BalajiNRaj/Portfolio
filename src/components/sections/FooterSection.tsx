'use client';

import { Box, Container, Grid, Flex, Heading, Text, Button, Link, Dialog, TextField, TextArea } from "@radix-ui/themes";
import { EnvelopeClosedIcon, HomeIcon, MobileIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ClientOnly from "../ClientOnly";

// Motion components using the new motion.create() API
const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);
const MotionFlex = motion.create(Flex);

export default function FooterSection() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  
  useEffect(() => {
    // Set year on client side to avoid hydration mismatch
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const container = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <Box 
      id="contact"
      style={{ 
        background: 'var(--slate-1)',
        position: 'relative',
        paddingTop: '120px',
        paddingBottom: '60px',
        overflow: 'hidden',
      }}
      // Using a div instead of footer element since 'footer' is not a valid value for the 'as' prop
    >
      {/* Subtle background element */}
      <Box style={{
        position: 'absolute',
        width: '40%',
        height: '40%',
        left: 0,
        bottom: 0,
        background: 'var(--slate-3)',
        opacity: 0.3,
        filter: 'blur(120px)',
        zIndex: 0,
        borderRadius: '0 50% 0 0',
      }} />
      
      <Container size="3" style={{ position: 'relative', zIndex: 1 }}>
        {/* Contact Section Header */}
        <MotionFlex 
          direction="column"
          align="center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginBottom: '80px' }}
        >
          <MotionHeading 
            size="1"
            color="blue"
            variants={fadeIn}
            style={{ 
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Contact Me
          </MotionHeading>
          
          <MotionHeading 
            size={{ initial: "6", sm: "7" }}
            variants={fadeIn}
            className="gradient-text"
            style={{ 
              marginBottom: '24px',
              textAlign: 'center',
            }}
          >
            Have a project in mind? Let's get to work.
          </MotionHeading>
        </MotionFlex>
        
        {/* Contact Information and Form */}
        <Grid columns={{ initial: "1", md: "2" }} gap="9" mb="9">
          {/* Contact Information */}
          <MotionFlex 
            direction="column" 
            gap="6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <MotionFlex 
              variants={fadeIn}
              direction="column" 
              gap="5"
            >
              <Text size="4" weight="medium">Let's Connect</Text>
              <Text size="3" style={{ maxWidth: '450px', lineHeight: 1.6 }}>
                I'm currently available for freelance work or full-time positions. 
                Feel free to reach out if you have a project that needs my expertise.
              </Text>
            </MotionFlex>
            
            <MotionFlex 
              variants={fadeIn}
              align="center" 
              gap="4"
            >
              <Box
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--blue-3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--blue-9)',
                }}
              >
                <MobileIcon width="20" height="20" />
              </Box>
              <Flex direction="column" gap="1">
                <Text size="2" >Mon-Fri from 8am to 5pm.</Text>
                <Text size="3" weight="medium">+91 8667707484</Text>
              </Flex>
            </MotionFlex>
            
            <MotionFlex 
              variants={fadeIn}
              align="center" 
              gap="4"
            >
              <Box
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--blue-3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--blue-9)',
                }}
              >
                <EnvelopeClosedIcon width="20" height="20" />
              </Box>
              <Flex direction="column" gap="1">
                <Text size="2" >I'm there to help you.</Text>
                <Text size="3" weight="medium">balajinraj007@gmail.com</Text>
              </Flex>
            </MotionFlex>
            
            <MotionFlex 
              variants={fadeIn}
              align="center" 
              gap="4"
            >
              <Box
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--blue-3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--blue-9)',
                }}
              >
                <HomeIcon width="20" height="20" />
              </Box>
              <Flex direction="column" gap="1">
                <Text size="2" >Let's Meet.</Text>
                <Text size="3" weight="medium">Coimbatore, TN</Text>
              </Flex>
            </MotionFlex>
            
            <MotionFlex 
              variants={fadeIn}
              gap="4" 
              mt="2"
            >
              <Link 
                href="https://www.linkedin.com/in/balaji-nagarajan-607416103/" 
                target="_blank"
                aria-label="LinkedIn"
              >
                <Box 
                  className="social-icon"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--slate-3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--slate-11)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <LinkedInLogoIcon width="18" height="18" />
                </Box>
              </Link>
              
              <Link 
                href="https://github.com/BalajiNRaj" 
                target="_blank"
                aria-label="GitHub"
              >
                <Box 
                  className="social-icon"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--slate-3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--slate-11)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <GitHubLogoIcon width="18" height="18" />
                </Box>
              </Link>
            </MotionFlex>
          </MotionFlex>
          
          {/* Contact Form */}
          <MotionBox
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              background: 'var(--slate-2)',
              borderRadius: '16px',
              border: '1px solid var(--slate-4)',
              padding: '40px',
              height: 'fit-content',
            }}
          >
            <Heading size="4" mb="5">Send Me a Message</Heading>
            
            <Flex direction="column" gap="4">
              <Grid columns="2" gap="4">
                <TextField.Root 
                  placeholder="Your name" 
                  style={{ background: 'var(--slate-1)', borderColor: 'var(--slate-5)' }}
                />
                <TextField.Root 
                  type="email" 
                  placeholder="Your email" 
                  style={{ background: 'var(--slate-1)', borderColor: 'var(--slate-5)' }}
                />
              </Grid>
              <TextField.Root 
                placeholder="Subject" 
                style={{ background: 'var(--slate-1)', borderColor: 'var(--slate-5)' }}
              />
              <TextArea 
                placeholder="Your message..." 
                style={{ 
                  background: 'var(--slate-1)', 
                  borderColor: 'var(--slate-5)', 
                  minHeight: '120px' 
                }}
              />
              <Box>
                <Button 
                  size="3" 
                  style={{ 
                    background: 'var(--blue-9)',
                    color: 'white',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                  }}
                  className="send-button"
                >
                  Send Message
                </Button>
              </Box>
            </Flex>
          </MotionBox>
        </Grid>
        
        {/* Footer */}
        <Box 
          style={{ 
            borderTop: '1px solid var(--slate-4)', 
            paddingTop: '40px',
            marginTop: '40px',
          }}
        >
          <Flex 
            justify="between" 
            align="center"
            direction={{ initial: 'column', sm: 'row' }}
            gap={{ initial: '4', sm: '0' }}
          >
            <Text size="2" >
              © <ClientOnly>{currentYear || ''}</ClientOnly> Balaji Nagarajan. All rights reserved.
            </Text>
            <Text size="2" >
              Designed and built with passion
            </Text>
          </Flex>
        </Box>
      </Container>
      
      {/* Custom styles */}
      <style jsx global>{`
        .social-icon:hover {
          background: var(--blue-4) !important;
          color: var(--blue-9) !important;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .send-button {
          transition: all 0.3s ease !important;
        }
        
        .send-button:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 8px 20px rgba(0, 112, 243, 0.2) !important;
        }
      `}</style>
    </Box>
  );
}

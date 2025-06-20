'use client';

import { Box, Button, Container, Flex, Link, Text, Badge } from "@radix-ui/themes";
import { LinkedInLogoIcon, HamburgerMenuIcon, Cross1Icon, GitHubLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
  ];

  // Handle scroll effects for transparent to solid transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      style={{
        backgroundColor: scrolled ? 'var(--slate-1)' : 'rgba(var(--slate-1-rgb), 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: scrolled ? 'var(--shadow-blur)' : 'none',
        borderBottom: scrolled ? '1px solid var(--slate-4)' : 'none',
        zIndex: 1000,
        height: 'var(--header-height)',
        transition: 'all 0.4s ease'
      }}
    >
      <Container size="4" style={{ height: '100%', padding: '0 16px' }}>
        <Flex py="3" justify="between" align="center" style={{ height: '100%' }}>
          <MotionFlex
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              weight="bold"
              size="4"
              className="nav-link"
              style={{ 
                textDecoration: 'none', 
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <Box style={{ 
                position: 'relative',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--blue-9)',
                padding: '2px'
              }}>
                <Image 
                  src={"/favicon.png"} 
                  alt="Logo" 
                  fill
                  style={{ 
                    objectFit: 'cover',
                    opacity: scrolled ? 1 : 0.95,
                    transition: 'opacity 0.3s ease'
                  }} 
                />
              </Box>
              <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Text 
                  className="gradient-text"
                  style={{ 
                    fontWeight: 700, 
                    letterSpacing: '0.5px',
                    fontSize: '1.25rem',
                    lineHeight: 1.2
                  }}
                >
                  Balaji
                </Text>
                <Badge size="1" variant="soft" color="blue">Developer</Badge>
              </Box>
            </Link>
          </MotionFlex>

          {/* Desktop Navigation */}
          <MotionFlex 
            display={{ initial: 'none', sm: 'flex' }} 
            gap="6" 
            align="center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  size="2"
                  weight="medium"
                  className="nav-link"
                  style={{ 
                    textDecoration: 'none',
                    position: 'relative',
                    padding: '6px 0',
                    opacity: isActive ? 1 : 0.75,
                    transition: 'opacity 0.2s ease',
                    letterSpacing: '0.3px'
                  }}
                >
                  {item.label}
                  {isActive && (
                    <MotionBox
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        height: '2px',
                        background: 'var(--blue-9)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </Link>
              );
            })}
            <Flex gap="3" align="center">
              <Box style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
              }}>
                <ThemeToggle />
              </Box>
              <Button 
                variant="ghost" 
                size="2" 
                onClick={() => window.open('mailto:balajinraj007@gmail.com', '_blank')}
                style={{
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--blue-9)',
                  transition: 'transform 0.2s ease, color 0.2s ease'
                }}
              >
                <EnvelopeClosedIcon width="18" height="18" />
              </Button>
              <Button 
                variant="ghost" 
                size="2" 
                onClick={() => window.open('https://www.linkedin.com/in/balaji-nagarajan-607416103/', '_blank')}
                style={{
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--blue-9)',
                  transition: 'transform 0.2s ease, color 0.2s ease'
                }}
              >
                <LinkedInLogoIcon width="18" height="18" />
              </Button>
              <Button 
                variant="ghost" 
                size="2" 
                onClick={() => window.open('https://github.com/BalajiNRaj', '_blank')}
                style={{
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--blue-9)',
                  transition: 'transform 0.2s ease, color 0.2s ease'
                }}
              >
                <GitHubLogoIcon width="18" height="18" />
              </Button>
            </Flex>
          </MotionFlex>

          {/* Mobile Menu Button */}
          <Box display={{ initial: 'block', sm: 'none' }}>
            <Button
              size="3"
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
              style={{ 
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--blue-9)',
                transition: 'transform 0.2s ease, color 0.2s ease'
              }}
            >
              {isMenuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
            </Button>
          </Box>
        </Flex>

        {/* Mobile Navigation */}
        <Box
          className="mobile-nav"
          data-state={isMenuOpen ? 'open' : 'closed'}
          style={{
            position: 'absolute',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(var(--color-background-rgb), 0.95)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(var(--gray-5-rgb), 0.1)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            padding: isMenuOpen ? '24px 0' : '0',
            maxHeight: isMenuOpen ? '320px' : '0',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            opacity: isMenuOpen ? 1 : 0,
            zIndex: 1000
          }}
        >
          <Container size="4" style={{ padding: '0 24px' }}>
            <Flex direction="column" gap="5">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    size="3"
                    weight="medium"
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ 
                      textDecoration: 'none',
                      position: 'relative',
                      padding: '10px 0',
                      opacity: isActive ? 1 : 0.75,
                      letterSpacing: '0.3px'
                    }}
                  >
                    <Flex align="center" justify="between">
                      {item.label}
                      {isActive && (
                        <Box
                          style={{
                            width: '8px',
                            height: '8px',
                            background: 'var(--blue-9)',
                            borderRadius: '50%'
                          }}
                        />
                      )}
                    </Flex>
                  </Link>
                );
              })}
              <Flex gap="4" mt="3" justify="center">
                <Box style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                }}>
                  <ThemeToggle />
                </Box>
                <Button 
                  variant="ghost" 
                  size="3" 
                  onClick={() => {
                    window.open('mailto:balajinraj007@gmail.com', '_blank');
                    setIsMenuOpen(false);
                  }}
                  style={{
                    borderRadius: '50%',
                    width: '42px',
                    height: '42px',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue-9)',
                    border: '1px solid rgba(0, 112, 243, 0.2)'
                  }}
                >
                  <EnvelopeClosedIcon width="20" height="20" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="3" 
                  onClick={() => {
                    window.open('https://www.linkedin.com/in/balaji-nagarajan-607416103/', '_blank');
                    setIsMenuOpen(false);
                  }}
                  style={{
                    borderRadius: '50%',
                    width: '42px',
                    height: '42px',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue-9)',
                    border: '1px solid rgba(0, 112, 243, 0.2)'
                  }}
                >
                  <LinkedInLogoIcon width="20" height="20" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="3" 
                  onClick={() => {
                    window.open('https://github.com/BalajiNRaj', '_blank');
                    setIsMenuOpen(false);
                  }}
                  style={{
                    borderRadius: '50%',
                    width: '42px',
                    height: '42px',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue-9)',
                    border: '1px solid rgba(0, 112, 243, 0.2)'
                  }}
                >
                  <GitHubLogoIcon width="20" height="20" />
                </Button>
              </Flex>
            </Flex>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}

export default AppBar;

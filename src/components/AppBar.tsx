'use client';

import { Box, Button, Container, Flex, Link } from "@radix-ui/themes";
import { LinkedInLogoIcon, HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
  ];

  return (
    <Box
      position="sticky"
      top="0"
      style={{ 
        backgroundColor: 'var(--color-background)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: 'var(--shadow-blur)',
        borderBottom: '1px solid var(--border-color)',
        zIndex: 1000,
        height: 'var(--header-height)'
      }}
    >
      <Container size="4" style={{ height: '100%' }}>
        <Flex py="3" justify="between" align="center" style={{ height: '100%' }}>
          <Link 
            href="/" 
            weight="bold" 
            size="4"
            style={{
              textDecoration: 'none',
              color: 'var(--blue-11)',
            }}
          >
            Balaji N
          </Link>

          <Button 
            size="2" 
            variant="ghost" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn"
          >
            {isMenuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </Button>

          <Flex className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                size="2"
                style={{
                  textDecoration: 'none',
                  color: 'var(--gray-11)',
                  transition: 'color 0.2s ease',
                }}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
            <Button 
              size="2" 
              variant="soft"
              asChild
            >
              <Link 
                href="https://www.linkedin.com/in/balaji-n-607416103/" 
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <Flex gap="1" align="center">
                  <LinkedInLogoIcon />
                  LinkedIn
                </Flex>
              </Link>
            </Button>
            <Button 
              size="2" 
              variant="solid"
              highContrast
              asChild
            >
              <Link 
                href="/Balaji Nagarajan.pdf" 
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                Resume
              </Link>
            </Button>
          </Flex>

          {isMenuOpen && (
            <div className="mobile-nav">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  size="2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    color: 'var(--gray-11)',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                size="2" 
                variant="soft"
                asChild
              >
                <Link 
                  href="https://www.linkedin.com/in/balaji-n-607416103/" 
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Flex gap="1" align="center">
                    <LinkedInLogoIcon />
                    LinkedIn
                  </Flex>
                </Link>
              </Button>
              <Button 
                size="2" 
                variant="solid"
                highContrast
                asChild
              >
                <Link 
                  href="/Balaji Nagarajan.pdf" 
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                </Link>
              </Button>
            </div>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default AppBar;

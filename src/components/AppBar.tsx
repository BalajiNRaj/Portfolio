'use client';

import { Box, Button, Container, Flex, Link } from "@radix-ui/themes";
import { LinkedInLogoIcon, HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import Image from "next/image";

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
  ];

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
      position="sticky"
      top="0"
      style={{
        backgroundColor: 'var(--color-background)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: 'var(--shadow-blur)',
        borderBottom: '1px solid var(--gray-5)',
        zIndex: 1000,
        height: 'var(--header-height)'
      }}
    >
      <Container size="4" style={{ height: '100%' }}>
        <Flex py="3" justify="between" align="center" style={{ height: '100%' }}>          <Link
          href="/"
          weight="bold"
          size="4"
          className="nav-link"
        >
          <Flex align="center" gap="2">
            <Image src={"/favicon.png"} alt="Logo" width={32} height={32} />
            <span className="gradient-text">Balaji</span>
          </Flex>
        </Link>

          {/* Desktop Navigation */}
          <Flex display={{ initial: 'none', sm: 'flex' }} gap="6" align="center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                size="2"
                weight="medium"
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="soft" size="2" onClick={() => window.open('https://www.linkedin.com/in/balaji-n-607416103/', '_blank')}>
              <LinkedInLogoIcon width="16" height="16" />
              Connect
            </Button>
          </Flex>

          {/* Mobile Menu Button */}
          <Box display={{ initial: 'block', sm: 'none' }}>
            <Button
              size="3"
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
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
            backgroundColor: 'var(--color-background)',
            borderBottom: '1px solid var(--gray-5)',
            boxShadow: 'var(--shadow-blur)'
          }}
        >
          <Flex direction="column" gap="4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                size="2"
                weight="medium"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="soft" size="2" onClick={() => window.open('https://www.linkedin.com/in/balaji-n-607416103/', '_blank')}>
              <LinkedInLogoIcon width="16" height="16" />
              Connect
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default AppBar;

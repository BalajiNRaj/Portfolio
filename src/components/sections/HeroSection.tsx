'use client';

import { Box, Container, Flex, Heading, Text, Grid, Button, Link, Badge } from "@radix-ui/themes";
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const profileRef = useRef<HTMLDivElement>(null);
  
  // Set loaded state after component mounts for animations
  useEffect(() => {
    setIsLoaded(true);
    
    // Optional: Add scroll listener for parallax effects
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroElements = document.querySelectorAll('.parallax-element');
      
      heroElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const speed = htmlElement.getAttribute('data-speed') || '0.1';
        const yPos = -(scrollY * parseFloat(speed));
        htmlElement.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    // Add mouse move tracking for 3D effect
    const handleMouseMove = (e: MouseEvent) => {
      // Skip 3D effect calculation on mobile devices for better performance
      if (window.innerWidth < 768) return;
      
      if (profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate distance from center (normalized)
        const distX = (e.clientX - centerX) / (window.innerWidth / 2);
        const distY = (e.clientY - centerY) / (window.innerHeight / 2);
        
        setMousePosition({ x: distX * 5, y: distY * 5 });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initialize particles
    initializeParticles();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Particle animation for background
  const initializeParticles = () => {
    const canvas = document.createElement('canvas');
    const container = document.querySelector('.particles-container');
    if (!container) return;
    
    container.appendChild(canvas);
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.opacity = '0.6';
    canvas.style.zIndex = '1';
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    
    interface ParticleInterface {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      update: () => void;
      draw: () => void;
    }
    
    const particlesArray: ParticleInterface[] = [];
    // Adjust particle count based on screen width for better performance
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 15 : 30;
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        
        // Vary between purple and amber shades
        const hue = Math.random() > 0.5 ? 
          Math.floor(Math.random() * 30 + 40) :  // Amber range
          Math.floor(Math.random() * 40 + 270);  // Purple range
        
        this.color = `hsla(${hue}, 80%, 70%, ${Math.random() * 0.3 + 0.1})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }
    
    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    });
  };
  
  return (
    <section id="hero-section">
      <Box className="hero-box" style={{ 
        minHeight: '100vh', 
        position: 'relative', 
        overflow: 'hidden', 
        background: 'linear-gradient(135deg, #1F1D2B 0%, #14121D 100%)',
      }}>
        {/* Background elements */}
        <Box className="particles-container" style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          opacity: 0.6,
        }}>
          {/* Code snippet background elements similar to example image */}
          <Box className="code-snippets-overlay" style={{
            position: 'absolute',
            inset: 0,
            fontFamily: 'monospace',
            color: 'rgba(255, 255, 255, 0.08)',
            opacity: 0.7,
            userSelect: 'none',
            zIndex: 1,
            overflow: 'hidden',
          }}>
            <Box style={{
              position: 'absolute',
              right: '-5%',
              top: '10%',
              fontSize: 'clamp(0.7rem, 1vw, 0.9rem)',
              opacity: 0.5,
              textAlign: 'left',
              transform: 'rotate(-3deg)',
            }}>
              <pre>
                {`console.log("Hello World");
<html>
  <head>
    <title>Portfolio</title>
  </head>
</html>
            `}
              </pre>
            </Box>
            
            <Box style={{
              position: 'absolute',
              right: '10%',
              top: '40%',
              fontSize: 'clamp(0.7rem, 1vw, 0.9rem)',
              opacity: 0.3,
            }}>
              <pre>
                {`$ npm install
$ yarn build
import React from 'react';
            `}
              </pre>
            </Box>
            
            <Box style={{
              position: 'absolute',
              right: '20%',
              top: '60%',
              fontSize: 'clamp(0.7rem, 1vw, 0.9rem)',
              opacity: 0.4,
            }}>
              <pre>
                {`function App() {
  const [state, setState] = useState();
  return <div>Hello</div>;
}`}
              </pre>
            </Box>
            
            <Box style={{
              position: 'absolute',
              right: '5%',
              bottom: '10%',
              fontSize: 'clamp(0.7rem, 1vw, 0.9rem)',
              opacity: 0.3,
            }}>
              <pre>
                {`<Grid>
  <html>
    <body>
      <div className="container">
    </body>
  </html>
</Grid>`}
              </pre>
            </Box>
          </Box>
          
          {/* Dark corners vignette */}
          <Box style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at center, transparent 30%, #14121D 90%)',
            opacity: 0.7,
          }}></Box>
          
          {/* Light dots pattern */}
          <Box className="light-dots" style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.15) 2px, transparent 0)',
            backgroundSize: '40px 40px',
            opacity: 0.3,
          }}></Box>
          
          {/* Subtle gradient lines */}
          <Box style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, transparent 0%, rgba(151, 71, 255, 0.05) 50%, transparent 100%)',
            opacity: 0.4,
          }}></Box>
        </Box>
        <Container style={{ 
          position: 'relative',
          zIndex: 2,
        }}>
          <Grid columns={{ initial: "1", md: "2" }} gap={{ initial: "6", md: "9" }} style={{ 
            paddingTop: '100px',
            paddingBottom: '40px',
          }}>
            <Flex 
              direction="column"                justify="center"
                className="content-column"
                style={{ 
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.8s ease, transform 0.8s ease',
                }}
            >
              <Flex align="center" gap="2" style={{ marginBottom: '20px' }}>
                <Text size="4" style={{ 
                  color: 'white',
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
                }}>Hello! I Am</Text>
                <Text size="4" style={{ 
                  color: '#9747FF', 
                  fontWeight: 'bold',
                  position: 'relative',
                  display: 'inline-block',
                  padding: '0 8px',
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
                }}>
                  <Box style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(151, 71, 255, 0.1)',
                    borderRadius: '4px',
                    transform: 'skew(-10deg)',
                  }} />
                  <span style={{ position: 'relative', zIndex: 1 }}>Balaji Nagarajan</span>
                </Text>
              </Flex>
              
              <Box mb="2" style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s',
              }}>
                <Text size="3" style={{ color: '#E0E0E0' }}>A Developer who</Text>
              </Box>
              
              <Box style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s',
              }}>
                <Heading size={{ initial: "7", sm: "8", md: "9" }} style={{ 
                  fontSize: 'clamp(2rem, 5vw, 5rem)', 
                  marginBottom: '0.25rem', 
                  color: 'white',
                  letterSpacing: '-1px',
                  lineHeight: '1.1',
                }}>
                  Judges a book
                </Heading>
                <Flex align="baseline" wrap="wrap">
                  <Heading size={{ initial: "7", sm: "8", md: "9" }} style={{ 
                    fontSize: 'clamp(2rem, 5vw, 5rem)', 
                    color: 'white',
                    letterSpacing: '-1px',
                    lineHeight: '1.1',
                  }}>
                    by its
                  </Heading>
                  <Box style={{ position: 'relative', display: 'inline-block' }}>
                    <Heading size={{ initial: "7", sm: "8", md: "9" }} style={{ 
                      fontSize: 'clamp(2rem, 5vw, 5rem)', 
                      color: '#9747FF', 
                      marginLeft: '8px',
                      letterSpacing: '-1px',
                      lineHeight: '1.1',
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      cover...
                    </Heading>
                    <Box style={{ 
                      position: 'absolute', 
                      bottom: '-2px', 
                      left: '16px', 
                      width: '90%', 
                      height: '4px', 
                      borderRadius: '2px', 
                      backgroundColor: '#9747FF',
                    }}></Box>
                  </Box>
                </Flex>
              </Box>
              
              <Text 
                size="3" 
                style={{ 
                  maxWidth: '570px', 
                  lineHeight: '1.8', 
                  marginTop: '16px', 
                  marginBottom: '28px',
                  color: 'rgba(224, 224, 224, 0.9)',
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s ease 0.8s, transform 0.6s ease 0.8s',
                }}
              >
                Because if the cover doesn't impress you, what else can? I'm a passionate Full-Stack Developer 
                with expertise in AI/ML and web development, with over 6 years of experience building innovative solutions.
              </Text>
              <Flex gap="4" wrap="wrap" direction={{ initial: "column", sm: "row" }} style={{ width: '100%' }}>
                <Button 
                  size="4" 
                  variant="solid" 
                  style={{ 
                    background: 'linear-gradient(135deg, #9747FF 0%, #8035e7 100%)', 
                    color: 'white',
                    boxShadow: '0 8px 16px rgba(151, 71, 255, 0.3)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }} 
                  className="btn-primary"
                  asChild
                >
                  <Link href="#contact">
                    <Box mr="2" as="span">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.6488 19.8751C20.2209 17.4067 18.0206 15.6367 15.4528 14.7976C16.723 14.0415 17.7098 12.8893 18.2618 11.518C18.8137 10.1468 18.9003 8.63224 18.5082 7.20701C18.1161 5.78178 17.267 4.52467 16.0912 3.62873C14.9155 2.73279 13.4782 2.24756 12 2.24756C10.5218 2.24756 9.08451 2.73279 7.90878 3.62873C6.73306 4.52467 5.88394 5.78178 5.49183 7.20701C5.09971 8.63224 5.18629 10.1468 5.73825 11.518C6.29021 12.8893 7.27704 14.0415 8.5472 14.7976C5.97938 15.6357 3.77907 17.4057 2.35126 19.8751C2.2989 19.9605 2.26417 20.0555 2.24912 20.1545C2.23407 20.2535 2.239 20.3545 2.26363 20.4516C2.28825 20.5487 2.33207 20.6399 2.3925 20.7197C2.45293 20.7996 2.52874 20.8666 2.61547 20.9167C2.7022 20.9667 2.79808 20.999 2.89745 21.0114C2.99683 21.0238 3.0977 21.0163 3.19409 20.9891C3.29049 20.9619 3.38047 20.9157 3.45872 20.8532C3.53697 20.7907 3.6019 20.7131 3.6497 20.6251C5.41595 17.5726 8.53782 15.7501 12 15.7501C15.4622 15.7501 18.5841 17.5726 20.3503 20.6251C20.3981 20.7131 20.4631 20.7907 20.5413 20.8532C20.6196 20.9157 20.7095 20.9619 20.8059 20.9891C20.9023 21.0163 21.0032 21.0238 21.1026 21.0114C21.2019 20.999 21.2978 20.9667 21.3845 20.9167C21.4713 20.8666 21.5471 20.7996 21.6075 20.7197C21.6679 20.6399 21.7118 20.5487 21.7364 20.4516C21.761 20.3545 21.766 20.2535 21.7509 20.1545C21.7358 20.0555 21.7011 19.9605 21.6488 19.8751Z" fill="currentColor"></path>
                      </svg>
                    </Box>
                    Hire Me
                  </Link>
                </Button>

                <Button 
                  size="4" 
                  variant="outline" 
                  style={{ 
                    borderColor: 'rgba(224, 224, 224, 0.3)', 
                    color: '#E0E0E0',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.3s ease',
                  }}
                  className="btn-secondary"
                  asChild
                >
                  <Link href="/Balaji Nagarajan.pdf" target="_blank">
                    <Box mr="2" as="span">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7606 3.67969L7.54969 1.52344C7.15796 1.4545 6.7549 1.54397 6.42913 1.77217C6.10335 2.00037 5.88155 2.34861 5.8125 2.74031L3.02344 18.5841C2.98932 18.7782 2.99379 18.9771 3.03659 19.1694C3.07938 19.3618 3.15967 19.5439 3.27285 19.7052C3.38603 19.8665 3.5299 20.004 3.69622 20.1097C3.86254 20.2154 4.04807 20.2873 4.24219 20.3213L16.4531 22.4775C16.6473 22.5117 16.8463 22.5074 17.0388 22.4647C17.2313 22.4219 17.4134 22.3417 17.5749 22.2285C17.7363 22.1153 17.8738 21.9714 17.9796 21.805C18.0854 21.6386 18.1573 21.453 18.1912 21.2588L20.9803 5.415C21.0486 5.02315 20.9585 4.6202 20.7298 4.29478C20.5011 3.96936 20.1525 3.74811 19.7606 3.67969Z" fill="currentColor"></path>
                      </svg>
                    </Box>
                    Download CV
                  </Link>
                </Button>
              </Flex>
              
              {/* Enhanced stats container with interactive elements */}
              <Box mt="9" className="stat-container" style={{ 
                background: 'rgba(255,255,255,0.03)', 
                padding: '20px', 
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <Flex gap={{ initial: "4", md: "9" }} wrap="wrap" justify="between" direction={{ initial: "row", xs: "row" }}>
                  <Box className="stat-item-hover" style={{ 
                    textAlign: 'center',
                    position: 'relative',
                    padding: '10px',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                  }}>
                    <Box style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(151, 71, 255, 0.2)',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      fontSize: '0.7rem',
                      color: '#9747FF',
                      whiteSpace: 'nowrap',
                    }}>Since 2018</Box>
                    <Text size="6" weight="bold" style={{ 
                      color: '#9747FF',
                      position: 'relative',
                      display: 'inline-block'
                    }}>
                      <span>6+</span>
                      <Box style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: '100%',
                        height: '4px',
                        background: 'rgba(151, 71, 255, 0.3)',
                        borderRadius: '2px',
                      }}></Box>
                    </Text>
                    <Text size="2" ml={'2'} style={{ color: '#E0E0E0' }}>Years Experience</Text>
                  </Box>
                  
                  <Box className="stat-item-hover" style={{ 
                    textAlign: 'center',
                    position: 'relative',
                    padding: '10px',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                  }}>
                    <Box style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(255, 196, 31, 0.2)',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      fontSize: '0.7rem',
                      color: '#FFC41F',
                      whiteSpace: 'nowrap',
                    }}>And Counting</Box>
                    <Text size="6" weight="bold" style={{ 
                      color: '#FFC41F',
                      position: 'relative',
                      display: 'inline-block'
                    }}>
                      <span>15+</span>
                      <Box style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: '100%',
                        height: '4px',
                        background: 'rgba(255, 196, 31, 0.3)',
                        borderRadius: '2px',
                      }}></Box>
                    </Text>
                    <Text size="2" ml={'2'} style={{ color: '#E0E0E0' }}>Client Projects</Text>
                  </Box>
                  
                  <Box className="stat-item-hover" style={{ 
                    textAlign: 'center',
                    position: 'relative',
                    padding: '10px',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                  }}>
                    <Box style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(98, 237, 152, 0.2)',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      fontSize: '0.7rem',
                      color: '#62ED98',
                      whiteSpace: 'nowrap',
                    }}>Specialized</Box>
                    <Text size="6" weight="bold" style={{ 
                      color: '#62ED98',
                      position: 'relative',
                      display: 'inline-block'
                    }}>
                      <span>10+</span>
                      <Box style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: '100%',
                        height: '4px',
                        background: 'rgba(98, 237, 152, 0.3)',
                        borderRadius: '2px',
                      }}></Box>
                    </Text>
                    <Text size="2" ml={'2'} style={{ color: '#E0E0E0' }}>AI/ML Solutions</Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
            
            {/* Enhanced profile photo section with 3D effect */}
            <Box className="profile-section" style={{ 
              position: 'relative', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
            }}>
              <Box
                ref={profileRef}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transform: isLoaded ? `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)` : 'perspective(1000px)',
                  transition: 'transform 0.1s ease',
                }}
              >
                {/* Enhanced glow effects */}
                <Box style={{
                  position: 'absolute',
                  width: '420px',
                  height: '420px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(151, 71, 255, 0.6) 0%, rgba(151, 71, 255, 0) 70%)',
                  filter: 'blur(30px)',
                  zIndex: 0,
                  transform: `translateX(${mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.5}px)`,
                }}></Box>
                
                {/* Secondary amber glow with movement */}
                <Box style={{
                  position: 'absolute',
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255, 196, 31, 0.4) 0%, rgba(255, 196, 31, 0) 70%)',
                  filter: 'blur(40px)',
                  zIndex: 0,
                  animation: 'pulse 8s ease-in-out infinite 1s',
                  transform: `translateX(${-mousePosition.x * 0.6}px) translateY(${-mousePosition.y * 0.6}px)`,
                }}></Box>
                
                {/* Additional ambient glow for depth */}
                <Box style={{
                  position: 'absolute',
                  width: '450px',
                  height: '450px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(20, 18, 29, 0.8) 0%, rgba(20, 18, 29, 0) 70%)',
                  zIndex: 0,
                }}></Box>
                
                {/* Enhanced 3D profile container */}
                <Box className="profile-container" style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '380px',
                  height: '380px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.4), 0 0 30px rgba(151, 71, 255, 0.3)',
                  border: '6px solid rgba(151, 71, 255, 0.2)',
                  transform: `translateX(${mousePosition.x * 0.2}px) translateY(${mousePosition.y * 0.2}px)`,
                }}>
                  {/* Background gradient for photo */}
                  <Box style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 30% 30%, rgba(151, 71, 255, 0.2), transparent 60%)',
                    zIndex: 1,
                  }}></Box>
                  
                  {/* Light overlay for photo */}
                  <Box style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent 80%)',
                    zIndex: 2,
                    mixBlendMode: 'overlay',
                  }}></Box>
                  
                  {/* Photo with enhanced positioning and effects */}
                  <Image
                    src="/my-photo.png"
                    alt="Balaji Nagarajan"
                    fill
                    sizes="380px"
                    priority={true}
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      filter: 'contrast(1.1) brightness(1.1)',
                      transform: `scale(1.1) translateX(${mousePosition.x * -0.1}px) translateY(${mousePosition.y * -0.1}px)`,
                      transition: 'transform 0.1s ease',
                    }}
                  />
                  
                  {/* Improved edge gradient overlay with follow effect */}
                  <Box style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at center, transparent 60%, rgba(20,18,29,0.9) 100%)',
                    zIndex: 3,
                    transform: `translateX(${mousePosition.x * -0.1}px) translateY(${mousePosition.y * -0.1}px)`,
                    transition: 'transform 0.1s ease',
                  }}></Box>
                  
                  {/* Dynamic highlight */}
                  <Box style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: `radial-gradient(circle at ${50 + mousePosition.x * 2}% ${50 + mousePosition.y * 2}%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
                    zIndex: 4,
                    mixBlendMode: 'overlay',
                  }}></Box>
                </Box>
                
                {/* Enhanced speech bubble with interactive elements */}
                <Box className="speech-bubble" style={{
                  position: 'absolute',
                  top: '5%',
                  right: '0',
                  zIndex: 5,
                  display: 'flex',
                  alignItems: 'center',
                  transform: 'translateY(-50%)',
                  transition: 'transform 0.2s ease',
                }}>
                  <Box style={{
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '18px',
                    padding: '16px 20px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(255,255,255,0.15)',
                    color: 'white',
                    position: 'relative',
                    maxWidth: '200px',
                    transform: isLoaded ? 'scale(1)' : 'scale(0.8)',
                    opacity: isLoaded ? 1 : 0,
                    transition: 'transform 0.5s ease, opacity 0.5s ease',
                  }}>
                    <Text size="2" style={{ fontWeight: '600', color: 'rgba(255,255,255,0.95)' }}>
                      Let's build something <span style={{ color: '#9747FF' }}>amazing</span> together!
                    </Text>
                    <Box style={{
                      position: 'absolute',
                      bottom: '-10px',
                      left: '25%',
                      width: '20px',
                      height: '20px',
                      background: 'rgba(255,255,255,0.08)',
                      transform: 'rotate(45deg)',
                      boxShadow: '5px 5px 15px rgba(0,0,0,0.08)',
                      borderRight: '1px solid rgba(255,255,255,0.15)',
                      borderBottom: '1px solid rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(12px)',
                    }}></Box>
                  </Box>
                </Box>
                
                {/* Enhanced skill badges with interactive hover effects */}
                <Box className="skill-badges-container" style={{
                  position: 'absolute',
                  bottom: '5%',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '6px',
                  flexWrap: 'wrap',
                  zIndex: 4,
                  width: '100%',
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isLoaded ? 1 : 0,
                  transition: 'transform 0.5s ease, opacity 0.5s ease',
                }}>
                  <Badge className="skill-badge" size="2" style={{ 
                    background: 'rgba(151, 71, 255, 0.15)', 
                    color: 'white', 
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(151, 71, 255, 0.3)',
                    boxShadow: '0 5px 15px rgba(151, 71, 255, 0.2)',
                    padding: '8px 14px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}>Full-Stack</Badge>
                  
                  <Badge className="skill-badge" size="2" style={{ 
                    background: 'rgba(255, 196, 31, 0.15)', 
                    color: 'white',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 196, 31, 0.3)',
                    boxShadow: '0 5px 15px rgba(255, 196, 31, 0.2)',
                    padding: '8px 14px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}>AI/ML Expert</Badge>
                  
                  <Badge className="skill-badge" size="2" style={{ 
                    background: 'rgba(39, 142, 255, 0.15)', 
                    color: 'white',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(39, 142, 255, 0.3)',
                    boxShadow: '0 5px 15px rgba(39, 142, 255, 0.2)',
                    padding: '8px 14px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}>React</Badge>
                  
                  <Badge className="skill-badge" size="2" style={{ 
                    background: 'rgba(98, 237, 152, 0.15)', 
                    color: 'white',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(98, 237, 152, 0.3)',
                    boxShadow: '0 5px 15px rgba(98, 237, 152, 0.2)',
                    padding: '8px 14px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}>NextJS</Badge>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>
    </section>
  );
}

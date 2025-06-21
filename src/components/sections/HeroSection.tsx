"use client";

import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Text
} from "@radix-ui/themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../../app/animations.module.css";
import ClientOnly from "../ClientOnly";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const profileRef = useRef<HTMLDivElement>(null);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
    setCurrentYear(new Date().getFullYear());

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

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="hero-section">
      <Box
        className={styles.heroBox}
        position="relative"
        overflow="hidden"
        style={{ minHeight: "100vh" }}
      >
        <Container size="4">
          <Grid
            columns={{ initial: "1", md: "2" }}
            gap="9"
            pt={{ initial: "9", md: "9" }}
            pb="4"
            style={{ paddingTop: "120px" }}
          >
            {/* Hero Content */}
            <Flex
              direction="column"
              justify="center"
              className={isLoaded ? styles.fadeIn : undefined}
              style={{
                opacity: isLoaded ? 1 : 0,
                animationDelay: "0.2s",
              }}
            >
              <Flex align="center" gap="2" mb="4">
                <Text size="4">Hello! I Am</Text>
                <Box position="relative" display="inline-block" px="2">
                  <Box
                    position="absolute"
                    inset="0"
                    style={{
                      borderRadius: "4px",
                      transform: "skew(-10deg)",
                      background: "var(--blue-a3)",
                    }}
                  />
                  <Text
                    size="4"
                    weight="bold"
                    color="blue"
                    style={{
                      position: "relative",
                      zIndex: 1
                    }}
                  >
                    Balaji Nagarajan
                  </Text>
                </Box>
              </Flex>

              <Box mb="2">
                <Text size="3">Full-Stack & AI Developer</Text>
              </Box>

              <Box>
                <Heading
                  mb="1"
                  size={{ initial: "7", sm: "8", md: "9" }}
                  style={{
                    letterSpacing: "-1px",
                    lineHeight: "1.1",
                  }}
                >
                  Engineering Tomorrow's
                </Heading>
                <Heading
                  size={{ initial: "7", sm: "8", md: "9" }}
                  style={{
                    letterSpacing: "-1px",
                    lineHeight: "1.1",
                    position: "relative",
                    zIndex: 1,
                    backgroundImage: "linear-gradient(45deg, var(--blue-9), var(--violet-9))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Digital Experiences
                </Heading>
              </Box>

              <Text
                size="3"
                mt="4"
                mb="6"
                style={{
                  maxWidth: "570px",
                  lineHeight: "1.8",
                }}
              >
                I'm a developer with over 6 years of experience specializing in full-stack development
                and AI/ML solutions. I build scalable, user-focused applications that solve real-world problems.
              </Text>

              <Flex
                gap="4"
                wrap="wrap"
                direction={{ initial: "column", sm: "row" }}
              >
                <Button size="4" variant="solid" highContrast asChild className="hire-me-button">
                  <Link href="#contact">
                    <Box as="span" mr="2" style={{ display: 'flex', alignItems: 'center' }}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.6488 19.8751C20.2209 17.4067 18.0206 15.6367 15.4528 14.7976C16.723 14.0415 17.7098 12.8893 18.2618 11.518C18.8137 10.1468 18.9003 8.63224 18.5082 7.20701C18.1161 5.78178 17.267 4.52467 16.0912 3.62873C14.9155 2.73279 13.4782 2.24756 12 2.24756C10.5218 2.24756 9.08451 2.73279 7.90878 3.62873C6.73306 4.52467 5.88394 5.78178 5.49183 7.20701C5.09971 8.63224 5.18629 10.1468 5.73825 11.518C6.29021 12.8893 7.27704 14.0415 8.5472 14.7976C5.97938 15.6357 3.77907 17.4057 2.35126 19.8751C2.2989 19.9605 2.26417 20.0555 2.24912 20.1545C2.23407 20.2535 2.239 20.3545 2.26363 20.4516C2.28825 20.5487 2.33207 20.6399 2.3925 20.7197C2.45293 20.7996 2.52874 20.8666 2.61547 20.9167C2.7022 20.9667 2.79808 20.999 2.89745 21.0114C2.99683 21.0238 3.0977 21.0163 3.19409 20.9891C3.29049 20.9619 3.38047 20.9157 3.45872 20.8532C3.53697 20.7907 3.6019 20.7131 3.6497 20.6251C5.41595 17.5726 8.53782 15.7501 12 15.7501C15.4622 15.7501 18.5841 17.5726 20.3503 20.6251C20.3981 20.7131 20.4631 20.7907 20.5413 20.8532C20.6196 20.9157 20.7095 20.9619 20.8059 20.9891C20.9023 21.0163 21.0032 21.0238 21.1026 21.0114C21.2019 20.999 21.2978 20.9667 21.3845 20.9167C21.4713 20.8666 21.5471 20.7996 21.6075 20.7197C21.6679 20.6399 21.7118 20.5487 21.7364 20.4516C21.761 20.3545 21.766 20.2535 21.7509 20.1545C21.7358 20.0555 21.7011 19.9605 21.6488 19.8751Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </Box>
                    Hire Me
                  </Link>
                </Button>

                <Button size="4" variant="outline" asChild className="download-cv-button">
                  <Link href="/Balaji Nagarajan.pdf" target="_blank">
                    <Box as="span" mr="2" style={{ display: 'flex', alignItems: 'center' }}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.7606 3.67969L7.54969 1.52344C7.15796 1.4545 6.7549 1.54397 6.42913 1.77217C6.10335 2.00037 5.88155 2.34861 5.8125 2.74031L3.02344 18.5841C2.98932 18.7782 2.99379 18.9771 3.03659 19.1694C3.07938 19.3618 3.15967 19.5439 3.27285 19.7052C3.38603 19.8665 3.5299 20.004 3.69622 20.1097C3.86254 20.2154 4.04807 20.2873 4.24219 20.3213L16.4531 22.4775C16.6473 22.5117 16.8463 22.5074 17.0388 22.4647C17.2313 22.4219 17.4134 22.3417 17.5749 22.2285C17.7363 22.1153 17.8738 21.9714 17.9796 21.805C18.0854 21.6386 18.1573 21.453 18.1912 21.2588L20.9803 5.415C21.0486 5.02315 20.9585 4.6202 20.7298 4.29478C20.5011 3.96936 20.1525 3.74811 19.7606 3.67969Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </Box>
                    Download CV
                  </Link>
                </Button>
              </Flex>

              {/* Stats container */}
              <Box
                mt="9"
                p="5"
                style={{
                  borderRadius: "16px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid var(--slate-4)",
                  background: "var(--color-surface, var(--slate-2))"
                }}
              >
                <Flex gap="9" wrap="wrap" justify="between">
                  <Flex
                    direction="column"
                    align="center"
                    position="relative"
                    p="2"
                  >                      <Box
                        position="absolute"
                        top="-10px"
                        style={{
                          whiteSpace: "nowrap",
                        }}
                        className="radix-themes-custom-fonts"
                      >
                        <Badge size="1" color="violet" radius="full">
                          Since 2019
                        </Badge>
                      </Box>
                      <Text
                        size="6"
                        weight="bold"
                        color="violet"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <ClientOnly>
                          <span>{currentYear ? currentYear - 2019 : ''}+</span>
                        </ClientOnly>
                        <Box
                          position="absolute"
                          style={{
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: "4px",
                          background: "var(--violet-5)",
                          borderRadius: "2px",
                        }}
                      ></Box>
                    </Text>
                    <Text size="2" mt="2">Years Experience</Text>
                  </Flex>

                  <Flex
                    direction="column"
                    align="center"
                    position="relative"
                    p="2"
                  >
                    <Box
                      position="absolute"
                      top="-10px"
                      style={{
                        whiteSpace: "nowrap",
                      }}
                      className="radix-themes-custom-fonts"
                    >
                      <Badge size="1" color="amber" radius="full">
                        And Counting
                      </Badge>
                    </Box>
                    <Text
                      size="6"
                      weight="bold"
                      color="amber"
                      style={{
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      <span>15+</span>
                      <Box
                        position="absolute"
                        style={{
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: "4px",
                          background: "var(--amber-5)",
                          borderRadius: "2px",
                        }}
                      ></Box>
                    </Text>
                    <Text size="2" mt="2">Client Projects</Text>
                  </Flex>

                  <Flex
                    direction="column"
                    align="center"
                    position="relative"
                    p="2"
                  >
                    <Box
                      position="absolute"
                      top="-10px"
                      style={{
                        whiteSpace: "nowrap",
                      }}
                      className="radix-themes-custom-fonts"
                    >
                      <Badge size="1" color="green" radius="full">
                        Specialized
                      </Badge>
                    </Box>
                    <Text
                      size="6"
                      weight="bold"
                      color="green"
                      style={{
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      <span>10+</span>
                      <Box
                        position="absolute"
                        style={{
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: "4px",
                          background: "var(--green-5)",
                          borderRadius: "2px",
                        }}
                      ></Box>
                    </Text>
                    <Text size="2" mt="2">AI/ML Solutions</Text>
                  </Flex>
                </Flex>
              </Box>
            </Flex>

            {/* Profile photo section */}
            <Flex
              position="relative"
              justify="center"
              align="center"
              style={{ display: "flex" }}
            >
              <Box
                ref={profileRef}
                position="relative"
                width="100%"
                height="100%"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: isLoaded
                    ? `perspective(1000px) rotateY(${
                        mousePosition.x
                      }deg) rotateX(${-mousePosition.y}deg)`
                    : "perspective(1000px)",
                  transition: "transform 0.1s ease",
                }}
              >
                {/* Main glow effect */}
                <Box
                  position="absolute"
                  style={{
                    width: "420px",
                    height: "420px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(var(--blue-6-rgb), 0.4) 0%, transparent 70%)",
                    filter: "blur(30px)",
                    opacity: 0.7,
                    zIndex: 0,
                    transform: `translateX(${
                      mousePosition.x * 0.5
                    }px) translateY(${mousePosition.y * 0.5}px)`,
                  }}
                ></Box>

                {/* Profile container */}
                <Box
                  position="relative"
                  style={{
                    width: "380px",
                    height: "380px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
                    border: "6px solid rgba(var(--blue-4-rgb), 0.4)",
                    transform: `translateX(${
                      mousePosition.x * 0.2
                    }px) translateY(${mousePosition.y * 0.2}px)`,
                    zIndex: 1,
                  }}
                >
                  {/* Overlay for better image contrast */}
                  <Box
                    position="absolute"
                    inset="0"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(var(--blue-6-rgb), 0.2), transparent 70%)",
                      mixBlendMode: "overlay",
                      zIndex: 2,
                    }}
                  ></Box>

                  {/* Photo */}
                  <Image
                    src="/my-photo.png"
                    alt="Balaji Nagarajan"
                    fill
                    sizes="380px"
                    priority={true}
                    style={{
                      objectFit: "cover",
                      objectPosition: "top top",
                      transform: `scale(1.1) translateX(${
                        mousePosition.x * -0.1
                      }px) translateY(${mousePosition.y * -0.1}px)`,
                      transition: "transform 0.1s ease",
                    }}
                  />
                </Box>

                {/* Speech bubble */}
                <Box
                  position="absolute"
                  top="5%"
                  right="0"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    zIndex: 5,
                    transform: "translateY(-50%)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <Box
                    position="relative"
                    p="4"
                    style={{
                      background: "var(--color-surface, var(--slate-3))",
                      backdropFilter: "blur(12px)",
                      borderRadius: "18px",
                      boxShadow:
                        "0 10px 30px rgba(0,0,0,0.1), inset 0 0 0 1px var(--slate-5)",
                      maxWidth: "200px",
                      transform: isLoaded ? "scale(1)" : "scale(0.8)",
                      opacity: isLoaded ? 1 : 0,
                      transition: "transform 0.5s ease, opacity 0.5s ease",
                    }}
                  >
                    <Text size="2" weight="bold">
                      Let's build something{" "}
                      <Text as="span" color="blue">
                        amazing
                      </Text>{" "}
                      together!
                    </Text>
                    <Box
                      position="absolute"
                      bottom="-10px"
                      left="25%"
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "var(--color-surface, var(--slate-3))",
                        transform: "rotate(45deg)",
                        boxShadow: "5px 5px 15px rgba(0,0,0,0.08)",
                        borderRight: "1px solid var(--slate-5)",
                        borderBottom: "1px solid var(--slate-5)",
                      }}
                    ></Box>
                  </Box>
                </Box>

                {/* Skill badges */}
                <Flex
                  justify="center"
                  gap="1"
                  wrap="wrap"
                  position="absolute"
                  bottom="5%"
                  width="100%"
                  style={{
                    zIndex: 4,
                    transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                    opacity: isLoaded ? 1 : 0,
                    transition: "transform 0.5s ease, opacity 0.5s ease",
                  }}
                >
                  <Badge size="2" variant="soft" color="violet" style={{ padding: "8px 14px" }}>
                    Full-Stack
                  </Badge>
                  <Badge size="2" variant="soft" color="amber" style={{ padding: "8px 14px" }}>
                    AI/ML Expert
                  </Badge>
                  <Badge size="2" variant="soft" color="blue" style={{ padding: "8px 14px" }}>
                    React
                  </Badge>
                  <Badge size="2" variant="soft" color="green" style={{ padding: "8px 14px" }}>
                    NextJS
                  </Badge>
                </Flex>
              </Box>
            </Flex>
          </Grid>
        </Container>
      </Box>

      {/* About/Intro Section */}
      <Box
        py="9"
        style={{ 
          backgroundColor: "var(--color-surface, var(--slate-2))" 
        }}
      >
        <Container size="3">
          <Grid columns={{ initial: "1", md: "1" }} gap="6">
            <Box
              className={styles.fadeIn}
              style={{
                opacity: isLoaded ? 1 : 0,
                transition: "opacity 0.8s ease 0.3s",
              }}
            >
              <Heading size="6" mb="3" align="center">
                Turning Ideas Into Scalable, Smart Solutions
              </Heading>
              <Text
                size="3"
                align="center"
                style={{
                  maxWidth: "800px",
                  margin: "0 auto",
                  lineHeight: "1.8",
                }}
              >
                With over 6 years of experience, I specialize in building robust, user-focused
                web applications and AI/ML-powered systems. My expertise spans full-stack development,
                RAG implementations, vector search, and AI agents that solve real business challenges.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Box>
    </section>
  );
}

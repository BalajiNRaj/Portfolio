'use client';

import { Box, Container, Flex, Heading, Text, Grid, Button, Link, Card, Badge, Dialog, TextField, TextArea, Inset } from "@radix-ui/themes";
import { ArrowRightIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero-section">
        <Box style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
          <Container>
            <Grid columns={{ initial: "1", md: "2" }} gap="9" style={{ paddingTop: '100px' }}>
              <Flex direction="column" justify="center">
                <Badge size="3" color="purple" style={{ padding: '10px', marginBottom: '20px' }}>
                  Hi! I'm Balaji Nagarajan
                </Badge>
                <Heading size={{ initial: "7", sm: "8" }} mb="6">
                  Full-Stack Developer & Freelancer
                </Heading>

                <Text size="4" color="gray" style={{ maxWidth: '570px', lineHeight: '1.8' }} mb="9">
                  I'm a passionate Full-Stack Developer with expertise in AI/ML and web development, with over 6 years
                  of experience building innovative solutions. Skilled in creating custom applications and
                  implementing cutting-edge AI features for clients worldwide.
                </Text>
                <Flex gap="4" wrap="wrap">
                  <Button size="4" variant="solid" color="purple" asChild>
                    <Link href="#contact">
                      <Box mr="2" as="span">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.2" d="M18 9C18 10.1867 17.6481 11.3467 16.9888 12.3334C16.3295 13.3201 15.3925 14.0892 14.2961 14.5433C13.1997 14.9974 11.9933 15.1162 10.8295 14.8847C9.66557 14.6532 8.59648 14.0818 7.75736 13.2426C6.91825 12.4035 6.3468 11.3344 6.11529 10.1705C5.88378 9.00666 6.0026 7.80026 6.45673 6.7039C6.91085 5.60754 7.67989 4.67047 8.66658 4.01118C9.65328 3.35189 10.8133 3 12 3C13.5913 3 15.1174 3.63214 16.2426 4.75736C17.3679 5.88258 18 7.4087 18 9Z" fill="currentColor"></path>
                          <path d="M21.6488 19.8751C20.2209 17.4067 18.0206 15.6367 15.4528 14.7976C16.723 14.0415 17.7098 12.8893 18.2618 11.518C18.8137 10.1468 18.9003 8.63224 18.5082 7.20701C18.1161 5.78178 17.267 4.52467 16.0912 3.62873C14.9155 2.73279 13.4782 2.24756 12 2.24756C10.5218 2.24756 9.08451 2.73279 7.90878 3.62873C6.73306 4.52467 5.88394 5.78178 5.49183 7.20701C5.09971 8.63224 5.18629 10.1468 5.73825 11.518C6.29021 12.8893 7.27704 14.0415 8.5472 14.7976C5.97938 15.6357 3.77907 17.4057 2.35126 19.8751C2.2989 19.9605 2.26417 20.0555 2.24912 20.1545C2.23407 20.2535 2.239 20.3545 2.26363 20.4516C2.28825 20.5487 2.33207 20.6399 2.3925 20.7197C2.45293 20.7996 2.52874 20.8666 2.61547 20.9167C2.7022 20.9667 2.79808 20.999 2.89745 21.0114C2.99683 21.0238 3.0977 21.0163 3.19409 20.9891C3.29049 20.9619 3.38047 20.9157 3.45872 20.8532C3.53697 20.7907 3.6019 20.7131 3.6497 20.6251C5.41595 17.5726 8.53782 15.7501 12 15.7501C15.4622 15.7501 18.5841 17.5726 20.3503 20.6251C20.3981 20.7131 20.4631 20.7907 20.5413 20.8532C20.6196 20.9157 20.7095 20.9619 20.8059 20.9891C20.9023 21.0163 21.0032 21.0238 21.1026 21.0114C21.2019 20.999 21.2978 20.9667 21.3845 20.9167C21.4713 20.8666 21.5471 20.7996 21.6075 20.7197C21.6679 20.6399 21.7118 20.5487 21.7364 20.4516C21.761 20.3545 21.766 20.2535 21.7509 20.1545C21.7358 20.0555 21.7011 19.9605 21.6488 19.8751ZM6.75001 9.00011C6.75001 7.96176 7.05792 6.94672 7.63479 6.08337C8.21167 5.22001 9.03161 4.5471 9.99092 4.14974C10.9502 3.75238 12.0058 3.64841 13.0242 3.85099C14.0426 4.05356 14.9781 4.55357 15.7123 5.2878C16.4465 6.02202 16.9466 6.95748 17.1491 7.97589C17.3517 8.99429 17.2477 10.0499 16.8504 11.0092C16.453 11.9685 15.7801 12.7884 14.9168 13.3653C14.0534 13.9422 13.0384 14.2501 12 14.2501C10.6081 14.2486 9.27359 13.695 8.28934 12.7108C7.3051 11.7265 6.7515 10.392 6.75001 9.00011Z" fill="currentColor"></path>
                        </svg>
                      </Box>
                      Hire Me
                    </Link>
                  </Button>

                  <Button size="4" variant="outline" color="gray" asChild>
                    <Link href="/Balaji Nagarajan.pdf" target="_blank">
                      <Box mr="2" as="span">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.2" d="M20.2388 5.28654L17.4497 21.1303C17.4326 21.2273 17.3966 21.32 17.3436 21.4031C17.2907 21.4862 17.2219 21.558 17.1412 21.6145C17.0605 21.671 16.9695 21.7111 16.8733 21.7324C16.7771 21.7537 16.6777 21.7559 16.5806 21.7387L4.36971 19.5825C4.17396 19.5479 3.99991 19.4371 3.88583 19.2743C3.77174 19.1116 3.72694 18.9101 3.76127 18.7143L6.55034 2.8706C6.56743 2.77358 6.60347 2.68087 6.6564 2.59778C6.70933 2.51469 6.77811 2.44284 6.85882 2.38634C6.93952 2.32984 7.03057 2.28979 7.12675 2.26848C7.22294 2.24718 7.32238 2.24503 7.4194 2.26216L19.6303 4.41841C19.8261 4.45294 20.0001 4.56378 20.1142 4.72656C20.2283 4.88933 20.2731 5.09075 20.2388 5.28654Z" fill="currentColor"></path>
                          <path d="M19.7606 3.67969L7.54969 1.52344C7.15796 1.4545 6.7549 1.54397 6.42913 1.77217C6.10335 2.00037 5.88155 2.34861 5.8125 2.74031L3.02344 18.5841C2.98932 18.7782 2.99379 18.9771 3.03659 19.1694C3.07938 19.3618 3.15967 19.5439 3.27285 19.7052C3.38603 19.8665 3.5299 20.004 3.69622 20.1097C3.86254 20.2154 4.04807 20.2873 4.24219 20.3213L16.4531 22.4775C16.6473 22.5117 16.8463 22.5074 17.0388 22.4647C17.2313 22.4219 17.4134 22.3417 17.5749 22.2285C17.7363 22.1153 17.8738 21.9714 17.9796 21.805C18.0854 21.6386 18.1573 21.453 18.1912 21.2588L20.9803 5.415C21.0486 5.02315 20.9585 4.6202 20.7298 4.29478C20.5011 3.96936 20.1525 3.74811 19.7606 3.67969ZM16.7119 21L4.5 18.8438L7.28906 3L19.5 5.15625L16.7119 21Z" fill="currentColor"></path>
                        </svg>
                      </Box>
                      Download CV
                    </Link>
                  </Button>
                </Flex>
                <Flex mt="9" gap={{ initial: "4", md: "9" }}>
                  <Box style={{ textAlign: 'center' }}>
                    <Text size="6" weight="bold">6+</Text>
                    <Text size="2" color="gray">Years Experience</Text>
                  </Box>
                  <Box style={{ textAlign: 'center' }}>
                    <Text size="6" weight="bold">15+</Text>
                    <Text size="2" color="gray">Client Projects</Text>
                  </Box>
                  <Box style={{ textAlign: 'center' }}>
                    <Text size="6" weight="bold">10+</Text>
                    <Text size="2" color="gray">AI/ML Solutions</Text>
                  </Box>
                </Flex>
              </Flex>
              <Box style={{ position: 'relative' }}>
                <Box
                  style={{
                    background: 'radial-gradient(circle, var(--purple-9), var(--amber-9))',
                    width: '100%',
                    height: '100%',
                    maxWidth: '800px',
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    willChange: 'transform', /* Improves rendering performance */
                    transform: 'translateZ(0)', /* Forces GPU acceleration */
                  }}
                >
                  {/* Image container with clip-path */}
                  <Box style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    minHeight: '540px',
                    overflow: 'hidden',
                    zIndex: 1,
                    willChange: 'transform', /* Improves rendering performance */
                  }}>
                    {/* Background gradient overlay for contrast */}
                    <Box style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
                      zIndex: 2,
                    }} />

                    {/* Image */}
                    <Image
                      src="/my-photo.png"
                      alt="Balaji Nagarajan"
                      fill
                      priority={true}
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        zIndex: 1,
                      }}
                    />                    {/* Text mask with mix-blend-mode */}
                    <Box style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'end',
                      justifyContent: 'center',
                      bottom: '70px',
                      zIndex: 3,
                    }}>
                      <Box style={{
                        position: 'relative',
                        width: '100%',
                        padding: '0 20px',
                      }}>                        <Text
                        size="9"
                        weight="bold"
                        style={{
                          display: 'block',
                          color: 'white',
                          fontSize: 'clamp(2rem, 6vw, 5rem)',
                          lineHeight: '1',
                          textAlign: 'center',
                          textTransform: 'uppercase',
                          letterSpacing: '-1px',
                          mixBlendMode: 'overlay',
                          textShadow: '0 2px 30px rgba(0,0,0,0.8)',
                          animation: 'fadeUp 0.5s ease-out forwards, letterSpacing 0.7s ease-out forwards',
                          transform: 'translateZ(0)',
                          willChange: 'opacity, transform, letter-spacing',
                        }}
                      >
                          Balaji
                        </Text>
                      </Box>
                    </Box>                    {/* Decorative elements */}
                    <Box style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '20px',
                      right: '20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      zIndex: 4,
                      transform: 'translateZ(0)', /* Prevent scrolling glitches */
                    }}>
                      <Badge size="2" color="purple" style={{ opacity: 0.9 }}>Developer</Badge>
                      <Badge size="2" color="amber" style={{ opacity: 0.9 }}>Freelancer</Badge>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Container>
        </Box>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-gray/5 dark:bg-gradient-radial dark:from-[#994FF5]/[6%] dark:to-[#FFC41F]/[6%]" id="skills">
        <Container>
          <Flex direction="column" align="center" mb="9" className="animate-fade-in">
            <Box className="inline-block mb-4">
              <Text className="bg-purple text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
                <Box as="span">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.33454 9.58362C5.35965 9.83993 6.16007 10.6403 6.41638 11.6655L7.37875 15.5149C7.45002 15.8 7.70616 16 8 16C8.29384 16 8.54998 15.8 8.62125 15.5149L9.58362 11.6655C9.83993 10.6403 10.6403 9.83993 11.6655 9.58362L15.5149 8.62125C15.8 8.54998 16 8.29384 16 8C16 7.70616 15.8 7.45002 15.5149 7.37875L11.6655 6.41638C10.6403 6.16007 9.83993 5.35965 9.58362 4.33454L8.62125 0.485071C8.54998 0.199992 8.29384 0 8 0C7.70616 0 7.45002 0.199991 7.37875 0.485071L6.41638 4.33454C6.16007 5.35965 5.35965 6.16007 4.33454 6.41638L0.485071 7.37875C0.199992 7.45002 0 7.70616 0 8C0 8.29384 0.199991 8.54998 0.485071 8.62125L4.33454 9.58362Z" fill="currentColor"></path>
                  </svg>
                </Box>
                Skills & Expertise
              </Text>
            </Box>
            <Heading size="7" align="center" mb="2">Technical Proficiency</Heading>
            <Text as="p" color="gray" align="center" size="3" style={{ maxWidth: '700px' }}>
              Specialized in AI/ML technologies and full-stack development with expertise in various programming tools and frameworks
            </Text>
          </Flex>

          <Box className="skills-container" mb="9">
            <Heading size="5" mb="6" className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Technical Skills
            </Heading>

            <Grid columns={{ initial: "2", xs: "3", sm: "5" }} gap="4" className="skill-circles">
              {/* Skill Circle - AI/ML */}
              <Box className="skill-circle-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Box className="skill-circle" style={{
                  borderRadius: "50%",
                  width: "130px",
                  height: "130px",
                  border: "2px solid var(--blue-6)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  background: "rgba(0,0,0,0.03)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  <Box style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "95%",
                    background: "linear-gradient(to top, var(--blue-4), transparent)",
                    opacity: 0.2,
                    zIndex: 0
                  }} />
                  <Box style={{ zIndex: 1 }}>
                    <Box className="w-[40px] h-[40px] inline-block mb-2">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--blue-9)" strokeWidth="2" fill="var(--blue-3)" />
                        <path d="M2 17L12 22L22 17" stroke="var(--blue-9)" strokeWidth="2" fill="var(--blue-3)" />
                        <path d="M2 12L12 17L22 12" stroke="var(--blue-9)" strokeWidth="2" fill="var(--blue-3)" />
                      </svg>
                    </Box>
                    <Text className="text-base font-semibold">AI/ML</Text>
                    <Text className="text-sm text-gray">95%</Text>
                  </Box>
                </Box>
              </Box>

              {/* Skill Circle - React */}
              <Box className="skill-circle-wrapper animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Box className="skill-circle" style={{
                  borderRadius: "50%",
                  width: "130px",
                  height: "130px",
                  border: "2px solid var(--cyan-6)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  background: "rgba(0,0,0,0.03)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  <Box style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "90%",
                    background: "linear-gradient(to top, var(--cyan-4), transparent)",
                    opacity: 0.2,
                    zIndex: 0
                  }} />
                  <Box style={{ zIndex: 1 }}>
                    <Box className="w-[40px] h-[40px] inline-block mb-2">
                      <svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <circle cx="12" cy="12" r="2.5" fill="var(--cyan-9)" />
                          <path d="M12 21.5C7.30558 21.5 3.5 17.6944 3.5 13C3.5 8.30558 7.30558 4.5 12 4.5C16.6944 4.5 20.5 8.30558 20.5 13C20.5 17.6944 16.6944 21.5 12 21.5ZM12 19.5C15.5899 19.5 18.5 16.5899 18.5 13C18.5 9.41015 15.5899 6.5 12 6.5C8.41015 6.5 5.5 9.41015 5.5 13C5.5 16.5899 8.41015 19.5 12 19.5Z" fill="var(--cyan-9)" />
                          <path d="M12 2.5C13.3807 2.5 14.5 3.61929 14.5 5C14.5 6.38071 13.3807 7.5 12 7.5C10.6193 7.5 9.5 6.38071 9.5 5C9.5 3.61929 10.6193 2.5 12 2.5Z" fill="var(--cyan-9)" />
                          <path d="M19 12.5C20.3807 12.5 21.5 13.6193 21.5 15C21.5 16.3807 20.3807 17.5 19 17.5C17.6193 17.5 16.5 16.3807 16.5 15C16.5 13.6193 17.6193 12.5 19 12.5Z" fill="var(--cyan-9)" />
                          <path d="M5 12.5C6.38071 12.5 7.5 13.6193 7.5 15C7.5 16.3807 6.38071 17.5 5 17.5C3.61929 17.5 2.5 16.3807 2.5 15C2.5 13.6193 3.61929 12.5 5 12.5Z" fill="var(--cyan-9)" />
                        </g>
                      </svg>
                    </Box>
                    <Text className="text-base font-semibold">React</Text>
                    <Text className="text-sm text-gray">90%</Text>
                  </Box>
                </Box>
              </Box>

              {/* Skill Circle - Node.js */}
              <Box className="skill-circle-wrapper animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Box className="skill-circle" style={{
                  borderRadius: "50%",
                  width: "130px",
                  height: "130px",
                  border: "2px solid var(--green-6)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  background: "rgba(0,0,0,0.03)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  <Box style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "85%",
                    background: "linear-gradient(to top, var(--green-4), transparent)",
                    opacity: 0.2,
                    zIndex: 0
                  }} />
                  <Box style={{ zIndex: 1 }}>
                    <Box className="w-[40px] h-[40px] inline-block mb-2">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                        <path d="M12 21.5C11.7459 21.5 11.5 21.4223 11.2908 21.28L8.34193 19.5114C8.02484 19.3229 8.17445 19.2677 8.27333 19.2349C8.65049 19.1016 8.72336 19.0739 9.14286 18.8306C9.17782 18.8095 9.22126 18.8181 9.25622 18.8392L11.559 20.2148C11.6028 20.2432 11.6641 20.2432 11.7041 20.2148L20.4712 15.0346C20.515 15.0063 20.5425 14.9568 20.5425 14.9047V4.55608C20.5425 4.50134 20.515 4.45453 20.4674 4.42348L11.7079 -0.752619C11.6641 -0.780952 11.6028 -0.780952 11.559 -0.752619L2.80325 4.42348C2.75568 4.4518 2.72449 4.50134 2.72449 4.55608V14.9047C2.72449 14.9568 2.75194 15.0036 2.80325 15.032L5.48459 16.6173C6.55391 17.1553 7.21307 16.5821 7.21307 16.0062V5.21818C7.21307 5.14208 7.27551 5.08382 7.34861 5.08382H8.36429C8.43451 5.08382 8.49695 5.14208 8.49695 5.21818V16.0062C8.49695 17.3329 7.76245 18.1459 6.44237 18.1459C5.98116 18.1459 5.61968 18.1459 4.70525 17.7026L2.14276 16.185C1.71587 15.9497 1.46777 15.4937 1.46777 14.9979V4.56447C1.46777 4.06864 1.71587 3.61267 2.14276 3.37728L10.9173 -1.80982C11.3307 -2.03679 11.8694 -2.03679 12.279 -1.80982L21.046 3.37728C21.4692 3.61267 21.721 4.06864 21.721 4.56447V14.9979C21.721 15.4937 21.4692 15.9497 21.046 16.185L12.279 21.3726C12.0698 21.4891 11.8239 21.5 11.6066 21.5H12" stroke="var(--green-9)" strokeWidth="1.5" />
                        <path d="M13.7494 14.9701C10.0135 14.9701 9.22882 13.5795 9.22882 12.4278C9.22882 12.3517 9.29125 12.2935 9.36435 12.2935H10.3962C10.4618 12.2935 10.5167 12.3426 10.5297 12.4079C10.6928 13.3208 11.1241 13.7643 13.7531 13.7643C15.8453 13.7643 16.6999 13.1965 16.6999 12.0914C16.6999 11.5793 16.4896 11.193 13.382 10.9022C10.7957 10.6521 9.14472 10.1144 9.14472 8.37867C9.14472 6.764 10.5347 5.78245 13.3896 5.78245C16.5644 5.78245 17.8582 6.70231 18.0198 8.64622C18.0236 8.68494 18.0086 8.72366 17.9824 8.75197C17.9561 8.77756 17.9186 8.79436 17.8807 8.79436H16.8452C16.7834 8.79436 16.7285 8.75197 16.7118 8.69371C16.4369 7.67001 15.7476 7.02472 13.3858 7.02472C10.779 7.02472 10.5617 7.93038 10.5617 8.3061C10.5617 8.77756 10.8142 8.9582 13.7494 9.30603C16.6472 9.65114 18.1131 10.1671 18.1131 11.8754C18.1094 13.634 16.6285 14.9701 13.7494 14.9701Z" stroke="var(--green-9)" strokeWidth="1.5" />
                      </svg>
                    </Box>
                    <Text className="text-base font-semibold">Node.js</Text>
                    <Text className="text-sm text-gray">85%</Text>
                  </Box>
                </Box>
              </Box>

              {/* Skill Circle - Cloud */}
              <Box className="skill-circle-wrapper animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <Box className="skill-circle" style={{
                  borderRadius: "50%",
                  width: "130px",
                  height: "130px",
                  border: "2px solid var(--purple-6)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  background: "rgba(0,0,0,0.03)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  <Box style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "90%",
                    background: "linear-gradient(to top, var(--purple-4), transparent)",
                    opacity: 0.2,
                    zIndex: 0
                  }} />
                  <Box style={{ zIndex: 1 }}>
                    <Box className="w-[40px] h-[40px] inline-block mb-2">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                        <path d="M6.5 19H17.5M6.5 19C5.39543 19 4.5 18.1046 4.5 17M6.5 19L8 22M17.5 19C18.6046 19 19.5 18.1046 19.5 17M17.5 19L16 22M19.5 17V7M19.5 17H4.5M4.5 17V7M4.5 7C4.5 5.89543 5.39543 5 6.5 5H17.5C18.6046 5 19.5 5.89543 19.5 7M4.5 7H19.5M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="var(--purple-9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Box>
                    <Text className="text-base font-semibold">Cloud</Text>
                    <Text className="text-sm text-gray">90%</Text>
                  </Box>
                </Box>
              </Box>

              {/* Skill Circle - Python */}
              <Box className="skill-circle-wrapper animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Box className="skill-circle" style={{
                  borderRadius: "50%",
                  width: "130px",
                  height: "130px",
                  border: "2px solid var(--amber-6)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  background: "rgba(0,0,0,0.03)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  <Box style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "88%",
                    background: "linear-gradient(to top, var(--amber-4), transparent)",
                    opacity: 0.2,
                    zIndex: 0
                  }} />
                  <Box style={{ zIndex: 1 }}>
                    <Box className="w-[40px] h-[40px] inline-block mb-2">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                        <path d="M11.9388 2.0048C5.56815 2.0048 5.92787 5.01935 5.92787 5.01935L5.93625 8.15245H12.0485V9.01559H3.81386C3.81386 9.01559 0.0048446 8.57335 0.0048446 15.0059C0.0048446 21.4385 3.34729 21.2336 3.34729 21.2336H5.33942V18.0051C5.33942 18.0051 5.21406 14.663 8.55657 14.663H14.6219C14.6219 14.663 17.7551 14.7078 17.7551 11.6546V5.36069C17.7551 5.36069 18.2722 2.0048 11.9388 2.0048ZM8.72135 3.83125C8.72135 3.83125 11.9555 1.1214 15.0003 3.83125C15.0003 3.83125 16.412 5.01935 16.412 6.1905C16.412 7.36164 16.3872 9.7085 16.3872 9.7085C16.3872 9.7085 16.4624 12.8247 13.3171 12.8247H7.60058C7.60058 12.8247 4.5557 12.8749 4.5557 9.80449V6.27456C4.5557 6.27456 4.33657 3.83125 8.72135 3.83125Z" fill="var(--amber-9)" />
                        <path d="M11.9388 21.9952C18.3095 21.9952 17.9498 18.9806 17.9498 18.9806L17.9414 15.8475H11.8291V14.9844H20.0638C20.0638 14.9844 23.8728 15.4266 23.8728 8.99406C23.8728 2.5615 20.5303 2.76642 20.5303 2.76642H18.5382V5.99487C18.5382 5.99487 18.6636 9.33703 15.3211 9.33703H9.25576C9.25576 9.33703 6.12249 9.29222 6.12249 12.3454V18.6393C6.12249 18.6393 5.60539 21.9952 11.9388 21.9952ZM15.1563 20.1687C15.1563 20.1687 11.9221 22.8786 8.87734 20.1687C8.87734 20.1687 7.46563 18.9806 7.46563 17.8095C7.46563 16.6384 7.49048 14.2915 7.49048 14.2915C7.49048 14.2915 7.41531 11.1753 10.5605 11.1753H16.2771C16.2771 11.1753 19.322 11.1251 19.322 14.1955V17.7254C19.322 17.7254 19.5411 20.1687 15.1563 20.1687Z" fill="var(--amber-9)" />
                      </svg>
                    </Box>
                    <Text className="text-base font-semibold">Python</Text>
                    <Text className="text-sm text-gray">88%</Text>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Box>

          <Heading size="5" mb="6" className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
            Awards & Recognition
          </Heading>

          <Grid columns={{ initial: "1", sm: "3" }} gap="6" className="awards-grid">
            <Box className="award-card animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Card style={{
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                height: '100%'
              }}>
                <Box p="5" style={{ textAlign: 'center' }}>
                  <Box style={{ marginBottom: '16px' }}>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHJ4PSIxMCIgZmlsbD0iI0YzRjRGNiIvPjxwYXRoIGQ9Ik03MC41IDEwMEMxMDAgNzAgMTMwIDcwIDE1OS41IDEwMEMxMzAgMTMwIDEwMCAxMzAgNzAuNSAxMDAiIGZpbGw9IiM5OTRGRjUiLz48cGF0aCBkPSJNNDAuNSAxMDBDNzAgNzAgMTAwIDcwIDEyOS41IDEwMEM5OS41IDEzMCA3MCAxMzAgNDAuNSAxMDAiIGZpbGw9IiNGRkM0MUYiLz48L3N2Zz4="
                      alt="Design Award"
                      width="120"
                      height="120"
                      className="block mx-auto dark:hidden"
                    />
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHJ4PSIxMCIgZmlsbD0iIzFBMUIyMSIvPjxwYXRoIGQ9Ik03MC41IDEwMEMxMDAgNzAgMTMwIDcwIDE1OS41IDEwMEMxMzAgMTMwIDEwMCAxMzAgNzAuNSAxMDAiIGZpbGw9IiM5OTRGRjUiLz48cGF0aCBkPSJNNDAuNSAxMDBDNzAgNzAgMTAwIDcwIDEyOS41IDEwMEM5OS41IDEzMCA3MCAxMzAgNDAuNSAxMDAiIGZpbGw9IiNGRkM0MUYiLz48L3N2Zz4="
                      alt="Design Award Dark"
                      width="120"
                      height="120"
                      className="hidden mx-auto dark:block"
                    />
                  </Box>
                  <Heading size="3" mb="1">Innovation Award</Heading>
                  <Text size="2" color="gray">AI Solution Excellence</Text>
                </Box>
              </Card>
            </Box>

            <Box className="award-card animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Card style={{
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                height: '100%'
              }}>
                <Box p="5" style={{ textAlign: 'center' }}>
                  <Box style={{ marginBottom: '16px' }}>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHJ4PSIxMCIgZmlsbD0iI0YzRjRGNiIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNjAiIGZpbGw9IiM5OTRGRjUiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjQwIiBmaWxsPSIjRkZDNDFGIi8+PC9zdmc+"
                      alt="Creative Award"
                      width="120"
                      height="120"
                      className="block mx-auto dark:hidden"
                    />
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHJ4PSIxMCIgZmlsbD0iIzFBMUIyMSIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNjAiIGZpbGw9IiM5OTRGRjUiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjQwIiBmaWxsPSIjRkZDNDFGIi8+PC9zdmc+"
                      alt="Creative Award Dark"
                      width="120"
                      height="120"
                      className="hidden mx-auto dark:block"
                    />
                  </Box>
                  <Heading size="3" mb="1">Technical Excellence</Heading>
                  <Text size="2" color="gray">Enterprise Architecture</Text>
                </Box>
              </Card>
            </Box>

            <Box className="award-card animate-fade-in" style={{ animationDelay: '1s' }}>
              <Card style={{
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                height: '100%'
              }}>
                <Box p="5" style={{ textAlign: 'center' }}>
                  <Box style={{ marginBottom: '16px' }}>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHJ4PSIxMCIgZmlsbD0iI0YzRjRGNiIvPjxwYXRoIGQ9Ik0xMDAgNDBMMTMwIDEwMEwxMDAgMTYwTDcwIDEwMEwxMDAgNDBaIiBmaWxsPSIjOTk0RkY1Ii8+PHBhdGggZD0iTTEwMCA3MEwxMjAgMTEwTDEwMCAxNTBMODAgMTEwTDEwMCA3MFoiIGZpbGw9IiNGRkM0MUYiLz48L3N2Zz4="
                      alt="Excellence Award"
                      width="120"
                      height="120"
                      className="block mx-auto dark:hidden"
                    />
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHJ4PSIxMCIgZmlsbD0iIzFBMUIyMSIvPjxwYXRoIGQ9Ik0xMDAgNDBMMTMwIDEwMEwxMDAgMTYwTDcwIDEwMEwxMDAgNDBaIiBmaWxsPSIjOTk0RkY1Ii8+PHBhdGggZD0iTTEwMCA3MEwxMjAgMTEwTDEwMCAxNTBMODAgMTEwTDEwMCA3MFoiIGZpbGw9IiNGRkM0MUYiLz48L3N2Zz4="
                      alt="Excellence Award Dark"
                      width="120"
                      height="120"
                      className="hidden mx-auto dark:block"
                    />
                  </Box>
                  <Heading size="3" mb="1">Leadership Award</Heading>
                  <Text size="2" color="gray">Team Development</Text>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <Container style={{ padding: 'var(--space-9) 0' }}>
          <Flex direction="column" align="center" mb="6" className="section-header">
            <Text size="4" color="blue" mb="2">MY WORK</Text>
            <Heading size="8" className="gradient-text">Featured Projects</Heading>
            <Text as="p" color="gray" mt="3" size="3" style={{ maxWidth: '600px', textAlign: 'center' }}>
              Explore some of my recent projects where I've applied modern technologies to solve real-world problems.
            </Text>
          </Flex>

          <Grid columns={{ initial: "1", sm: "3" }} gap="6" className="projects-grid">
            {/* Project Card 1 */}
            <Card className="project-card">
              <Inset clip="padding-box" side="top" pb="current">
                <Box position="relative" style={{ height: '200px', overflow: 'hidden' }}>
                  <Image
                    src="/phone.svg"
                    alt="AI-Powered Answer Agent"
                    fill
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/600x400/5583EE/ffffff?text=AI+Answer+Agent';
                    }}
                  />
                  <Box className="project-links" style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    display: 'flex',
                    gap: '8px',
                    zIndex: 10
                  }}>
                    <Link href="https://github.com/username/project1" target="_blank" style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(0,0,0,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      <GitHubLogoIcon width="16" height="16" />
                    </Link>
                    <Link href="https://project1-demo.com" target="_blank" style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(0,0,0,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      <ArrowRightIcon width="16" height="16" />
                    </Link>
                  </Box>
                </Box>
              </Inset>
              <Box p="4">
                <Heading size="4">AI-Powered Answer Agent</Heading>
                <Text as="p" color="gray" mt="2" size="2" style={{ minHeight: '60px' }}>
                  Automated system using RAG and OpenAI's Ada model for intelligent response generation with Microsoft recognition.
                </Text>
                <Box className="tech-stack" mt="4">
                  <Text size="2" color="gray" mb="2">Technologies:</Text>
                  <Flex gap="2" wrap="wrap">
                    <Badge variant="soft" radius="full">
                      <Flex align="center" gap="1">
                        <Box className="tech-icon">🤖</Box>
                        <Text>OpenAI</Text>
                      </Flex>
                    </Badge>
                    <Badge variant="soft" radius="full">
                      <Flex align="center" gap="1">
                        <Box className="tech-icon">🔍</Box>
                        <Text>SOLR</Text>
                      </Flex>
                    </Badge>
                    <Badge variant="soft" radius="full">
                      <Flex align="center" gap="1">
                        <Box className="tech-icon">📚</Box>
                        <Text>RAG</Text>
                      </Flex>
                    </Badge>
                    <Badge variant="soft" radius="full">
                      <Flex align="center" gap="1">
                        <Box className="tech-icon">🧠</Box>
                        <Text>ML</Text>
                      </Flex>
                    </Badge>
                  </Flex>
                </Box>
              </Box>
            </Card>            {/* Project Card 2 */}
            <Card className="project-card">
              <Inset clip="padding-box" side="top" pb="current">
                <Box position="relative" style={{ height: '200px', overflow: 'hidden' }}>
                  <Image
                    src="/phone.svg"
                    alt="Profile Center (Trust Center)"
                    fill
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/600x400/55EE83/ffffff?text=Trust+Center';
                    }}
                  />
                  <Box className="project-links" style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    display: 'flex',
                    gap: '8px',
                    zIndex: 10
                  }}>
                    <Link href="https://github.com/username/project2" target="_blank" style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(0,0,0,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      <GitHubLogoIcon width="16" height="16" />
                    </Link>
                    <Link href="https://project2-demo.com" target="_blank" style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(0,0,0,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      <ArrowRightIcon width="16" height="16" />
                    </Link>
                  </Box>
                </Box>
              </Inset>
              <Box p="4">
                <Heading size="4">Profile Center (Trust Center)</Heading>
                <Text as="p" color="gray" mt="2" size="2" style={{ minHeight: '60px' }}>
                  AI-powered security profiles with anonymous viewer tracking, Salesforce/Slack integration, and ChatGPT features.
                </Text>
                <Box className="tech-stack" mt="4">
                  <Text size="2" color="gray" mb="2">Technologies:</Text>
                  <Flex gap="2" wrap="wrap">
                    <Badge variant="soft" radius="full">
                      <Flex align="center" gap="1">
                        <Box className="tech-icon">🤖</Box>
                        <Text>OpenAI</Text>
                      </Flex>
                    </Badge>
                    <Badge variant="soft" radius="full">
                      <Flex align="center" gap="1">
                        <Box className="tech-icon">🍃</Box>
                        <Text>Spring Boot</Text>
                      </Flex>
                    </Badge>
                    <Badge variant="soft" radius="full">
                      <Flex align="center" gap="1">
                        <Box className="tech-icon">💬</Box>
                        <Text>Slack</Text>
                      </Flex>
                    </Badge>
                    <Badge variant="soft" radius="full">
                      <Flex align="center" gap="1">
                        <Box className="tech-icon">☁️</Box>
                        <Text>Salesforce</Text>
                      </Flex>
                    </Badge>
                  </Flex>
                </Box>
              </Box>            </Card>            {/* Project Card 3 */}
            <Card className="project-card">
              <Inset clip="padding-box" side="top" pb="current">
                <Box position="relative" style={{ height: '200px', overflow: 'hidden' }}>
                  <Image
                    src="/phone.svg"
                    alt="Agent Studio Platform"
                    fill
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/600x400/EE5583/ffffff?text=Agent+Studio';
                    }}
                  />
                  <Box className="project-links" style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    display: 'flex',
                    gap: '8px',
                    zIndex: 10
                  }}>
                    <Link href="https://github.com/username/project3" target="_blank" style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(0,0,0,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      <GitHubLogoIcon width="16" height="16" />
                    </Link>
                    <Link href="https://project3-demo.com" target="_blank" style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(0,0,0,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      <ArrowRightIcon width="16" height="16" />
                    </Link>
                  </Box>
                </Box>
              </Inset>
              <Box p="4">
                <Heading size="4">Agent Studio Platform</Heading>
                <Text as="p" color="gray" mt="2" size="2" style={{ minHeight: '60px' }}>
                  Multiple AI-driven agents including Dynamic Report Agent, Executive Summary Agent, and Analysis Agent.
                </Text>
                <Box className="tech-stack" mt="4">
                  <Text size="2" color="gray" mb="2">Technologies:</Text>
                  <Flex gap="2" wrap="wrap">
                    <Badge variant="soft" radius="full">
                      <Flex align="center" gap="1">
                        <Box className="tech-icon">🤖</Box>
                        <Text>AI/ML</Text>
                      </Flex>
                    </Badge>
                    <Badge variant="soft" radius="full">
                      <Flex align="center" gap="1">
                        <Box className="tech-icon">📊</Box>
                        <Text>Analytics</Text>
                      </Flex>
                    </Badge>
                    <Badge variant="soft" radius="full">
                      <Flex align="center" gap="1">
                        <Box className="tech-icon">🔄</Box>
                        <Text>Automation</Text>
                      </Flex>
                    </Badge>
                    <Badge variant="soft" radius="full">
                      <Flex align="center" gap="1">
                        <Box className="tech-icon">⚛️</Box>
                        <Text>React</Text>
                      </Flex>
                    </Badge>
                  </Flex>
                </Box>
              </Box>
            </Card>          </Grid>

          <Flex justify="center" mt="8">
            <Button size="4" variant="outline" asChild>
              <Link href="/projects" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0 24px',
                borderRadius: '40px',
                transition: 'all 0.3s ease'
              }}>
                View All Projects
                <ArrowRightIcon width="16" height="16" />
              </Link>
            </Button>
          </Flex>        </Container>
      </section>

      {/* Testimonials Section with Differentiated Background */}
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
              <Text as="p" color="gray" align="center" size="3" style={{ maxWidth: '700px' }}>
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
                      <Text size="2" color="gray">CTO, Tech Innovations</Text>
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
                      <Text size="2" color="gray">Product Manager, DataFlow Inc.</Text>
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

      {/* Contact Section */}
      <section id="contact-section">
        <Box py="9" id="contact">
          <Container size="3" className="container">
            <Card>
              <Flex direction="column" align="center" gap="4" p="6">
                <Heading size="6" align="center">Let{"'"}s Build Something Innovative</Heading>
                <Text align="center" color="gray">
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

      {/* Footer Section */}
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
                  <Text size="2" color="gray">Come say hello at our office HQ.</Text>
                  <Text size="3" mt="1">2076 DN Avenue Tallahassee, FL 32301</Text>
                </Flex>
              </Flex>
            </Grid>

            <Box mt="8" pt="8" style={{ borderTop: '1px solid var(--gray-5)' }}>
              {/* <Flex justify="between" align="center" wrap="wrap" gap="4">
              <Text size="2" color="gray">© {new Date().getFullYear()} Balaji Nagarajan. All rights reserved.</Text>
              <Flex gap="4">
                <Link href="/privacy">
                  <Text size="2" style={{ color: 'var(--gray-11)' }}>Privacy Policy</Text>
                </Link>
                <Link href="/terms">
                  <Text size="2" style={{ color: 'var(--gray-11)' }}>Terms of Use</Text>
                </Link>
              </Flex>
            </Flex> */}
            </Box>
          </Container>
        </Box>
      </footer>      <style dangerouslySetInnerHTML={{
        __html: `
        .say-hello-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        /* Skills section animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .skill-circle {
          transition: all 0.3s ease;
        }
        
        .skill-circle:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .award-card:hover Card {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        /* Testimonial section styles */
        .testimonials-section Card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .testimonials-section Card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .skill-circles {
            gap: 1rem;
          }
          
          .skill-circle {
            width: 110px !important;
            height: 110px !important;
          }
        }
        
        @media (max-width: 480px) {
          .skill-circle {
            width: 100px !important;
            height: 100px !important;
          }
        }
      `}} />
    </main>
  );
}

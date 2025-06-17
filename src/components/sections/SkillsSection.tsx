'use client';

import { Box, Container, Flex, Heading, Text, Grid, Card, Badge } from "@radix-ui/themes";

export default function SkillsSection() {
  return (
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
  );
}

import { Box, Container, Flex, Heading, Text, Grid } from "@radix-ui/themes";

export default function Home() {
  return (
    <Container size="2" px="4">
      <Grid columns="1" gap="3" width="100%">
        {/* Header Section */}
        <Box py="6">
          <Flex direction="column" gap="3">
            <Heading size="8" mb="2">Balaji</Heading>
            <Text size="3">Coming soon</Text>
          </Flex>
        </Box>

        {/* Side Panel */}
        <Box>
          <Grid columns="1" gap="5">
            <Box>
              <Heading size="3" mb="2">Rate at company</Heading>
              <Text size="2">Role description</Text>
            </Box>

            <Box>
              <Heading size="3" mb="2">Rate at fiction</Heading>
              <Text size="2">Role description</Text>
            </Box>

            <Box>
              <Heading size="3" mb="2">Rate at company</Heading>
              <Text size="2">Role description</Text>
            </Box>

            <Box>
              <Heading size="3" mb="2">Experience at</Heading>
              <Text size="2">Role description</Text>
            </Box>

            <Box>
              <Heading size="3" mb="2">Summary about me</Heading>
              <Text size="2">Brief description</Text>
            </Box>

            <Box>
              <Heading size="3" mb="2">Coming soon</Heading>
              <Text size="2">Additional information</Text>
            </Box>

            <Box>
              <Heading size="3" mb="2">Achievements</Heading>
              <Text size="2">Notable accomplishments</Text>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}

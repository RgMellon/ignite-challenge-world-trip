import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";

import { Info } from "../components/Info";

export default function Detail() {
  return (
    <Flex direction="column" h="100vh">
      <Box
        pos="relative"
        h="500px"
        bg="rgba(0,0,0,0.4)"
        _after={{
          content: '""',
          bgImage:
            "url(https://static.vecteezy.com/system/resources/thumbnails/001/614/843/original/london-eye-big-ben-thames-river-from-bridge-in-england-4k-free-video.jpg)",
          bgSize: "cover",
          pos: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: 0.6,
        }}
      >
        <Flex w="100%" h="500px" maxWidth={1160} mx="auto" align="flex-end">
          <Text
            mb="60px"
            fontSize={["2xl", "5xl"]}
            zIndex="banner"
            position="absolute"
          >
            Europa
          </Text>
        </Flex>
      </Box>

      <Flex w="100%" maxWidth={1160} mx="auto">
        <SimpleGrid
          flex="1"
          mt="80px"
          gap="4"
          minChildWidth="320px"
          align="flex-start"
        >
          <Box>
            <Text fontSize="lg" mb="4">
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </Box>

          <Info />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

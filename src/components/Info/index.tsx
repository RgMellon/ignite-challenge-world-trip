import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";

export function Info() {
  return (
    <Box>
      <SimpleGrid columns={[2, null, 3]} spacing="42px">
        <Box bg="tomato" height="99px">
          <Text> 50 </Text>
          <Text> Paises </Text>
        </Box>
        <Box bg="tomato" height="99px">
          {" "}
        </Box>
        <Box bg="tomato" height="99px">
          {" "}
        </Box>
      </SimpleGrid>
    </Box>
  );
}

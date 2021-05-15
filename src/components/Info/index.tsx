import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";

export function Info() {
  return (
    <Box>
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        <Box height="99px" justify="center" align="center">
          <Text color="yellow.500" fontSize="48px">
            50
          </Text>
          <Text fontSize="24px" fontWeight="bold">
            paises
          </Text>
        </Box>
        <Box height="99px" justify="center" align="center">
          <Text color="yellow.500" fontSize="48px">
            60
          </Text>

          <Text fontSize="24px" fontWeight="bold">
            línguas
          </Text>
        </Box>
        <Box height="99px" justify="center" align="center">
          <Text color="yellow.500" fontSize="48px">
            27
          </Text>

          <Text fontSize="24px" fontWeight="bold">
            cidade +100
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

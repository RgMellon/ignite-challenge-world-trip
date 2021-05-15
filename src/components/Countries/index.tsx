import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";

export function Countries() {
  return (
    <Flex>
      <SimpleGrid minChildWidth="120px" spacing="40px">
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </Flex>
  );
}

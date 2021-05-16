import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Categories } from "../components/Categories";
import { Separator } from "../components/Separator";
import { Carousel } from "../components/Carousel";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header/>

      <Box
        w="100%"
        h={["400px", "auto"]}
      >
        <Image
          boxSize="100%"
          src="banner.svg"
          alt="A Banner with a plain flying"
        />
      </Box>

      <Flex direction="column" w="100%" my="80px" maxWidth={1160} mx="auto">
        <Categories />

        <Separator />

        <Box align="center" mt="52px" fontSize="36px" fontWeight="500">
          <Text>Vamos nessa?</Text>
          <Text>Então escolha seu continente</Text>
        </Box>

        <Carousel />
        
      </Flex>
    </Flex>
  );
}

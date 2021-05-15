import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1160}
      h="100px"
      mx="auto"
      px="6"
      align="center"
      justify="center"
    >
      <Image 
        boxSize="150px" 
        src="logo.svg" 
        alt="world trip logotipo" 
      />
    </Flex>
  );
}

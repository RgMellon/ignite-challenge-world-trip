import { Flex, Image } from "@chakra-ui/react";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header/>

      <Image
        objectFit="cover"
        src="banner.svg"
        alt="A Banner with a plain flying"
      />
    </Flex>
  );
}

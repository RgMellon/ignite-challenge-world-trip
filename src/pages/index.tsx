import { Flex, Image } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Categories } from "../components/Categories";
import { Separator } from "../components/Separator";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header/>

      <Image
        objectFit="cover"
        src="banner.svg"
        alt="A Banner with a plain flying"
      />

      <Flex direction="column" w="100%" my="80px" maxWidth={1160} mx="auto">
        <Categories />

        <Separator />

      </Flex>
    </Flex>
  );
}

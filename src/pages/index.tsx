import { Flex } from "@chakra-ui/layout";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header/>
    </Flex>
  );
}

import { Box, Text, Image } from "@chakra-ui/react";

type ItemProps = {
  image: string;
  title: string;
};

export function Item({ title, image }: ItemProps) {
  return (
    <Box justify="center" align="center">
      <Image 
        w={["40px", "85px"]}
        h={["40px", "85px"]}
        src={image} 
        alt={title}
      />
      <Text 
        fontSize="lg" 
        mt="6"
      >
        {title}
      </Text>
    </Box>
  );
}

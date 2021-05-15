import { Box, Flex, Image, Text} from "@chakra-ui/react";

type CardProps = {
  image: string;
  city: string;
  country: string;
  flag: string;
}

export function Card({city, country, flag, image}: CardProps) {
  return (
    <Box 
      w="255px"
      h="279px"
      bg="gray.50"
      justify="center" 
      borderRadius="4px"
      border="1px"
      borderColor="yellow.500"
    >
      <Box 
        w="100%"
        h="173px" 
      >
        <Image
          objectFit="cover"
          src={image}
          alt={country}
          borderTopRadius="4px"
        />
      </Box>
      <Flex
        p="24px"
        align="center"
        justifyContent="space-between"
      >
        <Box>
          <Text
            fontSize="20px"
            fontWeight="600"
            mb="12px"
          >
            {city}
          </Text>

          <Text
            fontSize="16px"
            fontWeight="500"
            color="gray.500"
          >
            {country}
          </Text>
        </Box>
    
        <Box>
          <Image
            boxSize="30px"
            objectFit="cover"
            src={flag}
            alt={country}
          />
        </Box>
      </Flex>
    </Box>
  );
}
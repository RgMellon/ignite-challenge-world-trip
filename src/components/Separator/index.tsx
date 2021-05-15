import { Box } from "@chakra-ui/react";

export function Separator() {
  return(
    <Box 
      w="100%"
      mt="80px" 
      justify="center" 
      align="center"
    >
      <Box 
        w="90px" 
        borderBottom="2px" 
        bg="gray.600" 
      />
    </Box>
  );
}
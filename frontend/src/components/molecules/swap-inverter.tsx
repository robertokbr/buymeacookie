import { Box, Icon } from "@chakra-ui/react";
import { FiArrowDown } from "react-icons/fi";

export function SwapInverter() {
  return (
    <Box
      position="absolute"
      zIndex="10"
      bottom="0"
      mx="auto"
      right="0"
      my="auto"
      left="0"
      top="0"
      h="10"
      w="10"
    >
      <Box
        py="1"
        px="2"
        bg="gray.900"
        borderWidth="4px"
        borderRadius="2xl"
        borderColor="gray.800"
      >
        <Icon as={FiArrowDown} color="gray.50" mt="1" />
      </Box>
    </Box>
  );
}
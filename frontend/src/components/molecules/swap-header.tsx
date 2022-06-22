import { Flex, HStack, Icon, Text, Tooltip } from "@chakra-ui/react";
import { GiCookie } from 'react-icons/gi';  

type SwapHeaderProps = {
  data: {
    amount: string;
  }
};

export function SwapHeader({ data }: SwapHeaderProps) {
  return (
    <Flex align="center" justify="space-between" pt="1" px="4">
      <Text fontSize="2xl">Buy a cookie</Text>
      <Tooltip label="How many cookies you are buying with your contribution">
        <HStack spacing="2">
          <Text>{Math.floor(Number(data.amount) / 0.0005)}X</Text>
          <Icon as={GiCookie} color="gray.50" boxSize="26" />
        </HStack>
      </Tooltip>
    </Flex>
  );
}
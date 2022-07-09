import { Flex, HStack, Icon, Text, Tooltip } from "@chakra-ui/react";
import { GiCookie } from 'react-icons/gi';  
import { useTransaction } from "../../states/hooks/use-transaction";
import { etherToCookie } from "../../utils/ether-to-cookie";

type SwapHeaderProps = {
  data: {
    amount: string;
  }
};

export function SwapHeader({ data }: SwapHeaderProps) {
  const { ethPrice } = useTransaction();

  return (
    <Flex align="center" justify="space-between" pt="1" px="4">
      <Text fontSize="2xl">Buy a cookie</Text>
      <Tooltip label="How many cookies you are buying with your contribution">
        <HStack spacing="2">
          <Text>{etherToCookie(data.amount, ethPrice)}X</Text>
          <Icon as={GiCookie} color="gray.50" boxSize="26" />
        </HStack>
      </Tooltip>
    </Flex>
  );
}
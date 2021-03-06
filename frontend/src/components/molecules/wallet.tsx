import { Flex, FlexboxProps, Text } from "@chakra-ui/react";
import { useTransaction } from "../../states/hooks/use-transaction";

export function Wallet(props: FlexboxProps) {
  const { 
    currentAccount, 
    userBalance, 
    handleConnectWallet 
  } = useTransaction();

  return (
    <Flex
      p="0.5"
      bg="gray.800"
      borderRadius="3xl"
      align="center"
      justify="center"
      {...props}
    >
      <Text fontSize="xl" fontWeight="500" mx="2">
        {String(userBalance).padEnd(4, ".00")}
      </Text>
      <Flex
        as="button"
        justify="center"
        align="center"
        borderRadius="3xl"
        onClick={handleConnectWallet}
        px="2"
        py="2"
        bg="gray.900"
      >
        <Text fontSize="xl" fontWeight="500" mx="2">
          { currentAccount 
            ? currentAccount.slice(0, 10).concat("...") 
            : "Connect MetaMask"
          }
        </Text>
      </Flex>
    </Flex>
  );
}
import { Button, HStack } from "@chakra-ui/react";
import { useCallback } from "react";
import { useTransaction } from "../../states/hooks/use-transaction";

type SwapButtonsProps = {
  data: {
    amountInput: string,
    message: string,
    github?: string
  }
}

export function SwapButtons({
  data: {
    amountInput,
    message,
    github
  },
}: SwapButtonsProps) {
  const { 
    sendTransaction, 
    currentAccount, 
    contractOwner, 
    handleWithdraw 
  } = useTransaction();

  const handleSendTransaction = useCallback(async () => {
    sendTransaction({ value: amountInput, message, github });
  }, [sendTransaction, amountInput, message, github]);

  return (
    <HStack>
      <Button
        fontSize="2xl"
        bg="gray.600"
        p="8"
        w="100%"
        borderRadius="3xl"
        _hover={{ background: "gray.700" }}
        onClick={handleSendTransaction}
      >
        {currentAccount ? "Confirm" : "Connect wallet"}
      </Button>
      {currentAccount && currentAccount === contractOwner && (
        <Button
          fontSize="2xl"
          bg="gray.600"
          p="8"
          w="100%"
          borderRadius="3xl"
          _hover={{ background: "gray.700" }}
          onClick={handleWithdraw}
        >
          Withdraw
        </Button>
      )}
    </HStack>
  );
}
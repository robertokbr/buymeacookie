import { Box, Button, Flex, HStack, Icon, Stack, Text, Tooltip } from "@chakra-ui/react";
import { ChangeEvent, useCallback, useState } from "react";
import { FiArrowDown } from 'react-icons/fi';
import { GiCookie } from 'react-icons/gi';  
import { useTransaction } from "../states/hooks/use-transaction";
import Input from "./atoms/input";

export function Main() {
  const [amountInput, setAmountInput] = useState<number>(0);
  const [message, setMessage] = useState("");
  const { sendTransaction } = useTransaction();

  const handleAmountInputChange = useCallback((
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setAmountInput(Number(event.target.value));
  }, []);

  const handleMessageInputChange = useCallback((
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setMessage(event.target.value);
  }, []);

  const handleSendTransaction = useCallback(async () => {
    sendTransaction(amountInput, message);
  }, [sendTransaction, amountInput, message]);

  return (
    <Flex
      borderRadius="3xl"
      bg="gray.800"
      align="center"
      justify="center"
      w="34%"
      p="2"
      my="auto"
    >
      <Stack spacing="3" w="100%">
        <Flex align="center" justify="space-between" pt="1" px="4">
          <Text fontSize="2xl">Swap</Text>
          <Tooltip label="How many cookies you are buying with your contribution">
            <HStack spacing="2">
              <Text>{Math.floor(amountInput / 0.0005)}X</Text>
              <Icon as={GiCookie} color="gray.50" boxSize="26" />
            </HStack>
          </Tooltip>
        </Flex>
        <Stack spacing="1" position="relative">
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
          <Input
            onChange={handleAmountInputChange}
            placeholder="0.0"
            pattern='^[0-9]*[.,]?[0-9]*$'
            type="number" 
          />
          <Input
            placeholder="Some message..."
            type="text"
            onChange={handleMessageInputChange} 
          />
        </Stack>
        <Button
          fontSize="2xl"
          bg="gray.600"
          p="8"
          borderRadius="3xl"
          _hover={{ background: "gray.700" }}
          onClick={handleSendTransaction}
        >
          Confirm Transaction
        </Button>
      </Stack>
    </Flex>
  );
}
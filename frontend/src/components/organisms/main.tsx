import { Flex, Stack } from "@chakra-ui/react";
import { ChangeEvent, useCallback, useState } from "react";
import Input from "../atoms/input";
import { SwapButtons } from "../molecules/swap-buttons";
import { SwapHeader } from "../molecules/swap-header";
import { SwapInverter } from "../molecules/swap-inverter";

type MainProps = {
  data: {
    github?: string;
  }
}

export function Main({ data }: MainProps) {
  const [amountInput, setAmountInput] = useState("0");
  const [message, setMessage] = useState("");

  const handleAmountInputChange = useCallback((
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setAmountInput(event.target.value);
  }, []);

  const handleMessageInputChange = useCallback((
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setMessage(event.target.value);
  }, []);

  return (
    <Flex w="100vw" h="100vh">
      <Flex
        borderRadius="3xl"
        bg="gray.800"
        align="center"
        justify="center"
        w="27rem"
        p="2"
        m="auto"
      >
        <Stack spacing="3" w="100%">
          <SwapHeader data={{ amount: amountInput }} />
          <Stack spacing="1" position="relative">
            <SwapInverter />
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
          <SwapButtons data={{amountInput, github: data.github, message}}/>
        </Stack>
      </Flex>
    </Flex>
  );
}
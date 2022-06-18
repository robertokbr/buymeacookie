import { Flex } from "@chakra-ui/react";
import { CircularContainer } from "./molecules/circular-container";

export function Header() {
  return (
    <Flex my="4" ml="auto" mr="4">
      <CircularContainer />
    </Flex>
  );
}
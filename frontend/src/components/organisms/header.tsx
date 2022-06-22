import { Flex } from "@chakra-ui/react";
import { Wallet } from "../molecules/wallet";

export function Header(props) {
  return (
    <Flex position="absolute" w="100%" justify="flex-end" p="4" {...props}>
      <Wallet />
    </Flex>
  );
}
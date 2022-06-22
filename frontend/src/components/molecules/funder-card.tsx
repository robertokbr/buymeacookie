import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { Transactions } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import { GiCookie } from "react-icons/gi";
import { MessageaModal } from "./message-modal";

type FunderCardProps = {
  data: Transactions;
};

export function FunderCard({ data }: FunderCardProps) {
  const [userAvatar, setUserAvatar] = useState<string | undefined>();

  useEffect(() => {
    if (!data.github) return;
    axios.get("https://api.github.com/users/" + data.github).then(({ data }) => {
    console.log(data.avatar_url)  
    setUserAvatar(data.avatar_url);
    });
  }, [data?.github]);

  return (
    <MessageaModal cookies={data.amount} message={data.message || "Thank you!"}>
      <Flex
        mr="13"
        mb="3"
        transition="0.2s"
        cursor="pointer"
        _hover={{ transform: "scale(1.04)" }}
        boxShadow="0px 5px 29px 3px rgba(0,0,0,0.4)"
        flexDir="column"
        align="center"
        justify="space-between"
        borderRadius="3xl"
        bg="gray.800"
        w="40"
        h="60"
        p="4"
      >
        <Flex h="36" w="100%" bg="gray.700" overflow="hidden" borderRadius="3xl">
          <Image objectFit='cover' src={userAvatar || "/profile.png"} alt="crypto-punk-nft"/>
        </Flex>
        <Text fontWeight="bold" fontSize="xl">
          {data.address.slice(0, 5)}...
        </Text>
        <Flex alignItems="center">
          <Text mr="2" opacity="0.5">
            {data.amount}X
          </Text>
          <Icon as={GiCookie} color="gray.50" boxSize="4" opacity="0.5"/>
          </Flex>
      </Flex>
    </MessageaModal>
  );
}
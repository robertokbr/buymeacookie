import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/header";
import { Main } from "../components/main";

export default function Home() {
  return (
    <>
      <Head>
        <title>🍪 buymeacookie</title>
        <meta name="description" content="A crowd funding application to help content creators" />
      </Head>
      <Flex
        flexDirection="column"
        w="100vw"
        h="100vh"
        align="center"
        justify="space-between"
      >
        <Header />
        <Main />
      </Flex>
    </>
  );
}
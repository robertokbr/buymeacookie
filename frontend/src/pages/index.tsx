import { Box } from "@chakra-ui/react";
import { PrismaClient } from "@prisma/client";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { PageDownButton } from "../components/atoms/page-down-button";
import { Funders } from "../components/organisms/funders";
import { Header } from "../components/organisms/header";
import { Main } from "../components/organisms/main";

export default function Home({ github, transactions }) {
  return (
    <Box 
      position="relative"
      overflowX="hidden"  
      overflowY="auto"
      w="100vw"
    >
      <Head>
        <title>buymeacookie</title>
        <meta name="description" content="A crowd funding application to help content creators" />
      </Head>
      <Header />
      <Main data={{ github }}/>
      <Funders data={transactions} />
      <PageDownButton direction="down" />
      <PageDownButton direction="up" />
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const github = query?.github || "";
  
  const transactions = await new PrismaClient().transactions.findMany({
    select: {
      address: true, 
      amount: true, 
      github: true, 
      message: true, 
      txHash: true
    }
  });

  return {
    props: {
      github,
      transactions,
    }
  }
};
import { Transactions } from "@prisma/client";
import { FunderContainer } from "../atoms/funder-container";
import { FunderCard } from "../molecules/funder-card";

type FundersProps = {
  data: Transactions[];
};

export function Funders({ data }: FundersProps) {
  return (
    <FunderContainer minH="100vh" w="100vw">
      {data.map(tx => (
        <FunderCard
          key={tx.txHash}
          data={tx}
        />
      ))}
    </FunderContainer>
  );
}
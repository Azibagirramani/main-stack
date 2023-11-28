"use client";
import { Box, HStack, VStack, Spinner } from "@chakra-ui/react";

import OverView from "./_overview";
import Ledger_History from "./_ledger_history";
import type { FinancialData, Payment } from "src/types";

interface Props {
  financial_Data: FinancialData;
  payment: Array<Payment>;
}
const _Statistics = ({ payment, financial_Data }: Props) => {
  const { balance, ...rest } = financial_Data;
  return (
    <HStack
      mb={"20"}
      justifyContent={"space-between"}
      alignItems={"start"}
      gap={"30"}
    >
      <Box flex={1}>
        <OverView data={payment} balance={financial_Data.balance} />
      </Box>
      <VStack gap={"8"} alignItems={"start"}>
        {Object.entries(rest)
          .map(([label, value]) => ({
            label: label
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" "),
            value,
          }))
          .map((h, k) => (
            <Ledger_History key={k} {...h} />
          ))}
      </VStack>
    </HStack>
  );
};

export default _Statistics;

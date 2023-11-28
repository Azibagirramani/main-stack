"use client";
import { HStack, VStack } from "@chakra-ui/react";

import LineChart from "./_line_chart";
import Ledger_History from "./_ledger_history";
import Button from "src/components/forms/_button";
import type { Payment } from "src/types";

const _OverView = ({
  balance,
  data,
}: {
  balance: number;
  data: Array<Payment>;
}) => (
  <VStack justifyContent={"space-between"} alignItems={"start"}>
    <HStack alignItems={"center"} justifyContent={"start"} gap={"16"} mb={"5"}>
      <Ledger_History
        label={"Available Balance"}
        value={balance}
        valueStyle={{ fontSize: "34px" }}
        showInfoIcon={false}
      />
      <Button
        bgColor={"black"}
        size={"xl"}
        px={"10"}
        py={"3"}
        color={"white"}
        _hover={{ color: "white", bgColor: "black" }}
      >
        Withdraw
      </Button>
    </HStack>
    <LineChart data={data} />
  </VStack>
);

export default _OverView;

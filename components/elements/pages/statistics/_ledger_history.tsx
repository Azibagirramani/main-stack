/* eslint-disable react/no-children-prop */
"use client";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  HStack,
  VStack,
  Text,
  Heading,
  Icon,
  TextProps,
} from "@chakra-ui/react";

export interface Props {
  label: string;
  value: string | number;
  labelStyle: TextProps;
  valueStyle: TextProps;
  showInfoIcon: boolean;
}

const _Ledger_History = ({
  label = "Total Payout",
  value = "USD 55,080.00",
  labelStyle,
  valueStyle,
  showInfoIcon = true,
}: Partial<Props>) => {
  return (
    <HStack
      alignItems={"initial"}
      gap={"20"}
      color={"black"}
      width={"full"}
      justifyContent={"space-between"}
    >
      <VStack alignItems={"initial"} gap={"2"}>
        <Text fontSize={"12"} color={"gray.400"} {...labelStyle}>
          {label}
        </Text>
        <Heading as={"h1"} fontSize={"26px"} fontWeight={"700"} {...valueStyle}>
          USD {value}
        </Heading>
      </VStack>
      {showInfoIcon && (
        <Icon children={<InfoOutlineIcon color={"gray.400"} />} />
      )}
    </HStack>
  );
};

export default _Ledger_History;

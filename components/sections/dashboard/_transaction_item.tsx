"use client";
import { HStack, VStack, Heading, Box, Image, Text } from "@chakra-ui/react";
import formatDate from "src/util/formatDateTime";
import type { Payment } from "src/types";

const type_icon_map = new Map<string, string>([
  ["deposit", "/send-cash.svg"],
  ["withdrawal", "/recieve-cash.svg"],
]);
const st_color_map = new Map<string, string>([
  ["successful", "#0EA163"],
  ["pending", "#A77A07"],
]);

const Transaction_Item = ({
  amount,
  metadata,
  date,
  status,
  type,
}: Payment) => {
  const { name, product_name } = metadata || {};
  return (
    <HStack
      justifyContent={"space-between"}
      color={"black"}
      alignItems={"center"}
      w={"full"}
    >
      <HStack alignItems={"center"}>
        <Box>
          <Image
            src={`/icons/transaction${type_icon_map.get(
              type ?? "/recieve-cash.svg"
            )}`}
            alt={""}
            w={"full"}
            maxW={"48px"}
            maxH={"48px"}
          />
        </Box>
        <VStack alignItems={"start"} gap={"1"}>
          <Heading as={"h5"} fontSize={"14"} fontWeight={"500"}>
            {product_name ||
              name ||
              (type === "withdrawal" ? "Cash Withdrawal" : "")}
          </Heading>
          <Text
            fontSize={"12"}
            color={!name ? st_color_map.get(status) : "gray"}
            fontWeight={"500"}
          >
            {name || status}
          </Text>
        </VStack>
      </HStack>

      <VStack alignItems={"end"} gap={0}>
        <Text fontSize={"14"} color={"black"} fontWeight={"700"}>
          USD {amount}
        </Text>
        <Text fontSize={"12"} color={"gray.400"} fontWeight={"500"}>
          {formatDate(date)}
        </Text>
      </VStack>
    </HStack>
  );
};

export default Transaction_Item;

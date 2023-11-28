import {
  HStack,
  Heading,
  Text,
  ButtonGroup,
  VStack,
  Divider,
  ButtonProps,
  Box,
  Badge,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon, DownloadIcon } from "@chakra-ui/icons";

import Transaction_Item from "./_transaction_item";
import Button from "src/components/forms/_button";
import formatDate from "src/util/formatDateTime";

import type { Payment, IFilters } from "src/types";

interface Props extends ButtonProps {
  filters: IFilters;
  transactions: Array<Payment>;
  clear: () => void;
}

const _Empty_State = ({ clear }: { clear: () => void }) => (
  <Box margin={"auto"} width={"full"} maxWidth={"sm"} color={"black"}>
    <Box>
      <Image
        src={"/icons/transaction/empty-state.svg"}
        alt={"no record found"}
        maxWidth={"md"}
      />
    </Box>
    <Heading as={"h1"} fontSize={"2xl"}>
      No matching transaction found for the selected filter
    </Heading>
    <Text>Change your filters to see more results, or add a new product.</Text>
    <Button
      width={"fit-content"}
      bgColor={"white"}
      border={"1px solid rgba(239, 241, 246, 1)"}
      onClick={clear}
    >
      Clear
    </Button>
  </Box>
);

const _Transactions = ({ clear, filters, transactions, ...props }: Props) => {
  return (
    <>
      <HStack justifyContent={"space-between"}>
        <VStack gap={0} alignItems={"start"}>
          <Heading as={"h2"} fontSize={"22"} color={"black"}>
            {transactions.length} Transactions
          </Heading>
          <Text color={"black"} fontSize={"12px"} fontWeight={"400"}>
            Your transactions between{" "}
            {formatDate(filters.date_range.from.toString())} -
            {formatDate(filters.date_range.to.toString())}
          </Text>
        </VStack>
        <ButtonGroup gap={"3"}>
          <Button
            colorScheme="teal"
            rightIcon={<ChevronDownIcon />}
            _hover={{ color: "white", bgColor: "black" }}
            {...props}
          >
            Filter
            <Badge
              ml={"3"}
              borderRadius={"100px"}
              bg={"black"}
              color={"white"}
            ></Badge>
          </Button>
          <Button rightIcon={<DownloadIcon />}>Export list</Button>
        </ButtonGroup>
      </HStack>
      <Divider borderColor={"gray.400"} mt={"5"} />

      <VStack alignItems={"start"} mt={"10"} gap={"5"}>
        {transactions.length <= 0 && <_Empty_State clear={clear} />}
        {transactions.map((i, k) => (
          <Transaction_Item {...i} key={k} />
        ))}
      </VStack>
    </>
  );
};

export default _Transactions;

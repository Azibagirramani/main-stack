/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Heading, Spinner, VStack, useDisclosure } from "@chakra-ui/react";

import Drawer from "src/components/_drawer";
import FilterContainer from "src/components/elements/filter";

// page level component
import Transactions from "src/components/sections/dashboard/transactions";
import Statistics from "src/components/elements/pages/statistics";

import useApiHook from "src/hooks/_api-hook";
import Search from "src/util/search";
import type { Payment, IFilters } from "src/types";

const initialFilterState = {
  day: "",
  date_range: {
    from: new Date(new Date().setFullYear(new Date().getFullYear() - 2)),
    to: new Date(),
  },
  status: [],
  type: [],
} as IFilters;

export default function Home() {
  const { financialData, loading, payments } = useApiHook();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filter, setFilter] = useState<IFilters>(initialFilterState);

  const [filteredTransactions, setFilteredTransactions] = useState<Payment[]>(
    []
  );

  const applyFilter = useCallback(() => {
    if (!payments) return;
    setFilteredTransactions(Search(payments, filter));
    onClose();
  }, [filter, payments, onClose]);

  const handleFilterClear = () => {
    setFilter(initialFilterState);
  };

  useEffect(() => {
    if (!payments) return;
    applyFilter();
  }, [payments]);

  if (loading || !financialData || !payments)
    return (
      <VStack justifyContent={"center"}>
        <Spinner size={"xl"} />
        <Heading as={"h1"} size={"small"}>
          Preparing dashboard
        </Heading>
      </VStack>
    );

  return (
    <>
      <Statistics
        payment={filteredTransactions}
        financial_Data={financialData}
      />
      <Transactions
        clear={() => {
          setFilter(initialFilterState);
          applyFilter();
        }}
        onClick={onOpen}
        filters={filter}
        transactions={filteredTransactions}
      />
      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        clear={() => handleFilterClear()}
        apply={() => applyFilter()}
      >
        <FilterContainer selectValues={filter} select={setFilter} />
      </Drawer>
    </>
  );
}

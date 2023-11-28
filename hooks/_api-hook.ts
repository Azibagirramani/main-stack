import { useState, useEffect } from "react";
import { WALLET_ENDPOINT, TRANSACTIONS_ENDPOINT, BASE_URL } from "./config";
import type { Payment, FinancialData } from "src/types";

const useFetchPayments = () => {
  const [payments, setPayments] = useState<Array<Payment>>();
  const [financialData, setFinancialData] = useState<FinancialData>();
  const [loading, setLoading] = useState(true);

  const fetchFinancialData = async () => {
    try {
      const response = await fetch(BASE_URL.concat(WALLET_ENDPOINT));
      const data = await response.json();
      setFinancialData(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const fetchPayments = async () => {
    try {
      const response = await fetch(BASE_URL.concat(TRANSACTIONS_ENDPOINT));
      const data = await response.json();
      setPayments(data);
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFinancialData();
    fetchPayments();
  }, []);

  return { financialData, payments, loading };
};

export default useFetchPayments;

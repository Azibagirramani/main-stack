export type status = "successful" | "pending" | "failed";
export interface User {
  first_name: string;
  last_name: string;
  email: string;
}

export interface FinancialData {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}

export interface Payment {
  amount: number;
  metadata?: {
    name?: string;
    type?: string;
    email?: string;
    quantity?: number;
    country?: string;
    product_name?: string;
  };
  payment_reference: string;
  status: string;
  type: string;
  date: string;
}

export interface Filter {
  select: any;
  selectValues: any;
}

export interface IFilters {
  day: string;
  date_range: {
    from: Date | string;
    to: Date | string;
  };
  status: Array<string>;
  type: Array<string>;
}

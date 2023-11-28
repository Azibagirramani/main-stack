import type { Payment, IFilters } from "src/types";

const search = (payments: Payment[], filter: IFilters) => {
  return payments.filter((payment: Payment) => {
    const paymentDate = new Date(payment.date);

    return !(
      (filter.date_range.from &&
        paymentDate < new Date(filter.date_range.from)) ||
      (filter.date_range.to && paymentDate > new Date(filter.date_range.to)) ||
      (filter.status.length > 0 && !filter.status.includes(payment.status)) ||
      (filter.type.length > 0 && !filter.type.includes(payment.type))
    );
  });
};

export default search;

import { Button, ButtonGroup } from "@chakra-ui/react";
import type { Filter, IFilters } from "src/types";

const _Days = ({ select, selectValues }: Filter) => {
  const getDateRange = (value: string) => {
    const currentDate = new Date();
    let from, to;

    switch (value) {
      case "Today":
        from = currentDate;
        to = currentDate;
        break;
      case "Last 7 days":
        const last7DaysDate = new Date(currentDate);
        last7DaysDate.setDate(currentDate.getDate() - 6);
        from = last7DaysDate;
        to = currentDate;
        break;
      case "This month":
        const firstDayOfMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          1
        );
        from = firstDayOfMonth;
        to = currentDate;
        break;
      case "Last 3 months":
        const last3MonthsDate = new Date(currentDate);
        last3MonthsDate.setMonth(currentDate.getMonth() - 2);
        from = last3MonthsDate;
        to = currentDate;
        break;
      default:
        break;
    }

    return { from, to };
  };

  const handleButtonClick = (value: string) => {
    const dateRange = getDateRange(value);
    select((prev: IFilters) => ({
      ...prev,
      day: value,
      date_range: {
        ...prev.date_range,
        ...dateRange,
      },
    }));
  };
  return (
    <ButtonGroup>
      {["Today", "Last 7 days", "This month", "Last 3 months"].map((l, k) => (
        <Button
          onClick={() => handleButtonClick(l)}
          key={k}
          size={"sm"}
          bgColor={selectValues.day.match(l) ? "black" : "white"}
          color={selectValues.day.match(l) ? "white" : "black"}
          border={"1px solid rgba(239, 241, 246, 1)"}
        >
          {l}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default _Days;

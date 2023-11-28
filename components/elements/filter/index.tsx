import { Box } from "@chakra-ui/react";

import Days from "./_days";
import Transaction_Status from "./_transaction_status";
import Transaction_Type from "./_transaction_type";
import Date_Range from "./_date_range";

import type { Filter } from "src/types";

const _FilterContainer = (props: Filter) => {
  return (
    <Box>
      <Days {...props} />
      <Date_Range {...props} />
      <Transaction_Status {...props} />
      <Transaction_Type {...props} />
    </Box>
  );
};

export default _FilterContainer;

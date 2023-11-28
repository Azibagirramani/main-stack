/* eslint-disable react/no-children-prop */
import {
  Text,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  HStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import DatePicker from "sassy-datepicker";
import Button from "src/components/forms/_button";
import formatDate from "src/util/formatDateTime";

import type { Filter, IFilters } from "src/types";

const _Date_Range = ({ select, selectValues }: Filter) => {
  return (
    <>
      <Box color={"black"} mt={"7"}>
        <Text fontWeight={"700"} fontSize={"small"}>
          Date Range
        </Text>
        <HStack>
          <Popover placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                width={"full"}
                tabIndex={0}
                role="button"
                children={
                  <Button
                    width={"full"}
                    justifyContent={"space-between"}
                    rightIcon={<ChevronDownIcon />}
                  >
                    {formatDate(selectValues.date_range.from.toISOString()) ??
                      "Select"}
                  </Button>
                }
              />
            </PopoverTrigger>
            <PopoverContent
              bg="white"
              borderRadius={"12px"}
              boxShadow={
                "0px 6px 12px 0px rgba(92, 115, 131, 0.08), 0px 4px 8px 0px rgba(92, 115, 131, 0.08)"
              }
              width={"100%"}
            >
              <PopoverBody width={"100%"} p={"5"}>
                <DatePicker
                  onChange={(val) =>
                    select((prev: IFilters) => ({
                      ...prev,
                      date_range: {
                        ...prev.date_range,
                        from: val,
                      },
                    }))
                  }
                  value={selectValues.date_range.from}
                />
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Popover placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                width={"full"}
                tabIndex={0}
                role="button"
                children={
                  <Button
                    width={"full"}
                    justifyContent={"space-between"}
                    rightIcon={<ChevronDownIcon />}
                  >
                    {formatDate(selectValues.date_range.to.toISOString()) ??
                      "Select"}
                  </Button>
                }
              />
            </PopoverTrigger>
            <PopoverContent
              bg="white"
              borderRadius={"12px"}
              boxShadow={
                "0px 6px 12px 0px rgba(92, 115, 131, 0.08), 0px 4px 8px 0px rgba(92, 115, 131, 0.08)"
              }
            >
              <PopoverBody width={"full"} p={"5"}>
                <DatePicker
                  onChange={(val) =>
                    select((prev: IFilters) => ({
                      ...prev,
                      date_range: {
                        ...prev.date_range,
                        to: val,
                      },
                    }))
                  }
                  value={selectValues.date_range.to}
                  style={{ width: "100%" }}
                />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>
      </Box>
    </>
  );
};

export default _Date_Range;

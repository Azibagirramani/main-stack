/* eslint-disable react/no-children-prop */
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  VStack,
  Text,
  Box,
  Popover,
  PopoverTrigger,
  PopoverBody,
  PopoverContent,
} from "@chakra-ui/react";
import CheckBox from "src/components/forms/_checkbox";
import Button from "src/components/forms/_button";
import type { Filter } from "src/types";

const _Transaction_Type = ({ select, selectValues }: Filter) => {
  const handleCheckboxChange = (value: string) => {
    const position = selectValues.type.indexOf(value);

    if (position > -1) {
      select((prev: any) => {
        const newTypes = [...prev.type];
        newTypes.splice(position, 1);
        return { ...prev, type: newTypes };
      });
    } else {
      select((prev: any) => ({
        ...prev,
        type: [...prev.type, value],
      }));
    }
  };
  return (
    <Box color={"black"} mt={"7"}>
      <Text fontWeight={"700"} fontSize={"small"}>
        Transaction Type
      </Text>
      <Popover placement={"bottom-start"}>
        <PopoverTrigger>
          <Box
            tabIndex={0}
            role="button"
            children={
              <Button
                width={"full"}
                justifyContent={"space-between"}
                rightIcon={<ChevronDownIcon />}
                overflowX={"scroll"}
                zIndex={1}
                sx={{
                  scrollbarWidth: "none",
                }}
              >
                {selectValues.type.length > 0
                  ? selectValues.type.join(", ")
                  : "Select"}
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
            <VStack alignItems={"start"} gap={"5"}>
              {[
                "Store Transactions",
                "Get Tipped ",
                "Withdrawal",
                "Chargebacks",
                "Cashbacks",
                "Deposit",
                "Refer & Earn",
              ].map((i, k) => (
                <CheckBox
                  key={k}
                  onChange={() => handleCheckboxChange(i.toLowerCase())}
                  isChecked={selectValues.type.includes(i.toLowerCase())}
                >
                  <Text fontSize={"12"}>{i}</Text>
                </CheckBox>
              ))}
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
export default _Transaction_Type;

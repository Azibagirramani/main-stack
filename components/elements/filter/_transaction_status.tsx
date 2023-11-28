/* eslint-disable react/no-children-prop */
import {
  VStack,
  Text,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import CheckBox from "src/components/forms/_checkbox";
import Button from "src/components/forms/_button";
import { ChevronDownIcon } from "@chakra-ui/icons";
import type { Filter } from "src/types";

const _Transaction_Status = ({ select, selectValues }: Filter) => {
  const handleCheckboxChange = (value: string) => {
    const position = selectValues.status.indexOf(value);

    if (position > -1) {
      select((prev: any) => {
        const newStatus = [...prev.status];
        newStatus.splice(position, 1);
        return { ...prev, status: newStatus };
      });
    } else {
      select((prev: any) => ({
        ...prev,
        status: [...prev.status, value],
      }));
    }
  };
  return (
    <Box color={"black"} mt={"7"}>
      <Text fontWeight={"700"} fontSize={"small"}>
        Transaction Status
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
              >
                {selectValues.status.length > 0
                  ? selectValues.status.join(", ")
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
              {["Successful", "Pending", "Failed"].map((i, k) => (
                <Box key={k} width={"fit-content"}>
                  <CheckBox
                    onChange={() => handleCheckboxChange(i.toLowerCase())}
                    isChecked={selectValues.status.includes(i.toLowerCase())}
                  >
                    <Text fontSize={"12"}>{i}</Text>
                  </CheckBox>
                </Box>
              ))}
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default _Transaction_Status;

/* eslint-disable react/no-children-prop */
import { useState } from "react";
import {
  HStack,
  Text,
  Image,
  Box,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  VStack,
  Button,
} from "@chakra-ui/react";

import _NavLinks_Item from "./_nav_link_item";
import { ChevronDownIcon } from "@chakra-ui/icons";

const _ASIDE_SVG = [
  {
    tip: "Link to bio",
    svg: "icons/aside/p-icon-4.svg",
    description: "Manage your Link in Bio",
  },
  {
    tip: "Store",
    svg: "icons/aside/p-icon-1.svg",
    description: "Manage your Store activities",
  },
  {
    tip: "Media kit",
    svg: "icons/aside/p-icon-2.svg",
    description: "Manage your Medit kit",
  },
  {
    tip: "Invoicing",
    svg: "icons/aside/p-icon-3.svg",
    description: "Manage your invoice",
  },
];

const _APPS = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover placement={"bottom-start"} isOpen={isOpen}>
      <PopoverTrigger>
        <Box
          tabIndex={0}
          role="button"
          onClick={() => setIsOpen((prev) => !prev)}
          children={
            <HStack>
              <_NavLinks_Item
                link={{ icon: "icons/links/widgets.svg", label: "Apps" }}
                backgroundColor={isOpen ? "black" : "inherit"}
                textColor={isOpen ? "white" : undefined}
                _hover={{ backgroundColor: isOpen ? "parent" : "" }}
                children={
                  isOpen ? (
                    <Button
                      textColor={isOpen ? "white" : undefined}
                      size={"xs"}
                      bgColor={"inherit"}
                      _hover={{ bgColor: "parent" }}
                      rightIcon={<ChevronDownIcon fontSize={10} />}
                    >
                      Link in Bio
                    </Button>
                  ) : undefined
                }
              />
            </HStack>
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
        <PopoverBody width={"full"} p={"3"} color={"black"}>
          <VStack alignItems={"start"} gap={"2"}>
            {_ASIDE_SVG.map((l, k) => (
              <HStack
                key={k}
                transition={"0.4s ease all"}
                cursor={"pointer"}
                width={"full"}
                _hover={{
                  borderRadius: "10",
                  boxShadow: "0px 3px 8px 0px rgba(92, 115, 131, 0.08)",
                }}
                p={"3"}
              >
                <Box
                  border={"1px solid rgb(242,243,247)"}
                  p={2}
                  borderRadius={"10"}
                >
                  <Image src={l.svg} alt={l.tip} />
                </Box>
                <VStack alignItems={"start"} gap={0}>
                  <Text fontSize={"11"} fontWeight={"700"}>
                    {l.tip}
                  </Text>
                  <Text fontSize={"10"}>{l.description}</Text>
                </VStack>
              </HStack>
            ))}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default _APPS;

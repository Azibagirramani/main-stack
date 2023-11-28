"use client";
import { HStack, Text, Image, Box, StackProps } from "@chakra-ui/react";

import type { LinkAttributes } from "./_nav_link";
import type { ReactNode } from "react";

const _NavLinks_Item = ({
  children,
  link,
  textColor,
  ...props
}: {
  link: LinkAttributes;
  children?: ReactNode;
  textColor?: string;
} & StackProps) => (
  <HStack
    gap={"2"}
    px={"4"}
    py={"2"}
    borderRadius={"100px"}
    alignItems={"center"}
    transition={"0.4s ease-in all"}
    backgroundColor={link.label === "Revenue" ? "black" : ""}
    _hover={{ cursor: "pointer", bgColor: "gray.50" }}
    {...props}
  >
    <Box>
      {typeof link.icon !== "string" ? (
        link.icon
      ) : (
        <Image
          src={link.icon}
          alt={`${link.label}-icon`}
          maxHeight={"20px"}
          maxWidth={"20px"}
          width={"full"}
        />
      )}
    </Box>
    <Text
      color={"gray.400"}
      fontWeight={"600"}
      fontSize={"14"}
      textColor={textColor ?? link.label === "Revenue" ? "white" : "black"}
    >
      {link.label}
    </Text>
    {children}
  </HStack>
);

export default _NavLinks_Item;

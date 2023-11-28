"use client";
import type { ReactNode } from "react";
import { Button, type ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {
  children: ReactNode;
}

const _Button = ({ children, ...props }: Props) => {
  return (
    <Button
      borderRadius={"100px"}
      bgColor={"gray.50"}
      h={"fit-content"}
      p={"3"}
      fontSize={"14px"}
      color={"black"}
      fontWeight={"600"}
      mt={"2"}
      _focus={{ outline: "2px solid black" }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default _Button;

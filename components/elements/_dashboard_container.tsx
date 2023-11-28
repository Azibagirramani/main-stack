"use client";
import { Box } from "@chakra-ui/react";
import Header from "src/components/elements/header";
import Aside from "./_aside";
import type { ReactNode } from "react";

export default function _DashBoardContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Box margin={"auto"} width={"full"} maxWidth={"7xl"} position={"relative"}>
      <Box zIndex={1} maxWidth={"inherit"} position={"fixed"} width={"inherit"}>
        <Header />
      </Box>
      <Box position={"fixed"} zIndex={1} mt={"35vh"} bg={"white"}>
        <Aside />
      </Box>

      <Box flex={1} mt={"30"} ml={"32"} pt={"120px"} pb={"10"}>
        {children}
      </Box>
    </Box>
  );
}

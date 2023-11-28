"use client";
import { ChakraProvider } from "@chakra-ui/react";
import type { ReactNode } from "react";

function Chakra({ children }: { children: ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}

export default Chakra;

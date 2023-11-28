import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerFooter,
  DrawerProps,
} from "@chakra-ui/react";
import Button from "src/components/forms/_button";

import { type ReactNode } from "react";

interface Props extends DrawerProps {
  children: ReactNode;
  clear: () => void;
  apply: () => void;
}
const _Drawer = ({ apply, clear, children, ...rest }: Props) => {
  return (
    <Drawer placement="right" {...rest}>
      <DrawerOverlay />
      <DrawerContent
        m={10}
        borderRadius={"20px"}
        bgColor={"white"}
        boxShadow={
          "0px 8px 16px 4px rgba(188, 196, 204, 0.10), 0px 12px 24px 0px rgba(219, 222, 229, 0.10), 0px 16px 32px 0px rgba(219, 222, 229, 0.10)"
        }
        width={"full"}
        maxWidth={"456px"}
      >
        <DrawerCloseButton color={"black"} />
        <DrawerHeader color={"black"}>Filter</DrawerHeader>

        <DrawerBody>{children}</DrawerBody>
        <DrawerFooter gap={"5"}>
          <Button
            width={"full"}
            bgColor={"white"}
            border={"1px solid rgba(239, 241, 246, 1)"}
            onClick={clear}
          >
            Clear
          </Button>
          <Button
            width={"full"}
            bgColor={"black"}
            textColor={"white"}
            onClick={apply}
          >
            Apply
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default _Drawer;

import { HStack, Image, Box } from "@chakra-ui/react";

import NavLink from "./_nav_link";
import QuickLinks from "./_quick_links";

const _Header = () => (
  <HStack
    border={"2px solid white"}
    borderRadius={"100px"}
    p={"4"}
    alignItems={"center"}
    justifyContent={"space-between"}
    boxShadow={
      "0px 2px 4px 0px rgba(45, 59, 67, 0.05), 0px 2px 6px 0px rgba(45, 59, 67, 0.06)"
    }
    bgColor={"white"}
    mt={"3"}
  >
    <Box>
      <Image
        src={"/logo.svg"}
        alt={"mainstack-logo"}
        maxHeight={"36px"}
        maxWidth={"36px"}
        width={"full"}
      />
    </Box>

    <NavLink />
    <QuickLinks />
  </HStack>
);

export default _Header;

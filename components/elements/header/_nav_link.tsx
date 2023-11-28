import { HStack } from "@chakra-ui/react";
import NavLinks_Item from "./_nav_link_item";
import APPS from "./_app";

import type { ReactNode } from "react";

export interface LinkAttributes {
  label: string;
  icon: string | ReactNode;
}

const LINKS = [
  {
    label: "Home",
    icon: "icons/links/home.svg",
  },
  {
    label: "Analytics",
    icon: "icons/links/insert_chart.svg",
  },
  {
    label: "Revenue",
    icon: "icons/links/payments.svg",
  },
  {
    label: "CRM",
    icon: "icons/links/group.svg",
  },
] as Array<LinkAttributes>;

const _NavLinks = () => (
  <HStack gap={"4"}>
    {LINKS.map((l, k) => (
      <NavLinks_Item key={k} link={l} />
    ))}
    <APPS />
  </HStack>
);

export default _NavLinks;

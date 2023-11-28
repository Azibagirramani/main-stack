"use client";
import { Tooltip, VStack, Image, Text, Box } from "@chakra-ui/react";
const _ASIDE_SVG = [
  {
    tip: "link to bio",
    svg: "icons/aside/p-icon-4.svg",
  },
  {
    tip: "Store",
    svg: "icons/aside/p-icon-1.svg",
  },
  {
    tip: "Media kit",
    svg: "icons/aside/p-icon-2.svg",
  },
  {
    tip: "Invoicing",
    svg: "icons/aside/p-icon-3.svg",
  },
];

const _Aside = () => {
  return (
    <VStack
      as={"aside"}
      gap={"8"}
      px={"4"}
      py={"3"}
      borderRadius={"100px"}
      boxShadow={
        "0px 6px 12px 0px rgba(92, 115, 131, 0.08), 0px 4px 8px 0px rgba(92, 115, 131, 0.08)"
      }
    >
      {_ASIDE_SVG.map((svgPath, index) => (
        <Tooltip
          hasArrow
          placement="right"
          label={svgPath.tip}
          bg={"black"}
          textColor={"white"}
          cursor={"pointer"}
          py={"3"}
          px={"3"}
          borderRadius={"6"}
          key={index}
          zIndex={1}
          bgColor={"red"}
        >
          <Box>
            <Image
              src={svgPath.svg}
              alt={svgPath.tip}
              width="100%"
              height="100%"
            />
          </Box>
        </Tooltip>
      ))}
    </VStack>
  );
};

export default _Aside;

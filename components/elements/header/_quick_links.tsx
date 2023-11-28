/* eslint-disable react/no-children-prop */

import { useMemo } from "react";
import {
  HStack,
  Text,
  Image,
  Box,
  Avatar,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  VStack,
} from "@chakra-ui/react";
import useUser from "src/hooks/useUser";

const QUICK_LINKS = [
  "icons/quick-links/notifications.svg",
  "icons/quick-links/chat.svg",
];
const _QUICKLINKS = () => {
  const { user } = useUser();

  const commutedUser = useMemo(() => {
    if (!user) return;
    return {
      fullName: `${user.first_name} ${user.last_name}`,
      email: user.email,
    };
  }, [user]);
  return (
    <HStack gap={"4"} alignItems={"center"}>
      {QUICK_LINKS.map((q, k) => (
        <Box key={k}>
          <Image
            src={q}
            alt={q}
            maxHeight={"20px"}
            maxWidth={"20px"}
            width={"full"}
          />
        </Box>
      ))}

      <Popover placement={"bottom-end"}>
        <PopoverTrigger>
          <Box
            tabIndex={0}
            role="button"
            children={
              <HStack
                alignItems={"center"}
                bgColor={"gray.50"}
                borderRadius={"100px"}
                px={"2"}
                py={"1"}
              >
                {commutedUser ? (
                  <Avatar
                    name={commutedUser.fullName}
                    size={"sm"}
                    textColor={"white"}
                    bgColor={"black"}
                  />
                ) : (
                  <Avatar name={"?"} size={"sm"} bgColor={"black"} />
                )}
                <Box>
                  <Image
                    src={"icons/quick-links/menu.svg"}
                    alt={"menu"}
                    maxHeight={"24px"}
                    maxWidth={"24px"}
                    width={"full"}
                  />
                </Box>
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
              <HStack
                alignItems={"center"}
                bgColor={"gray.50"}
                borderRadius={"100px"}
                px={"2"}
                py={"1"}
              >
                {commutedUser ? (
                  <Avatar
                    name={commutedUser.fullName}
                    size={"sm"}
                    textColor={"white"}
                    bgColor={"black"}
                  />
                ) : (
                  <Avatar name={"?"} size={"sm"} bgColor={"black"} />
                )}
                <Box>
                  <Text fontSize={"small"}>
                    {commutedUser ? commutedUser.fullName : "?"}
                  </Text>
                  <Text fontSize={"x-small"}>
                    {commutedUser ? commutedUser.email : "?"}
                  </Text>
                </Box>
              </HStack>
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </HStack>
  );
};

export default _QUICKLINKS;

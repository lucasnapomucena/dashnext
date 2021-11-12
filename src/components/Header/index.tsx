import { Flex } from "@chakra-ui/react";
import { NotificationsNav } from "./NotificationsNav";
import { SearchBox } from "./SearchBox";
import { Profile } from "./Profile";
import { Logo } from "./Logo";

export function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1200}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      <SearchBox />
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
}

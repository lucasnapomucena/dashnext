import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Lucas Alves Napomucena</Text>
        <Text color="gray.300" fontSize="small">
          lucasnapomucena@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Lucas Napomucena"
        src="https://github.com/lucasnapomucena.png"
      />
    </Flex>
  );
}

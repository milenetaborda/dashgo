import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export const Profile = () => (
  <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Milene Taborda</Text>
      <Text color="gray.300" fontSize="small">
        milenetaborda1@outlook.com
      </Text>
    </Box>

    <Avatar
      size="md"
      name="Milene Taborda"
      src="https://github.com/milenetaborda.png"
    />
  </Flex>
);

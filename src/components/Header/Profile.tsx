import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface IProfile {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData = true }: IProfile) => (
  <Flex align="center">
    {showProfileData && (
      <Box mr="4" textAlign="right">
        <Text>Milene Taborda</Text>
        <Text color="gray.300" fontSize="small">
          milenetaborda1@outlook.com
        </Text>
      </Box>
    )}

    <Avatar
      size="md"
      name="Milene Taborda"
      src="https://github.com/milenetaborda.png"
    />
  </Flex>
);

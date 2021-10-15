import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "toasted-notes/node_modules/@types/react";

interface INavSection {
  title: string;
  children: ReactNode;
}

export const NavSection = ({ title, children }: INavSection) => (
  <Box>
    <Text fontWeight="bold" color="gray.400" fontSize="small">
      {title}
    </Text>
    <Stack spacing="4" mt="8" align="stretch">
      {children}
    </Stack>
  </Box>
);

import { Box, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

const Pagination = () => {
  return (
    <Stack
      direction="row"
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row" spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
      </Stack>
    </Stack>
  );
};

export default Pagination;

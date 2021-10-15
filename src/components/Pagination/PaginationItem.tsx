import { Button } from "@chakra-ui/react";

interface IPaginationItem {
  number: number;
  isCurrent?: boolean;
}

export const PaginationItem = ({
  isCurrent = false,
  number,
}: IPaginationItem) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bg: "pink.500", cursor: "default" }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="gray.700"
      _disabled={{ bg: "gray.500" }}
    >
      {number}
    </Button>
  );
};

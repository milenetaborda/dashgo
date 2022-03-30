import { Box, useBreakpointValue } from "@chakra-ui/react";
import SidebarNav from "./SidebarNav";

export default function Sidebar() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if(!isDrawerSidebar) {
    <Drawer
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
}

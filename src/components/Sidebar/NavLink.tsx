import { Icon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "toasted-notes/node_modules/@types/react";

interface INavLink {
  icon: ElementType;
  children: string;
}

export const NavLink = ({ icon, children, ...rest }: INavLink) => (
  <Link display="flex" align="center" {...rest}>
    <Icon as={icon} fontSize="20" />
    <Text ml="4" fontWeight="medium">
      {children}
    </Text>
  </Link>
);

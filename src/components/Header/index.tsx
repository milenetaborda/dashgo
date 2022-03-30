<<<<<<< Updated upstream
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
=======
import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { NotificationsNav } from "./NavigationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
>>>>>>> Stashed changes

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />

<<<<<<< Updated upstream
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
=======
      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
>>>>>>> Stashed changes
  );
}

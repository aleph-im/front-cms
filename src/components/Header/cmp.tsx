import { Button, LinkComponent, RouterNavbar } from "@aleph-front/core";

import Link from "next/link";

import { StyledHeader } from "./styles";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { HeaderProps } from "./types";

export const Header = ({ children, routes, breakpoint }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseMenu = useCallback((open: boolean) => setIsOpen(open), []);

  const router = useRouter();

  return (
    <StyledHeader>
      <RouterNavbar
        Link={Link as LinkComponent}
        breakpoint={breakpoint}
        pathname={router.asPath}
        onToggle={handleCloseMenu}
        open={isOpen}
        routes={routes}
      >
        {children}
      </RouterNavbar>
    </StyledHeader>
  );
};

export default Header;

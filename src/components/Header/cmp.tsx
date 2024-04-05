import { Button, LinkComponent, RouterNavbar } from "@aleph-front/core";

import Link from "next/link";

import { StyledHeader } from "./styles";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { HeaderProps } from "./types";

export const Header = ({ children, routes }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseMenu = useCallback((open: boolean) => setIsOpen(open), []);

  const router = useRouter();

  return (
    <StyledHeader>
      <RouterNavbar
        Link={Link as LinkComponent}
        breakpoint="md"
        pathname={router.pathname}
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

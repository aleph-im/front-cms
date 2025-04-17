import { LinkComponent, Logo, RouterNavbar } from "@aleph-front/core";

import Link from "next/link";

import { StyledHeader } from "./styles";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { HeaderProps } from "./types";

export const Header = ({
  children,
  routes,
  breakpoint,
  logoWithText = true,
  logoImage,
  logoText,
  logoByAleph = false,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseMenu = useCallback((open: boolean) => setIsOpen(open), []);

  const router = useRouter();

  const text = logoWithText ? logoText ?? logoWithText : undefined

  return (
    <StyledHeader>
      <RouterNavbar
        Link={Link as LinkComponent}
        breakpoint={breakpoint}
        pathname={router.asPath}
        onToggle={handleCloseMenu}
        open={isOpen}
        routes={routes}
        logo={
          <Link href="/">
            <Logo img={logoImage} text={text} byAleph={logoByAleph}/>
          </Link>
        }
      >
        {children}
      </RouterNavbar>
    </StyledHeader>
  );
};

export default Header;

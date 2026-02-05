import { BreakpointId, LogoProps } from "@aleph-front/core";
import { HTMLAttributes } from "react";

export type HeaderProps = HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
  routes: HeaderRoutes[];
  breakpoint: BreakpointId;
  logoImage: LogoProps["img"];
  logoWithText: boolean;
  logoText?: string;
  logoByAleph?: boolean;
  onlyTextLogo?: string;
};

type HeaderRoutes = {
  name: string;
  href: string;
  external?: boolean;
  target?: string;
};

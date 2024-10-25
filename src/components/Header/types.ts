import { BreakpointId, LogoProps } from "@aleph-front/core";
import { HTMLAttributes } from "react";

export type HeaderProps = HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
  routes: HeaderRoutes[];
  breakpoint: BreakpointId;
  logoImage: LogoProps["img"];
  logoWithText: boolean;
};

type HeaderRoutes = {
  name: string;
  href: string;
  external?: boolean;
  target?: string;
};

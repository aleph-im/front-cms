import { HTMLAttributes } from "react";

export type HeaderProps = HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
  routes: HeaderRoutes[];
};

type HeaderRoutes = {
  name: string;
  href: string;
  external?: boolean;
  target?: string;
};

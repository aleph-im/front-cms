import Link from "next/link";
import { BreadcrumbProps, NavLink } from "./types";
import { ReactNode } from "react";
import { StyledBreadcrumb } from "./styles";

export const Breadcrumb = ({ navLinks, ...props }: BreadcrumbProps) => {
  if (!navLinks) return <></>;

  const links: ReactNode[] = navLinks.map(({ href, label }: NavLink) => {
    return (
      <Link href={href} key={label}>
        {label}
      </Link>
    );
  });

  return <StyledBreadcrumb navLinks={links} {...props} />;
};

export default Breadcrumb;

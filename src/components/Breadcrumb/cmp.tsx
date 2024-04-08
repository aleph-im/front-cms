import Link from "next/link";
import { BreadcrumbProps, NavLink } from "./types";
import { ReactNode } from "react";
import { Breadcrumb as CoreBreadcrumb } from "@aleph-front/core";

export const Breadcrumb = ({
  navLinks,
  selected,
  selectedColor,
}: BreadcrumbProps) => {
  if (!navLinks) {
    return <></>;
  }

  const links: ReactNode[] = navLinks.map(({ href, label }: NavLink) => {
    return (
      <Link href={href} key={label}>
        {label}
      </Link>
    );
  });

  return (
    <CoreBreadcrumb
      navLinks={links}
      selected={selected}
      selectedColor={selectedColor}
    />
  );
};

export default Breadcrumb;

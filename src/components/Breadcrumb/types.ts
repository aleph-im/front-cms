import { CssEditableProps } from "@/types/CssEditableProps";
import { ReactNode } from "react";

export type NavLink = {
  href: string;
  label: string;
};

export type BreadcrumbProps = CssEditableProps & {
  navLinks?: NavLink[];
  selected: number;
  selectedColor: string;
};

export type StyledBreadcrumbProps = CssEditableProps & {
  navLinks: ReactNode[];
  selected: number;
  selectedColor: string;
};

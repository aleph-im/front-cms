export type NavLink = {
  href: string;
  label: string;
};

export type BreadcrumbProps = {
  navLinks: NavLink[];
  selected: number;
  selectedColor: string;
};

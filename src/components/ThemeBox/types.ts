import { themes } from "@aleph-front/core";

export type ThemeBoxProps = {
  children: React.ReactNode;
  theme: keyof typeof themes;
};

import { ClassBreakpoint } from "./breakpoints";

export type TextProps = {
  children: React.ReactNode;
  responsiveTextType: ClassBreakpoint[];
  responsiveType: ClassBreakpoint[];
  responsiveFontSize: ClassBreakpoint[];
};

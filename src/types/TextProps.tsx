import { ClassBreakpoint } from "./breakpoints";

export type TextProps = {
  children: React.ReactNode;
  responsiveTextType: ClassBreakpoint[];
  responsiveTypo: ClassBreakpoint[];
  responsiveFontSize: ClassBreakpoint[];
};

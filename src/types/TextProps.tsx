import { CssEditableProps } from "./CssEditableProps";
import { ClassBreakpoint } from "./breakpoints";

export type TextProps = CssEditableProps & {
  children: React.ReactNode;
  responsiveTextType?: ClassBreakpoint[];
  responsiveTypo?: ClassBreakpoint[];
  responsiveFontSize?: ClassBreakpoint[];
};

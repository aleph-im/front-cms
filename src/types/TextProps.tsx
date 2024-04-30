import { CssEditableProps } from "./CssEditableProps";
import { ClassBreakpoint } from "./breakpoints";

export type TextProps = CssEditableProps & {
  children: string;
  responsiveTextType?: ClassBreakpoint[];
  responsiveTypo?: ClassBreakpoint[];
  responsiveFontSize?: ClassBreakpoint[];
};

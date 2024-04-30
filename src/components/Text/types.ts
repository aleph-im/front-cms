import { CssEditableProps } from "@/types/CssEditableProps";
import { ClassBreakpoint } from "@/types/breakpoints";

export type StyledTextProps = CssEditableProps & {
  responsiveTextType?: ClassBreakpoint[];
  responsiveTypo?: ClassBreakpoint[];
  responsiveFontSize?: ClassBreakpoint[];
};

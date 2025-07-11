import { StyleBreakpoint } from "./breakpoints";

export type CssEditableProps = {
  responsiveDisplay: StyleBreakpoint[];
  responsiveStyles: StyleBreakpoint[];
  responsiveOpacity: StyleBreakpoint[];
  responsiveDirection: StyleBreakpoint[];
  responsiveAlignSelf: StyleBreakpoint[];
  responsiveAlignItems: StyleBreakpoint[];
  responsiveTextAlign: StyleBreakpoint[];
  responsiveJustifyContent: StyleBreakpoint[];
  responsiveWrap: StyleBreakpoint[];
  responsiveFlexBasis: StyleBreakpoint[];
  responsivePosition: StyleBreakpoint[];
  responsiveOverflow: StyleBreakpoint[];
  responsiveOverflowX: StyleBreakpoint[];
  responsiveOverflowY: StyleBreakpoint[];
  responsiveBorder?: {
    responsiveBorderStyle: StyleBreakpoint[];
    responsiveBorderWidth: StyleBreakpoint[];
    responsiveBorderColor: StyleBreakpoint[];
    responsiveBorderRadius: StyleBreakpoint[];
  };
  backgroundColor: string;
};

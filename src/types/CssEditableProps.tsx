import { BreakpointId } from "@aleph-front/core";
import { StyleBreakpoint } from "./breakpoints";

export type CssEditableProps = {
  responsiveStyles: StyleBreakpoint[];
  responsiveOpacity: StyleBreakpoint[];
  responsiveDirection: StyleBreakpoint[];
  responsiveAlignItems: StyleBreakpoint[];
  responsiveJustifyContent: StyleBreakpoint[];
  responsiveWrap: StyleBreakpoint[];
  responsiveFlexBasis: StyleBreakpoint[];
  responsivePosition: StyleBreakpoint[];
};

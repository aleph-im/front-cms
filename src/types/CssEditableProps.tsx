import { BreakpointId } from "@aleph-front/core";

export type Breakpoint = {
  breakpoint?: BreakpointId;
  style: string;
  value: string;
};

export type CssEditableProps = {
  responsiveStyles: Breakpoint[];
  responsiveOpacity: Breakpoint[];
  responsiveDirection: Breakpoint[];
  responsiveAlignItems: Breakpoint[];
  responsiveJustifyContent: Breakpoint[];
  responsiveWrap: Breakpoint[];
  responsiveFlexBasis: Breakpoint[];
  responsivePosition: Breakpoint[];
};

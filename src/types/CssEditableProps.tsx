import { BreakpointId } from "@aleph-front/core";

export type Breakpoint = {
  breakpoint: BreakpointId;
  style: string;
  value: string;
};

export type CssEditableProps = {
  responsiveStyles: Breakpoint[];
  margin: string;
  marginTop: string;
  marginBottom: string;
  marginRight: string;
  marginLeft: string;
  padding: string;
  paddingTop: string;
  paddingBottom: string;
  paddingRight: string;
  paddingLeft: string;
  direction: string;
  alignItems: string;
  wrap: string;
  gap: string;
  opacity: string;
};

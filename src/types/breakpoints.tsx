import { BreakpointId } from "@aleph-front/core";

export type ClassBreakpoint = {
  breakpoint?: BreakpointId;
  klass: string;
  value?: string;
};

export type StyleBreakpoint = {
  breakpoint?: BreakpointId;
  style: string;
  value: string;
};

import { ClassBreakpoint } from "@/types/breakpoints";

export const calculateResponsiveClassNames = (
  breakpoints?: ClassBreakpoint[]
) => {
  return breakpoints
    ?.map(({ breakpoint, klass, value }: ClassBreakpoint) => {
      if (!breakpoint && !value) return `${klass}`;
      else if (!breakpoint) return `${klass}-${value}`;
      else if (!value) return `${breakpoint}:${klass}`;
      else return `${breakpoint}:${klass}-${value}`;
    })
    .join(" ");
};

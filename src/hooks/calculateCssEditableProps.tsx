import { DefaultTheme, css } from "styled-components";
import tw from "twin.macro";
import { Breakpoint, CssEditableProps } from "@/types/CssEditableProps";
import { useResponsiveBreakpoint } from "@aleph-front/core";

const calculateDisplayCssProps = (direction: string) => {
  switch (direction) {
    case "row":
      return tw`flex flex-row`;
    case "column":
      return tw`flex flex-col`;
    case "inline":
      return tw`inline`;
    default:
      return "";
  }
};

const calculateAlignItemsCssProps = (alignItems: string) => {
  switch (alignItems) {
    case "start":
      return tw`flex items-start justify-start`;
    case "end":
      return tw`flex items-end justify-end`;
    case "center":
      return tw`flex items-center justify-center`;
    default:
      return "";
  }
};

const calculateRemBreakpoints = (theme: any, breakpoints: Breakpoint[]) => {
  if (!breakpoints) return;

  return breakpoints.map(({ breakpoint, style, value }: Breakpoint) => {
    if (breakpoint) {
      return css`
        @media (min-width: ${theme.breakpoint[breakpoint]}rem) {
          ${style}: ${value};
        }
      `;
    } else {
      return css`
        ${style}: ${value};
      `;
    }
  });
};

export const calculateCssEditableProps = (
  theme: DefaultTheme,
  {
    margin,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    padding,
    paddingTop,
    paddingBottom,
    paddingRight,
    paddingLeft,
    gap,
    opacity,
    direction,
    alignItems,
    wrap,
    remStyleBreakpoints,
  }: CssEditableProps
) => {
  return css`
    margin: ${margin};
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    margin-right: ${marginRight};
    margin-left: ${marginLeft};
    padding: ${padding};
    padding-top: ${paddingTop};
    padding-bottom: ${paddingBottom};
    padding-right: ${paddingRight};
    padding-left: ${paddingLeft};
    gap: ${gap};
    opacity: ${opacity};
    flex-wrap: ${wrap};
    ${calculateDisplayCssProps(direction)}
    ${calculateAlignItemsCssProps(alignItems)};
    ${calculateRemBreakpoints(theme, remStyleBreakpoints)}
  `;
};

import { DefaultTheme, css } from "styled-components";
import tw from "twin.macro";
import { Breakpoint, CssEditableProps } from "@/types/CssEditableProps";
import { getResponsiveCss } from "@aleph-front/core";

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

const calculateResponsiveStyles = (theme: any, breakpoints?: Breakpoint[]) => {
  return breakpoints?.map(({ breakpoint, style, value }: Breakpoint) => {
    return getResponsiveCss(breakpoint, `${style}: ${value};`);
  });
};

export const calculateCssEditableProps = (
  theme: DefaultTheme,
  { opacity, direction, alignItems, wrap, responsiveStyles }: CssEditableProps
) => {
  return css`
    opacity: ${opacity};
    flex-wrap: ${wrap};
    ${calculateDisplayCssProps(direction)}
    ${calculateAlignItemsCssProps(alignItems)};
    ${calculateResponsiveStyles(theme, responsiveStyles)}
  `;
};

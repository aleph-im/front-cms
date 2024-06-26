import { DefaultTheme, css } from "styled-components";
import { CssEditableProps } from "@/types/CssEditableProps";
import { getResponsiveCss } from "@aleph-front/core";
import { StyleBreakpoint } from "@/types/breakpoints";

const calculateFlex = (
  display: StyleBreakpoint[],
  direction: StyleBreakpoint[],
  alignItems: StyleBreakpoint[],
  justifyContent: StyleBreakpoint[],
  flexBasis: StyleBreakpoint[]
) => {
  if (display?.length > 0) {
    return calculateResponsiveStyles(display);
  } else if (
    direction?.length > 0 ||
    alignItems?.length > 0 ||
    justifyContent?.length > 0 ||
    flexBasis?.length > 0
  ) {
    return css`
      display: flex;
    `;
  }

  return "";
};

const calculateResponsiveStyles = (styleBreakpoints?: StyleBreakpoint[]) => {
  return styleBreakpoints?.map(
    ({ breakpoint, style, value }: StyleBreakpoint) => {
      return getResponsiveCss(breakpoint, `${style}: ${value};`);
    }
  );
};

export const calculateResponsiveCss = (
  _theme: DefaultTheme,
  {
    responsiveDisplay,
    responsiveOpacity,
    responsiveDirection,
    responsiveAlignSelf,
    responsiveAlignItems,
    responsiveJustifyContent,
    responsiveTextAlign,
    responsiveWrap,
    responsiveFlexBasis,
    responsivePosition,
    responsiveStyles,
  }: CssEditableProps
) => {
  return css`
    ${calculateFlex(
      responsiveDisplay,
      responsiveDirection,
      responsiveAlignItems,
      responsiveJustifyContent,
      responsiveFlexBasis
    )}
    ${calculateResponsiveStyles(responsivePosition)}
    ${calculateResponsiveStyles(responsiveDirection)}
    ${calculateResponsiveStyles(responsiveAlignItems)}
    ${calculateResponsiveStyles(responsiveJustifyContent)}
    ${calculateResponsiveStyles(responsiveAlignSelf)}
    ${calculateResponsiveStyles(responsiveTextAlign)}
    ${calculateResponsiveStyles(responsiveFlexBasis)}
    ${calculateResponsiveStyles(responsiveWrap)}
    ${calculateResponsiveStyles(responsiveOpacity)}
    ${calculateResponsiveStyles(responsiveStyles)}
  `;
};

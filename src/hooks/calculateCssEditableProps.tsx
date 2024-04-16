import { DefaultTheme, css } from "styled-components";
import tw from "twin.macro";
import { CssEditableProps, Breakpoint } from "@/types/CssEditableProps";
import { getResponsiveCss } from "@aleph-front/core";

const calculateFlex = (
  direction?: Breakpoint[],
  alignItems?: Breakpoint[],
  justifyContent?: Breakpoint[],
  flexBasis?: Breakpoint[]
) => {
  if (direction || alignItems || justifyContent || flexBasis) {
    return css`
      display: flex;
    `;
  }

  return "";
};

const calculateResponsiveStyles = (breakpoints?: Breakpoint[]) => {
  return breakpoints?.map(({ breakpoint, style, value }: Breakpoint) => {
    return getResponsiveCss(breakpoint, `${style}: ${value};`);
  });
};

export const calculateCssEditableProps = (
  _theme: DefaultTheme,
  {
    responsiveOpacity,
    responsiveDirection,
    responsiveAlignItems,
    responsiveJustifyContent,
    responsiveWrap,
    responsiveFlexBasis,
    responsivePosition,
    responsiveStyles,
  }: CssEditableProps
) => {
  return css`
    ${calculateFlex(
      responsiveDirection,
      responsiveAlignItems,
      responsiveJustifyContent,
      responsiveFlexBasis
    )}
    ${calculateResponsiveStyles(responsivePosition)}
    ${calculateResponsiveStyles(responsiveDirection)}
    ${calculateResponsiveStyles(responsiveAlignItems)}
    ${calculateResponsiveStyles(responsiveJustifyContent)}
    ${calculateResponsiveStyles(responsiveFlexBasis)}
    ${calculateResponsiveStyles(responsiveWrap)}
    ${calculateResponsiveStyles(responsiveOpacity)}
    ${calculateResponsiveStyles(responsiveStyles)}
  `;
};

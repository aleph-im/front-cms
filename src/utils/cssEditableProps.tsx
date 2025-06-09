import { css } from "styled-components";
import { CssEditableProps } from "@/types/CssEditableProps";
import { CoreTheme, getResponsiveCss } from "@aleph-front/core";
import { StyleBreakpoint } from "@/types/breakpoints";

const calculateFlex = (
  theme: CoreTheme,
  display: StyleBreakpoint[],
  direction: StyleBreakpoint[],
  alignItems: StyleBreakpoint[],
  justifyContent: StyleBreakpoint[],
  flexBasis: StyleBreakpoint[]
) => {
  if (display?.length > 0) {
    return calculateResponsiveStyles(theme, display);
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

const calculateBorder = (
  theme: CoreTheme,
  responsiveBorder?: {
    responsiveBorderStyle: StyleBreakpoint[];
    responsiveBorderWidth: StyleBreakpoint[];
    responsiveBorderColor: StyleBreakpoint[];
    responsiveBorderRadius: StyleBreakpoint[];
  }
) => {
  if (!responsiveBorder) return "";
  const {
    responsiveBorderStyle,
    responsiveBorderWidth,
    responsiveBorderColor,
    responsiveBorderRadius,
  } = responsiveBorder;

  return css`
    ${calculateResponsiveStyles(theme, responsiveBorderStyle)}
    ${calculateResponsiveStyles(theme, responsiveBorderWidth)}
    ${calculateResponsiveStyles(theme, responsiveBorderColor)}
    ${calculateResponsiveStyles(theme, responsiveBorderRadius)}
  `;
};

const calculateResponsiveStyles = (
  theme: CoreTheme,
  styleBreakpoints?: StyleBreakpoint[]
) => {
  return styleBreakpoints?.map(
    ({ breakpoint, style, value, useThemeColor }: StyleBreakpoint) => {
      const styleValue = useThemeColor ? theme.color[value] : value;

      return getResponsiveCss(breakpoint, `${style}: ${styleValue};`);
    }
  );
};

export const calculateResponsiveCss = (
  theme: CoreTheme,
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
    responsiveBorder,
    responsiveOverflow,
    responsiveOverflowX,
    responsiveOverflowY,
  }: CssEditableProps
) => {
  return css`
    ${calculateFlex(
      theme,
      responsiveDisplay,
      responsiveDirection,
      responsiveAlignItems,
      responsiveJustifyContent,
      responsiveFlexBasis
    )}
    ${calculateBorder(theme, responsiveBorder)}
    ${calculateResponsiveStyles(theme, responsivePosition)}
    ${calculateResponsiveStyles(theme, responsiveDirection)}
    ${calculateResponsiveStyles(theme, responsiveAlignItems)}
    ${calculateResponsiveStyles(theme, responsiveJustifyContent)}
    ${calculateResponsiveStyles(theme, responsiveAlignSelf)}
    ${calculateResponsiveStyles(theme, responsiveTextAlign)}
    ${calculateResponsiveStyles(theme, responsiveFlexBasis)}
    ${calculateResponsiveStyles(theme, responsiveWrap)}
    ${calculateResponsiveStyles(theme, responsiveOpacity)}
    ${calculateResponsiveStyles(theme, responsiveOverflow)}
    ${calculateResponsiveStyles(theme, responsiveOverflowX)}
    ${calculateResponsiveStyles(theme, responsiveOverflowY)}
    ${calculateResponsiveStyles(theme, responsiveStyles)}
  `;
};

"use client";

import React from "react";
import { TextGradientProps } from "./types";
import { calculateResponsiveClassNames } from "@/utils/responsiveClassNames";
import { StyledTextGradient } from "./styles";

export const TextGradient = ({
  children,
  responsiveTextType,
  responsiveTypo,
  responsiveFontSize,
  ...rest
}: TextGradientProps) => {
  const classNames = [
    calculateResponsiveClassNames(responsiveTextType),
    calculateResponsiveClassNames(responsiveTypo),
    calculateResponsiveClassNames(responsiveFontSize),
  ].join(" ");

  return (
    <StyledTextGradient className={classNames} {...rest}>
      {children}
    </StyledTextGradient>
  );
};

export default TextGradient;

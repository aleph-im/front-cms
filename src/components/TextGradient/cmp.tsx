"use client";

import React from "react";
import { TextGradientProps } from "./types";
import { TextGradient as CoreTextGradient } from "@aleph-front/core";
import { calculateResponsiveClassNames } from "@/utils/responsiveClassNames";

export const TextGradient = ({
  children,
  responsiveTextType,
  responsiveType,
  responsiveFontSize,
  ...rest
}: TextGradientProps) => {
  const classNames = [
    calculateResponsiveClassNames(responsiveTextType),
    calculateResponsiveClassNames(responsiveType),
    calculateResponsiveClassNames(responsiveFontSize),
  ].join(" ");

  return (
    <CoreTextGradient className={classNames} {...rest}>
      {children}
    </CoreTextGradient>
  );
};

export default TextGradient;

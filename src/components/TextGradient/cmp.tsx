"use client";

import React from "react";
import { TextGradientProps } from "./types";
import { TextGradient as CoreTextGradient } from "@aleph-front/core";
import { calculateResponsiveClassNames } from "@/utils/responsiveClassNames";

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
    <CoreTextGradient className={classNames} {...rest}>
      {children}
    </CoreTextGradient>
  );
};

export default TextGradient;

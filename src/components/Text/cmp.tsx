"use client";

import React from "react";
import { TextProps } from "@/types/TextProps";
import { calculateResponsiveClassNames } from "@/utils/responsiveClassNames";

export const Text = ({
  children,
  responsiveTextType,
  responsiveTypo,
  responsiveFontSize,
}: TextProps) => {
  const classNames = [
    calculateResponsiveClassNames(responsiveTextType),
    calculateResponsiveClassNames(responsiveTypo),
    calculateResponsiveClassNames(responsiveFontSize),
  ].join(" ");

  return <p className={classNames}>{children}</p>;
};

export default Text;

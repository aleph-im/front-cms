"use client";

import React from "react";
import { TextProps } from "@/types/TextProps";
import { calculateResponsiveClassNames } from "@/utils/responsiveClassNames";

export const Text = ({
  children,
  responsiveTextType,
  responsiveType,
  responsiveFontSize,
}: TextProps) => {
  const classNames = [
    calculateResponsiveClassNames(responsiveTextType),
    calculateResponsiveClassNames(responsiveType),
    calculateResponsiveClassNames(responsiveFontSize),
  ].join(" ");

  console.log(classNames);

  return <p className={classNames}>{children}</p>;
};

export default Text;

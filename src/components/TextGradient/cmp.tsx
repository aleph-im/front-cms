"use client";

import React from "react";
import { TextGradientProps } from "./types";
import { TextGradient as CoreTextGradient } from "@aleph-front/core";

export const TextGradient = ({
  children,
  textType,
  tp,
  fs,
  ...rest
}: TextGradientProps) => {
  const classNames = [`${textType || ""}`, `${tp || ""}`, `${fs || ""}`].join(
    " "
  );

  return (
    <CoreTextGradient className={classNames} {...rest}>
      {children}
    </CoreTextGradient>
  );
};

export default TextGradient;

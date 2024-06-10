"use client";

import React from "react";
import { LoadingBlinkBoxProps } from "./types";
import { StyledLoadingBlinkBox } from "./styles";

export const LoadingBlinkBox = ({
  children,
  ...props
}: LoadingBlinkBoxProps) => {
  return props.loading ? <StyledLoadingBlinkBox {...props} /> : children;
};

export default LoadingBlinkBox;

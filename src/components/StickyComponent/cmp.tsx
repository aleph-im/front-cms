"use client";

import React from "react";
import { StickyComponentProps } from "./types";
import { StyledStickyComponent } from "./styles";

export const StickyComponent = ({
  children,
  ...props
}: StickyComponentProps) => {
  return <StyledStickyComponent {...props}>{children}</StyledStickyComponent>;
};

export default StickyComponent;

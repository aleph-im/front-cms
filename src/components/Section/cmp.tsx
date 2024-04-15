"use client";

import React from "react";
import { SectionProps } from "./types";
import { StyledSection } from "./styles";

export const Section = ({ children, effects, ...props }: SectionProps) => {
  const calculatedClassName = `${effects || ""}`;

  return (
    <StyledSection className={calculatedClassName} {...props}>
      {children}
    </StyledSection>
  );
};

export default Section;

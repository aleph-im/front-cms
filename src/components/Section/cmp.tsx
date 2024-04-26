"use client";

import React from "react";
import { SectionProps } from "./types";
import { StyledSection } from "./styles";

export const Section = ({ children, effects, id, ...props }: SectionProps) => {
  const calculatedClassName = `${effects || ""}`;

  return (
    <StyledSection className={calculatedClassName} id={id} {...props}>
      {children}
    </StyledSection>
  );
};

export default Section;

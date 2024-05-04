"use client";

import React from "react";
import { SectionProps } from "./types";
import { StyledSection } from "./styles";

export const Section = ({ children, effects, id, ...props }: SectionProps) => {
  const calculatedClassName = [`${effects || ""}`, `scrollTo-${id}`].join(" ");

  return (
    <StyledSection className={calculatedClassName} {...props}>
      {children}
    </StyledSection>
  );
};

export default Section;

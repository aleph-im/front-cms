"use client";

import React from "react";
import { SectionProps } from "./types";
import { StyledSection } from "./styles";

export const Section = ({ children, effects, id, ...props }: SectionProps) => {
  const calculatedClassName = [`${effects || ""}`].join(" ");

  return (
    <StyledSection
      className={calculatedClassName}
      id={id ? `scroll-${id}` : undefined}
      {...props}
    >
      {children}
    </StyledSection>
  );
};

export default Section;

"use client";

import React from "react";
import { SectionProps } from "./types";
import { StyledSection } from "./styles";
import { generateClassNames } from "@/utils/generateClassNames";

export const Section = ({ children, effects, id, ...props }: SectionProps) => {
  const classNames = generateClassNames(props);

  return (
    <StyledSection
      className={classNames}
      id={id ? `scroll-${id}` : undefined}
      {...props}
    >
      {children}
    </StyledSection>
  );
};

export default Section;

"use client";

import React from "react";
import { StyledContainer } from "./styles";
import { ContainerProps } from "./types";
import { generateClassNames } from "@/utils/generateClassNames";

export const Container = ({ children, ...props }: ContainerProps) => {
  const classNames = generateClassNames(props);

  return (
    <StyledContainer className={classNames} {...props}>
      {children}
    </StyledContainer>
  );
};

export default Container;

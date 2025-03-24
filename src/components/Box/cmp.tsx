"use client";

import React from "react";
import { BoxProps } from "./types";
import { StyledBox } from "./styles";
import { generateClassNames } from "@/utils/generateClassNames";

export const Box = ({ children, ...props }: BoxProps) => {
  const classNames = generateClassNames(props);

  return (
    <StyledBox className={classNames} {...props}>
      {children}
    </StyledBox>
  );
};

export default Box;

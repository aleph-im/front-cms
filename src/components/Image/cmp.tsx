"use client";

import React from "react";
import { ImageProps } from "./types";
import { StyledImage } from "./styles";

export const Image = ({ src, alt, ...props }: ImageProps) => {
  return <StyledImage src={src} alt={alt} {...props} />;
};

export default Image;

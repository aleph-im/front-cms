"use client";

import React from "react";
import { SectionProps } from "./types";

export const Section = ({ children, effects }: SectionProps) => {
  const calculatedClassName = `${effects || ""}`;

  return <div className={calculatedClassName}>{children}</div>;
};

export default Section;

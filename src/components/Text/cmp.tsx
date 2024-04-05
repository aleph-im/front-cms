"use client";

import React from "react";
import { TextProps } from "./types";

export const Text = ({ children, textType, tp }: TextProps) => {
  const classNames = [`${textType || ""}`, `${tp || ""}`].join(" ");

  return <p className={classNames}>{children}</p>;
};

export default Text;

"use client";

import React from "react";
import { TextProps } from "./types";

export const Text = ({ children, textType, tp, fs }: TextProps) => {
  const classNames = [`${textType || ""}`, `${tp || ""}`, `${fs || ""}`].join(
    " "
  );

  return <p className={classNames}>{children}</p>;
};

export default Text;

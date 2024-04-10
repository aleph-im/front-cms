"use client";

import { TextProps } from "@/types/TextProps";
import React from "react";

export const Text = ({ children, textType, tp, fs }: TextProps) => {
  const classNames = [`${textType || ""}`, `${tp || ""}`, `${fs || ""}`].join(
    " "
  );

  return <p className={classNames}>{children}</p>;
};

export default Text;

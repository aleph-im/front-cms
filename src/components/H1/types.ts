import { TextProps } from "@/types/TextProps";
import { TypoKind } from "@aleph-front/core";
import { HTMLAttributes, ReactNode } from "react";

export type H1Props = HTMLAttributes<HTMLHeadingElement> &
  TextProps & {
    color?: string;
    type?: TypoKind;
  };
import { TextProps } from "@/types/TextProps";
import { TypoKind } from "@aleph-front/core";
import { HTMLAttributes } from "react";

export type H2Props = HTMLAttributes<HTMLHeadingElement> &
  TextProps & {
    color?: string;
    type?: TypoKind;
  };

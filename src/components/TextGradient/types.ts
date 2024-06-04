import { TextProps } from "@/types/TextProps";
import { TypoKind } from "@aleph-front/core";

export type TextGradientProps = TextProps & {
  forwardedAs?: string;
  color?: string;
  type?: TypoKind;
};

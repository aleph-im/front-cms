import { TextProps } from "@/types/TextProps";
import { TypoKind } from "@aleph-front/core";

export type H2Props = TextProps & {
  color?: string;
  type?: TypoKind;
};

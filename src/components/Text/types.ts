import { HTMLAttributes } from "react";

export type TextProps = HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
  textType: string;
  tp: string;
  fs: string;
};

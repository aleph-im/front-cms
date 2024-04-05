import { HTMLAttributes } from "react";

export type BoxProps = HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

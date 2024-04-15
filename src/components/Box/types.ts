import { CssEditableProps } from "@/types/CssEditableProps";
import { HTMLAttributes } from "react";

export type BoxProps = HTMLAttributes<HTMLDivElement> &
  CssEditableProps & {
    children: React.ReactNode;
    backgroundColor: string;
  };

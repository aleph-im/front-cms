import { CssEditableProps } from "@/types/CssEditableProps";
import { HTMLAttributes } from "react";

export type ContainerProps = HTMLAttributes<HTMLDivElement> &
  CssEditableProps & {
    children: React.ReactNode;
  };

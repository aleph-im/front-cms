import { TextProps } from "@/types/TextProps";
import { ReactNode } from "react";

export type ToggleContainerProps = {
  titleText: string;
  titleClosedStyles: TextProps;
  titleOpenedStyles?: TextProps;
  backgroundColor?: string;
  children: ReactNode;
};

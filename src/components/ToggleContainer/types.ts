import { TextProps } from "@/types/TextProps";
import { ReactNode } from "react";

export type ToggleContainerProps = {
  titleText: string;
  titleClosedStyles: TextProps;
  titleOpenedStyles?: TextProps;
  noisyContainer?: boolean;
  children: ReactNode;
};

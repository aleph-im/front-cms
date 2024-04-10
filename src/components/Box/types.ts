import { CssEditableProps } from "@/types/CssEditableProps";

export type BoxProps = CssEditableProps & {
  children: React.ReactNode;
  backgroundColor: string;
};

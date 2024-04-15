import { CssEditableProps } from "@/types/CssEditableProps";

export type SectionProps = CssEditableProps & {
  children: React.ReactNode;
  effects?: string;
};

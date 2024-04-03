import { HTMLAttributes } from "react";

export type SectionProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  effects: string;
};

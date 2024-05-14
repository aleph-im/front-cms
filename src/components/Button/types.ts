import { CssEditableProps } from "@/types/CssEditableProps";
import { ButtonProps as CoreButtonProps, IconName } from "@aleph-front/core";

export type ButtonProps = CssEditableProps &
  CoreButtonProps & {
    icon?: IconName;
    iconPosition?: "left" | "right";
    iconSize: string;
  };

export type StyledButtonProps = CssEditableProps & CoreButtonProps;

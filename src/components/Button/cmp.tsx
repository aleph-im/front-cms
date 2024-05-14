import { ButtonProps } from "./types";
import { StyledButton } from "./styles";
import { Icon } from "@aleph-front/core";

export const Button = ({
  children,
  icon,
  iconSize,
  iconPosition = "right",
  ...props
}: ButtonProps) => {
  const iconCmp = icon ? <Icon size={iconSize} name={icon}></Icon> : undefined;

  return (
    <StyledButton {...props}>
      {iconPosition === "left" && iconCmp}
      {children}
      {iconPosition === "right" && iconCmp}
    </StyledButton>
  );
};

export default Button;

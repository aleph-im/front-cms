import { ButtonProps } from "./types";
import { StyledButton } from "./styles";

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};

export default Button;

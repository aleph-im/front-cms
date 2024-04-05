import { StyledH1 } from "./styles";
import { H1Props } from "./types";

export const H1 = ({ children, ...rest }: H1Props) => {
  return <StyledH1 {...rest}>{children}</StyledH1>;
};

export default H1;

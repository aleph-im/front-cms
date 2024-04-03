import { StyledH2 } from "./styles";
import { H2Props } from "./types";

export const H2 = ({ children, ...rest }: H2Props) => {
  return <StyledH2 {...rest}>{children}</StyledH2>;
};

export default H2;

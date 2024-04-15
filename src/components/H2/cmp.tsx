import { StyledH2 } from "./styles";
import { H2Props } from "./types";

export const H2 = ({ children, textType, tp, fs, ...rest }: H2Props) => {
  const classNames = [`${textType || ""}`, `${tp || ""}`, `${fs || ""}`].join(
    " "
  );

  return (
    <StyledH2 className={classNames} {...rest}>
      {children}
    </StyledH2>
  );
};

export default H2;

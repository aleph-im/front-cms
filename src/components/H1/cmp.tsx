import { StyledH1 } from "./styles";
import { H1Props } from "./types";

export const H1 = ({ children, textType, tp, fs, ...rest }: H1Props) => {
  const classNames = [`${textType || ""}`, `${tp || ""}`, `${fs || ""}`].join(
    " "
  );

  return (
    <StyledH1 className={classNames} {...rest}>
      {children}
    </StyledH1>
  );
};

export default H1;

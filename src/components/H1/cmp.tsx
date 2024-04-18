import { calculateResponsiveClassNames } from "@/utils/responsiveClassNames";
import { StyledH1 } from "./styles";
import { H1Props } from "./types";

export const H1 = ({
  children,
  responsiveTextType,
  responsiveType,
  responsiveFontSize,
  ...rest
}: H1Props) => {
  const classNames = [
    calculateResponsiveClassNames(responsiveTextType),
    calculateResponsiveClassNames(responsiveType),
    calculateResponsiveClassNames(responsiveFontSize),
  ].join(" ");

  return (
    <StyledH1 className={classNames} {...rest}>
      {children}
    </StyledH1>
  );
};

export default H1;

import { calculateResponsiveClassNames } from "@/utils/responsiveClassNames";
import { StyledH2 } from "./styles";
import { H2Props } from "./types";

export const H2 = ({
  children,
  responsiveTextType,
  responsiveType,
  responsiveFontSize,
  ...rest
}: H2Props) => {
  const classNames = [
    calculateResponsiveClassNames(responsiveTextType),
    calculateResponsiveClassNames(responsiveType),
    calculateResponsiveClassNames(responsiveFontSize),
  ].join(" ");

  return (
    <StyledH2 className={classNames} {...rest}>
      {children}
    </StyledH2>
  );
};

export default H2;

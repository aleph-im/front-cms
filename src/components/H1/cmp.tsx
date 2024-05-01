import { calculateResponsiveClassNames } from "@/utils/responsiveClassNames";
import { StyledH1 } from "./styles";
import { H1Props } from "./types";

export const H1 = ({
  children,
  responsiveTextType,
  responsiveTypo,
  responsiveFontSize,
  ...props
}: H1Props) => {
  const classNames = [
    calculateResponsiveClassNames(responsiveTextType),
    calculateResponsiveClassNames(responsiveTypo),
    calculateResponsiveClassNames(responsiveFontSize),
  ].join(" ");

  return (
    <StyledH1 className={classNames} {...props}>
      {children}
    </StyledH1>
  );
};

export default H1;

import React from "react";
import { TextProps } from "@/types/TextProps";
import { calculateResponsiveClassNames } from "@/utils/responsiveClassNames";
import { StyledText } from "./styles";

export const Text = ({
  children,
  responsiveTextType,
  responsiveTypo,
  responsiveFontSize,
  ...props
}: TextProps) => {
  const classNames = [
    calculateResponsiveClassNames(responsiveTextType),
    calculateResponsiveClassNames(responsiveTypo),
    calculateResponsiveClassNames(responsiveFontSize),
  ].join(" ");

  return (
    <StyledText className={classNames} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;

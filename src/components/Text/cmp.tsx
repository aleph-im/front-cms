import React from "react";
import { TextProps } from "@/types/TextProps";
import { calculateResponsiveClassNames } from "@/utils/responsiveClassNames";
import { StyledText } from "./styles";
import DOMPurify from "isomorphic-dompurify";

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

  const sanitizedChildren = DOMPurify.sanitize(children);
  const modifiedChildren = sanitizedChildren.replaceAll(
    "<p>",
    `<p class="${classNames}">`
  );

  return (
    <StyledText
      className={classNames}
      dangerouslySetInnerHTML={{ __html: modifiedChildren }}
      {...props}
    />
  );
};

export default Text;

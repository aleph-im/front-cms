import React from "react";
import { TextProps } from "@/types/TextProps";
import { calculateResponsiveClassNames } from "@/utils/responsiveClassNames";
import { StyledLink, StyledText } from "./styles";
import DOMPurify from "isomorphic-dompurify";
import { Icon } from "@aleph-front/core";
import parse, {
  DOMNode,
  Element,
  HTMLReactParserOptions,
  domToReact,
} from "html-react-parser";

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

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      const domElement: Element = domNode as Element;

      if (domElement.attribs && domElement.name === "p") {
        return (
          <p className={classNames}>
            {domToReact(domElement.children as DOMNode[], options)}
          </p>
        );
      }
      if (domElement.attribs && domElement.name === "a") {
        return (
          <StyledLink href={domElement.attribs.href} target="_blank">
            {domToReact(domElement.children as DOMNode[], options)}
            <Icon tw="ml-1" name="square-up-right" size="0.75em" />
          </StyledLink>
        );
      }
    },
  };

  const parsedChildren = parse(sanitizedChildren, options);

  return (
    <StyledText className={classNames} {...props}>
      {parsedChildren}
    </StyledText>
  );
};

export default Text;

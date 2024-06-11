import { TextGradient } from "@aleph-front/core";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledTitle = styled(
  ({ children, size, className: styledClassName }) => {
    switch (size) {
      case "xl":
        return (
          <TextGradient
            type="h2"
            className={`xs:tp-h4 xl:tp-h2 ${styledClassName}`}
          >
            {children}
          </TextGradient>
        );
      case "full":
        return (
          <TextGradient type="h2" className={styledClassName}>
            {children}
          </TextGradient>
        );
      case "highlighted":
        return (
          <TextGradient
            type="h2"
            className={`tp-h1 lg:tp-header ${styledClassName}`}
          >
            {children}
          </TextGradient>
        );
      default:
        return (
          <p className={`tp-h6 text-base2 ${styledClassName} `}>{children}</p>
        );
    }
  }
)`
  ${tw`line-clamp-3 whitespace-pre-wrap w-fit`}
  ${({ size }) => {
    if (size === "xl" || size == "highlighted") return tw`mb-0`;
  }}
`;

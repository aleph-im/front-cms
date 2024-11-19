import { TextGradient } from "@aleph-front/core";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledTitle = styled(
  ({ children, size, className: styledClassName }) => {
    switch (size) {
      case "xl":
        return (
          <TextGradient
            type="h6"
            className={`tp-h6 xl:tp-h5 ${styledClassName}`}
          >
            {children}
          </TextGradient>
        );
      case "full":
        return (
          <TextGradient
            type="h6"
            className={`tp-h6 xl:tp-h4 ${styledClassName}`}
          >
            {children}
          </TextGradient>
        );
      case "highlighted":
        return (
          <TextGradient
            type="h5"
            className={`tp-h5 md:tp-h3 ${styledClassName}`}
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
  ${tw`line-clamp-4 whitespace-pre-wrap w-fit`}
  ${({ size }) => {
    if (["xl", "full", "highlighted"].includes(size)) return tw`mb-0`;
  }}
`;

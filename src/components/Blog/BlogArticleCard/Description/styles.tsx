import styled, { css } from "styled-components";
import tw from "twin.macro";
import { getResponsiveCss } from "@aleph-front/core";

export const StyledDescription = styled.p<{ size: string }>`
  ${tw`line-clamp-5 whitespace-pre-wrap`}
  ${({ size }) => {
    if (size === "lg")
      return css`
        margin-bottom: 1.5rem;
        ${getResponsiveCss("lg", "max-width: 77%;")}
      `;
    else if (size === "xl" || size === "full")
      return css`
        margin-bottom: 3rem;
        ${getResponsiveCss("lg", "max-width: 77%;")}
      `;
    else if (size === "highlighted") return;
    else
      return css`
        margin-bottom: 1.5rem;
      `;
  }}
`;

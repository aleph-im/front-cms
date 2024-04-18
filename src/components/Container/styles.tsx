import styled, { css } from "styled-components";
import tw from "twin.macro";
import { ContainerProps } from "./types";
import { calculateResponsiveCss } from "@/utils/cssEditableProps";

export const StyledContainer = styled.div<ContainerProps>`
  ${({ theme, ...cssEditableProps }) => {
    return css`
      ${tw`px-6 md:px-16`}
      box-sizing: border-box;
      width: 100%;
      margin: 0 auto;
      max-width: 100rem;
      ${calculateResponsiveCss(theme, cssEditableProps)}
    `;
  }}
`;

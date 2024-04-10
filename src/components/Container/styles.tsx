import styled, { css } from "styled-components";
import tw from "twin.macro";
import { ContainerProps } from "./types";

export const StyledContainer = styled.div<ContainerProps>`
  ${({
    theme,
    margin,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    padding,
    paddingTop,
    paddingBottom,
    paddingRight,
    paddingLeft,
  }) => {
    return css`
      ${tw`px-6 md:px-16`}
      box-sizing: border-box;
      width: 100%;
      max-width: 100rem;
      margin: ${margin};
      margin-top: ${marginTop};
      margin-bottom: ${marginBottom};
      margin-right: ${marginRight};
      margin-left: ${marginLeft};
      padding: ${padding};
      padding-top: ${paddingTop};
      padding-bottom: ${paddingBottom};
      padding-right: ${paddingRight};
      padding-left: ${paddingLeft};
    `;
  }}
`;

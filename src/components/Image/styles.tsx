import styled, { css } from "styled-components";
import { ImageProps } from "./types";

export const StyledImage = styled.img<ImageProps>`
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
      position: relative;
    `;
  }}
`;

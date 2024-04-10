import styled, { css } from "styled-components";
import { BoxProps } from "./types";

export const StyledBox = styled.div<BoxProps>`
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

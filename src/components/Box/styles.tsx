import styled, { css } from "styled-components";
import tw from "twin.macro";
import { BoxProps } from "./types";

const generateTwClass = (propValue: string) =>
  propValue ? tw`${propValue}` : "";

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
    console.log("Box Props Padding: ", padding);

    const calculatedCss = css`
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

    console.log("Box Calculated CSS: ", calculatedCss);

    return calculatedCss;
  }}
`;

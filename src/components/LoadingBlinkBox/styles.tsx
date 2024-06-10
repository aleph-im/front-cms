import styled, { css } from "styled-components";
import { LoadingBlinkBoxProps } from "./types";

export const StyledLoadingBlinkBox = styled.div<LoadingBlinkBoxProps>`
  ${({
    theme,
    loading,
    loadingHeight,
    loadingWidth,
    color = theme.color.dark0,
  }) => {
    if (!loading) return css``;

    return css`
      @keyframes blinker {
        50% {
          opacity: 33%;
        }
      }

      animation: blinker 3s linear infinite;
      width: ${loadingWidth};
      min-height: ${loadingHeight};
      background-color: ${color};
      border-radius: 0.5rem;
      margin-bottom: 1em;
    `;
  }}
`;

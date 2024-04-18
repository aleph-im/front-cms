import styled, { css } from "styled-components";

export const StyledStickyComponent = styled.div<{ placed_at: string }>`
  ${({ placed_at }) => {
    return css`
      position: sticky;
      ${placed_at}: 0;
      z-index: 10;
    `;
  }}
`;

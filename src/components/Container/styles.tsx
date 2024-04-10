import styled, { css } from "styled-components";
import tw from "twin.macro";

export const StyledContainer = styled.div`
  ${({ theme }) => {
    const a = css`
      ${tw`px-6 md:px-16`}
      box-sizing: border-box;
      width: 100%;
      margin: 0 auto;
      max-width: 100rem;
    `;

    console.log("css", a);
    return a;
  }}
`;

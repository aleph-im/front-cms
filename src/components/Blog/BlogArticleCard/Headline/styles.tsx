import styled from "styled-components";
import tw from "twin.macro";

export const StyledHeadline = styled(
  ({ children, size: string, className: styledClassName }) => {
    return <p className={`tp-h7 text-base2 ${styledClassName}`}>{children}</p>;
  }
)`
  ${tw`line-clamp-4 whitespace-pre-wrap`}
  ${({ size }) => {
    if (size === "full") return tw`md:mb-4`;
  }}
`;

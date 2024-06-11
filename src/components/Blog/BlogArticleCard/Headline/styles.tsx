import styled from "styled-components";
import tw from "twin.macro";

export const StyledHeadline = styled(
  ({ children, size: string, className: styledClassName }) => {
    return <p className={`tp-h7 text-base2 ${styledClassName}`}>{children}</p>;
  }
)`
  ${tw`line-clamp-2 whitespace-pre-wrap`}
  ${({ size }) => {
    console.log(size);
    if (size === "full") return tw`mb-4`;
  }}
`;

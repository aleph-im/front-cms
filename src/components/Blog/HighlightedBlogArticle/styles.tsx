import { TextGradient } from "@aleph-front/core";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledBlogArticleHeader = styled(TextGradient)`
  ${tw`line-clamp-1 w-fit`}
  font-size: 7rem;
`;

import { calculateResponsiveCss } from "@/utils/cssEditableProps";
import { Tag } from "@aleph-front/core";
import styled from "styled-components";
import { TagProps } from "./types";

export const StyledTag = styled(Tag)<TagProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

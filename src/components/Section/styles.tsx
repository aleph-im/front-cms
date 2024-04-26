import styled from "styled-components";
import { SectionProps } from "./types";
import { calculateResponsiveCss } from "@/utils/cssEditableProps";

export const StyledSection = styled.section<SectionProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

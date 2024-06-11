import styled from "styled-components";
import { calculateResponsiveCss } from "@/utils/cssEditableProps";
import { StyledTextProps } from "./types";

export const StyledText = styled.p<StyledTextProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.main0};
  text-decoration: underline;
`;

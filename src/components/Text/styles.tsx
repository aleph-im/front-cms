import styled from "styled-components";
import { calculateResponsiveCss } from "@/utils/cssEditableProps";
import { TextProps } from "@/types/TextProps";

export const StyledText = styled.p<TextProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

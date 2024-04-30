import styled from "styled-components";
import { calculateResponsiveCss } from "@/utils/cssEditableProps";
import { StyledTextProps } from "./types";

export const StyledText = styled.p<StyledTextProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

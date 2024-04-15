import styled, { css } from "styled-components";
import { SectionProps } from "./types";
import { calculateCssEditableProps } from "@/hooks/calculateCssEditableProps";

export const StyledSection = styled.div<SectionProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateCssEditableProps(theme, cssEditableProps);
  }}
`;

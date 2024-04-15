import styled, { css } from "styled-components";
import { SectionProps } from "./types";
import { calculateCssEditableProps } from "@/hooks/calculateCssEditableProps";

export const StyledSection = styled.section<SectionProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateCssEditableProps(theme, cssEditableProps);
  }}
`;

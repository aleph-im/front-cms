import styled from "styled-components";
import { BoxProps } from "./types";
import { calculateCssEditableProps } from "@/hooks/calculateCssEditableProps";

export const StyledBox = styled.div<BoxProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateCssEditableProps(theme, cssEditableProps);
  }}
`;

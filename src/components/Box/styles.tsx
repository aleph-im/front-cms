import styled from "styled-components";
import { BoxProps } from "./types";
import { calculateResponsiveCss } from "@/utils/cssEditableProps";

export const StyledBox = styled.div<BoxProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

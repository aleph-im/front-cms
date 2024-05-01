import styled from "styled-components";
import { TextGradientProps } from "./types";
import { calculateResponsiveCss } from "@/utils/cssEditableProps";
import { TextGradient } from "@aleph-front/core";

export const StyledTextGradient = styled(TextGradient)<TextGradientProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

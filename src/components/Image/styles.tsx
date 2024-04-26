import styled, { css } from "styled-components";
import { ImageProps } from "./types";
import { calculateResponsiveCss } from "@/utils/cssEditableProps";

export const StyledImage = styled.img<ImageProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

import styled from "styled-components";
import { StyledButtonProps } from "./types";
import { calculateResponsiveCss } from "@/utils/cssEditableProps";
import { Button } from "@aleph-front/core";

export const StyledButton = styled(Button)<StyledButtonProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

import styled from "styled-components";
import { ButtonProps } from "./types";
import { calculateResponsiveCss } from "@/utils/cssEditableProps";
import { Button } from "@aleph-front/core";

export const StyledButton = styled(Button)<ButtonProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

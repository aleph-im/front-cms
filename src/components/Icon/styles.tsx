import { calculateResponsiveCss } from "@/utils/cssEditableProps";
import { Icon } from "@aleph-front/core";
import styled from "styled-components";
import { IconProps } from "./types";

export const StyledIcon = styled(Icon)<IconProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

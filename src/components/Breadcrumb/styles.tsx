import styled from "styled-components";
import { StyledBreadcrumbProps } from "./types";
import { calculateResponsiveCss } from "@/utils/cssEditableProps";
import { Breadcrumb } from "@aleph-front/core";

export const StyledBreadcrumb = styled(Breadcrumb)<StyledBreadcrumbProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

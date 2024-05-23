import styled from "styled-components";
import { BlogBreadcrumbProps } from "./types";
import { calculateResponsiveCss } from "@/utils/cssEditableProps";
import { Breadcrumb } from "@aleph-front/core";

export const StyledBlogBreadcrumb = styled(Breadcrumb)<BlogBreadcrumbProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

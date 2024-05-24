import styled from "styled-components";
import { BlogArticleBreadcrumbProps } from "./types";
import { calculateResponsiveCss } from "@/utils/cssEditableProps";
import { Breadcrumb } from "@aleph-front/core";

export const StyledBlogArticleBreadcrumb = styled(
  Breadcrumb
)<BlogArticleBreadcrumbProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

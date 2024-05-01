import styled from "styled-components";
import { ColumnProps } from "./types";
import { calculateResponsiveCss } from "@/utils/cssEditableProps";
import { Col } from "@aleph-front/core";

export const StyledColumn = styled(Col)<ColumnProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

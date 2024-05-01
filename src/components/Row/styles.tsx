import styled from "styled-components";
import { RowProps } from "./types";
import { calculateResponsiveCss } from "@/utils/cssEditableProps";
import { Row } from "@aleph-front/core";

export const StyledRow = styled(Row)<RowProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

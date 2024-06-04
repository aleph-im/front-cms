import styled from "styled-components";
import { TextGradientProps } from "./types";
import { calculateResponsiveCss } from "@/utils/cssEditableProps";
import { TextGradient } from "@aleph-front/core";

export const StyledTextGradient: any = styled(TextGradient).attrs(
  (props: TextGradientProps) => {
    return {
      ...props,
      forwardedAs: props.forwardedAs,
      type: props.type,
      color: props.color,
    };
  }
)<TextGradientProps>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

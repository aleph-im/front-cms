import { calculateResponsiveCss } from "@/utils/cssEditableProps";
import { TextGradient } from "@aleph-front/core";
import styled from "styled-components";
import { H2Props } from "./types";

export const StyledH2 = styled(TextGradient).attrs((props) => {
  return {
    ...props,
    forwardedAs: "h2",
    type: props.type || "h5",
    color: props.color || "main0",
  };
})<H2Props>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

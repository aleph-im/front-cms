import { calculateResponsiveCss } from "@/utils/cssEditableProps";
import { TextGradient } from "@aleph-front/core";
import styled from "styled-components";
import { H1Props } from "./types";

export const StyledH1 = styled(TextGradient).attrs((props) => {
  return {
    ...props,
    forwardedAs: "h1",
    type: props.type || "h5",
    color: props.color || "main1",
  };
})<H1Props>`
  ${({ theme, ...cssEditableProps }) => {
    return calculateResponsiveCss(theme, cssEditableProps);
  }}
`;

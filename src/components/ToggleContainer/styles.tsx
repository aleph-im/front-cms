import { Icon, NoisyContainerProps } from "@aleph-front/core";
import styled, { css } from "styled-components";
import tw from "twin.macro";

export type StyledContainerProps = {
  $type?: NoisyContainerProps["type"];
  $animation?: NoisyContainerProps["animation"];
};

export const StyledPlainContainer = styled.div<StyledContainerProps>`
  ${({ theme, $animation = 50000 }) => {
    const { borderRadius } = theme.component.noisyContainer;

    return css`
      ${tw`p-6`}
      border-radius: ${borderRadius}rem;

      &&::after {
        ${$animation
          ? css`
              animation-duration: ${$animation}ms;
            `
          : css`
              animation: none;
            `}
      }
    `;
  }}
  ${tw`p-6`}
`;

export const StyledTitle = styled.p`
  cursor: pointer;
`;

export type StyledIconProps = {
  $isOpen: boolean;
};

export const StyledIcon = styled(Icon).attrs((props) => {
  return { ...props, name: "angle-down", size: "lg" };
})<StyledIconProps>`
  ${({ theme, $isOpen }) => css`
    ${tw`p-1 cursor-pointer`}
    width: 1em;
    background-color: ${theme.color.text};
    color: ${theme.color.purple2};
    transform: rotate(${$isOpen ? 180 : 0}deg);

    transition-property: opacity, visibility, transform;
    transition-duration: ${theme.transition.duration.normal}ms;
    transition-timing-function: ${theme.transition.timing};
  `}
`;

export const StyledToggleContainer = styled.div<{ $height?: string }>`
  ${tw`transition-all duration-700 overflow-hidden`}
  height: ${({ $height }) => $height};
`;

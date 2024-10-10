import { addClasses, Icon, NoisyContainerProps } from "@aleph-front/core";
import styled, { css } from "styled-components";
import tw from "twin.macro";

export type StyledToggleContainerProps = {
  $animation?: NoisyContainerProps["animation"];
  noisy?: boolean;
};

export const StyledToggleContainer = styled.div.attrs<StyledToggleContainerProps>(
  ({ noisy, ...props }) => {
    return noisy ? addClasses("fx-grain-3")(props) : props;
  }
)<StyledToggleContainerProps>`
  ${({ theme, $animation = 50000 }) => {
    const { borderRadius } = theme.component.noisyContainer;

    return css`
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
`;

export const StyledToggleBar = styled.div`
  ${tw`flex justify-between items-center gap-x-6 p-6 cursor-pointer`}
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

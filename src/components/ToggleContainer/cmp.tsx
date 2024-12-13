import { ToggleContainer as CoreToggleContainer } from "@aleph-front/core";
import { ToggleContainerProps } from "./types";
import { memo, useCallback, useState } from "react";
import { StyledIcon, StyledToggleBar, StyledToggleContainer } from "./styles";
import Text from "../Text";

export const ToggleContainer = ({
  titleText,
  titleClosedStyles,
  titleOpenedStyles = titleClosedStyles,
  backgroundColor,
  children,
}: ToggleContainerProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(
    () => setOpen((prev) => !prev),
    [setOpen]
  );

  const textProps = open ? titleOpenedStyles : titleClosedStyles;
  return (
    <StyledToggleContainer $backgroundColor={backgroundColor}>
      <StyledToggleBar onClick={handleClickOpen}>
        <Text {...textProps}>{titleText}</Text>
        <StyledIcon $isOpen={open} />
      </StyledToggleBar>
      <CoreToggleContainer open={open} shouldUnmount={!open}>
        <div tw="pt-10 p-6">{children}</div>
      </CoreToggleContainer>
    </StyledToggleContainer>
  );
};
ToggleContainer.displayName = "ToggleContainer";

export default memo(ToggleContainer) as typeof ToggleContainer;

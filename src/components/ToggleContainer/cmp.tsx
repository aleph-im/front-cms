import {
  ToggleContainer as CoreToggleContainer,
  NoisyContainer,
} from "@aleph-front/core";
import { ToggleContainerProps } from "./types";
import { memo, useCallback, useState } from "react";
import { StyledIcon, StyledPlainContainer, StyledTitle } from "./styles";
import Text from "../Text";

export const ToggleContainer = ({
  titleText,
  titleClosedStyles,
  titleOpenedStyles = titleClosedStyles,
  noisyContainer,
  children,
}: ToggleContainerProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(
    () => setOpen((prev) => !prev),
    [setOpen]
  );

  const Container = noisyContainer ? NoisyContainer : StyledPlainContainer;
  const textProps = open ? titleOpenedStyles : titleClosedStyles;
  return (
    <Container>
      <div tw="flex justify-between items-center gap-x-6">
        <div onClick={handleClickOpen}>
          <Text {...textProps}>{titleText}</Text>
        </div>
        <StyledIcon
          {...{
            $isOpen: open,
            onClick: handleClickOpen,
          }}
        />
      </div>
      <CoreToggleContainer open={open} shouldUnmount={!open}>
        <div tw="pt-10 pb-6">{children}</div>
      </CoreToggleContainer>
    </Container>
  );
};
ToggleContainer.displayName = "ToggleContainer";

export default memo(ToggleContainer) as typeof ToggleContainer;

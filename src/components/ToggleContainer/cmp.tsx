import { ToggleContainer as CoreToggleContainer } from "@aleph-front/core";
import { ToggleContainerProps } from "./types";
import { memo, useCallback, useState } from "react";
import { StyledIcon, StyledTitle } from "./styles";

export const ToggleContainer = ({ title, children }: ToggleContainerProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(
    () => setOpen((prev) => !prev),
    [setOpen]
  );

  return (
    <>
      <div tw="flex justify-between items-center gap-x-6">
        <StyledTitle
          className={"tp-body3 " + (open ? " text-main0" : "text-base2")}
          onClick={handleClickOpen}
        >
          {title}
        </StyledTitle>
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
    </>
  );
};
ToggleContainer.displayName = "ToggleContainer";

export default memo(ToggleContainer) as typeof ToggleContainer;

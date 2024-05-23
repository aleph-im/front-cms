import { TEXT_INPUTS } from "./builderInputs";

export const DEFAULT_PROPS = {
  inputs: [],
  defaultStyles: {},
};

export const TEXT_PROPS = {
  ...DEFAULT_PROPS,
  inputs: TEXT_INPUTS,
  canHaveChildren: true,
  defaultStyles: {
    whiteSpace: "pre-wrap",
  },
};

export const HIDDEN_FROM_EDITOR_PROPS = {
  ...DEFAULT_PROPS,
  override: true,
  hideFromInsertMenu: true,
};

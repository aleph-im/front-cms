import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import ToggleContainer from ".";

Builder.registerComponent(withChildren(ToggleContainer), {
  ...DEFAULT_PROPS,
  name: "Toggle Container",
  canHaveChildren: true,
  inputs: [
    ...DEFAULT_PROPS.inputs,
    { name: "title", type: "string", defaultValue: "Toggle Container" },
  ],
});

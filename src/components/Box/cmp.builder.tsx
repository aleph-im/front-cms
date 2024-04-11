import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import { CSS_EDITABLE_INPUTS } from "@/constants/builderInputs";
import Box from ".";

Builder.registerComponent(withChildren(Box), {
  ...DEFAULT_PROPS,
  name: "Custom Box",
  canHaveChildren: true,
  inputs: [
    ...CSS_EDITABLE_INPUTS,
    {
      name: "backgroundColor",
      type: "string",
      enum: ["bg-base0", "bg-base1"],
    },
  ],
});

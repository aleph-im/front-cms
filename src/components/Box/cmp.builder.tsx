import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import { CSS_EDITABLE_INPUTS } from "@/constants/builderInputs";
import { BACKGROUND_COLORS } from "@/constants/builderEnums";
import Box from ".";

Builder.registerComponent(withChildren(Box), {
  ...DEFAULT_PROPS,
  name: "Custom Box",
  canHaveChildren: true,
  inputs: [
    {
      name: "component",
      type: "string",
      defaultValue: "Custom Box",
      enum: ["Custom Box"],
    },
    ...CSS_EDITABLE_INPUTS,
  ],
});

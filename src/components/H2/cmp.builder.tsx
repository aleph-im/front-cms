import { Builder, withChildren } from "@builder.io/react";
import { TEXT_PROPS } from "@/constants/builderProps";
import { COLORS } from "@/constants/builderEnums";
import H2 from ".";
import { CSS_EDITABLE_INPUTS_ADVANCED } from "@/constants/builderInputs";

Builder.registerComponent(withChildren(H2), {
  ...TEXT_PROPS,
  name: "H2",
  inputs: [
    {
      name: "component",
      type: "string",
      defaultValue: "H2",
      enum: ["H2"],
    },
    ...TEXT_PROPS.inputs,
    {
      name: "color",
      type: "string",
      enum: COLORS,
    },
    ...CSS_EDITABLE_INPUTS_ADVANCED,
  ],
});

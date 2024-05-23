import { Builder, withChildren } from "@builder.io/react";
import { TEXT_PROPS } from "@/constants/builderProps";
import { COLORS } from "@/constants/builderEnums";
import H1 from ".";
import { CSS_EDITABLE_INPUTS_ADVANCED } from "@/constants/builderInputs";

Builder.registerComponent(withChildren(H1), {
  ...TEXT_PROPS,
  name: "H1",
  inputs: [
    ...TEXT_PROPS.inputs,
    {
      name: "color",
      type: "string",
      enum: COLORS,
    },
    ...CSS_EDITABLE_INPUTS_ADVANCED,
  ],
});

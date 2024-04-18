import { Builder } from "@builder.io/react";
import { TEXT_PROPS } from "@/constants/builderProps";
import { COLORS } from "@/constants/builderEnums";
import H2 from ".";

Builder.registerComponent(H2, {
  ...TEXT_PROPS,
  name: "H2",
  inputs: [
    ...TEXT_PROPS.inputs,
    {
      name: "color",
      type: "string",
      enum: COLORS,
    },
  ],
});

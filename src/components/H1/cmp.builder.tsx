import { Builder } from "@builder.io/react";
import { TEXT_PROPS } from "@/constants/builderProps";
import { COLORS } from "@/constants/builderEnums";
import H1 from ".";

Builder.registerComponent(H1, {
  ...TEXT_PROPS,
  name: "H1",
  inputs: [
    ...TEXT_PROPS.inputs,
    {
      name: "color",
      type: "string",
      enum: COLORS,
    },
  ],
});

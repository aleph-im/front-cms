import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import Section from ".";

Builder.registerComponent(withChildren(Section), {
  ...DEFAULT_PROPS,
  name: "Core:Section",
  override: true,
  canHaveChildren: true,
  inputs: [
    ...DEFAULT_PROPS.inputs,
    {
      name: "effects",
      type: "string",
      enum: ["", "fx-grain-1", "fx-grain-2"],
    },
  ],
});

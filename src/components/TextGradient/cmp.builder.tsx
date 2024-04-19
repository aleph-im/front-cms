import { Builder, withChildren } from "@builder.io/react";
import { TEXT_PROPS } from "@/constants/builderProps";
import TextGradient from ".";
import { COLORS } from "@/constants/builderEnums";

Builder.registerComponent(TextGradient, {
  ...TEXT_PROPS,
  name: "TextGradient",
  inputs: [
    ...TEXT_PROPS.inputs,
    {
      name: "color",
      type: "string",
      enum: COLORS,
      defaultValue: "text",
    },
    {
      name: "as",
      type: "string",
      enum: ["", "h1", "h2", "h3"],
    },
  ],
});

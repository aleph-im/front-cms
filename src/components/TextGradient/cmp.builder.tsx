import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_TEXT_PROPS } from "@/constants/builderProps";
import TextGradient from ".";
import { COLORS } from "@/constants/enums";

Builder.registerComponent(TextGradient, {
  ...DEFAULT_TEXT_PROPS,
  name: "TextGradient",
  inputs: [
    ...DEFAULT_TEXT_PROPS.inputs,
    {
      name: "color",
      type: "string",
      enum: COLORS,
      defaultValue: "text",
    },
    {
      name: "type",
      type: "string",
      enum: ["h1", "h2"],
      defaultValue: "h1",
    },
    {
      name: "as",
      type: "string",
      enum: ["h1"],
    },
    {
      name: "size",
      type: "number",
    },
  ],
});

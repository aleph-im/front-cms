import { Builder, withChildren } from "@builder.io/react";
import { TEXT_PROPS } from "@/constants/builderProps";
import TextGradient from ".";
import { COLORS, TYPE_ELEMENTS } from "@/constants/builderEnums";
import { CSS_EDITABLE_INPUTS_ADVANCED } from "@/constants/builderInputs";

Builder.registerComponent(withChildren(TextGradient), {
  ...TEXT_PROPS,
  name: "TextGradient",
  inputs: [
    {
      name: "component",
      type: "string",
      defaultValue: "Text Gradient",
      enum: ["Text Gradient"],
    },
    ...TEXT_PROPS.inputs,
    {
      name: "color",
      type: "string",
      enum: COLORS,
      defaultValue: "text",
    },
    {
      name: "forwardedAs",
      type: "string",
      enum: TYPE_ELEMENTS,
    },
    ...CSS_EDITABLE_INPUTS_ADVANCED,
  ],
});

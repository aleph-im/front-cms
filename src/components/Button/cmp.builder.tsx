import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import { COLORS } from "@/constants/builderEnums";
import { CSS_EDITABLE_INPUTS_ADVANCED } from "@/constants/builderInputs";
import Button from ".";

Builder.registerComponent(withChildren(Button), {
  ...DEFAULT_PROPS,
  name: "Core:Button",
  canHaveChildren: true,
  noWrap: true,
  inputs: [
    ...DEFAULT_PROPS.inputs,
    {
      name: "children",
      friendlyName: "Text content",
      helperText: "Press Enter to add a line break",
      type: "longText",
    },
    {
      name: "href",
      friendlyName: "Link",
      type: "string",
    },
    {
      name: "forwardedAs",
      friendlyName: "Tag as",
      type: "string",
      enum: ["button", "a"],
    },
    {
      name: "target",
      type: "string",
      enum: ["_self", "_blank"],
      defaultValue: "_self",
    },
    {
      name: "kind",
      type: "string",
      enum: ["gradient", "yellow", "functional", "neon"],
    },
    {
      name: "variant",
      type: "string",
      enum: ["primary", "secondary", "tertiary", "textOnly"],
    },
    {
      name: "size",
      type: "string",
      enum: ["sm", "md", "lg"],
    },
    {
      name: "color",
      type: "string",
      enum: COLORS,
    },
    {
      name: "disabled",
      type: "boolean",
    },
    ...CSS_EDITABLE_INPUTS_ADVANCED,
  ],
});

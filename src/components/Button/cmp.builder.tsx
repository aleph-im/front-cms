import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import { Button } from "@aleph-front/core";
import { COLORS } from "@/constants/builderEnums";

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
      name: "kind",
      type: "string",
      enum: ["gradient", "yellow", "functional"],
    },
    {
      name: "variant",
      type: "string",
      enum: ["primary", "secondary", "tertiary"],
    },
    {
      name: "size",
      type: "string",
      enum: ["sm", "md", "lg"],
    },
    {
      name: "as",
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
      name: "color",
      type: "string",
      enum: COLORS,
    },
    {
      name: "hover",
      type: "boolean",
    },
    {
      name: "active",
      type: "boolean",
    },
    {
      name: "focus",
      type: "boolean",
    },
    {
      name: "disabled",
      type: "boolean",
    },
  ],
});

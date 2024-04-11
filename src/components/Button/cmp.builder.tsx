import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import { Button } from "@aleph-front/core";

Builder.registerComponent(withChildren(Button), {
  ...DEFAULT_PROPS,
  name: "Button",
  canHaveChildren: true,
  inputs: [
    ...DEFAULT_PROPS.inputs,
    {
      name: "children",
      type: "longText",
    },
    {
      name: "href",
      type: "string",
    },
    {
      name: "kind",
      type: "string",
    },
    {
      name: "variant",
      type: "string",
    },
    {
      name: "size",
      type: "string",
      enum: ["sm", "md", "lg"],
    },
    {
      name: "color",
      type: "string",
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
  ],
});

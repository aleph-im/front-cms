import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import Icon from ".";
import { CSS_EDITABLE_INPUTS_ADVANCED } from "@/constants/builderInputs";
import { ICONS } from "@/constants/builderEnums";

Builder.registerComponent(withChildren(Icon), {
  ...DEFAULT_PROPS,
  name: "Icon",
  canHaveChildren: true,
  inputs: [
    {
      name: "component",
      type: "string",
      defaultValue: "Icon",
      enum: ["Icon"],
    },
    ...DEFAULT_PROPS.inputs,
    {
      name: "name",
      type: "string",
      enum: ICONS,
      required: true,
    },
    {
      name: "size",
      type: "string",
      enum: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
    {
      name: "prefix",
      type: "string",
      enum: ["fass", "far", "fab", "custom"],
    },
    ...CSS_EDITABLE_INPUTS_ADVANCED,
  ],
});

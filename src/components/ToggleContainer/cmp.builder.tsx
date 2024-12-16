import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS, TEXT_PROPS } from "@/constants/builderProps";
import ToggleContainer from ".";
import { CSS_EDITABLE_INPUTS_ADVANCED } from "@/constants/builderInputs";
import { filteredTextInputs } from "../Text/cmp.builder";
import { BACKGROUND_COLORS } from "@/constants/builderEnums";

Builder.registerComponent(withChildren(ToggleContainer), {
  ...DEFAULT_PROPS,
  name: "Toggle Container",
  canHaveChildren: true,
  inputs: [
    {
      name: "component",
      type: "string",
      defaultValue: "Toggle Container",
      enum: ["Toggle Container"],
    },
    ...DEFAULT_PROPS.inputs,
    {
      name: "backgroundColor",
      type: "string",
      enum: BACKGROUND_COLORS,
    },
    {
      name: "titleText",
      type: "richText",
      defaultValue: "Toggle container title",
    },
    {
      name: "titleClosedStyles",
      friendlyName: "Title styles when closed",
      type: "object",
      subFields: [...filteredTextInputs, ...CSS_EDITABLE_INPUTS_ADVANCED],
    },
    {
      name: "titleOpenedStyles",
      friendlyName: "Title styles when opened",
      type: "object",
      subFields: [...filteredTextInputs, ...CSS_EDITABLE_INPUTS_ADVANCED],
    },
  ],
});

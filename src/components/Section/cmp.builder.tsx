import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import Section from ".";
import { CSS_EDITABLE_INPUTS } from "@/constants/builderInputs";
import { EFFECTS } from "@/constants/builderEnums";

Builder.registerComponent(withChildren(Section), {
  ...DEFAULT_PROPS,
  name: "Core:Section",
  override: true,
  canHaveChildren: true,
  inputs: [
    {
      name: "component",
      type: "string",
      defaultValue: "Section",
      enum: ["Section"],
    },
    {
      name: "effects",
      type: "string",
      enum: EFFECTS,
    },
    {
      name: "id",
      type: "string",
    },
    ...CSS_EDITABLE_INPUTS.filter((input) => input.name !== "backgroundColor"),
  ],
});

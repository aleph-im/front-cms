import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import ThemeBox from ".";

Builder.registerComponent(withChildren(ThemeBox), {
  ...DEFAULT_PROPS,
  name: "Theme Box",
  canHaveChildren: true,
  noWrap: true,
  inputs: [
    ...DEFAULT_PROPS.inputs,
    {
      name: "theme",
      type: "string",
      required: true,
      enum: ["twentysix", "aleph"],
      defaultValue: "twentysix",
    },
  ],
});

import { Builder } from "@builder.io/react";
import { DEFAULT_TEXT_PROPS } from "@/constants/builderProps";
import { TYPO_KIND } from "@/constants/enums";
import H2 from ".";

Builder.registerComponent(H2, {
  ...DEFAULT_TEXT_PROPS,
  name: "H2",
  inputs: [
    ...DEFAULT_TEXT_PROPS.inputs,
    {
      name: "color",
      type: "string",
    },
    {
      name: "type",
      type: "string",
      enum: TYPO_KIND,
    },
  ],
});

import { Builder } from "@builder.io/react";
import { DEFAULT_TEXT_PROPS } from "@/constants/builderProps";
import H1 from ".";
import { TYPO_KIND } from "@/constants/enums";

Builder.registerComponent(H1, {
  ...DEFAULT_TEXT_PROPS,
  name: "H1",
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

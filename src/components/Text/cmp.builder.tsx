import { Builder } from "@builder.io/react";
import { DEFAULT_TEXT_PROPS } from "@/constants/builderProps";
import Text from ".";

Builder.registerComponent(Text, {
  ...DEFAULT_TEXT_PROPS,
  name: "Text",
  inputs: [...DEFAULT_TEXT_PROPS.inputs],
});

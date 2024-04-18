import { Builder } from "@builder.io/react";
import { TEXT_PROPS } from "@/constants/builderProps";
import Text from ".";

Builder.registerComponent(Text, {
  ...TEXT_PROPS,
  name: "Text",
  inputs: [...TEXT_PROPS.inputs],
});

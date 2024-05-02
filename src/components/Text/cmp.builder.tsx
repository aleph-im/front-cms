import { Builder } from "@builder.io/react";
import { TEXT_PROPS } from "@/constants/builderProps";
import Text from ".";
import { CSS_EDITABLE_INPUTS_ADVANCED } from "@/constants/builderInputs";

Builder.registerComponent(Text, {
  ...TEXT_PROPS,
  name: "Text",
  inputs: [...TEXT_PROPS.inputs, ...CSS_EDITABLE_INPUTS_ADVANCED],
});

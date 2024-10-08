import { Builder, withChildren } from "@builder.io/react";
import { TEXT_PROPS } from "@/constants/builderProps";
import Text from ".";
import { CSS_EDITABLE_INPUTS_ADVANCED } from "@/constants/builderInputs";

export const filteredTextInputs = TEXT_PROPS.inputs.filter((input) => {
  return input.name !== "children";
});

Builder.registerComponent(withChildren(Text), {
  ...TEXT_PROPS,
  name: "Text",
  inputs: [
    {
      name: "children",
      friendlyName: "Text content",
      type: "richText",
    },
    ...filteredTextInputs,
    ...CSS_EDITABLE_INPUTS_ADVANCED,
  ],
});

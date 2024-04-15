import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import { CSS_EDITABLE_INPUTS } from "@/constants/builderInputs";
import Container from ".";

Builder.registerComponent(withChildren(Container), {
  ...DEFAULT_PROPS,
  name: "Container",
  canHaveChildren: true,
  inputs: [...CSS_EDITABLE_INPUTS],
});

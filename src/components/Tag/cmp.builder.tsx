import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import { Tag } from "@aleph-front/core";
import { CSS_EDITABLE_INPUTS_ADVANCED } from "@/constants/builderInputs";

Builder.registerComponent(withChildren(Tag), {
  ...DEFAULT_PROPS,
  name: "Tag",
  canHaveChildren: true,
  inputs: [...DEFAULT_PROPS.inputs, ...CSS_EDITABLE_INPUTS_ADVANCED],
});

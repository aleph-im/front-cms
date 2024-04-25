import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import { Tag } from "@aleph-front/core";

Builder.registerComponent(withChildren(Tag), {
  ...DEFAULT_PROPS,
  name: "Tag",
  canHaveChildren: true,
  inputs: [...DEFAULT_PROPS.inputs],
});

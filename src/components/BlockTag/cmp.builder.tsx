import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import BlockTag from ".";

Builder.registerComponent(BlockTag, {
  ...DEFAULT_PROPS,
  name: "Block Tag",
  noWrap: true,
  inputs: [
    {
      name: "component",
      type: "string",
      defaultValue: "Block Tag",
      enum: ["Block Tag"],
    },
    ...DEFAULT_PROPS.inputs,
    {
      name: "title",
      type: "string",
    },
    {
      name: "content",
      type: "string",
    },
  ],
});

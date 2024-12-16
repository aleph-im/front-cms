import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import BlogTags from ".";

Builder.registerComponent(BlogTags, {
  ...DEFAULT_PROPS,
  name: "Blog - Tags",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fd72545ec06f647d993e1349bf57ebd7f%2Ffd9c99abfd534bbf9ebc839eed5acfd1",
  inputs: [
    {
      name: "component",
      type: "string",
      defaultValue: "Blog - Tags",
      enum: ["Blog - Tags"],
    },
    ...DEFAULT_PROPS.inputs,
    {
      name: "amount",
      type: "number",
      defaultValue: 10,
    },
  ],
});

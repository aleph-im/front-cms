import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import BlogCategories from ".";

Builder.registerComponent(BlogCategories, {
  ...DEFAULT_PROPS,
  name: "Blog - Categories Filter",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fd72545ec06f647d993e1349bf57ebd7f%2Ffd9c99abfd534bbf9ebc839eed5acfd1",
  inputs: [
    {
      name: "component",
      type: "string",
      defaultValue: "Blog - Categories Filter",
      enum: ["Blog - Categories Filter"],
    },
    ...DEFAULT_PROPS.inputs,
  ],
});

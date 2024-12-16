import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import HighlightedBlogArticle from ".";

Builder.registerComponent(HighlightedBlogArticle, {
  ...DEFAULT_PROPS,
  name: "Blog - Highlighted Article",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fd72545ec06f647d993e1349bf57ebd7f%2Ffd9c99abfd534bbf9ebc839eed5acfd1",
  inputs: [
    {
      name: "component",
      type: "string",
      defaultValue: "Blog - Highlighted Article",
      enum: ["Blog - Highlighted Article"],
    },
    ...DEFAULT_PROPS.inputs,
  ],
});

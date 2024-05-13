import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import HighlightedBlogArticle from ".";

Builder.registerComponent(HighlightedBlogArticle, {
  ...DEFAULT_PROPS,
  name: "Blog - Highlighted Article",
  inputs: [...DEFAULT_PROPS.inputs],
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fd72545ec06f647d993e1349bf57ebd7f%2Ffd9c99abfd534bbf9ebc839eed5acfd1",
});

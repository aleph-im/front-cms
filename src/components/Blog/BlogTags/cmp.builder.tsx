import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import BlogTags from ".";

Builder.registerComponent(BlogTags, {
  ...DEFAULT_PROPS,
  name: "Blog Tags",
});

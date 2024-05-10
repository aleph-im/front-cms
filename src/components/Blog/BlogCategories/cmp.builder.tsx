import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import BlogCategories from ".";

Builder.registerComponent(BlogCategories, {
  ...DEFAULT_PROPS,
  name: "Blog Categories",
});

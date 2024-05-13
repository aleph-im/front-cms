import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import LatestBlogArticles from ".";

Builder.registerComponent(LatestBlogArticles, {
  ...DEFAULT_PROPS,
  name: "Latest Blog Articles",
  inputs: [
    ...DEFAULT_PROPS.inputs,
    {
      name: "articleSize",
      type: "string",
      enum: ["md", "lg", "xl", "full"],
    },
    {
      name: "articlesAmount",
      type: "number",
    },
  ],
});

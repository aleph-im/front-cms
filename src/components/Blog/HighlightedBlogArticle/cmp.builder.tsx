import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import HighlightedBlogArticle from ".";

Builder.registerComponent(HighlightedBlogArticle, {
  ...DEFAULT_PROPS,
  name: "Highlighted Blog Article",
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

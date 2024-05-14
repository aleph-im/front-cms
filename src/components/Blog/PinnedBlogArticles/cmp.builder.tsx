import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import PinnedBlogArticles from ".";

Builder.registerComponent(PinnedBlogArticles, {
  ...DEFAULT_PROPS,
  name: "Blog - Pinned Articles",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fd72545ec06f647d993e1349bf57ebd7f%2Ffd9c99abfd534bbf9ebc839eed5acfd1",
  inputs: [
    ...DEFAULT_PROPS.inputs,
    {
      name: "articlesAmount",
      type: "number",
      defaultValue: 8,
    },
    {
      name: "articleSize",
      type: "string",
      enum: ["md", "lg", "xl", "full"],
      defaultValue: "md",
    },
  ],
});

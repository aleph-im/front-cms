import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import LatestBlogArticles from ".";

Builder.registerComponent(LatestBlogArticles, {
  ...DEFAULT_PROPS,
  name: "Blog - Latest Articles",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fd72545ec06f647d993e1349bf57ebd7f%2Ffd9c99abfd534bbf9ebc839eed5acfd1",
  inputs: [
    {
      name: "component",
      type: "string",
      defaultValue: "Blog - Latest Articles",
      enum: ["Blog - Latest Articles"],
    },
    ...DEFAULT_PROPS.inputs,
    {
      name: "articleSize",
      type: "string",
      enum: ["md", "lg", "xl", "full"],
      defaultValue: "lg",
    },
    {
      name: "articlesAmount",
      type: "number",
      defaultValue: 2,
    },
  ],
});

import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import AllBlogArticles from ".";

Builder.registerComponent(AllBlogArticles, {
  ...DEFAULT_PROPS,
  name: "Blog - Articles Grid",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fd72545ec06f647d993e1349bf57ebd7f%2Ffd9c99abfd534bbf9ebc839eed5acfd1",
  inputs: [
    ...DEFAULT_PROPS.inputs,
    {
      name: "articleSize",
      type: "string",
      enum: ["md", "lg", "xl", "full"],
    },
    {
      name: "articlesPerPage",
      type: "number",
    },
    {
      name: "allowLoadMore",
      type: "boolean",
      defaultValue: true,
    },
  ],
});

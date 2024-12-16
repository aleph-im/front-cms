import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import { CSS_EDITABLE_INPUTS_ADVANCED } from "@/constants/builderInputs";
import BlogArticlePublishingInformation from "./cmp";

Builder.registerComponent(BlogArticlePublishingInformation, {
  ...DEFAULT_PROPS,
  name: "Blog - Article Publishing Information",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fd72545ec06f647d993e1349bf57ebd7f%2Ffd9c99abfd534bbf9ebc839eed5acfd1",
  inputs: [
    {
      name: "component",
      type: "string",
      defaultValue: "Blog - Article Publishing Information",
      enum: ["Blog - Article Publishing Information"],
    },
    ...DEFAULT_PROPS.inputs,
    {
      name: "variant",
      type: "string",
      defaultValue: "readTime",
      enum: ["readTime", "writtenBy"],
    },
  ],
});

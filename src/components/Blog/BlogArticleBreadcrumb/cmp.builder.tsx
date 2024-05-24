import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import BlogArticleBreadcrumb from ".";
import { CSS_EDITABLE_INPUTS_ADVANCED } from "@/constants/builderInputs";

Builder.registerComponent(BlogArticleBreadcrumb, {
  ...DEFAULT_PROPS,
  name: "Blog - Article Breadcrumb",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fd72545ec06f647d993e1349bf57ebd7f%2Ffd9c99abfd534bbf9ebc839eed5acfd1",
  inputs: [...DEFAULT_PROPS.inputs, ...CSS_EDITABLE_INPUTS_ADVANCED],
});

import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import BlogBreadcrumb from ".";
import { CSS_EDITABLE_INPUTS_ADVANCED } from "@/constants/builderInputs";

Builder.registerComponent(BlogBreadcrumb, {
  ...DEFAULT_PROPS,
  name: "Blog - Breadcrumb",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fd72545ec06f647d993e1349bf57ebd7f%2Ffd9c99abfd534bbf9ebc839eed5acfd1",
  inputs: [
    {
      name: "component",
      type: "string",
      defaultValue: "Blog - Breadcrumb",
      enum: ["Blog - Breadcrumb"],
    },
    ...DEFAULT_PROPS.inputs,
    ...CSS_EDITABLE_INPUTS_ADVANCED,
  ],
});

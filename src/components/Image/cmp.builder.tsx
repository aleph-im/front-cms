import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import { CSS_EDITABLE_INPUTS } from "@/constants/builderInputs";
import Image from ".";

Builder.registerComponent(Image, {
  ...DEFAULT_PROPS,
  name: "Image",
  override: true,
  noWrap: true,
  inputs: [
    {
      name: "src",
      type: "file",
      bubble: true,
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      required: true,
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a",
    },
    {
      name: "alt",
      type: "string",
      helperText: "Text to display when the user has images off",
    },
    ...CSS_EDITABLE_INPUTS,
  ],
});

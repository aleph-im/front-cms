import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import CardWithSideImage from ".";
import { BACKGROUND_COLORS } from "@/constants/builderEnums";

Builder.registerComponent(withChildren(CardWithSideImage), {
  ...DEFAULT_PROPS,
  name: "CardWithSideImage",
  canHaveChildren: true,
  inputs: [
    ...DEFAULT_PROPS.inputs,
    {
      name: "imageSrc",
      type: "file",
      bubble: true,
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      required: true,
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a",
    },
    {
      name: "ImageAlt",
      type: "string",
      helperText: "Text to display when the user has images off",
    },
    {
      name: "imagePosition",
      type: "string",
      enum: ["left", "right"],
      defaultValue: "left",
    },
    {
      name: "cardBackgroundColor",
      type: "string",
      enum: BACKGROUND_COLORS,
      defaultValue: "bg-base0",
    },
    {
      name: "reverseColumnsWhenStacked",
      type: "boolean",
      defaultValue: false,
      helperText:
        "When stacking columns for mobile devices, reverse the ordering",
    },
  ],
});

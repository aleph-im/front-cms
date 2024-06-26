import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import {
  ALIGN_ITEMS_VALUES,
  BACKGROUND_COLORS,
  JUSTIFY_CONTENT_VALUES,
} from "@/constants/builderEnums";
import { CardWithSideImage } from "@aleph-front/core";
type AlignProps =
  | "normal"
  | "stretch"
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "baseline"
  | "first baseline"
  | "last baseline"
  | "safe center"
  | "unsafe center"
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset";
type JustifyProps =
  | "normal"
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "left"
  | "right"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"
  | "safe center"
  | "unsafe center"
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset";

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
      name: "imageAlt",
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
      name: "alignCard",
      type: "string",
      enum: ALIGN_ITEMS_VALUES,
      defaultValue: "center",
    },
    {
      name: "justifyCard",
      type: "string",
      enum: JUSTIFY_CONTENT_VALUES,
      defaultValue: "center",
    },
    {
      name: "alignImage",
      type: "string",
      enum: ALIGN_ITEMS_VALUES,
      defaultValue: "center",
    },
    {
      name: "justifyImage",
      type: "string",
      enum: JUSTIFY_CONTENT_VALUES,
      defaultValue: "center",
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

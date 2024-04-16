import { Input } from "@builder.io/sdk";
import { REM_VALUES } from "./builderEnums";
import { DEFAULT_PROPS } from "./builderProps";

const responsiveField = ({
  name,
  style,
  value_type,
  values_enum,
  advanced = true,
}: {
  name: string;
  style: string;
  value_type: string;
  values_enum?: any[];
  advanced?: boolean;
}) => {
  return {
    name: name,
    type: "list",
    subFields: [
      {
        name: "breakpoint",
        type: "string",
        enum: ["", "xs", "sm", "md", "lg", "xl", "2xl"],
      },
      {
        name: "style",
        type: "string",
        defaultValue: style,
        hideFromUI: true,
        required: true,
      },
      {
        name: "value",
        type: value_type,
        required: true,
        enum: values_enum,
      },
    ],
    advanced: advanced,
  };
};

export const CSS_EDITABLE_INPUTS: Input[] = [
  ...DEFAULT_PROPS.inputs,
  responsiveField({
    name: "responsivePosition",
    style: "position",
    value_type: "string",
    values_enum: ["static", "relative", "absolute", "fixed", "sticky"],
    advanced: false,
  }),
  responsiveField({
    name: "responsiveDirection",
    style: "flex-direction",
    value_type: "string",
    values_enum: ["row", "column", "row-reverse", "column-reverse"],
    advanced: false,
  }),
  responsiveField({
    name: "responsiveAlignItems",
    style: "align-items",
    value_type: "string",
    values_enum: ["start", "end", "center"],
  }),
  responsiveField({
    name: "responsiveJustifyContent",
    style: "justify-content",
    value_type: "string",
    values_enum: ["start", "end", "center"],
  }),
  responsiveField({
    name: "responsiveWrap",
    style: "flex-wrap",
    value_type: "string",
    values_enum: ["nowrap", "wrap", "wrap-reverse"],
  }),
  responsiveField({
    name: "responsiveFlexBasis",
    style: "flex-basis",
    value_type: "string",
    values_enum: ["auto", "33.333333%", "25%", "50%"],
  }),
  responsiveField({
    name: "responsiveOpacity",
    style: "opacity",
    value_type: "string",
    values_enum: [
      "0",
      "0.1",
      "0.2",
      "0.3",
      "0.4",
      "0.5",
      "0.6",
      "0.7",
      "0.8",
      "0.9",
      "1",
    ],
  }),
  {
    name: "responsiveStyles",
    type: "list",
    subFields: [
      {
        name: "breakpoint",
        type: "string",
        enum: ["", "xs", "sm", "md", "lg", "xl", "2xl"],
      },
      {
        name: "style",
        type: "string",
        required: true,
        enum: [
          "margin",
          "margin-top",
          "margin-bottom",
          "margin-right",
          "margin-left",
          "padding",
          "padding-top",
          "padding-bottom",
          "padding-right",
          "padding-left",
          "gap",
          "width",
          "height",
        ],
      },
      {
        name: "value",
        type: "string",
        required: true,
        enum: REM_VALUES,
      },
    ],
  },
];

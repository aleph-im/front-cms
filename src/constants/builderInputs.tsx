import { Input } from "@builder.io/sdk";
import { PERCENTAGE_VALUES, REM_VALUES, TYPO_KIND } from "./builderEnums";

const responsiveStyleField = ({
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

const responsiveClassField = ({
  name,
  klass,
  value_type,
  values_enum,
  advanced = false,
}: {
  name: string;
  klass: string;
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
        name: "klass",
        type: "string",
        defaultValue: klass,
        hideFromUI: true,
        required: true,
      },
      {
        name: "value",
        type: value_type,
        enum: values_enum,
      },
    ],
    advanced: advanced,
  };
};

export const CSS_EDITABLE_INPUTS: Input[] = [
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
          "max-width",
          "min-width",
          "height",
          "max-height",
          "min-height",
          "top",
          "bottom",
          "left",
          "right",
        ],
      },
      {
        name: "value",
        type: "string",
        required: true,
        enum: Array.from(new Set([...REM_VALUES, ...PERCENTAGE_VALUES])),
      },
    ],
  },
  responsiveStyleField({
    name: "responsiveDisplay",
    style: "display",
    value_type: "string",
    values_enum: ["block", "inline", "flex"],
    advanced: false,
  }),
  responsiveStyleField({
    name: "responsivePosition",
    style: "position",
    value_type: "string",
    values_enum: ["static", "relative", "absolute", "fixed", "sticky"],
    advanced: false,
  }),
  responsiveStyleField({
    name: "responsiveDirection",
    style: "flex-direction",
    value_type: "string",
    values_enum: ["row", "column", "row-reverse", "column-reverse"],
    advanced: false,
  }),
  responsiveStyleField({
    name: "responsiveAlignItems",
    style: "align-items",
    value_type: "string",
    values_enum: ["start", "end", "center"],
  }),
  responsiveStyleField({
    name: "responsiveJustifyContent",
    style: "justify-content",
    value_type: "string",
    values_enum: ["start", "end", "center"],
  }),
  responsiveStyleField({
    name: "responsiveTextAlign",
    style: "text-align",
    value_type: "string",
    values_enum: ["start", "end", "left", "right", "center", "justify"],
  }),
  responsiveStyleField({
    name: "responsiveWrap",
    style: "flex-wrap",
    value_type: "string",
    values_enum: ["nowrap", "wrap", "wrap-reverse"],
  }),
  responsiveStyleField({
    name: "responsiveFlexBasis",
    style: "flex-basis",
    value_type: "string",
    values_enum: PERCENTAGE_VALUES,
  }),
  responsiveStyleField({
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
];

export const CSS_EDITABLE_INPUTS_ADVANCED = CSS_EDITABLE_INPUTS.map(
  (input) => ({
    ...input,
    advanced: true,
  })
);

export const TEXT_INPUTS: Input[] = [
  {
    name: "children",
    friendlyName: "Text content",
    helperText: "Press Enter to add a line break",
    type: "longText",
  },
  responsiveClassField({
    name: "responsiveTextType",
    klass: "text",
    value_type: "string",
    values_enum: ["main0", "base0", "base1", "base2"],
  }),
  responsiveClassField({
    name: "responsiveTypo",
    klass: "tp",
    value_type: "string",
    values_enum: TYPO_KIND,
  }),
  responsiveClassField({
    name: "responsiveFontSize",
    klass: "fs",
    value_type: "string",
    values_enum: ["10", "16", "18", "26", "28"],
  }),
];

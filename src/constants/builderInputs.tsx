import { Input } from "@builder.io/sdk";
import {
  BACKGROUND_COLORS,
  COLORS,
  PERCENTAGE_VALUES,
  REM_VALUES,
  TYPO_KIND,
} from "./builderEnums";

const responsiveStyleField = ({
  name,
  friendlyName,
  style,
  value_type,
  values_enum,
  advanced = true,
  useThemeColor = false,
}: {
  name: string;
  friendlyName?: string;
  style: string;
  value_type: string;
  values_enum?: any[];
  advanced?: boolean;
  useThemeColor?: boolean;
}) => {
  return {
    name: name,
    friendlyName: friendlyName,
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
      {
        name: "useThemeColor",
        type: "boolean",
        defaultValue: useThemeColor,
        hideFromUI: true,
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
  friendlyName,
}: {
  name: string;
  klass: string;
  value_type: string;
  values_enum?: any[];
  advanced?: boolean;
  friendlyName?: string;
}) => {
  return {
    name: name,
    friendlyName: friendlyName,
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
  {
    name: "backgroundColor",
    type: "string",
    enum: BACKGROUND_COLORS,
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
    values_enum: [
      "start",
      "end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ],
  }),
  responsiveStyleField({
    name: "responsiveAlignSelf",
    style: "align-self",
    value_type: "string",
    values_enum: ["auto", "normal", "center", "start", "end"],
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
  responsiveStyleField({
    name: "responsiveOverflow",
    advanced: true,
    style: "overflow",
    value_type: "string",
    values_enum: [
      "auto",
      "hidden",
      "visible",
      "scroll",
    ],
  }),
  responsiveStyleField({
    name: "responsiveOverflowX",
    advanced: true,
    style: "overflow-x",
    value_type: "string",
    values_enum: [
      "auto",
      "hidden",
      "visible",
      "scroll",
    ],
  }),
  responsiveStyleField({
    name: "responsiveOverflowY",
    advanced: true,
    style: "overflow-y",
    value_type: "string",
    values_enum: [
      "auto",
      "hidden",
      "visible",
      "scroll",
    ],
  }),
  {
    name: "responsiveBorder",
    type: "object",
    subFields: [
      responsiveStyleField({
        name: "responsiveBorderStyle",
        friendlyName: "Border style",
        style: "border-style",
        value_type: "string",
        values_enum: [
          "solid",
          "dashed",
          "dotted",
          "double",
          "groove",
          "ridge",
          "inset",
          "outset",
        ],
        advanced: false,
      }),
      responsiveStyleField({
        name: "responsiveBorderWidth",
        friendlyName: "Border width",
        style: "border-width",
        value_type: "string",
        values_enum: REM_VALUES,
        advanced: false,
      }),
      responsiveStyleField({
        name: "responsiveBorderColor",
        friendlyName: "Border color",
        style: "border-color",
        value_type: "string",
        values_enum: COLORS,
        useThemeColor: true,
        advanced: false,
      }),
      responsiveStyleField({
        name: "responsiveBorderRadius",
        friendlyName: "Border radius",
        style: "border-radius",
        value_type: "string",
        values_enum: REM_VALUES,
        advanced: false,
      }),
    ],
  },
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
    friendlyName: "Text color",
    klass: "text",
    value_type: "string",
    values_enum: COLORS,
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
    values_enum: ["10", "12", "14", "16", "18", "24", "28"],
  }),
];

import { REM_VALUES } from "./builderEnums";
import { DEFAULT_PROPS } from "./builderProps";

export const CSS_EDITABLE_INPUTS = [
  ...DEFAULT_PROPS.inputs,
  {
    name: "direction",
    type: "string",
    enum: ["", "inline", "row", "column"],
  },
  {
    name: "alignItems",
    type: "string",
    enum: ["", "start", "end", "center"],
  },
  {
    name: "wrap",
    type: "string",
    enum: ["", "nowrap", "wrap", "wrap-reverse"],
    advanced: true,
  },
  {
    name: "opacity",
    type: "string",
    enum: [
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
    advanced: true,
  },
  {
    name: "responsiveStyles",
    type: "list",
    advanced: true,
    subFields: [
      {
        name: "breakpoint",
        type: "string",
        enum: ["", "xs", "sm", "md", "lg", "xl", "2xl"],
      },
      {
        name: "style",
        type: "string",
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
        ],
      },
      {
        name: "value",
        type: "string",
        enum: REM_VALUES,
      },
    ],
  },
];

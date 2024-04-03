import { Button, Col, Row, TextGradient } from "@aleph-front/core";
import { builder, Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";
import Container from "./components/Container/Container";
import H1 from "./components/H1/H1";
import H2 from "./components/H2/H2";
import Section from "./components/Section/Section";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const TYPO_KIND: string[] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "h7",
  "header",
  "logo",
  "nav",
  "info",
  "body",
  "body1",
  "body2",
  "body3",
  "code",
  "code1",
  "table",
  "form",
];

// Builder.registerComponent(
//   dynamic(() => import("./components/Counter/Counter")),
//   {
//     name: "Counter",
//     inputs: [
//       {
//         name: "initialCount",
//         type: "number",
//       },
//     ],
//   }
// );

Builder.registerComponent(withChildren(Container), {
  name: "Container",
  canHaveChildren: true,
  defaultStyles: {},
});

Builder.registerComponent(withChildren(Section), {
  name: "Section",
  inputs: [
    {
      name: "effects",
      type: "string",
      enum: ["-", "fx-grain-1"],
    },
  ],
  canHaveChildren: true,
  defaultStyles: {},
});

Builder.registerComponent(withChildren(Col), {
  name: "Column",
  canHaveChildren: true,
  inputs: [
    {
      name: "span",
      type: "number",
    },
    {
      name: "xs",
      type: "number",
    },
    {
      name: "sm",
      type: "number",
    },
    {
      name: "md",
      type: "number",
    },
    {
      name: "lg",
      type: "number",
    },
    {
      name: "xl",
      type: "number",
    },
    {
      name: "2xl",
      type: "number",
    },
    {
      name: "offset",
      type: "number",
    },
    {
      name: "xsOffset",
      type: "number",
    },
    {
      name: "smOffset",
      type: "number",
    },
    {
      name: "mdOffset",
      type: "number",
    },
    {
      name: "lgOffset",
      type: "number",
    },
    {
      name: "xlOffset",
      type: "number",
    },
    {
      name: "2xlOffset",
      type: "number",
    },
  ],
  defaultStyles: {},
});

Builder.registerComponent(withChildren(Row), {
  name: "Row",
  canHaveChildren: true,
  inputs: [
    {
      name: "count",
      type: "number",
    },
    {
      name: "xs",
      type: "number",
    },
    {
      name: "sm",
      type: "number",
    },
    {
      name: "md",
      type: "number",
    },
    {
      name: "lg",
      type: "number",
    },
    {
      name: "xl",
      type: "number",
    },
    {
      name: "2xl",
      type: "number",
    },
    {
      name: "gap",
      type: "string",
    },
    {
      name: "xsGap",
      type: "number",
    },
    {
      name: "smGap",
      type: "number",
    },
    {
      name: "mdGap",
      type: "number",
    },
    {
      name: "lgGap",
      type: "number",
    },
    {
      name: "xlGap",
      type: "number",
    },
    {
      name: "2xlGap",
      type: "number",
    },
  ],
  defaultStyles: {},
});

Builder.registerComponent(withChildren(Button), {
  name: "Button",
  inputs: [
    {
      name: "href",
      // type: "reference",
      type: "string",
    },
    {
      name: "kind",
      type: "string",
    },
    {
      name: "variant",
      type: "string",
    },
    {
      name: "size",
      type: "string",
      enum: ["sm", "md", "lg"],
    },
    {
      name: "color",
      type: "string",
    },
    {
      name: "hover",
      type: "boolean",
    },
    {
      name: "active",
      type: "boolean",
    },
    {
      name: "focus",
      type: "boolean",
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "as",
      type: "string",
      enum: ["button", "a"],
    },
    {
      name: "target",
      type: "string",
      defaultValue: "_blank",
    },
  ],
  defaultStyles: {},
});

Builder.registerComponent(TextGradient, {
  name: "TextGradient",
  inputs: [
    {
      name: "children",
      type: "longText",
    },
    {
      name: "color",
      type: "string",
      enum: [
        "white",
        "black",
        "translucid",
        "base0",
        "base1",
        "base2",
        "main0",
        "main1",
        "info",
        "success",
        "warning",
        "error",
        "disabled",
        "disabled2",
        "background",
        "contentBackground",
        "foreground",
        "text",
      ],
      defaultValue: "text",
      helperText: "Select the gradient color for the text.",
    },
    {
      name: "type",
      type: "string",
      enum: ["h1"],
      defaultValue: "h1",
    },
    {
      name: "as",
      type: "string",
      enum: ["h1"],
    },
    {
      name: "size",
      type: "number",
    },
  ],
  defaultStyles: {
    whiteSpace: "pre-wrap",
  },
});

Builder.registerComponent(H1, {
  name: "H1",
  inputs: [
    {
      name: "children",
      type: "longText",
    },
    {
      name: "color",
      type: "string",
    },
    {
      name: "type",
      type: "string",
      enum: TYPO_KIND,
    },
  ],
  defaultStyles: {
    whiteSpace: "pre-wrap",
  },
});

Builder.registerComponent(H2, {
  name: "H2",
  inputs: [
    {
      name: "children",
      type: "longText",
    },
    {
      name: "color",
      type: "string",
    },
    {
      name: "type",
      type: "string",
      enum: TYPO_KIND,
    },
  ],
  defaultStyles: {
    whiteSpace: "pre-wrap",
  },
});

import { Button, Col, Row, TextGradient } from "@aleph-front/core";
import { builder, Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";
import Container from "./components/Container/Container";
import H1 from "./components/H1/H1";
import H2 from "./components/H2/H2";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  }
);

Builder.registerComponent(withChildren(TextGradient), {
  name: "TextGradient",
  canHaveChildren: true,
  inputs: [
    {
      name: "color",
      type: "string",
      defaultValue: "main0",
      helperText: "Select the gradient color for the text.",
    },
    {
      name: "type",
      type: "enum",
      defaultValue: "header",
      enum: ["h1"],
    },
    {
      name: "as",
      type: "enum",
      enum: ["h1"],
    },
    {
      name: "size",
      type: "number",
      defaultValue: 48,
      helperText: "Set the font size.",
    },
  ],
  defaultChildren: [
    {
      "@type": "@builder.io/sdk:Element",
      component: {
        name: "Text",
        options: {
          text: "Add desired text here...",
        },
      },
    },
  ],
});

Builder.registerComponent(TextGradient, {
  name: "TextGradient 2",
  inputs: [
    {
      name: "children",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      defaultValue: "main0",
      helperText: "Select the gradient color for the text.",
    },
    {
      name: "type",
      type: "enum",
      defaultValue: "header",
      enum: ["h1"],
    },
    {
      name: "as",
      type: "enum",
      enum: ["h1"],
    },
  ],
});

Builder.registerComponent(withChildren(Container), {
  name: "Container",
  canHaveChildren: true,
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
      name: "className",
      type: "string",
    },
  ],
});

Builder.registerComponent(withChildren(H1), {
  name: "H1",
  inputs: [
    {
      name: "color",
      type: "string",
    },
  ],
});

Builder.registerComponent(withChildren(H2), {
  name: "H2",
  inputs: [
    {
      name: "color",
      type: "string",
    },
  ],
});

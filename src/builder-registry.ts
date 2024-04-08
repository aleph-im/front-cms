import { BulletList, Button, Col, Row, TextGradient } from "@aleph-front/core";
import { builder, Builder, withChildren } from "@builder.io/react";
import {
  Container,
  H1,
  H2,
  Section,
  Text,
  Box,
  Header,
  Footer,
  SignMeUpForm,
  Breadcrumb,
} from "./components";
import Image from "next/image";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const DEFAULT_PROPS = {
  inputs: [],
  defaultStyles: {},
};

const DEFAULT_TEXT_PROPS = {
  ...DEFAULT_PROPS,
  defaultStyles: {
    whiteSpace: "pre-wrap",
  },
};

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

Builder.registerComponent(withChildren(Box), {
  ...DEFAULT_PROPS,
  name: "Custom Box",
  canHaveChildren: true,
});

Builder.registerComponent(withChildren(Container), {
  ...DEFAULT_PROPS,
  name: "Container",
  canHaveChildren: true,
});

Builder.registerComponent(withChildren(Section), {
  ...DEFAULT_PROPS,
  name: "Section",
  canHaveChildren: true,
  inputs: [
    {
      name: "effects",
      type: "string",
      enum: ["", "fx-grain-1", "fx-grain-2"],
    },
  ],
});

Builder.registerComponent(withChildren(Col), {
  ...DEFAULT_PROPS,
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
  ...DEFAULT_PROPS,
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
  ...DEFAULT_PROPS,
  name: "Button",
  canHaveChildren: true,
  inputs: [
    {
      name: "children",
      type: "longText",
    },
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
      enum: ["_self", "_blank"],
      defaultValue: "_blank",
    },
  ],
});

Builder.registerComponent(TextGradient, {
  ...DEFAULT_TEXT_PROPS,
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
});

Builder.registerComponent(Text, {
  ...DEFAULT_TEXT_PROPS,
  name: "Custom Text",
  inputs: [
    {
      name: "children",
      type: "longText",
    },
    {
      name: "textType",
      type: "string",
    },
    {
      name: "tp",
      type: "string",
      enum: ["tp-info"],
    },
    {
      name: "fs",
      type: "string",
      enum: ["fs-10", "fs-18", "fs-26", "fs-28"],
    },
  ],
});

Builder.registerComponent(H1, {
  ...DEFAULT_TEXT_PROPS,
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
});

Builder.registerComponent(H2, {
  ...DEFAULT_TEXT_PROPS,
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
});

Builder.registerComponent(BulletList, {
  ...DEFAULT_PROPS,
  name: "Bullet list",
  inputs: [
    {
      name: "size",
      type: "string",
      enum: ["regular", "big"],
    },
    {
      name: "items",
      type: "list",
      defaultValue: [
        {
          kind: "info",
          title: "Indexing",
          text: "Open-source, multi-chain indexing blockchain data.",
        },
      ],
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "text",
          type: "longText",
        },
        {
          name: "kind",
          type: "string",
          enum: ["info", "success", "warning", "error"],
        },
      ],
    },
  ],
});

Builder.registerComponent(withChildren(Header), {
  ...DEFAULT_PROPS,
  name: "Header",
  canHaveChildren: true,
  noWrap: true,
  inputs: [
    {
      name: "routes",
      type: "list",
      defaultValue: [
        {
          name: "Developers",
          href: "https://docs.aleph.im/",
          target: "_blank",
          external: true,
        },
        {
          name: "Solutions",
          href: "/",
          exact: true,
        },
      ],
      subFields: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "href",
          type: "string",
        },
        {
          name: "external",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "target",
          type: "string",
          enum: ["_self", "_blank"],
        },
        {
          name: "exact",
          type: "boolean",
          defaultValue: false,
        },
      ],
    },
    {
      name: "breakpoint",
      type: "string",
      enum: ["xs", "sm", "md", "lg", "xl", "2xl"],
      defaultValue: "md",
    },
  ],
});

Builder.registerComponent(Footer, {
  ...DEFAULT_PROPS,
  name: "Footer",
  inputs: [
    {
      name: "buttons",
      type: "list",
      required: true,
      defaultValue: [
        {
          label: "Join the collective",
          href: "/collective",
          props: {
            variant: "primary",
          },
        },
        {
          label: "Start a project",
          href: "https://docs.aleph.im/computing/",
          target: "_blank",
        },
      ],
      subFields: [
        {
          name: "label",
          type: "string",
        },
        {
          name: "href",
          type: "string",
        },
        {
          name: "target",
          type: "string",
          enum: ["_self", "_blank"],
        },
        {
          name: "props",
          type: "object",
          defaultValue: {},
          subFields: [
            {
              name: "variant",
              type: "string",

              enum: ["primary", "secondary", "tertiary", "textOnly"],
            },
          ],
        },
      ],
    },
    {
      name: "media",
      type: "list",
      required: true,
      defaultValue: [
        {
          name: "x",
          icon: "x",
          label: "Follow us",
          href: "https://twitter.com/TwentySixCloud",
          target: "_blank",
          small: true,
        },
      ],
      subFields: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "icon",
          type: "string",
          enum: ["x", "telegram", "medium"],
        },
        {
          name: "label",
          type: "string",
        },
        {
          name: "href",
          type: "string",
        },
        {
          name: "target",
          type: "string",
          enum: ["_self", "_blank"],
        },
        {
          name: "small",
          type: "boolean",
        },
      ],
    },
    {
      name: "mainLinks",
      type: "list",
      required: true,
      defaultValue: [
        {
          label: "Documentation",
          href: "https://docs.aleph.im",
          target: "_blank",
        },
      ],
      subFields: [
        {
          name: "label",
          type: "string",
        },
        {
          name: "href",
          type: "string",
        },
        {
          name: "target",
          type: "string",
          enum: ["_self", "_blank"],
        },
      ],
    },
    {
      name: "links",
      type: "list",
      required: true,
      defaultValue: [
        {
          title: "Solutions",
          links: [
            {
              label: "Computing",
              href: "https://console.twentysix.cloud/computing/function/new/",
              target: "_blank",
            },
          ],
        },
        {
          title: "Developers",
          links: [
            {
              label: "Documentation",
              href: "https://docs.aleph.im",
              target: "_blank",
            },
          ],
        },
      ],
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "links",
          type: "list",
          subFields: [
            {
              name: "label",
              type: "string",
            },
            {
              name: "href",
              type: "string",
            },
            {
              name: "target",
              type: "string",
              enum: ["_self", "_blank"],
            },
          ],
        },
      ],
    },
  ],
});

Builder.registerComponent(SignMeUpForm, {
  ...DEFAULT_PROPS,
  name: "Sign Me Up Form",
});

Builder.registerComponent(Image, {
  ...DEFAULT_PROPS,
  name: "Custom Image",
  inputs: [
    {
      name: "src",
      type: "file",
    },
    {
      name: "alt",
      type: "string",
      defaultValue: "img",
    },
    {
      name: "fill",
      type: "boolean",
      defaultValue: true,
    },
    {
      name: "width",
      type: "number",
    },
    {
      name: "height",
      type: "number",
    },
  ],
  defaultStyles: {
    position: "relative",
  },
});

Builder.registerComponent(Breadcrumb, {
  name: "Breadcrumb",
  inputs: [
    {
      name: "navLinks",
      type: "list",
      subFields: [
        { name: "href", type: "string" },
        { name: "label", type: "string" },
      ],
      defaultValue: [
        { href: "/", label: "Home" },
        { href: "/use-cases", label: "Use cases" },
      ],
    },
    { name: "selected", type: "number" },
    { name: "selectedColor", type: "string" },
  ],
});

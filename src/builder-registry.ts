import {
  builder,
  Builder,
  Columns,
  CustomCode,
  Embed,
  Form,
  FormInput,
  FormSelect,
  FormSubmitButton,
  Label,
  TextArea,
  withChildren,
} from "@builder.io/react";
import { BulletList, Button, Col, Row } from "@aleph-front/core";
import {
  Container,
  TextGradient,
  H1,
  H2,
  Section,
  Text,
  Box,
  Image,
  Header,
  Footer,
  SignMeUpForm,
  Breadcrumb,
  CardWithSideImage,
} from "./components";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const HIDDEN_FROM_EDITOR_PROPS = {
  override: true,
  hideFromInsertMenu: true,
};

const DEFAULT_PROPS = {
  inputs: [],
  defaultStyles: {},
};

const DEFAULT_TEXT_PROPS = {
  ...DEFAULT_PROPS,
  inputs: [
    ...DEFAULT_PROPS.inputs,
    {
      name: "children",
      friendlyName: "Text content",
      helperText: "Shift+Enter for line break",
      type: "longText",
    },
    {
      name: "textType",
      type: "string",
      enum: ["", "text-main0", "text-base2"],
    },
    {
      name: "tp",
      type: "string",
      enum: ["", "tp-info", "tp-header", "tp-h2", "tp-h4", "tp-h7"],
    },
    {
      name: "fs",
      type: "string",
      enum: ["", "fs-10", "fs-18", "fs-26", "fs-28"],
    },
  ],
  defaultStyles: {
    whiteSpace: "pre-wrap",
  },
};

const remValues = [
  "auto",
  "0",
  "0.25rem",
  "0.5rem",
  "0.75rem",
  "1rem",
  "1.25rem",
  "1.5rem",
  "1.75rem",
  "2.00rem",
  "2.25rem",
  "2.50rem",
  "2.75rem",
  "3.00rem",
  "3.25rem",
  "3.50rem",
  "3.75rem",
  "4.00rem",
  "4.25rem",
  "4.50rem",
  "4.75rem",
  "5.00rem",
  "5.25rem",
  "5.50rem",
  "5.75rem",
  "6.00rem",
];

const CSS_EDITABLE_INPUTS = [
  {
    name: "margin",
    type: "string",
    defaultValue: "auto",
    enum: [...remValues],
  },
  {
    name: "marginTop",
    type: "string",
    advanced: true,
    enum: [...remValues],
  },
  {
    name: "marginBottom",
    type: "string",
    advanced: true,
    enum: [...remValues],
  },
  {
    name: "marginLeft",
    type: "string",
    advanced: true,
    enum: [...remValues],
  },
  {
    name: "marginRight",
    type: "string",
    advanced: true,
    enum: [...remValues],
  },
  {
    name: "padding",
    type: "string",
    enum: [...remValues],
  },
  {
    name: "paddingTop",
    type: "string",
    advanced: true,
    enum: [...remValues],
  },
  {
    name: "paddingBottom",
    type: "string",
    advanced: true,
    enum: [...remValues],
  },
  {
    name: "paddingLeft",
    type: "string",
    advanced: true,
    enum: [...remValues],
  },
  {
    name: "paddingRight",
    type: "string",
    advanced: true,
    enum: [...remValues],
  },
];

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

[
  { component: Form, name: "Form:Form" },
  { component: FormInput, name: "Form:Input" },
  { component: FormSubmitButton, name: "Form:SubmitButton" },
  { component: Label, name: "Form:Label" },
  { component: FormSelect, name: "Form:Select" },
  { component: TextArea, name: "Form:TextArea" },
  { component: CustomCode, name: "Custom Code" },
  { component: CustomCode, name: "Slot" },
  { component: CustomCode, name: "Video" },
  { component: Embed, name: "Embed" },
].forEach(({ component, name }) => {
  Builder.registerComponent(component, {
    ...HIDDEN_FROM_EDITOR_PROPS,
    name: name,
  });
});

Builder.registerComponent(withChildren(Box), {
  ...DEFAULT_PROPS,
  name: "Custom Box",
  override: true,
  canHaveChildren: true,
  inputs: [
    ...DEFAULT_PROPS.inputs,
    ...CSS_EDITABLE_INPUTS,
    {
      name: "backgroundColor",
      type: "string",
      enum: ["bg-base0", "bg-base1"],
    },
  ],
});

Builder.registerComponent(withChildren(Container), {
  ...DEFAULT_PROPS,
  name: "Container",
  canHaveChildren: true,
  inputs: [...DEFAULT_PROPS.inputs, ...CSS_EDITABLE_INPUTS],
});

Builder.registerComponent(withChildren(Section), {
  ...DEFAULT_PROPS,
  name: "Core:Section",
  override: true,
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
      defaultValue: "_self",
    },
  ],
});

Builder.registerComponent(withChildren(Button), {
  ...DEFAULT_PROPS,
  name: "Core:Button",
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
      defaultValue: "_self",
    },
  ],
});

Builder.registerComponent(TextGradient, {
  ...DEFAULT_TEXT_PROPS,
  name: "TextGradient",
  inputs: [
    ...DEFAULT_TEXT_PROPS.inputs,
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
      enum: ["h1", "h2"],
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
  inputs: [...DEFAULT_TEXT_PROPS.inputs],
});

Builder.registerComponent(H1, {
  ...DEFAULT_TEXT_PROPS,
  name: "H1",
  inputs: [
    ...DEFAULT_TEXT_PROPS.inputs,
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
    ...DEFAULT_TEXT_PROPS.inputs,
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
          defaultValue: "_self",
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
          defaultValue: "_self",
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
          defaultValue: "_self",
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
          defaultValue: "_self",
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
              defaultValue: "_self",
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
// Overrides default Builder.io image
// https://github.com/BuilderIO/builder/blob/4d38bc1e3d2366611230bf52d3f04884785ff587/packages/react/src/blocks/Image.tsx

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
    ...DEFAULT_PROPS.inputs,
    ...CSS_EDITABLE_INPUTS,
  ],
});

Builder.registerComponent(Columns, {
  ...DEFAULT_PROPS,
  name: "Columns",
  override: true,
  inputs: [
    {
      name: "columns",
      type: "array",
      broadcast: true,
      subFields: [
        {
          name: "blocks",
          type: "array",
          hideFromUI: true,
          defaultValue: 2,
        },
        {
          name: "width",
          type: "number",
          hideFromUI: true,
          helperText: "Width %, e.g. set to 50 to fill half of the space",
        },
        {
          name: "link",
          type: "url",
          helperText:
            "Optionally set a url that clicking this column will link to",
        },
      ],
      defaultValue: [{ blocks: 2 }, { blocks: 2 }],
    },
    {
      name: "space",
      type: "number",
      defaultValue: 14,
      helperText: "Size of gap between columns",
      advanced: true,
    },
    {
      name: "stackColumnsAt",
      type: "string",
      defaultValue: "tablet",
      helperText: "Convert horizontal columns to vertical at what device size",
      enum: ["tablet", "mobile", "never"],
      advanced: true,
    },
    {
      name: "reverseColumnsWhenStacked",
      type: "boolean",
      defaultValue: false,
      helperText:
        "When stacking columns for mobile devices, reverse the ordering",
      advanced: true,
    },
  ],
});

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
      helperText: "",
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

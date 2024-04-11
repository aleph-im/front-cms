import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import TextGradient from ".";
import Header from ".";

Builder.registerComponent(withChildren(Header), {
  ...DEFAULT_PROPS,
  name: "Header",
  canHaveChildren: true,
  noWrap: true,
  inputs: [
    ...DEFAULT_PROPS.inputs,
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

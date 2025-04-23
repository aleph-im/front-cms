import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import Footer from ".";

Builder.registerComponent(Footer, {
  ...DEFAULT_PROPS,
  name: "Footer",
  inputs: [
    {
      name: "component",
      type: "string",
      defaultValue: "Footer",
      enum: ["Footer"],
    },
    ...DEFAULT_PROPS.inputs,
    {
      name: "logo",
      type: "object",
      subFields: [
        {
          name: "byAleph",
          type: "boolean",
        },
        {
          name: "href",
          type: "string",
        },
        {
          name: "img",
          type: "string",
          enum: ["aleph", "twentysix", "accelerator"],
        },
        {
          name: "text",
          type: "string",
        },
      ],
    },
    {
      name: "small",
      type: "boolean",
      defaultValue: false,
    },
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
          enum: ["x", "telegram", "medium", "linkedin", "github", "discord", "youtube", "discord"],
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

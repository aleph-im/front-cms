import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import { BulletList } from "@aleph-front/core";

Builder.registerComponent(BulletList, {
  ...DEFAULT_PROPS,
  name: "Bullet list",
  inputs: [
    ...DEFAULT_PROPS.inputs,
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

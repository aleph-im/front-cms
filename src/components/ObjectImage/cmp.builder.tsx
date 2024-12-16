import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import { ObjectImg } from "@aleph-front/core";

Builder.registerComponent(ObjectImg, {
  ...DEFAULT_PROPS,
  name: "Object Image",
  inputs: [
    {
      name: "component",
      type: "string",
      defaultValue: "Object Image",
      enum: ["Object Image"],
    },
    ...DEFAULT_PROPS.inputs,
    {
      name: "id",
      type: "string",
      enum: [
        "Object1",
        "Object2",
        "Object3",
        "Object4",
        "Object5",
        "Object6",
        "Object7",
        "Object8",
        "Object9",
        "Object10",
        "Object11",
        "Object12",
        "Object13",
        "Object14",
        "Object15",
        "Object16",
        "Object17",
        "Object18",
        "Object19",
      ],
      defaultValue: "Object1",
    },
    {
      name: "size",
      type: "number",
    },
    {
      name: "color",
      type: "string",
      defaultValue: "main0",
    },
    {
      name: "color2",
      type: "string",
    },
  ],
});

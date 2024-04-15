import { Builder, Columns } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";

Builder.registerComponent(Columns, {
  ...DEFAULT_PROPS,
  name: "Columns",
  canHaveChildren: true,
  override: true,
  inputs: [
    ...DEFAULT_PROPS.inputs,
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

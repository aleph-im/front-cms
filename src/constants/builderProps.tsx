export const DEFAULT_PROPS = {
  inputs: [],
  defaultStyles: {},
};

export const DEFAULT_TEXT_PROPS = {
  ...DEFAULT_PROPS,
  inputs: [
    ...DEFAULT_PROPS.inputs,
    {
      name: "children",
      friendlyName: "Text content",
      helperText: "Press Enter to add a line break",
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
      enum: [
        "",
        "tp-info",
        "tp-header",
        "tp-body1",
        "tp-h2",
        "tp-h3",
        "tp-h4",
        "tp-h7",
      ],
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

export const HIDDEN_FROM_EDITOR_PROPS = {
  ...DEFAULT_PROPS,
  override: true,
  hideFromInsertMenu: true,
};

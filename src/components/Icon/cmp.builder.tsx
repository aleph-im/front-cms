import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import Icon from ".";
import { CSS_EDITABLE_INPUTS_ADVANCED } from "@/constants/builderInputs";

Builder.registerComponent(withChildren(Icon), {
  ...DEFAULT_PROPS,
  name: "Icon",
  canHaveChildren: true,
  inputs: [
    ...DEFAULT_PROPS.inputs,
    {
      name: "name",
      type: "string",
      enum: [
        "avalanche",
        "arrow-right",
        "binance",
        "ccn",
        "console",
        "cosmos",
        "crn",
        "earn",
        "ethereum",
        "explore",
        "notification",
        "polkadot",
        "polygon",
        "profile",
        "settings",
        "solana",
        "swap",
        "tezos",
        "walletConnect",
      ],
      required: true,
    },
    {
      name: "size",
      type: "string",
      enum: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
    {
      name: "prefix",
      type: "string",
      enum: ["fass", "far", "fab", "custom"],
    },
    ...CSS_EDITABLE_INPUTS_ADVANCED,
  ],
});

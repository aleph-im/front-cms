import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import SignMeUpForm from ".";

Builder.registerComponent(SignMeUpForm, {
  ...DEFAULT_PROPS,
  name: "Sign Me Up Form",
  inputs: [
    {
      name: "component",
      type: "string",
      defaultValue: "Sign Me Up Form",
      enum: ["Sign Me Up Form"],
    },
    { name: "submitButtonText", type: "string" },
  ],
});
3;

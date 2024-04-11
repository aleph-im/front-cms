import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import SignMeUpForm from ".";

Builder.registerComponent(SignMeUpForm, {
  ...DEFAULT_PROPS,
  name: "Sign Me Up Form",
});

import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import ContactForm from ".";

Builder.registerComponent(ContactForm, {
  ...DEFAULT_PROPS,
  name: "Contact Form",
});

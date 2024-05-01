import { Builder } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import Breadcrumb from ".";
import { CSS_EDITABLE_INPUTS_ADVANCED } from "@/constants/builderInputs";
import { COLORS, ONE_TO_TWELVE } from "@/constants/builderEnums";

Builder.registerComponent(Breadcrumb, {
  ...DEFAULT_PROPS,
  name: "Breadcrumb",
  inputs: [
    ...DEFAULT_PROPS.inputs,
    {
      name: "navLinks",
      type: "list",
      subFields: [
        { name: "href", type: "string" },
        { name: "label", type: "string" },
      ],
      defaultValue: [
        { href: "/", label: "Home" },
        { href: "/use-cases", label: "Use cases" },
      ],
    },
    { name: "selected", type: "number" },
    { name: "selectedColor", type: "string", enum: COLORS },
    ...CSS_EDITABLE_INPUTS_ADVANCED,
  ],
});

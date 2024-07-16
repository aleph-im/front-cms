import {
  Builder,
  CustomCode,
  Form,
  FormInput,
  FormSelect,
  FormSubmitButton,
  Label,
  TextArea,
} from "@builder.io/react";
import { HIDDEN_FROM_EDITOR_PROPS } from "@/constants/builderProps";

const components = [
  { component: Label, name: "Columns" },
  { component: Form, name: "Form:Form" },
  { component: FormInput, name: "Form:Input" },
  { component: FormSubmitButton, name: "Form:SubmitButton" },
  { component: Label, name: "Form:Label" },
  { component: FormSelect, name: "Form:Select" },
  { component: TextArea, name: "Form:TextArea" },
  { component: CustomCode, name: "Custom Code" },
  { component: CustomCode, name: "Slot" },
  { component: CustomCode, name: "Video" },
];

components.forEach(({ component, name }) => {
  Builder.registerComponent(component, {
    ...HIDDEN_FROM_EDITOR_PROPS,
    name: name,
  });
});

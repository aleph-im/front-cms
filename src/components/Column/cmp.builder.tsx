import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import { ONE_TO_TWELVE } from "@/constants/builderEnums";
import { CSS_EDITABLE_INPUTS_ADVANCED } from "@/constants/builderInputs";
import Column from ".";

Builder.registerComponent(withChildren(Column), {
  ...DEFAULT_PROPS,
  name: "Column",
  canHaveChildren: true,
  noWrap: true,
  inputs: [
    {
      name: "component",
      type: "string",
      defaultValue: "Column",
      enum: ["Column"],
    },
    ...DEFAULT_PROPS.inputs,
    {
      name: "span",
      friendlyName: "Amount of Columns to occupy",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "xs",
      friendlyName: "Amount of Columns to occupy from 'xs' Breakpoint",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "sm",
      friendlyName: "Amount of Columns to occupy from 'sm' Breakpoint",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "md",
      friendlyName: "Amount of Columns to occupy from 'md' Breakpoint",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "lg",
      friendlyName: "Amount of Columns to occupy from 'lg' Breakpoint",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "xl",
      friendlyName: "Amount of Columns to occupy from 'xl' Breakpoint",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "2xl",
      friendlyName: "Amount of Columns to occupy from '2xl' Breakpoint",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "offset",
      friendlyName: "Starting point of the Column",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "xsOffset",
      friendlyName: "Starting point of the Column from 'xs' Breakpoint",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "smOffset",
      friendlyName: "Starting point of the Column from 'sm' Breakpoint",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "mdOffset",
      friendlyName: "Starting point of the Column from 'md' Breakpoint",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "lgOffset",
      friendlyName: "Starting point of the Column from 'lg' Breakpoint",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "xlOffset",
      friendlyName: "Starting point of the Column from 'xl' Breakpoint",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "2xlOffset",
      friendlyName: "Starting point of the Column from '2xl' Breakpoint",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    ...CSS_EDITABLE_INPUTS_ADVANCED,
  ],
});

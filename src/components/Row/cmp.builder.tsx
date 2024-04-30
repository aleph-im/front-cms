import { Builder, withChildren } from "@builder.io/react";
import { DEFAULT_PROPS } from "@/constants/builderProps";
import { Row } from "@aleph-front/core";
import { ONE_TO_TWELVE, REM_VALUES } from "@/constants/builderEnums";

Builder.registerComponent(withChildren(Row), {
  ...DEFAULT_PROPS,
  name: "Row",
  canHaveChildren: true,
  inputs: [
    ...DEFAULT_PROPS.inputs,
    {
      name: "count",
      friendlyName: "Columns division",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "xs",
      friendlyName: "Columns division from 'xs' Breakpoint",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "sm",
      friendlyName: "Columns division from 'sm' Breakpoint",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "md",
      friendlyName: "Columns division from 'md' Breakpoint",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "lg",
      friendlyName: "Columns division from 'lg' Breakpoint",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "xl",
      friendlyName: "Columns division from 'xl' Breakpoint",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "2xl",
      friendlyName: "Columns division from '2xl' Breakpoint",
      type: "string",
      enum: [...ONE_TO_TWELVE],
    },
    {
      name: "gap",
      friendlyName: "Gap between Columns divisons",
      type: "string",
      enum: REM_VALUES,
    },
    {
      name: "xsGap",
      friendlyName: "Gap between Columns divison from 'xs' Breakpoint",
      type: "string",
      enum: REM_VALUES,
    },
    {
      name: "smGap",
      friendlyName: "Gap between Columns divison from 'sm' Breakpoint",
      type: "string",
      enum: REM_VALUES,
    },
    {
      name: "mdGap",
      friendlyName: "Gap between Columns divison from 'md' Breakpoint",
      type: "string",
      enum: REM_VALUES,
    },
    {
      name: "lgGap",
      friendlyName: "Gap between Columns divison from 'lg' Breakpoint",
      type: "string",
      enum: REM_VALUES,
    },
    {
      name: "xlGap",
      friendlyName: "Gap between Columns divison from 'xl' Breakpoint",
      type: "string",
      enum: REM_VALUES,
    },
    {
      name: "2xlGap",
      friendlyName: "Gap between Columns divison from '2xl' Breakpoint",
      type: "string",
      enum: REM_VALUES,
    },
  ],
});

import { ThemeProvider } from "styled-components";
import { ThemeBoxProps } from "./types";
import { themes } from "@aleph-front/core";

export const ThemeBox = ({ children, theme }: ThemeBoxProps) => {
  return <ThemeProvider theme={themes[theme]}> {children} </ThemeProvider>;
};

export default ThemeBox;

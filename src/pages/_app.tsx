import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { builder } from "@builder.io/react";
import { GlobalStyles, themes } from "@aleph-front/core";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.twentysix}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

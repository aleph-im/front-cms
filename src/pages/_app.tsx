import "@/styles/globals.css";
import { ThemeProps, ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { builder } from "@builder.io/react";
import { GlobalStyles, themes } from "@aleph-front/core";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function App({ Component, pageProps }: AppProps) {
  const themeKey: keyof typeof themes =
    pageProps.page?.data?.theme || "twentysix";

  console.log(`=== Using theme: ${themeKey} ===`);

  return (
    <ThemeProvider theme={themes[themeKey]}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

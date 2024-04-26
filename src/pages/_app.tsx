import "@/styles/builderGlobal.css";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { builder } from "@builder.io/react";
import { GlobalStyles } from "@aleph-front/core";
import { GlobalStylesOverride } from "@/styles/global";
import { getSelectedTheme } from "@/utils/getSelectedTheme";
import Head from "next/head";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function App({ Component, pageProps }: AppProps) {
  const theme = getSelectedTheme(pageProps);
  const themeName = theme.name;

  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/${themeName}/favicon.ico-32x32`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/${themeName}/favicon.ico-16x16`}
        />
        <link rel="icon" type="image/png" href={`/${themeName}/favicon.ico`} />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <GlobalStylesOverride />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

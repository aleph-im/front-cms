import "@/styles/builderGlobal.css";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { builder } from "@builder.io/react";
import { GlobalStyles } from "@aleph-front/core";
import { GlobalStylesOverride } from "@/styles/global";
import { getSelectedThemeData } from "@/utils/getSelectedThemeData";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function App({ Component, pageProps }: AppProps) {
  const { selectedThemeName, selectedTheme } = getSelectedThemeData(
    pageProps.page
  );

  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/${selectedThemeName}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/${selectedThemeName}/favicon-16x16.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`/${selectedThemeName}/favicon.ico`}
        />
      </Head>
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        <GlobalStylesOverride />
        <Component {...pageProps} />

        {/* https://developers.google.com/analytics/devguides/collection/ga4?hl=es-419 */}
        <GoogleAnalytics gaId="G-19PPBYP5SS" />
      </ThemeProvider>
    </>
  );
}

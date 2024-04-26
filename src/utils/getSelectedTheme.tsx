import { themes } from "@aleph-front/core";

const DEFAULT_THEME = "twentysix";

export const getSelectedTheme = (pageProps: any) => {
  const themeKey: keyof typeof themes =
    pageProps.page?.data?.theme || DEFAULT_THEME;

  return [themeKey, themes[themeKey]];
};

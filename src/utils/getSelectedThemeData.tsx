import { themes } from "@aleph-front/core";

const DEFAULT_THEME = "twentysix";

export const getSelectedThemeData = (page?: any) => {
  const selectedThemeName: keyof typeof themes =
    page?.data?.theme || DEFAULT_THEME;

  return { selectedThemeName, selectedTheme: themes[selectedThemeName] };
};

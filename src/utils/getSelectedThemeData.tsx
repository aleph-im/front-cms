import { themes } from "@aleph-front/core";

export const getSelectedThemeData = (page?: any) => {
  const themeName = process.env.NEXT_PUBLIC_THEME as keyof typeof themes;

  return {
    selectedThemeName: themeName,
    selectedTheme: themes[themeName],
  };
};

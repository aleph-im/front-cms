import { BuilderComponent, builder } from "@builder.io/react";
import React, { useEffect, useState } from "react";
import "../builder-registry";
import { useRouter } from "next/router";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { getSelectedThemeData } from "@/utils/getSelectedThemeData";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function Page() {
  const router = useRouter();

  const [symbolData, setSymbolData] = useState<any>(null);
  const [theme, setTheme] = useState<DefaultTheme>(
    getSelectedThemeData().selectedTheme
  );

  console.log("HOLA");
  useEffect(() => {
    const fetchSymbolData = async () => {
      const urlPath = router.asPath;

      try {
        const data = await builder.get("symbol", {
          userAttributes: { urlPath: urlPath },
        });
        if (data) {
          setSymbolData(data);
        }
      } catch (error) {
        console.error("Error fetching symbol data:", error);
      }
    };

    fetchSymbolData();
  }, [router.asPath]);

  useEffect(() => {
    const { selectedTheme } = getSelectedThemeData(symbolData);
    setTheme(selectedTheme);
  }, [symbolData]);

  return (
    <ThemeProvider theme={theme}>
      <BuilderComponent model="symbol" />
    </ThemeProvider>
  );
}

import { createGlobalStyle } from "styled-components";

export const GlobalStylesOverride = createGlobalStyle`
  body, #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1 0 auto;
  }

  html {
    scroll-behavior: smooth;
  }
`;

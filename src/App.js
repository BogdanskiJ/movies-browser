import React from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { MovieBrowser } from "./features";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";


export const App = () => {
  
  
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <MovieBrowser />
    </ThemeProvider>
  );
}

export default App;

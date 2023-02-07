import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,::after, ::before {
        box-sizing: inherit;
    }

    body {
        max-width: 1920px;
        margin: 0 auto;
        background: ${({theme}) => theme.color.whisper};
        font-family: "Poppins", sans-serif;
    }
`
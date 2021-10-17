import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        font-family: 'Poppins';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body: {
        background-color: #1c2128
    }

    a {
        text-decoration: none;
        color: black;

    }
`;

export default GlobalStyle;

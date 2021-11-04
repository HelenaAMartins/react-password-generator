import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

const GlobalStyles = createGlobalStyle`
  :root{
    --font-default: 'Roboto', sans-serif;
    --font-title: 'Bebas Neue', cursive;
  }

  *,
  *:after,
  *:before {
    backface-visibility: hidden;
    border: 0;
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  body {
  background: ${colors.background};
  font-family: var(--font-default);
  margin: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;

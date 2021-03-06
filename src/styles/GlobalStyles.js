import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 
    html, * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    body {
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 100vw;
    }
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    button {
      outline: none;
      background: none;
      border: none;
    }
`;

export default GlobalStyles;

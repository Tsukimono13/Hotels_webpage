import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'PT Sans', sans-serif;
    //color: #3A3A3A;
  }

  body {
    margin: 0;
    font-family: 'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    background-color: unset;
  }
`


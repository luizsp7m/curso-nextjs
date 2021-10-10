const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background .25s;
  }

  html {
    font-size: 62.5%;
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
  }

  #__next {
    background: ${({ theme }) => theme.colors.background};
  }

  @media(max-width: 425px) {
    html {
      font-size: 50%;
    }
  }
`

export default GlobalStyle;
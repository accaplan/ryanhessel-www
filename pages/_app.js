import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');


  ${reset}
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    box-sizing: border-box;
    color: #333;
    font-family: 'Playfair Display', serif;
    line-height:1.7;
    letter-spacing: .05ch;

    @media (min-width:768px){
      font-size: 20px;
    }
  }

  img {
    max-width:100%;
    height:auto;
  }

  h1 {
    font-size: 4rem;
  }

  h2, h3 {
    font-size:1.5rem;
  }
  
  h1,h2, h3,h4,h5 {
        font-weight: bold;
        letter-spacing: -0.01ch;

  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

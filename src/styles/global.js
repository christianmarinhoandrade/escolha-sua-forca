import { createGlobalStyle, css } from 'styled-components'
import './font-face.css'

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-decoration: none;
    box-sizing: border-box;
  }
  
  ${({ theme, isLuke }) => css`
      body {
          background-color: ${isLuke === false
              ? theme.master.black
              : isLuke === true
              ? theme.master.yellow
              : theme.home.background};
      }
  `}
  
  html {
    font-family: 'Montserrat'
  }
`

export default GlobalStyle

import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    padding: 0;
    margin: 0;
    font-family: 'FontRegular';
    font-size: 16px;
  }
`

export { theme } from './_theme'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body{
        margin: 40px 0;
        padding: 0;
        background: linear-gradient(130deg, #C9D6FF 70%, #e2e2e2);
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        overflow: hidden;
    }
`

export default GlobalStyle
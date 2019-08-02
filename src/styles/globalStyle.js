import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Tinos:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased !important;
    background-color: #f9f9f9;
    color: #2b2c31;
  }

  main {
    max-width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 325px 153px;
    grid-template-areas: 
      'sidebar content content'
      'perfil-sidebar perfil perfil'
      'contact-sidebar experience experience'
  }
`

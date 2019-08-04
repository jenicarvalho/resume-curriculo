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
      'education-sidebar experience experience'
  }

  h3 {
    position: relative;
    color: #d7b22a;
    text-transform: uppercase;
    border-bottom: 2px solid;
    padding-bottom: 5px;
    margin-bottom: 5px;

    &::after {
      position: absolute;
      content: '';
      padding: 3px 16px;
      background: #d7b22a;
      bottom: -4px;
      right: 0px;
    }
`

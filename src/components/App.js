import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './section/Header'
import Main from './section/Main'
import Syllabus from './section/Syllabus'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  body {
    box-sizing: border-box;
    font-family: 'Fira Code', monospace;
    text-align: center;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Syllabus />
    </>
  );
}

export default App;

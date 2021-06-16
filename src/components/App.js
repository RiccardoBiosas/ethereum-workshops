import React from 'react'
import {createGlobalStyle} from 'styled-components'
import Header from './section/Header'
import Main from './section/Main'
import Syllabus from './section/Syllabus'

const GlobalStyle = createGlobalStyle`
  body { 
    box-sizing: border-box; 
    margin: 0; 
    min-height: 100vh; 
    text-align: center;
    font-family: 'Fira Code', monospace;
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

import React from 'react'
// import {Button} from './common'
import {createGlobalStyle} from 'styled-components'
import Header from './section/Header'
import Main from './section/Main'


const GlobalStyle = createGlobalStyle`
  body { 
    box-sizing: border-box; 
    margin: 0; 
    min-height: 100vh; 
    font-family: 'Fira Code', monospace;
  }
`

function App() {
  return (
    <>
    <GlobalStyle />
      <Header />
      <Main />
      <header className="header">
        Header
        
        
      </header>
      <main>
        
      </main>
    </>
  );
}

export default App;

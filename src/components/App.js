import React from 'react'
import {Button} from './common'
import {createGlobalStyle} from 'styled-components'

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
      <header className="App-header">
        Header
        <Button>Contact Us</Button>
        <Button secondary>Book</Button>
      </header>
    </>
  );
}

export default App;

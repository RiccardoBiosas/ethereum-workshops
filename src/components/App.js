import React from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import PageTracking from '../PageTracking'
import Homepage from './Homepage'

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
    <BrowserRouter>
      <GlobalStyle />
      <PageTracking />
      <Route path='/' component={Homepage} />
      <Redirect to='/' />
    </BrowserRouter>
  );
}

export default App;

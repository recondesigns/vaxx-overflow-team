import React from 'react'
import styled from 'styled-components'
import Preview from './components/Preview'
import voLogo from './assets/images/vo-logo.svg'

const AppContainer = styled.div`
  width: 100%;
  height: 1458px;
  // border: 2px solid lightblue;

  & > h2 {
    margin: 0px;
    width: 320px;
    font-family: aktiv-grotesk, sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 32px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #303030;
    border: 1px dotted lightblue;
}
`

function App() {
  return (
    <AppContainer>
        <img src={voLogo} alt={'Vaxx Overflow'} />
        <Preview />
        <h2>The Team</h2>
    </AppContainer>
  )
}

export default App;

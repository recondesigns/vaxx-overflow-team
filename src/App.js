import React from 'react'
import styled from 'styled-components'
import Preview from './components/Preview'
import voLogo from './assets/images/vo-logo.svg'

const AppContainer = styled.div`
  width: 100%;
  height: 1458px;
  // border: 2px solid lightblue;
`

function App() {
  return (
    <AppContainer>
        <img src={voLogo} alt={'Vaxx Overflow'} />
        <Preview />
    </AppContainer>
  )
}

export default App;

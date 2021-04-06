import React from 'react'
import styled from 'styled-components'
import Preview from './components/Preview'
import { Card } from './components/Card'
import voLogo from './assets/images/vo-logo.svg'
import stockHeadshot from './assets/images/stock-headshot-1x.jpg'

const AppContainer = styled.div`
  width: 100%;
  height: 1458px;

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
        <Card
          name={'Brendan Schumaker'}
          role={'Developer'} 
          branch={'Marines Reserves'} 
          linkedIn={'linkedIn Link'}
          resume={'resume link'}
          github={'github link'}
          imageURL={stockHeadshot}
        />
        <Card
          name={'Michael Stedman'}
          role={'UX/Product Designer'} 
          branch={'Army'} 
          linkedIn={'linkedIn Link'}
          resume={'resume link'}
          github={'github link'}
          imageURL={stockHeadshot}
        />
    </AppContainer>
  )
}

export default App;

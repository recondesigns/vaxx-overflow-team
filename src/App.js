import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Preview from './components/Preview'
import { Card } from './components/Card'
import { members } from './memberInfo'
// import voLogo from './assets/images/vo-logo.svg'
// import stockHeadshot from './assets/images/stock-headshot-1x.jpg'

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  height: 1458px;

  & > h2 {
    position: absolute;
    top: 392px;
    left: calc(50% - 320px/2);
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
    // border: 1px dotted lightblue;
  }

  & > .card-container {
    position: absolute;
    top: 444px;
    left: 0px;
    right: 0px;
    // width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: 1px dotted blue;
    // overflow: hidden;
  }
`

function App() {
  let cardList = members.map((member, idx) => {
    const { 
      name,
      role,
      branch,
      imgUrl,
      linkedIn,
      resume,
      gitHub 
    } = member

    return (
      <Card
            key={idx}
            name={name}
            role={role} 
            branch={branch} 
            linkedIn={linkedIn}
            resume={resume}
            gitHub={gitHub}
            imageURL={imgUrl}
          />
    )
  })

  return (
    <AppContainer>
        <Header />
        <Preview />
        <h2>The Team</h2>
        <div className={'card-container'}>
          {cardList}
        </div>
    </AppContainer>
  )
}

export default App;

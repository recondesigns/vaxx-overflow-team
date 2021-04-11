import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Preview from './components/Preview'
import { Card } from './components/Card'
import { members } from './memberInfo'
import { black, white } from './colors'

const AppContainer = styled.div`
  position: relative;
  width: 100%;

  & > h2 {
    position: absolute;
    top: 552px;
    left: calc(50% - 320px/2);
    margin: 0px;
    width: 320px;
    font-family: aktiv-grotesk-extended, sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 32px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: ${black.default};
    background: ${white.default};
  }

  & > .card-container {
    position: absolute;
    top: 624px;
    left: calc(50% - 380px/2);
    width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      top: 604px;
      left: calc(50% - 960px/2);
      width: 960px;
    }
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

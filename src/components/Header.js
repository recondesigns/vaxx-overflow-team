import React from 'react'
import styled from 'styled-components'
import voLogo from '../assets/images/vo-logo.svg'

const HeaderContainer = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    height: 104px;
    // background: lightblue;

    & > img {
        position: absolute;
        top: 40px;
        left: calc(50% - 246px/2);
        height: 64px;
        // border: 1px dashed black;
      }
`

export default function Header() {
    return (
        <HeaderContainer>
            <img src={voLogo} alt={'Vaxx Overflow'} />
        </HeaderContainer>
    )
}

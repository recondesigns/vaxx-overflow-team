import React from 'react'
import styled from 'styled-components'
import voLogo from '../assets/images/vo-logo.svg'

const HeaderContainer = styled.div`
    position: fixed;
    left: 0px;
    right: 0px;
    height: 104px;
    background: #FEFEFE;
    z-index: 1;

    @media (min-width: 768px) {
        height: 60px;
    }

    & > img {
        position: absolute;
        top: 32px;
        left: calc(50% - 246px/2);
        height: 64px;

        @media (min-width: 768px) {
            top: calc(50% - 40px/2);
            left: 40px;
            height: 40px;
        }
      }
`

export default function Header() {
    return (
        <HeaderContainer>
            <img src={voLogo} alt={'Vaxx Overflow'} />
        </HeaderContainer>
    )
}

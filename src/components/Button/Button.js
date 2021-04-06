import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 72px;
    height: 40px;
    font-family: aktiv-grotesk, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #3F7F82;
    background: none;
`

export default function Button() {
    return <StyledButton>LinkedIn</StyledButton>
}

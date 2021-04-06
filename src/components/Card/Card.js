import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    margin: 0px;
    width: 320px;
    height: 172px;
    width: 320px;
    height: 172px;
    background: #FEFEFE;
    border: 2px solid #333333;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px dashed blue;
`

export default function Card() {
    return (
        <CardContainer>
            <p>Card</p>
        </CardContainer>
    )
}

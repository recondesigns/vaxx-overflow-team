import React from 'react'
import styled from 'styled-components'
import stockHeadshot from '../../assets/images/stock-headshot-1x.jpg'

const CardContainer = styled.div`
    margin: 0px;
    max-width: 320px;
    height: 172px;
    width: 320px;
    height: 172px;
    background: #FEFEFE;
    border: 2px solid #333333;
    box-sizing: border-box;
    border-radius: 4px;

    & > div {
        // position: absolute;
        width: 68px;
        height: 68px;
        // left: 20px;
        // top: 20px;
        border-radius: 4px;
        overflow: hidden;
    }

    & > h4 {
        margin: 0px;
        font-family: aktiv-grotesk, sans-serif;
        font-weight: 700;
        font-style: normal;
        text-transform: uppercase;
        border: 1px dotted lightblue;
    }

    & > p {
        margin: 0px;
        font-family: aktiv-grotesk-condensed, sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: #333333;
        border: 1px dotted lightblue;
    }
`

export default function Card() {
    return (
        <CardContainer>
            <div>
                <img src={stockHeadshot} alt={'Stock headshot'} />
            </div>
            <h4>Member name</h4>
            <p>Member role</p>
            <p>Member branch</p>
        </CardContainer>
    )
}

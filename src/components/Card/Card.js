import React from 'react'
import styled from 'styled-components'
import stockHeadshot from '../../assets/images/stock-headshot-1x.jpg'

const CardContainer = styled.div`
    position: relative;
    margin: 0px;
    max-width: 320px;
    height: 172px;
    background: #FEFEFE;
    border: 2px solid #333333;
    box-sizing: border-box;
    border-radius: 4px;

    & > div {
        position: absolute;
        width: 68px;
        height: 68px;
        left: 20px;
        top: 20px;
        border-radius: 4px;
        overflow: hidden;
    }

    & > h4 {
        position: absolute;
        top: 20px;
        left: 104px;
        right: 20px;
        margin: 0px;
        height: 40px;
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

    & > .p-top {
        position: absolute;
        top: 72px;
        left: 104px;
        right: 20px;
    }

    & > .p-bottom {
        position: absolute;
        top: 92px;
        left: 104px;
        right: 20px;
    }

    & > a {
        // width: 64px;
        // font-family: aktiv-grotesk, sans-serif;
        // font-weight: 400;
        // font-style: normal;

        font-family: aktiv-grotesk, sans-serif;
        font-weight: 500;
        font-style: normal;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #3F7F82;
        text-decoration: none;
        // border: 1px dotted darkorange;
    }

    & > .a-left {
        position: absolute;
        top: 132px;
        left: 104px;
    }

    & > .a-middle {
        position: absolute;
        top: 132px;
        left: 176px;
    }

    & > .a-right {
        position: absolute;
        top: 132px;
        left: 244px;
    }
`

export default function Card() {
    let link = 'http://www.yahoo.com'
    
    return (
        <CardContainer>
            <div>
                <img src={stockHeadshot} alt={'Stock headshot'} />
            </div>
            <h4>Member name</h4>
            <p className={'p-top'}>Member role</p>
            <p className={'p-bottom'}>Member branch</p>
            <a href={link} className={'a-left'}>LinkedIn</a>
            <a href={link} className={'a-middle'}>Resume</a>
            <a href={link} className={'a-right'}>Github</a>
        </CardContainer>
    )
}

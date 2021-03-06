import React from 'react'
import styled from 'styled-components'
import { black, white, green } from '../../colors'

const CardContainer = styled.div`
    position: relative;
    margin: 0px 0px 20px 0px;
    width: 304px;
    height: 144px;
    background: ${white.default};
    border: ${'2px solid ' + black.default};
    box-sizing: border-box;
    border-radius: 4px;

    @media (min-width: 768px) {
        margin: 0px 20px 20px 20px;
        // min-width: 460px;
        height: 140px;
    }

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
        font-family: aktiv-grotesk-extended, sans-serif;
        font-weight: 900;
        font-style: normal;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: ${black.default};
        text-transform: uppercase;
        // border: 1px dotted orange;

        @media (min-width: 768px) {
            right: 20px;
            height: 20px;
            font-size: 20px;
        }
    }

    & > p {
        margin: 0px;
        font-family: aktiv-grotesk-condensed, sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: ${black.default};
        // border: 1px dotted orange;
        
        @media (min-width: 768px) {
            font-size: 18px;
        }
    }

    & > .p-top {
        position: absolute;
        top: 44px;
        left: 104px;
        right: 20px;

        @media (min-width: 768px) {
            top: 48px;
        }
    }

    & > .p-bottom {
        position: absolute;
        top: 64px;
        left: 104px;
        right: 20px;

        @media (min-width: 768px) {
            top: 68px;
        }
    }

    & > a {
        width: 72px;
        font-family: aktiv-grotesk, sans-serif;
        font-weight: 500;
        font-style: normal;
        font-size: 16px;
        line-height: 20px;
        text-align: left;
        letter-spacing: 0.04em;
        color: ${green.default};
        text-decoration: none;
        // border: 1px dotted orange;

        @media (min-width: 768px) {
            width: 80px;
            font-size: 18px;
        }

        &:hover {
            font-weight: 600;
        }

        &:active {
            text-decoration: underline;
        }
    }

    & > .a-left {
        position: absolute;
        top: 100px;
        left: 104px;

        @media (min-width: 768px) {
            top: 100px;
        }
    }

    & > .a-right {
        position: absolute;
        top: 100px;
        // left: 244px;
        left: 180px;


        @media (min-width: 768px) {
            top: 100px;
            left: 188px;
        }
    }
`

export default function Card(props) {
    const { name, 
            role, 
            branch, 
            imageURL,
            linkedIn,
            gitHub
    } = props
    
    return (
        <CardContainer>
            <div>
                <img src={imageURL} alt={'Stock headshot'} />
            </div>
            <h4>{name}</h4>
            <p className={'p-top'}>{role}</p>
            <p className={'p-bottom'}>{branch}</p>
            <a href={linkedIn} target={'_blank'} rel={"noopener noreferrer"} className={'a-left'}>LinkedIn</a>
            <a href={gitHub} target={'_blank'} rel={"noopener noreferrer"} className={'a-right'}>Github</a>
        </CardContainer>
    )
}

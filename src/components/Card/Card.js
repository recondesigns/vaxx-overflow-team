import React from 'react'
import styled from 'styled-components'

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
        font-family: Aktiv Grotesk Ex;
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: #333333;
        text-transform: uppercase;
    }

    & > p {
        margin: 0px;
        font-family: Aktiv Grotesk Cd;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: #333333;
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
        font-family: aktiv-grotesk, sans-serif;
        font-weight: 500;
        font-style: normal;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #3F7F82;
        text-decoration: none;
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

export default function Card(props) {
    const { name, 
            role, 
            branch, 
            imageURL,
            linkedIn,
            resume,
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
            <a href={resume} target={'_blank'} rel={"noopener noreferrer"} className={'a-middle'}>Resume</a>
            <a href={gitHub} target={'_blank'} rel={"noopener noreferrer"} className={'a-right'}>Github</a>
        </CardContainer>
    )
}

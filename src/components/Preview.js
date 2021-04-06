import React from 'react'
import styled from 'styled-components'

const PreviewContainer = styled.div`
    width: 320px;
    height: 240px;
    border: 2px solid black;

    
`

export default function Preview() {
    return (
        <PreviewContainer>
            <p>Preview</p>
        </PreviewContainer>
    )
}

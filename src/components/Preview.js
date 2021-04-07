import React from 'react'
import styled from 'styled-components'

const PreviewContainer = styled.div`
    position: absolute;
    top: 128px;
    left: calc(50% - 320px/2);
    width: 320px;
    height: 240px;
    // border: 2px solid black;
    // border-radius: 4px;
`

export default function Preview() {
    return (
        <PreviewContainer>
            <p>Preview</p>
            {/* <iframe
                title={'preview'} 
                width="100%" 
                height="100%" 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJhhHkIswpe0EzcVcVtzB7A%2FVaxxOverflow%3Fnode-id%3D302%253A2030" 
                allowFullScreen
            ></iframe> */}
        </PreviewContainer>
    )
}

//import React from 'react'

function BoxColor(props) {
    let divStyle = {
        backgroundColor: `rgb(${props.r} , ${props.g} , ${props.b})`
    }
    return (
        <div style={divStyle}>
        Hello Div Style</div>
    )
}

export default BoxColor

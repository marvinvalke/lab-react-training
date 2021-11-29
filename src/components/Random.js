//import React from 'react'

function Random(props) {
    let number = Math.floor(Math.random()*(props.max - props.min) + props.min)
    
    return (
        <div>
            {number}
        </div>
    )
}


export default Random

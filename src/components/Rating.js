//import React from 'react'

function Rating(props) {
    let rate = Math.round(props.children)
    let stars = ''
    if (rate=== 0) {
        stars = '☆☆☆☆☆'
    } else if (rate=== 1) {
        stars = '★☆☆☆☆'
    } else if (rate=== 2) {
        stars = '★★☆☆☆'
    } else if (rate=== 3) {
        stars = '★★★☆☆'
    } else if (rate=== 4) {
        stars = '★★★★☆'
    } else if (rate=== 5) {
        stars = '★★★★★'
    }
    return (
        
        <div>
            {stars}
        </div>
    )
}


export default Rating
import React from 'react'

function FirstComponent(props) {
    return (
        <div>
            < h1 > {props.name}</h1 >
            {props.children}
        </div>
    )
}

export default FirstComponent
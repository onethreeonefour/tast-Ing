import React from 'react'

function TextBox(props) {
    return (
        <div className="chef-text-box">
            <h2>Chef Michele</h2>
            <p>{props.comment}</p>
            
            
        </div>
    )
}

export default TextBox

import React from 'react'

function TextBox(props) {
    return (
        <div className="chef-text-box">
            <h2>Chef Mike</h2>
            <p>{props.comment}</p>
            {props.buttonValue === "Meat" ? <button>Show me some meat</button> : <button>I'll take a salad</button>}
            
        </div>
    )
}

export default TextBox

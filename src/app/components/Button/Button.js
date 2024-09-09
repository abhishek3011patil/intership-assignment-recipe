import React from 'react'
import "./Buttons.css"

function Button(props) {
  return (
    <div>
      <button className="allButton" style={props.style}>
        {props.name}
      </button>
    </div>
  )
}

export default Button
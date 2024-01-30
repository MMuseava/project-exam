import React from 'react'
import "./customButton.style.css"

const CustomButton = ({text, onClickHandler}) => {
  return (
      <div>
          <button onClick={ onClickHandler} class="button-34" role="button">{text}</button>
    </div>
  )
}

export default CustomButton
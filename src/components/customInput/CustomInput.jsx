import React from 'react'
import "./customInput.style.css"

const CustomInput = ({labelText, onChangeHandler, type,value}) => {
  return (
      <div className='container'>
          <div class="input-group">
    <label class="input-group__label" for="myInput">{labelText}</label>
              <input onChange={ onChangeHandler} type={type} id="myInput" class="input-group__input" value={value} />
  </div>
</div>
  )
}

export default CustomInput
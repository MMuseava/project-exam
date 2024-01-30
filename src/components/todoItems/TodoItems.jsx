import React from 'react'
import CustomButton from '../customButton/CustomButton'
import CustomInput from '../customInput/CustomInput'
import "./todoItems.style.css"

const TodoItems = ({
    todoText,todoId, isCompleted, todoComplete, todoDelete
}) => {
  return (
      <div className='todoItems'>
          <CustomInput type={"checkbox"} checked={isCompleted} onChangeHandler={todoComplete} />
          <p style={{
          textDecoration: isCompleted ? "line-through" : "none", 
        }} id={todoId}>{todoText}</p>
          <CustomButton text={"X"} onClickHandler={todoDelete}/>
    </div>
  )
}

export default TodoItems
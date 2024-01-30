import React, { useState } from 'react'
import TodoItems from '../components/todoItems/TodoItems'
import CustomInput from '../components/customInput/CustomInput'
import CustomButton from '../components/customButton/CustomButton'
import { v4 as uuidv4 } from 'uuid';
import "./todoApp.style.css"





const TodoApp = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([])
    
    
    const onAddClick = () => {
        const newTodo = {
            id: uuidv4(),
            text: todo,
            isComplete: false, };
        setTodoList([...todoList, newTodo]);
        setTodo("")
    }
   
    const onAddChange = (e) => {
        setTodo( e.target.value)
    }


    const onDeleteTodo = (id) => {
    setTodoList(todoList.filter((el) => el.id !== id));
    };
    
    const onClearAll = () => {
    setTodoList([])
}

   const todoComplete = (id) => {
    setTodoList(todoList.map((el) =>
        el.id === id ? { ...el, isComplete: !el.isComplete } : el
      ) );
  };
    
  return (
      <div className="container-box">
          <h1>TODO List</h1>
          <div className="input-box">
        <CustomInput onChangeHandler={onAddChange} value={todo} />
          <CustomButton text={"ADD"} onClickHandler={onAddClick}/>
          </div>
          
          <div className='todo-item'>
           {todoList.map((el, index) => (
               <TodoItems key={index}
                   todoText={el.text}
                   todoId={el.id}
                   todoDelete={() => onDeleteTodo(el.id)}
                   isCompleted={el.isComplete}
            todoComplete={() => todoComplete(el.id)} />
      ))}</div>
          <CustomButton onClickHandler={onClearAll} text={"CLEAR"}/>
    </div>
  )
}

export default TodoApp
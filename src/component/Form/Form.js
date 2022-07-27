import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";

const Form = () => {

    const [inputText, setInputText] = useState("");
    const [todolist, setTodoList] = useState([]);
    
    const inputHandler = (e) => {
      e.preventDefault();
      setTodoList([
        ...todolist,
        {text: inputText, completed: false, id:Math.random()*10000}
      ])
      setInputText("");
    }

      const handleChange = (e) => {
        setInputText(e.target.value);
      }
  
    return(
      <div>
       <form data-testid="input-form">
        <input data-testid="input-field" type="text" className="todo-input" onChange={handleChange} value={inputText}/>
        <button data-testid="input-button" disabled={!inputText} className="todo-button" type="submit" onClick={inputHandler}>
        Add<i className="fas fa-plus-square"></i>
      </button>
       </form>
       <TodoList 
      todolist={todolist}
      setTodoList={setTodoList} 
       />
       </div>
      
    )
}

export default Form;
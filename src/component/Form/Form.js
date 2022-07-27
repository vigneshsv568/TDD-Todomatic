import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";

const Form = () => {

    const [inputText, setInputText] = useState("");
    
    
   
    const submitToHandler = (e) =>{
        e.preventDefault();
     
      }

      function handleChange(e) {
        setInputText(e.target.value);
      }
    return(
      <div className="App">
       <form data-testid="input-form">
        <input data-testid="input-field" type="text" className="todo-input" onChange={handleChange} value={inputText}/>
        <button data-testid="input-button" disabled={!inputText} className="todo-button" type="submit" onSubmit={submitToHandler}>
        Add<i className="fas fa-plus-square"></i>
      </button>
       </form>
       <TodoList />
       </div>
      
    )
}

export default Form;
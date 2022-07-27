import React, { useState } from "react";

const Form = () => {

    const [inputText, setInputText] = useState("");
    
    
    // const inputTextHandler = (e) => {
    //     setInputText(e.target.value);
    // }
    const submitToHandler = (e) =>{
        e.preventDefault();
     
      }

      function handleChange(e) {
        setInputText(e.target.value);
      }
    return(
       <form data-testid="input-form">
        <input data-testid="input-field" type="text" className="todo-input" onChange={handleChange} value={inputText}/>
        <button data-testid="input-button" disabled={!inputText} className="todo-button" type="submit" onSubmit={submitToHandler}>
        Add<i className="fas fa-plus-square"></i>
      </button>
       </form>
    )
}

export default Form;
import React from "react";

const Todo = ({ text,todo,todolist,setTodoList }) =>{


    return(
        <div className="todo">
            <li data-testid="todo-item" value={text} className="todo-item">{text}</li>
            <button data-testid="todo-complete"  className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button data-testid="todo-trash" className="trash-btn">
            <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;
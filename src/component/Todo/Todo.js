import React from "react";

const Todo = () =>{


    return(
        <div className="todo">
            <li data-testid="todo-item" className="todo-item">Something</li>
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
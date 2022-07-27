import React from "react";

const Todo = ({ text,todo,todolist,setTodoList }) =>{
    const deleteHandler = () =>{
        setTodoList(todolist.filter((el) =>el.id !==todo.id));
    }
    const completeHandler = () =>{
        setTodoList(todolist.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        })
        )
    }

    return(
        <div className="todo">
            <li data-testid="todo-item" value={text}  className={`todo todo-item ${todo && todo.completed ? "completed":""}`}>{text}</li>
            <button data-testid="todo-complete"  className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button data-testid="todo-trash" className="trash-btn" onClick={deleteHandler}>
            <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;
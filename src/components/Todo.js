import React, {useState} from 'react'
import TodoForm from "./TodoForm"
import TodoList from './TodoList'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';


function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ""
        })
    }


    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index} id="todos">

        <div key={todo.id} onClick={() => completeTodo(todo.id)} className="todo-text">
            {todo.text}
        </div>

        <div className="icons">
            <i className="bi bi-journal-x" onClick={() => removeTodo(todo.id)} />
            <i className="bi bi-journal-text" onClick={() => setEdit({id: todo.id, value: todo.text})} />
            <i className="bi bi-check-square" onClick={() => completeTodo(todo.id)}/>
        </div>
    </div>
  ))
}

export default Todo
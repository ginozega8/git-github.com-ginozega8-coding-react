import React, {useState, useEffect, useRef} from 'react'
import nextId from "react-id-generator";
import "bootstrap/dist/css/bootstrap.min.css"
function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : "")
    const inputRef = useRef(null)
    useEffect(() => {
      inputRef.current.focus()
    })
    const handleChange = x => {
        setInput(x.target.value)
    }

    const handleSubmit = x => {
    x.preventDefault(); //Prevent refreshing
    props.onSubmit({
        id: nextId(), //Random id generator function
        text: input
    })

    setInput("");
    }

  return (
    // Change input depending if it's adding or updating
    <form className="todo-form" onSubmit={handleSubmit}> 
        {props.edit ? (
          <>
        <input 
         placeholder="Update Todo"
         type="text"
         value={input}
         className="todo-input" 
         onChange={handleChange}
         ref={inputRef}
         />
        <button className="btn btn-warning">Update</button>
          </> ) : (
          <>
          <input 
         placeholder="Write Something!"
         type="text"
         value={input}
         className="todo-input" 
         onChange={handleChange}
         ref={inputRef}
         />
        <button className="btn btn-success">Add</button>
          </>
        )}
      
    </form>
  )
}

export default TodoForm
import React, { useState } from 'react'
import { useTodos } from './TodoContext'

const TodoList = () => {
  const {addTodo,todos, toggleTodo, deleteTodo} = useTodos()
  const [text, setText] = useState('')

  const handleAdd = ()=>{
    addTodo(text)
    setText('')
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input type="text"
      value={text} 
      onChange={(e)=>setText(e.target.value)}
      placeholder='enter'
      />

      <button onClick={handleAdd}>Add</button>

      {todos.map((todo)=>(
        <li key={todo.id}>
          <span onClick={()=>toggleTodo(todo.id)}
            style={{textDecoration:todo.completed?'line-through':'none'}}
            >
              {todo.text}

          </span>

          <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}

    </div>
  )
}

export default TodoList
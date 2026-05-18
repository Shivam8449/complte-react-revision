import React, { useState } from 'react'
import { useTodos } from './TodoContext'

const TodoList = () => {
  const {todos,addTodos,toggleTodo,deleteTodo} = useTodos()

  const [text, setText] = useState('')

  const handleAdd = ()=>{
    addTodos(text)
    setText('')
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input type="text"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder='todos...'
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>
            <span onClick={()=>toggleTodo(todo.id)} 
              style={{textDecoration:todo.completed?'line-through':'none', cursor:'pointer'}}
              >
              {todo.text}
            </span>
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
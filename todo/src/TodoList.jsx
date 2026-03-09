import React, { useState } from 'react'
import { useTodos } from './TodoContext'

const TodoList = () => {
  const {todos,addTodo,toggleTodo,deleteTodo} = useTodos()
  const [text,setText] = useState('')

  const handleAdd = ()=>{
    addTodo(text)
    setText('')
  }
  return (
    <div>
      <h2>todoList</h2>
      <input type="text"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder='enter'
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
            <button onClick={()=>deleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
import React, { createContext, useContext, useState } from 'react'

const TodoData = createContext()
export const useTodos = ()=>useContext(TodoData)

const TodoContext = ({children}) => {
  const [todos, setTodos] = useState([])

  const addTodos = (text)=>{
    if(!text.trim()) return

    setTodos([...todos,{id:Date.now(),text,completed:false}])
  }

  const toggleTodo = (id)=>{
    setTodos(todos.map(t => t.id === id ? {...t, completed:!t.completed}:t))
  }

  const deleteTodo = (id)=>{
    setTodos(todos.filter(t => t.id !== id))
  }


  return (
    <div>
      <TodoData.Provider value={{todos,addTodos,toggleTodo,deleteTodo}}>
        {children}
      </TodoData.Provider>
    </div>
  )
}

export default TodoContext
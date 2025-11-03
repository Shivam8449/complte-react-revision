import React from 'react'
import './App.css'
import TodoContext from './TodoContext'
import TodoList from './TodoList'

const App = () => {
  return (
    <div>
     <TodoContext>
      <TodoList/>
     </TodoContext>
    </div>
  )
}

export default App
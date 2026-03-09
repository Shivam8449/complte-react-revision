import React from 'react'
import TodoContext from './TodoContext'
import TodoList from './TodoList'
import './App.css'

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
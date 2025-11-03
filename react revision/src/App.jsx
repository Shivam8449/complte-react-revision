import React, { useContext } from 'react'
import './App.css'
import Form from './component/Form'
import ApiData from './component/ApiData'
import { userContext } from './context/DataContext'

const App = () => {
  const data = useContext(userContext)
  return (
    <div>
      <h1> {data} </h1>
    </div>
  )
}

export default App
import React, { createContext, useContext, useState } from 'react'

const Data = createContext()
export const useData = ()=>useContext(Data)

const DataContext = ({children}) => {
    const [todo, setTodo] = useState([])

    const addData = (text)=>{
        setTodo([...todo,{id:Date.now(),text}])
    }

  return (
    <div>
        <Data.Provider value={{todo, addData}}>
            {children}
        </Data.Provider>
    </div>
  )
}

export default DataContext
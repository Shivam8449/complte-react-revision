import React, { createContext } from 'react'

export const userContext = createContext()

const DataContext = ({children}) => {
    const username = 'shivam'
  return (
    <div>
        <userContext.Provider value={username}>
        {children}
        </userContext.Provider>

        </div>
  )
}

export default DataContext
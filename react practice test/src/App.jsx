import React from 'react'
import DataContext from './DataContext'
import DataList from './DataList'

const App = () => {
  return (
    <div>
      <DataContext>
        <DataList/>
      </DataContext>
    </div>
  )
}

export default App
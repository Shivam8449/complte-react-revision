import React, { useState } from 'react'
import { useData } from './DataContext'

const DataList = () => {
    const {todo, addData} = useData()
    const [text, setText] = useState('')

    const handleAdd = ()=>{
        addData(text)
        setText('')
    }
  return (
    <div>
        <h1>Data List</h1>
        <input type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder='enter...'
        />

        {/* <button onClick={handleAdd}>Add</button> */}
        <p>{text}</p>

        {/* <ul>
            {todo.map((t)=>(
                <li key={t.id}>
                    {t.text}
                </li>
            ))}
        </ul> */}
    </div>
  )
}

export default DataList
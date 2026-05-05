import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [debounced, setDebounced] = useState('')

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        if(!search.trim()){
          setData([])
        }
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setData(res.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  },[search])

  useEffect(()=>{
    let timer = setTimeout(()=>{
      setDebounced(search)
    },500)

    return ()=> clearTimeout(timer)
  },[search])

  const currentData = data.filter((user)=>{
    const matchSearch = user.title.toLowerCase().includes(debounced.toLowerCase())
    return matchSearch
  })
  return (
    <div>
      <input type="text" 
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      placeholder='search...'
      />

      <ul>
        {currentData.map((user)=>(
          <li key={user.id} >{user.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
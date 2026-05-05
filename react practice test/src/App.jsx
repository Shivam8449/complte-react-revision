import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [query, setQuery] = useState('')
  const[result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(()=>{

    if(!query.trim()){
      setResult([])
      return
    }

    const fetchData = async()=>{
      try {
        setLoading(true)
        setError(null)
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?q=${query}`)
        setResult(res.data)
      } catch (error) {
        setError('something went wrong')
      }finally{
        setLoading(false)
      }
    }

    const timer = setTimeout(fetchData, 500)

    return ()=> clearInterval(timer)
  },[query])

  return (
    <div style={{padding:'20px'}}>
      <h2>Search</h2>
      <input type="text"
      value={query}
      onChange={(e)=>setQuery(e.target.value)}
      placeholder='search...'
      />

      {loading && <p>Loading...</p>}

      {error && <p style={{color:'red'}}>{error}</p>}

      {!loading && !error && query && result.length === 0 && (<p>No result found</p>)}

      <ul>
        {result.map((item)=>(
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>


    </div>
  )
}

export default App
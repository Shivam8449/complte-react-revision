import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ApiData = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        const getData = async()=>{
            const res = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
            setData(res.data)
        }
        getData()
    },[])

  return (
    <div>
        {data.map((elem)=>(
            <div>
                <img src={elem.download_url} alt="" />
            </div>
        ))}
    </div>
  )
}

export default ApiData
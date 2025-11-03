import React, { useState } from 'react'

const Form = () => {
    const [userName, setUserName] = useState('')

    const submitHandller = (e)=>{
        e.preventDefault()
        console.log(userName)
        setUserName('')
    }

  return (
    <div>
        <form onSubmit={submitHandller}>
            <input
            value={userName}
            onChange={(e)=>{
                setUserName(e.target.value)
            }}
             type="text" />
            <button>submit</button>
        </form>
    </div>
  )
}

export default Form
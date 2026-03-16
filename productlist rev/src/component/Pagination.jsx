import React from 'react'

const Pagination = ({currentPage, setCurrentPage, totalPages}) => {
  return (
    <div>
      <button onClick={()=>setCurrentPage(prev=>prev-1)} disabled={currentPage===1}>prev</button>
      <span>page  {currentPage} of {totalPages}</span>
      <button onClick={()=>setCurrentPage(prev=>prev+1)} disabled={currentPage===totalPages}>next</button>
    </div>
  )
}

export default Pagination
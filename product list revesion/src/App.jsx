import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Filter from './components/Filter'
import ProductCard from './components/ProductCard'
import Sort from './components/Sort'
import Pagination from './components/Pagination'
import './App.css'

const ITEMS_PER_PAGE = 5
const App = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [debounced, setDebounced] = useState('')
  const [category, setCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortOption, setSortOption] = useState('default')


  // fetching
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const res = await axios.get('https://fakestoreapi.com/products')
        setProducts(res.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  },[])


  //debouncing

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setDebounced(search)
    },500)

    return ()=>clearTimeout(timer)
  },[search])

  
// search + filter

const filteredData = products.filter((product)=>{
  const matchSearch = product.title.toLowerCase().includes(debounced.toLowerCase())

  const matchCategory  = category === 'all' || product.category === category

  return matchSearch && matchCategory
})

// sorting

const sortedData = [...filteredData].sort((a,b)=>{
  switch(sortOption){
    case 'priceLow' : return a.price - b.price;
    case 'priceHigh': return b.price - a.price;
    case 'titleAsc': return a.title.localeCompare(b.title);
    case 'titleDesc': return b.title.localeCompare(a.title);
    default:
      return 0;
  }
})


//pagination

const totalPages = Math.ceil(sortedData.length/ITEMS_PER_PAGE)

const startIndex = (currentPage-1)*ITEMS_PER_PAGE

const currentData = sortedData.slice(startIndex,startIndex+ITEMS_PER_PAGE)




  return (
    <div>
      <h1>Product Lsit</h1>

      <Search search={search} setSearch={setSearch} />
      <Filter category={category} setCategory={setCategory} />
      <Sort sortOption={sortOption} setSortOption={setSortOption} />

      {currentData.map((product)=>(
        <ProductCard key={product.id} product={product} />
      ))}

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </div>
  )
}

export default App
import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Filter from './component/Filter'
import SearchBar from './component/SearchBar'
import Pagination from './component/Pagination'
import ProductCard from './component/ProductCard'

const ITEMS_PER_PAGE = 5
const App = () => {

  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  //fetching

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


  // debouncing

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setDebouncedSearch(search)
    },500)

    return ()=>clearTimeout(timer)
  },[search])


  // search+filter

  const filteredProducts = products.filter((product)=>{
    const matchSearch = product.title.toLowerCase().includes(debouncedSearch.toLowerCase())

    const matchCategory = category === 'all' || product.category === category
    return matchSearch && matchCategory
  })

  //pagination 

  const totalPages = Math.ceil(filteredProducts.length/ITEMS_PER_PAGE)
  const startIndex = (currentPage-1)*ITEMS_PER_PAGE

  const currentProducts = filteredProducts.slice(startIndex,startIndex+ITEMS_PER_PAGE)

  return (
    <div>
      <h1>Product list</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <Filter category={category} setCategory={setCategory} />

      {currentProducts.map((product)=>(
        <ProductCard key={product.id} product={product} />
      ))}

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </div>
  )
}

export default App
import React, { useEffect, useState } from 'react'
import './App.css'
import Filter from './component/Filter'
import SearchBar from './component/SearchBar'
import ProductCard from './component/ProductCard'
import Pagination from './component/Pagination'
import Sort from './component/Sort'
import axios from 'axios'

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

  //debounced

  useEffect(()=>{
    const timer = setTimeout(() => {
      setDebounced(search)
    }, 500);

    return ()=> clearTimeout(timer)
  },[search])


  //search +filter
  const filteredProducts = products.filter((product)=>{
    const matchSearch = product.title.toLowerCase().includes(debounced.toLowerCase())
    const matchCategory = category === 'all' || product.category === category

    return matchSearch && matchCategory
  })

  //sorting
  const sortedProducts = [...filteredProducts].sort((a,b)=>{
    switch(sortOption){
      case 'priceLow': return a.price - b.price;
      case 'priceHigh': return b.price - a.price;
      case 'titleAsc': return a.title.localeCompare(b.title);
      case 'titleDesc': return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  })

  //pagination 
  const totalPages = Math.ceil(sortedProducts.length/ITEMS_PER_PAGE)
  const startIndex = (currentPage-1)*ITEMS_PER_PAGE
  const currentProducts = sortedProducts.slice(startIndex,startIndex+ITEMS_PER_PAGE)


  return (
    <div>
      <h1>Products List</h1>

      <SearchBar search={search} setSearch={setSearch} />
      <Filter category={category} setCategory={setCategory} />
      <Sort sortOption={sortOption} setSortOption={setSortOption} />

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px"
      }}>
        {currentProducts.map((product)=>(
        <ProductCard key={product.id}  product={product}/>
        
      ))}</div>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />

    </div>
  )
}

export default App
import React, { use, useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Search from './components/Search'
import Pagination from './components/Pagination'
import Sort from './components/Sort'
import ProductCard from './components/ProductCard'

const ITEMS_PER_PAGE = 5
const App = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [debounced, setDebounced] = useState('')
  const [category, setCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortOption, setSortOption] = useState('default')

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


  //debouncing

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setDebounced(search)
    },500)

    return ()=> clearTimeout(timer)
  },[search])


  // search+filter

  const filtredData = products.filter((product)=>{
    const matchSearch = product.title.toLowerCase().includes(debounced.toLowerCase())

    const matchCategory = category === 'all' || product.category === category

    return matchSearch && matchCategory
  })


  //sorting

  const sortedData = [...filtredData].sort((a,b)=>{
    switch(sortOption){
      case 'priceLow': return a.price - b.price;
      case 'priceHigh': return b.price - a.price;
      case 'titleAsc': return a.title.localeCompare(b.title);
      case 'titleDesc': return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  })


  // pagination

  const totalPages = Math.ceil(sortedData.length/ITEMS_PER_PAGE)
  const startIndex = (currentPage-1)*ITEMS_PER_PAGE
  const currentProducts = sortedData.slice(startIndex,startIndex+ITEMS_PER_PAGE)




  return (
    <div>
      <h1>Product List</h1>
      
      <Search search={search} setSearch={setSearch} />
      <Filter category={category} setCategory={setCategory} />
      <Sort sortOption={sortOption} setSortOption={setSortOption} />

      {currentProducts.map((product)=>(
        <ProductCard key={product.id} product={product} />
      ))}

      <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App
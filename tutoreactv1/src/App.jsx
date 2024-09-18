import { useState } from 'react'
import SearchBar from './components/forms/SearchBar'
import ProductTable from './components/table/ProductTable'

const PRODUCTS = [
  { category: 'Fruits', price: "$1", stocked: true, name: "Apple" },
  { category: 'Fruits', price: "$1", stocked: true, name: "DragonFruit" },
  { category: 'Fruits', price: "$2", stocked: false, name: "PassionFruit" },
  { category: 'Vegetables', price: "$2", stocked: true, name: "Spinash" },
  { category: 'Vegetables', price: "$4", stocked: false, name: "Pumpkin" },
  { category: 'Vegetables', price: "$4", stocked: true, name: "Peas" }
]



function App() {
  return (
    <>
      <div className='card w-100 p-3'>
        <SearchBar />
        <ProductTable products={PRODUCTS} />
      </div>
    </>
  )
}
// Composant 1




export default App

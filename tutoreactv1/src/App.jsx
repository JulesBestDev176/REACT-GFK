import { useState } from 'react'
import Input from './components/forms/Input'
import CheckBox from './components/forms/CheckBox'
import ProductCategoryRow from './components/tables/ProductCategoryRow'
import ProductRow from './components/tables/ProductRow'


const PRODUCTS = [
  { category: 'Fruits', price: "$1", stocked: true, name: "Apple" },
  { category: 'Fruits', price: "$1", stocked: true, name: "DragonFruit" },
  { category: 'Fruits', price: "$2", stocked: false, name: "PassionFruit" },
  { category: 'Vegetables', price: "$2", stocked: true, name: "Spinash" },
  { category: 'Vegetables', price: "$4", stocked: false, name: "Pumpkin" },
  { category: 'Vegetables', price: "$4", stocked: true, name: "Peas" }
]



function App() {

  const [showStockedOnly, setShowStockedOnly] = useState(false)
  const [search, setSearch] = useState('')

  let visibleProduct = PRODUCTS.filter((product) => {
    if (showStockedOnly && !product.stocked) {
      return false
    }
    if (search !== '' && !product.name.includes(search)) {
      return false
    }
    return true
  })


  return (
    <div className='container-fluid w-50 card p-3'>
      <SearchBar showStockedOnly={showStockedOnly} onStockedOnlyChange={setShowStockedOnly} search={search} onSearchChange={setSearch} />
      <ProductTable products={visibleProduct} />
    </div>
  )
}


function SearchBar({ showStockedOnly, onStockedOnlyChange, search, onSearchChange }) {


  return (
    <div>
      <Input
        placeholder="Rechercher"
        search={search}
        onChange={onSearchChange}
      />
      <CheckBox
        id="stocked"
        label="N'afficher que les produits en stock"
        checked={showStockedOnly}
        onChange={onStockedOnlyChange} />
    </div>
  )
}

function ProductTable({ products }) {

  const rows = [];
  let lastCategory = null

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow name={product.category} key={product.category} />)
      lastCategory = product.category
    }
    rows.push(<ProductRow product={product} key={product.name} />)


  }

  return (
    <table className='table'>
      <thead className='text-center'>
        <tr>
          <th>Nom</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}




export default App

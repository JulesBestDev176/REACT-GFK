import ProductCategoryRow from './ProductCategoryRow'


function ProductTable({ products }) {

    const categories = [...new Set(products.map((product) => product.category))]

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                </tr>

            </thead>
            <tbody>
                {categories.map((categorie) => <ProductCategoryRow categorie={categorie} products={products} key={categorie} />)}
            </tbody>

        </table >
    )
}

export default ProductTable
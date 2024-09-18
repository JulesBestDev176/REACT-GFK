import ProductRow from './ProductRow'

function ProductCategoryRow({ categorie, products }) {
    return (
        <>
            <tr>
                <th colSpan={2} className='text-center'>{categorie}</th>
            </tr>
            {products
                .filter((product) => product.category === categorie)
                .map((filterProduct) => <ProductRow key={filterProduct.name} product={filterProduct} />)
            }

        </>
    )

}

export default ProductCategoryRow
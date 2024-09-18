function ProductCategoryRow({ name }) {

    return (
        <tr className="text-center">
            <th colSpan={2}>{name}</th>
        </tr>
    )
}

export default ProductCategoryRow